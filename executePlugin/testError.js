const obj = {
    type: "executePlugin",
    id: "testError",
    description: "for test error catch",
    author: "Hariyanto Tjhin",
    version: "1.0",
    lastUpdate: "8-APR-2023",
    arguments: {
        errorString: {type: "string", desc: "errorString argument is for ..."}
    },
    execute: (base, args) => {
        console.log(base, args);
        throw(args.errorString);
    }
};

window.registerPlugin(obj, window.pluginIndex);