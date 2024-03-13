"use client";
import { useFormContext } from "react-hook-form";
import { Button, type ButtonProps } from "..";
import { RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { RenderIf } from "@/utils/components";

interface IButtonLoadingProps extends ButtonProps {
  isLoading?: boolean;
}

export function ButtonLoading({
  isLoading = false,
  children,
  ...rest
}: IButtonLoadingProps) {
  return (
    <Button {...rest}>
      <RenderIf condition={isLoading}>
        <RefreshCcw
          className={cn("mr-2 h-4 w-4", { "animate-spin": isLoading })}
        />
      </RenderIf>
      {children}
    </Button>
  );
}

interface IFormButtonProps extends ButtonProps {}

export const FormButton = ({ ...rest }: IFormButtonProps) => {
  const {
    formState: { isValid },
  } = useFormContext();
  return <Button disabled={!isValid} {...rest} />;
};

interface IAsyncFormButtonProps extends IButtonLoadingProps {}

export const AsyncFormButton = ({
  isLoading = false,
  ...rest
}: IAsyncFormButtonProps) => {
  const {
    formState: { isValid },
  } = useFormContext();
  return <ButtonLoading disabled={!isValid} {...rest} />;
};
