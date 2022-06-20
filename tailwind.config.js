module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0B76E0",
        mediumBlue: "#55A0EA",
        lightBlue: "#99CDFF",
        lighterBlue: "#D4EAFF",
        primaryGray: "#55626E",
        mediumGray: "#626E79",
        lightGray: "#7B8997",
        lighterGray: "#9FA9B3",
        lightestGray: "#55626e40",
        saleRed: "#DF0923"
      },
      boxShadow: {
        card: '0px 51px 114px rgba(199, 199, 199, 0.15), 0px 15.375px 34.3677px rgba(199, 199, 199, 0.0895633), 0px 6.38599px 14.2746px rgba(199, 199, 199, 0.0605927), 0px 2.30969px 5.16283px rgba(199, 199, 199, 0.0352376)'
      }
    },
    fontFamily: {
      sans: ['Inter']
    }
  },
  plugins: []
};
