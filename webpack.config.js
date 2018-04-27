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
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};
module.exports = config;