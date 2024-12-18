import BaseIcon from "./BaseIcon";
import ICommonIconProps from "../../interfaces/ICommonIconProps";

function IconArrowNarrowLeft(props: ICommonIconProps) {
  return (
    <BaseIcon withOutline {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M5 12l4 4" />
      <path d="M5 12l4 -4" />
    </BaseIcon>
  );
}

export default IconArrowNarrowLeft;
