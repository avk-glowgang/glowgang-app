import { type Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                discord: "#7289da"
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
} satisfies Config;
