var config = {

    entry: __dirname + "/src/index.js",

    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
    },

    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }

            }
        ]
    }
};
module.exports = config;