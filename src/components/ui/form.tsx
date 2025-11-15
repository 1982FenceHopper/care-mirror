import { Field, Form } from "@base-ui-components/react";
import type React from "react";
import { cn } from "@/utils/ui/utils";
import styles from "./form.module.css";

interface UIFormProps extends Form.Props {
  ref?: React.Ref<HTMLFormElement>;
  submit: React.ReactElement<
    Record<string, unknown>,
    // biome-ignore lint/suspicious/noExplicitAny: Exact type as provided by BaseUI Trigger.render prop
    string | React.JSXElementConstructor<any>
  >;
}

const UIFormLabel: React.FC<Field.Label.Props> = ({ children }) => {
  return <Field.Label className={styles.Label}>{children}</Field.Label>;
};

const UIFormControl: React.FC<Field.Control.Props> = ({
  type,
  required,
  defaultValue,
  placeholder,
  pattern,
  className,
}) => {
  return (
    <Field.Control
      type={type}
      required={required}
      defaultValue={defaultValue}
      placeholder={placeholder}
      pattern={pattern}
      className={cn(styles.Input, className)}
    />
  );
};

const UIForm: React.FC<UIFormProps> = ({
  children,
  className,
  ref,
  submit,
  name,
  ...props
}: UIFormProps) => {
  return (
    <Form ref={ref} className={cn(styles.Form, className)} {...props}>
      <Field.Root name={name} className={styles.Field}>
        {children}
        <Field.Error className={styles.Error} />
      </Field.Root>
      {submit}
    </Form>
  );
};

UIForm.displayName = "UIForm";
UIFormLabel.displayName = "UIFormLabel";
UIFormControl.displayName = "UIFormControl";

export { UIForm, UIFormControl, UIFormLabel };
