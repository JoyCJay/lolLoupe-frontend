const config = {
    version: "11.8",
    locale: "zh_cn", //en_gb
    apiBaseUrl: process.env.NODE_ENV === "production" ? "http://42.192.95.242:9090" : "http://42.192.95.242:9090"
};

export { config };
