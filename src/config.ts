const config = {
    version: "10.23",
    locale: "zh_cn", //en_gb
    apiBaseUrl: process.env.NODE_ENV === "production" ? "" : "http://localhost:9090"
};

export { config };
