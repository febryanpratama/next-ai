"use client";

import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import LoginService from "@/src/module/auth/login/loginService";

export const LoginView = () => {
  const { username, setUsername, password, setPassword, submit } =
    LoginService();

  return (
    <div
      className={`relative w-full h-auto`}
      style={{
        backgroundImage: `url('images/images-login.png')`,
        backgroundSize: "cover", // Makes the image cover the entire div
        // backgroundPosition: "center", // Centers the image
        // backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        {/* Your login form or content */}
        <div className={`relative h-screen`}>
          <div
            className="absolute top-0 right-0 h-full w-full bg-gradient-to-r from-white/0 to-white"
            style={{ pointerEvents: "none" }}
          />
        </div>
        <div
          className={` h-screen flex flex-col justify-center items-center bg-white`}
        >
          <div>
            <Image
              alt={"Logo Ceisa"}
              height={100}
              src={`/images/logo-ceisa.png`}
              width={250}
            />
          </div>
          <div className={`w-2/4`}>
            <Input className={`my-4`} label={`Email`} type={`text`} />
            <Input className={`my-4`} label={`Kata Sandi`} type={`password`} />
            <div className={`my-5 text-gray-500 font-bold`}>
              Belum Memiliki akun ? Silahkan{" "}
              <span className={`text-blueprimary`}>buat akun</span>
            </div>
            <Button className={`w-full`} color={`primary`} variant={`solid`}>
              Masuk
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
