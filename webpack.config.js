const path =  require('path')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js'
    },
    output:{
        path: path.resolve(__dirname,"app"),
        filename: 'app.js'
    },
    module:{
        rules: [
            {
            test: /\.js?$/,
            loader: "babel-loader",
            options : {
                presets:[ "env" ],
                plugins:[
                    ["transform-react-jsx",{"pragma" :"h" }]
                ]
                } 
            },
            {
                test: /\.scss$/,
                use : [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ] 
    } 
           
    
}