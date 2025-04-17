import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#ffffff", // پس‌زمینه اصلی (حالت روشن)
          dark: "#17212b", // پس‌زمینه اصلی در حالت تاریک
        },
        foreground: {
          DEFAULT: "#000000", // رنگ متن اصلی (حالت روشن)
          dark: "#ffffff", // رنگ متن در حالت تاریک
        },
        primary: {
          DEFAULT: "#0088cc", // رنگ اصلی تلگرام
          dark: "#229ED9", // رنگ اصلی در حالت تاریک
        },
        secondary: {
          DEFAULT: "#e3f2fd", // رنگ پس‌زمینه پیام در حالت روشن
          dark: "#232f3e", // رنگ پس‌زمینه پیام در حالت تاریک
        },
        accent: {
          DEFAULT: "#34c759", // رنگ تأیید (مثلاً تیک سبز)
          dark: "#30D158",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
