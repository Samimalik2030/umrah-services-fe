import { Image, ImageProps } from "@mantine/core";
import { useNavigate } from "react-router-dom";

interface PoliceLogoProps extends Omit<ImageProps, "src" | "alt"> {
  width: number;
  height: number;
}

export default function PoliceLogo({
  width,
  height,
  ...rest
}: PoliceLogoProps) {
  const navigate = useNavigate();
  return (
    <Image
      style={{
        cursor: "pointer",
      }}
      src="https://ik.imagekit.io/yzrrrgg3d/police-logo.png?updatedAt=1747402394215"
      alt="Logo"
      w={width}
      h={height}
      {...rest}
      onClick={() => navigate("/")}
    />
  );
}
