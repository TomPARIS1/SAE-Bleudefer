"use client";

import { MantineProvider, type MantineThemeOverride } from "@mantine/core";
import { NextFont } from "next/dist/compiled/@next/font";
import { FC, ReactNode, memo } from "react";

const theme: MantineThemeOverride = {
  fontFamily: "inherit",
  components: {
    Skeleton: {
      defaultProps: {
        radius: "xl",
      },
    },
    Checkbox: {
      classNames: {
        labelWrapper: "flex-1",
        label:
          "w-full cursor-pointer text-default hover:text-black select-none",
        body: "justify-between",
        input:
          "bg-transparent border-2 border-default checked:bg-brand checked:border-brand cursor-pointer",
      },
    },
    Input: {
      classNames: {
        input:
          "border-2 border-transparent focus:border-brand focus-within:border-brand bg-gray-100 rounded-lg h-auto py-4 px-4 text-default !leading-none",
      },
    },
    NumberInput: {
      classNames: {
        input: "border-none text-center h-auto leading-normal text-sm font-semibold border-none min-h-0 !p-0 bg-transparent",
      },
    },
    PasswordInput: {
      classNames: {
        wrapper: 'relative',
        input: "!min-h-0 border-none relative !p-0 overflow-visible",
        innerInput: "rounded-lg w-full relative p-4 !pr-12 leading-none !h-auto border-2 border-transparent focus:border-brand focus-within:border-brand",
        visibilityToggle: "rounded-r-lg !w-auto px-4 text-brand text-lg bg-transparent hover:bg-black/5 active:bg-black/10 disabled:bg-black/5 rounded-none h-full !translate-y-0",
        rightSection: "!w-auto"
      }
    },
    Badge: {
      classNames: {
        root: '!h-[26px]'
      }
    }
  },
};

const MantineCustomThemeProvider: FC<{ children: ReactNode; font: NextFont }> =
  memo(function ({ children, font }) {
    return (
      <MantineProvider
        withGlobalStyles={false}
        withNormalizeCSS={false}
        theme={{ ...theme, fontFamily: font.style.fontFamily }}
      >
        {children}
      </MantineProvider>
    );
  });

MantineCustomThemeProvider.displayName = "MantineCustomThemeProvider";
export { MantineCustomThemeProvider };
