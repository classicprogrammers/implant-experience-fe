/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cabinet': ['CabinetGrotesk-Variable', 'CabinetGrotesk-Regular', 'system-ui', 'sans-serif'],
        'cabinet-thin': ['CabinetGrotesk-Thin', 'CabinetGrotesk-Variable', 'sans-serif'],
        'cabinet-extralight': ['CabinetGrotesk-Extralight', 'CabinetGrotesk-Variable', 'sans-serif'],
        'cabinet-light': ['CabinetGrotesk-Light', 'CabinetGrotesk-Variable', 'sans-serif'],
        'cabinet-regular': ['CabinetGrotesk-Regular', 'CabinetGrotesk-Variable', 'sans-serif'],
        'cabinet-medium': ['CabinetGrotesk-Medium', 'CabinetGrotesk-Variable', 'sans-serif'],
        'cabinet-bold': ['CabinetGrotesk-Bold', 'CabinetGrotesk-Variable', 'sans-serif'],
        'cabinet-extrabold': ['CabinetGrotesk-Extrabold', 'CabinetGrotesk-Variable', 'sans-serif'],
        'cabinet-black': ['CabinetGrotesk-Black', 'CabinetGrotesk-Variable', 'sans-serif'],
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'regular': '400',
        'medium': '500',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      }
    },
  },
  plugins: [],
}
