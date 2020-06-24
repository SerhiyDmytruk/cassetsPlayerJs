const presets = [
    [
        "@babel/preset-env",
        {
            targets: {
                edge: "15",
                firefox: "60",
                chrome: "60",
                safari: "11.1",
            },
            // useBuiltIns: "usage"
            "modules": true
        },
    ],
];

module.exports = { presets };