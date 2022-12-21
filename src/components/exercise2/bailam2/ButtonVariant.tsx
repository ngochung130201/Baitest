import { Button } from "@mantine/core";
import React from "react";

type ButtonStyle = {
  style: string | any;
  checked: boolean;
};
export const ButtonVariant = ({ style, checked }: ButtonStyle) => {
  const styleButton = style;

  const check = checked;
  return (
    <>
      {check ? (
        <Button disabled mt={23}   variant={styleButton}>
          The Button
        </Button>
      ) : (
        <Button mt={23} variant={styleButton}>
          The Button
        </Button>
      )}
    </>
  );
};
