export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'rightSlide':{
          '100%':{ transform: 'translateX(5px)' },
          '0':{ transform: 'translateX(0px)' }
        },
        'leftSlide': {
          '100%': {transform: 'translateX(-5px)'},
          '0':{transform: 'translateX(0px)'}
        },
        'first_longRightSlide' : {
          '100%' : {transform: 'translateX(40px)'},
          '0':{transform: 'translateX(0px)'}
        },
        'first_longLeftSlide' : {
          '100%' : {transform: 'translateX(-40px)'},
          '0':{transform: 'translateX(0px)'}
        },
        'second_longRightSlide' : {
          '100%' : {transform: 'translateX(40px)'},
          '0':{transform: 'translateX(0px)'}
        },
        'second_longLeftSlide' : {
          '100%' : {transform: 'translateX(-40px)'},
          '0':{transform: 'translateX(0px)'}
        },
        'third_longRightSlide' : {
          '100%' : {transform: 'translateX(45px)'},
          '0':{transform: 'translateX(0px)'}
        },
        'third_longLeftSlide' : {
          '100%' : {transform: 'translateX(-40px)'},
          '0':{transform: 'translateX(0px)'}
        },
        spinnerGrow: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },

      },
      animation: {
        'right-slide': 'rightSlide 1s ease-in-out forwards',
        'left-slide' : 'leftSlide 1s ease-in-out forwards',
        'first_long_right-slide' : 'first_longRightSlide 1s ease-in-out forwards',
        'first_long_left-slide' : 'first_longLeftSlide 1s ease-in-out forwards',
        'second_long_right-slide' : 'second_longRightSlide 2s ease-in-out forwards',
        'second_long_left-slide' : 'second_longLeftSlide 1s ease-in-out forwards',
        'third_long_right-slide' : 'third_longRightSlide 2s ease-in-out forwards',
        'third_long_left-slide' : 'third_longLeftSlide 1s ease-in-out forwards',
        'spinner-grow': 'spinnerGrow 0.5s ease-in-out',
      }
    },
  },
  plugins: [],
}
