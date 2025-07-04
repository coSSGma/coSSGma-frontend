/** @type {import('tailwindcss').Config} */
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      width: px0_200,
      height: px0_200,
      spacing: px0_200,
      gap: px0_100,
      padding: px0_100,
      margin: px0_100,
    },
    fontFamily: {
      pretendard: ["Pretendard", "sans-serif"], // Cafe24Ohsquare 폰트 추가
      ohsquare: ["Cafe24Ohsquare", "sans-serif"], // `@font-face`에서 정의한 font-family 이름과 일치해야 합니다.
    },
  },
  plugins: [],
};
