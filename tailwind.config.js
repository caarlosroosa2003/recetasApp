/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#881337",
          
          "secondary": "#111827",
                   
          "accent": "#f43f5e",
                   
          "neutral": "#111827",
                   
          "base-100": "#f3f4f6",
        
          "info": "#00bdff",
                  
          "success": "#16a34a",
                  
          "warning": "#f59e0b",
                  
          "error": "#f9404a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
