const obj = {
    type: "executePlugin",
    id: "example",
    description: "This is an example for execute plugin",
    author: "Hariyanto Tjhin",
    version: "1.0",
    lastUpdate: "3-JAN-2023",
    arguments: {
        var1: {type: "number", desc: "var1 argument is for ..."},
        var2: {type: "number", desc: "var2 argument is for ..."}
    },
    execute: (base, args) => {
        console.log(base, args);
        return {status: "ok", value: args.var1 + ":" + args.var2}
    }
};

window.registerPlugin(obj, window.pluginIndex);