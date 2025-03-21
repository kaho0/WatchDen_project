// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
module.exports = {
  mode: "jit", // Ensure JIT mode is enabled
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
};
