import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "@/utils/ui/utils";

const UIButtonVariants = cva(
  ["font-semibold", "transition-colors", "duration-100", "cursor-pointer"],
  {
    variants: {
      intent: {
        normal: [
          "bg-gray-800",
          "text-gray-100",
          "not-disabled:hover:bg-gray-600",
          "not-disabled:active:bg-gray-500",
          "not-disabled:focus-visible:outline not-disabled:focus-visible:outline-offset-2 not-disabled:focus-visible:outline-gray-400",
        ],
        ghost: [
          "bg-transparent",
          "text-gray-800",
          "not-disabled:hover:bg-gray-300",
          "not-disabled:active:bg-gray-400",
          "not-disabled:focus-visible:outline not-disabled:focus-visible:outline-offset-2 not-disabled:focus-visible:outline-gray-600",
        ],
        destructive: [
          "bg-transparent",
          "text-gray-800",
          "not-disabled:hover:bg-red/80",
          "not-disabled:active:bg-red/60",
          "not-disabled:focus-visible:outline not-disabled:focus-visible:outline-offset-2 not-disabled:focus-visible:outline-red",
        ],
      },
      size: {
        icon: "h-6",
        npsm: "h-9",
        xsm: "h-4 px-1",
        sm: "h-9 px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-6 text-lg",
      },
      vDisabled: {
        false: null,
        true: "opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      intent: "normal",
      size: "md",
      vDisabled: false,
    },
  },
);

type UIButtonVariantsProps = VariantProps<typeof UIButtonVariants>;

interface UIButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    UIButtonVariantsProps {
  rounded?: boolean;
  asChild?: boolean;
  center?: boolean;
}

const UIButton: React.FC<UIButtonProps> = ({
  rounded = false,
  intent,
  size,
  disabled,
  className,
  children,
  asChild,
  center = false,
  ...props
}) => {
  if (asChild && React.isValidElement(children)) {
    const childClassName = (children.props as { className?: string })
      ?.className;
    const mergedClassName = cn(
      UIButtonVariants({ intent, size, vDisabled: disabled, className }),
      rounded && "rounded-lg",
      childClassName,
      size === "icon"
        ? "justify-center align-middle text-center justify-items-center"
        : center
          ? "justify-center align-middle text-center justify-items-center"
          : "text-left",
    );

    const childProps = {
      ...props,
      className: mergedClassName,
    };

    return React.cloneElement(children, childProps);
  }

  return (
    <button
      type="button"
      className={cn(
        UIButtonVariants({ intent, size, vDisabled: disabled, className }),
        rounded && "rounded-lg",
        size === "icon"
          ? "justify-center align-middle text-center justify-items-center"
          : center
            ? "justify-center align-middle text-center justify-items-center"
            : "text-left",
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

UIButton.displayName = "UIButton";

export default UIButton;
