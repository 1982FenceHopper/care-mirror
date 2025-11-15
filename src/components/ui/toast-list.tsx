"use client";

import { Toast } from "@base-ui-components/react";
import { XIcon } from "lucide-react";
import styles from "./toast.module.css";

export default function ToastList() {
  const { toasts } = Toast.useToastManager();

  return toasts.map((toast) => (
    <Toast.Root key={toast.id} toast={toast} className={styles.Toast}>
      <Toast.Title className={styles.Title} />
      <Toast.Description className={styles.Description} />
      <Toast.Close className={styles.Close} aria-label="close">
        <XIcon className="h-4 w-4" />
      </Toast.Close>
    </Toast.Root>
  ));
}
