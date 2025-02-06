import ICommonIconProps from "../../interfaces/ICommonIconProps";

import BaseIcon from "./BaseIcon";

function IconArrowLeft(props: ICommonIconProps) {
  return (
    <BaseIcon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M5 12l6 6" />
      <path d="M5 12l6 -6" />
    </BaseIcon>
  );
}

export default IconArrowLeft;
