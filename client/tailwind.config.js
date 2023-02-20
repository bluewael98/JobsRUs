/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: "#303FA1",
        secondary: "#6366B8",
        lavender:"#E6E6FA",
        alt: "#6A2875",
        alt2: "#7A7A7A"
      },
      fontFamily: {
        Oswald: ["proxima-nova, sans-serif"],
        Charter: ["Charter, serif"]
      },
    
      screens: {
        xxs: "370px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px", 
      },
      boxShadow: {
        "5xl": "0px 10px 30px rgba(0,0,0, 0.5)"
      },
      backgroundImage: {
        'blob': "url('/src/assets/blob.svg')"
      }
    },
  },
  plugins: [],
}
