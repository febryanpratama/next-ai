import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import { Input } from "@nextui-org/input";

import useAiService from "@/src/module/ai/aiService";

const ModalAi: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const {
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
    submit,
  } = useAiService();

  return (
    <div>
      <Modal backdrop="blur" isOpen={isOpen} size="5xl" onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Detail Profil
              </ModalHeader>
              <ModalBody>
                <div>
                  <Input
                    className={`my-2`}
                    label={`Apa Jenis Kelamin Kamu`}
                    type={`text`}
                    value={jenisKelamin}
                    onChange={(e) => setJenisKelamin(e.target.value)}
                  />
                  <Input
                    className={`my-2`}
                    label={`Apa Minat dan Hobi Kamu`}
                    type={`text`}
                    value={hobi}
                    onChange={(e) => setHobi(e.target.value)}
                  />
                  <Input
                    className={`my-2`}
                    label={`Apa Kondisi Emosional Saat Ini`}
                    type={`text`}
                    value={emosional}
                    onChange={(e) => setEmosional(e.target.value)}
                  />
                  <Input
                    className={`my-2`}
                    label={`Apa Tujuan dan Impian Kamu`}
                    type={`text`}
                    value={tujuan}
                    onChange={(e) => setTujuan(e.target.value)}
                  />
                  <Input
                    className={`my-2`}
                    label={`Bagaimana Gaya Komunikasi Kamu`}
                    type={`text`}
                    value={komunikasi}
                    onChange={(e) => setKomunikasi(e.target.value)}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    submit(), onClose();
                  }}
                >
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalAi;
