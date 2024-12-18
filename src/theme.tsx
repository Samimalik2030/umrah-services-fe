import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  colors: {
    customColor: [
      "#EBF0F8", // Lightest shade (background, light theme)
      "#D4E1F1", // Very light blue
      "#B9D1E8", // Light blue
      "#8AAED1", // Soft blue
      "#5C87B3", // Medium blue
      "#326099", // Default blue (base + brighter)
      "#24497B", // Main blue (base)
      "#11223E", // Deep blue (core/base color)
      "#0D1A2F", // Dark blue (darker version)
      "#07101E", // Darkest blue (hover, dark theme)
    ],
  },
  primaryColor: "customColor",
  primaryShade: 7,
  fontSmoothing: true,
  fontFamily: "Greycliff CF, sans-serif",
  headings: { fontFamily: "Greycliff CF, sans-serif" },
  components: {
    Card: {
      defaultProps: {
        padding: "md",
        shadow: "xl",
        radius: "lg",
        withBorder: true,
      },
    },
    Flex: {
      defaultProps: {
        gap: "md",
      },
    },
    Badge: {
      defaultProps: {
        radius: "xs",
        size: "lg",
      },
    },
    Button: {
      defaultProps: {
        radius: "lg",
        size: "md",
      },
    },
    Avatar: {
      defaultProps: {
        radius: "xl",
        size: "lg",
      },
    },
    Fieldset: {
      defaultProps: {
        radius: "lg",
        variant: "filled",
      },
    },
    Blockquote: {
      defaultProps: {
        radius: "lg",
      },
    },
    Alert: {
      defaultProps: {
        radius: "lg",
        variant: "light",
      },
    },
    TextInput: {
      defaultProps: {
        size: "md",
        radius: "lg",
      },
    },
    PasswordInput: {
      defaultProps: {
        size: "md",
        radius: "lg",
      },
    },
    NumberInput: {
      defaultProps: {
        size: "md",
        radius: "lg",
      },
    },
    Textarea: {
      defaultProps: {
        radius: "md",
      },
    },
    Pill: {
      defaultProps: {
        bg: "violet",
        c: "black",
      },
    },
    NavLink: {
      defaultProps: {
        variant: "filled",
        radius: "lg",
      },
      styles: { root: { borderRadius: 9 } },
    },

    Modal: {
      defaultProps: {
        closeOnClickOutside: false,
        centered: true,
        radius: "xl",
        padding: "lg",
      },
      styles: {
        title: { fontWeight: 700 },
      },
    },
    Divider: {
      styles: {
        root: {
          "--divider-color": "#909090",
        },
        label: {
          color: "#909090",
          fontWeight: 600,
          fontSize: "14px",
        },
      },
    },
    AppShell: {
      styles: {
        header: {
          backgroundColor: "#FFFFFF",
          fontWeight: 600,
          fontSize: "14px",
          marginLeft: "25px",
          marginRight: "25px",
          marginTop: "10px",
          borderRadius: "30px",
        },
        navbar: {
          marginTop: "30px",
          backgroundColor: "#FFFFFF",
          borderRadius: "30px",
          height: "88%",
        },
        footer: {
          backgroundColor: "#FFFFFF",
          borderRadius: "30px",
          marginLeft: "25px",
          marginRight: "25px",
          marginBottom: "10px",
        },
      },
    },
  },
};

export default theme;
