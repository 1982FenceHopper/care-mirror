import { Toast } from "@base-ui-components/react";
import type React from "react";
import styles from "./toast.module.css";
import ToastList from "./toast-list";

const UIToastProvider: React.FC<Toast.Provider.Props> = ({
  toastManager,
  children,
  ...props
}) => {
  return (
    <Toast.Provider toastManager={toastManager} {...props}>
      {children}
      <Toast.Portal>
        <Toast.Viewport className={styles.Viewport}>
          <ToastList />
        </Toast.Viewport>
      </Toast.Portal>
    </Toast.Provider>
  );
};

UIToastProvider.displayName = "UIToastProvider";

const useToastManager = Toast.useToastManager;

export { UIToastProvider, useToastManager };
