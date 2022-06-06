module.exports = {
  content:["./views/**/*.{hbs,js}"],

  theme: {

    colors:{

      'purple': '#3f3cbb',
      "white": '#ffffff',
      "grey":"#96989A",
      "red":"#ff0000"
    },

    container: {
      center: true,
      padding: '2rem',
    },
    mx_container:{
      center: true,
      padding: '5rem',
    },

    screens:{
      lg:"1124px",
      xl:"1124px",
      "2xl":"1124",
    },
    fontFamily: {
      Poppins:["Poppins,sans,serif"],
    },
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      colors: {
        'regal-blue': '#243c5a',
        'purple':'#6267DF'
      },
    },
    
    
  },
  variants: {},
  plugins: [],
}
