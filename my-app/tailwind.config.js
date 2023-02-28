module.exports = {
    content: ["./src/**/*.{html,js}",
        './pages/**/*.{html,js,ts,jsx,tsx}',
        './components/**/*.{html,js,ts,jsx,tsx}'],
    theme: {
        animation: {
            ready: 'ready 2s linear',
            opacity: 'opacity 1s linear',
        },
        keyframes: {
            ready: {
                '0%': {
                    width: '0%'
                },
                '100%': {
                    width: '100%'
                }
            },
            opacity: {
                '0%': {
                    opacity: '0'
                },
                '50%': {
                    opacity: '.5'
                },

                '100%': {
                    opacity: '1'
                }
            },
        
        }
      

    },
    plugins: [],
}