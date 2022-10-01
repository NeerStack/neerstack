import colors from 'tailwindcss/colors'
module.exports ={
    darkMode: 'class',
    content:[],
    plugins:[
        require('@tailwindcss/typography')
    ],
    theme:{
       extend:{
        colors:{
            primary: colors.grey
        }
       }
    }
}