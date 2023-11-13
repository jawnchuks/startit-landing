"use client";

import { Toaster, ToastPosition } from "react-hot-toast";
import { SideMenuProvider } from "../context/sidemenu-context";
import { ModalProvider } from "../context/modal-context";


export const Providers = ({ children }: { children: React.ReactNode }) => {

  // Global configuration for react-hot-toast
  const toastConfig = {
    position: "bottom-center" as ToastPosition,
    duration: 3000,
    style: {
      minWidth: "400px",
    },
    success: {
      icon: "👍",
    },
    error: {
      icon: "❌",
    },
    loading: {
      icon: "⏳",
      duration: Infinity,
    },
  } as const;


  return (
          <ModalProvider>
            <SideMenuProvider>
              <Toaster toastOptions={toastConfig} />
              {children}
            </SideMenuProvider>
          </ModalProvider>

  );
};
