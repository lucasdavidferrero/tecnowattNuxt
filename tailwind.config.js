const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")
// https://tailwindcss.com/docs/configuration
// https://daisyui.com/docs/
// Icons: https://heroicons.com/ ; https://icones.js.org/ ; https://icones.js.org/collection/mdi ; https://icones.js.org/collection/lucide

/* Util para el texto de una obra (texto generado por un usuario) https://tailwindcss.com/docs/typography-plugin */
module.exports = {
    theme: {
        extend: {
            colors: {}
        }
    },
    plugins: [
        require("@tailwindcss/typography"),
        require('daisyui'),
        iconsPlugin({
            // Select the icon collections you want to use
            collections: getIconCollections(["mdi", "lucide"]),
        })
    ],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")["[data-theme=light]"],
                    primary: '#434141',
                    'primary-focus': '#282727',
                    secondary: '#D2451E',
                    'secondary-focus': '#933015'
                }
            }
        ]
    }
}
