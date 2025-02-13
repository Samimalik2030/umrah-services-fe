import packageJson from "../../package.json";

const Version = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 4,
        left: 4,
        zIndex: 1000,
        opacity: 0.5,
        pointerEvents: "none",

      }}
    >
      v{packageJson.version}
    </div>
  );
};

export default Version;
