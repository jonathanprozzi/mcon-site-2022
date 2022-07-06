import React from "react";
import {
  Button,
  ButtonProps,
  forwardRef,
  ComponentWithAs
} from "@chakra-ui/react";

export type CustomDatePickerButtonProps = ButtonProps & {
  value?: React.ReactNode;
  onClick?: () => void;
  ref?: HTMLInputElement;
};

export type CustomDatePickerButton = ComponentWithAs<
  "button",
  CustomDatePickerButtonProps
> & {
  Button: typeof Button;
};

export const CustomDatePickerButton = forwardRef<
  CustomDatePickerButtonProps,
  "button"
>(({ value, onClick }, ref) => (
  <Button
    onClick={onClick}
    ref={ref}
    bgColor="black"
    color="primaryRed"
    transition="all 0.125s"
    _hover={{ color: "primaryRed", bgColor: "black" }}
    fontWeight="normal"
    variant="filled"
  >
    {value}
  </Button>
));
