"use client";

import { Toast } from "@base-ui-components/react";
import type React from "react";
import { UIToastProvider } from "@/components/ui/toast";

export const GlobalToastManager = Toast.createToastManager();

export function ClientToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UIToastProvider toastManager={GlobalToastManager}>
      {children}
    </UIToastProvider>
  );
}
