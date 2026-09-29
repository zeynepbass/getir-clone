const colors = require("./src/shared/theme/colors");

module.exports = {
  content: ["./index.js", "./src/**/*.{js,jsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.primary,
          dark: colors.primaryDark,
          light: colors.primaryLight,
          soft: colors.primarySoft,
        },
        secondary: {
          DEFAULT: colors.secondary,
          dark: colors.secondaryDark,
        },
        background: colors.background,
        surface: colors.surface,
        border: {
          DEFAULT: colors.border,
          soft: colors.borderSoft,
        },
        ink: {
          DEFAULT: colors.text,
          muted: colors.textMuted,
          subtle: colors.textSubtle,
        },
        inactive: colors.iconInactive,
      },
    },
  },
  plugins: [],
};
