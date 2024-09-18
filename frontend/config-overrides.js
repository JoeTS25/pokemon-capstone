const webpack = require("webpack");

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};

    Object.assign(fallback, {
        buffer: require.resolve("buffer/"),
        crypto: require.resolve("crypto-browserify"),
        util: require.resolve("util/"),
        stream: require.resolve("stream-browserify"),
        vm: require.resolve("vm-browserify"),
    });
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
    ]);
    return config;
};