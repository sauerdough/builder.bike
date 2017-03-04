var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './webapp/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['babel'], include: path.join(__dirname, 'webapp') },
            { test: /\.(svg)(\?.*$|$)/, loader: 'file?mimetype=image/svg+xml&name=[name].[ext]' },
            { test: /\.(woff)(\?.*$|$)/, loader: 'file?mimetype=application/font-woff&name=[name].[ext]' },
            { test: /\.(woff2)(\?.*$|$)/, loader: 'file?mimetype=application/font-woff2&name=[name].[ext]' },
            { test: /\.([ot]tf)(\?.*$|$)/, loader: 'file?mimetype=application/octet-stream&name=[name].[ext]' },
            { test: /\.(eot)(\?.*$|$)/, loader: 'file?mimetype=application/vnd.ms-fontobject&name=[name].[ext]' },
            { test: /(\.css|\.less)$/, loader: "style!css!less" },
            { test: /\.(jpe?g|png|gif)$/i, loaders: ['file'] },
        ]
    }
};
