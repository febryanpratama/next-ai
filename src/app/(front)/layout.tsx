import React from "react";

import { NavigationBar } from "@/src/components/NavigationBar";
import ToastProvider from "@/src/components/toast/toastProvider";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationBar />
      <main className="w-full flex-grow">
        <ToastProvider>{children}</ToastProvider>
      </main>
      {/*<footer className="w-full flex items-center justify-center py-3">*/}
      {/*  <Link*/}
      {/*    isExternal*/}
      {/*    className="flex items-center gap-1 text-current"*/}
      {/*    href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"*/}
      {/*    title="nextui.org homepage"*/}
      {/*  >*/}
      {/*    <span className="text-default-600">Powered by</span>*/}
      {/*    <p className="text-primary">NextManga</p>*/}
      {/*  </Link>*/}
      {/*</footer>*/}
    </>
  );
}
