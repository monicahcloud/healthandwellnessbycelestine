/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        heroImg:
          "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b2/8e/e3/glass-window-bridge-eleuthera.jpg?w=600&h=400&s=1')",
        blackOverlay:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
      },
    },
  },
  plugins: [import("daisyui")],
};

