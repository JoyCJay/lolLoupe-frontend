module.exports = {
    outputDir: "dist",
    assetsDir: "assets",
    lintOnSave: false,
    devServer: {
        open: true,
        host: "localhost",
        port: "8080",
        https: false,
        proxy: {
            "/api": {
                target: "https://www.v2ex.com/api",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
            "/mock": {
                target: "https://www.v2ex.com/api",
                changeOrigin: true,
                pathRewrite: {
                    "^/mock": "asdf"
                }
            }
        }
    }
};
