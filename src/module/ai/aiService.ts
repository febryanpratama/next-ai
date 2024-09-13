import { useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { generateAiTextFirst } from "@/src/repository/ai/aiRepository";

const useAiService = () => {
  //
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [jenisKelamin, setJenisKelamin] = useState<string>("");
  const [hobi, setHobi] = useState<string>("");
  const [emosional, setEmosional] = useState<string>("");
  const [tujuan, setTujuan] = useState<string>("");
  const [komunikasi, setKomunikasi] = useState<string>("");
  const [data, setData] = useState<boolean>(false);
  const [response, setResponse] = useState<
    { response: string; isuser: boolean }[]
  >([]);
  const [promptUser, setPromptUser] = useState<string>("");

  const submit = async () => {
    const prompt = ` 
  profile saya seperti 
  jenis kelamin ${jenisKelamin}, 
  hobi ${hobi}, 
  jenis emosi ${emosional}, 
  tujuan dan impian ${tujuan} serta gaya komunikasi ${komunikasi}. berdasarkan profil tersebut, apakah saya bisa curhat dengan kamu ?`;

    const resp = await generateAiTextFirst(prompt);

    const newResponse = {
      response: resp.result.response,
      isuser: false,
    };

    // Update state using the functional form to ensure all updates are correctly applied
    setResponse((prevResponse) => [...prevResponse, newResponse]);
  };

  const submitPrompt = async () => {
    const userRequest = {
      response: promptUser,
      isuser: true,
    };

    // First, add the user's prompt to the response
    setResponse((prevResponse) => [...prevResponse, userRequest]);

    const resp = await generateAiTextFirst(promptUser);

    const newResponse = {
      response: resp.result.response,
      isuser: false,
    };

    // Then, add the AI's response to the response
    setResponse((prevResponse) => [...prevResponse, newResponse]);
    setPromptUser("");
  };

  useEffect(() => {
    //
    if (!data) {
      onOpen();
    }
  }, []);

  console.log("Response service", response);

  return {
    submit,
    isOpen,
    onOpen,
    onClose,
    jenisKelamin,
    setJenisKelamin,
    hobi,
    setHobi,
    emosional,
    setEmosional,
    tujuan,
    setTujuan,
    komunikasi,
    setKomunikasi,
    promptUser,
    setPromptUser,
    submitPrompt,
    response,
  };
};

export default useAiService;
