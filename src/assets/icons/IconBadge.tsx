import BaseIcon from "./BaseIcon";
import ICommonIconProps from "../../interfaces/ICommonIconProps";

function IconBadge(props: ICommonIconProps) {
  return (
    <BaseIcon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 17v-13l-5 3l-5 -3v13l5 3z" />
    </BaseIcon>
  );
}

export default IconBadge;
