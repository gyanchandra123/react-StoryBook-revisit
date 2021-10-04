import React from "react";
import { LargeInput } from "../Button/Input/Input.stories";
import { Primary } from "../Button/Button.stories";

export default {
  title: "Form/subscription",
};

export const subscription = () => {
  return (
    <>
      <LargeInput></LargeInput>
      <Primary></Primary>
    </>
  );
};
