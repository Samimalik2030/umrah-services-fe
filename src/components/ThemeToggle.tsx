// import {
//   Affix,
//   ActionIcon,
//   useMantineColorScheme,
//   useComputedColorScheme,
// } from "@mantine/core";

// function ThemeToggle() {
//   // Hooks
//   const { setColorScheme } = useMantineColorScheme();
//   const computedColorScheme = useComputedColorScheme("light", {
//     getInitialValueInEffect: true,
//   });

//   // Handle functions
//   function handleThemeToggle() {
//     setColorScheme(computedColorScheme === "light" ? "dark" : "light");
//   }

//   // Template
//   return (
//     <Affix position={{ bottom: 10, right: 10 }}>
//       <ActionIcon
//         variant="filled"
//         bg={"#5f3dc4"}
//         size={"xl"}
//         radius={"xl"}
//         onClick={handleThemeToggle}
//       >
//         {computedColorScheme === "dark" ? (
//           <IconSun size={24} />
//         ) : (
//           <IconMoon size={24} />
//         )}
//       </ActionIcon>
//     </Affix>
//   );
// }

// export default ThemeToggle;
