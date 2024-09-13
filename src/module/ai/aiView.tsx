"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import ModalAi from "@/src/module/ai/modalAi";
import useAiService from "@/src/module/ai/aiService";

const AiView = () => {
  const {
    isOpen,
    onOpen,
    onClose,
    promptUser,
    setPromptUser,
    submitPrompt,
    response,
  } = useAiService();

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen bg-yellowsecondary`}
    >
      <div className={`container h-screen bg-yellowsecondary`}>
        {/*  Chat Box*/}
        {response.map((item: any, index: number) => {
          return (
            <div key={index}>
              {item.isuser ? (
                <div className="flex w-full mt-5">
                  <div className="w-1/6 ">
                    <Image
                      alt="chatbot image"
                      className={`rounded-full`}
                      height={50}
                      src="/images/vector-user.jpg"
                      width={50}
                    />
                  </div>
                  <div className="w-5/6  ml-10 px-4 py-2">{item.response}</div>
                </div>
              ) : (
                <div className="flex bg-yellowprimary w-full mt-5">
                  <div className="w-5/6  text-right mr-10 px-4 py-2">
                    {item.response}
                  </div>
                  <div className="w-1/6 ">
                    <Image
                      alt="chatbot image"
                      className={`rounded-full`}
                      height={50}
                      src="/images/vector-user.jpg"
                      width={50}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/*  Chat Box*/}
        {/*  Submit Box*/}
        <div className={`mt-10 bg-green-700`}>
          <Input
            endContent={
              <Button
                color={`primary`}
                variant={`ghost`}
                onClick={() => {
                  submitPrompt();
                }}
              >
                Submit
              </Button>
            }
            label={`Input your typing`}
            value={promptUser}
            onChange={(e) => setPromptUser(e.target.value)}
          />
        </div>
      </div>
      <ModalAi isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default AiView;
