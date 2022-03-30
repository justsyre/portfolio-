module.exports = {
  content: [
    '../static/**/*.{html, js}',
    '../templates/**/*.{html, js}',
  ],
  theme: {
    extend:{
      colors:{
        'primariy-color': '#FDD935',
        'secondary-color': '#1C1C1C',
        'selected': '#4169E1',
        'transparent': 'transparent',
      },
    },
    
    fontFamily: {
      poppins: ['Poppins', 'Sans-Serif'],
    },
  }
}
