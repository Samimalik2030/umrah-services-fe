import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  fontFamily: "Poppins, sans-serif",
  fontFamilyMonospace: "Poppins, sans-serif",
  headings: {
    fontFamily: "Poppins, sans-serif",
  },
  primaryColor: "policeBlue",
  colors: {
    navyBlue: [
      "#e6ecf5",
      "#ccd8eb",
      "#99b0d6",
      "#6689c2",
      "#3361ad",
      "#003999",
      "#003080",
      "#002666",
      "#001c4d",
      "#001233",
    ],
    alertRed: [
      "#ffe5e5",
      "#ffcccc",
      "#ff9999",
      "#ff6666",
      "#ff3333",
      "#ff0000",
      "#cc0000",
      "#990000",
      "#660000",
      "#330000",
    ],
    neutralGray: [
      "#f8f9fa",
      "#f1f3f5",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#212529",
    ],
    approvalGreen: [
      "#e6f4ea",
      "#cce9d5",
      "#99d3ab",
      "#66bd81",
      "#33a757",
      "#00912d",
      "#007426",
      "#00571c",
      "#003a13",
      "#001d09",
    ],
    policeBlue: [
      "#e3e9ea",
      "#c9d4d6",
      "#aebfc2",
      "#93aaae",
      "#78959a",
      "#2e4750",
      "#4b686d",
      "#385b64",
      "#2e4750",
      "#22343c",
    ],
  },
  defaultRadius: "md",
  components: {
    Button: {
      defaultProps: {
        radius: "md",
        size: "md",
        variant: "filled",
      },
    },
    Navlink:{
      defaultProps: {
        radius: "md",
        size: "md",
        variant: "filled",
        color:"policeBlue",
      },
    },

    TextInput: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    Textarea: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    PasswordInput: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    NumberInput: {
      defaultProps: {
        radius: "md",
        size: "md",
        hideControls:true
      },
    },
    Checkbox: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    Select: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    Radio: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    SegmentedControl: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    DatePicker: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    DateRangePicker: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    TimeInput: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    Text: {
      defaultProps: {
        size: "md",
      },
    },

    Card: {
      defaultProps: {
        radius: "md",
        shadow: "xl",
      },
    },
    Modal: {
      defaultProps: {
        radius: "md",
        shadow: "sm",
      },
    },
    Drawer: {
      defaultProps: {
        radius: "md",
        shadow: "sm",
      },
    },
    Popover: {
      defaultProps: {
        radius: "md",
        shadow: "sm",
      },
    },
    Menu: {
      defaultProps: {
        radius: "md",
        shadow: "sm",
      },
    },
    Notification: {
      defaultProps: {
        radius: "md",
        shadow: "sm",
      },
    },
    Alert: {
      defaultProps: {
        radius: "md",
        shadow: "sm",
      },
    },
    Progress: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    Loader: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    Divider: {
      defaultProps: {
        size: "md",
      },
    },
    Avatar: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    Badge: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    Chip: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    Switch: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    Pagination: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    Table: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    Tabs: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    Tooltip: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    Anchor: {
      defaultProps: {
        size: "md",
        c: "navyBlue",
        weight: 500,
        underline: true,
      },
    },
  },
};

export default theme;
