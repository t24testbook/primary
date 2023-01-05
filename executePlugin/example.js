const obj = {
    type: "executePlugin",
    id: "example",
    description: "This is an example plugin",
    arguments: {
        var1: {type: "string", desc: "var1 argument is for ..."},
        var2: {type: "number", desc: "var2 argument is for ..."}
    },
    execute: (base, args) => {
        console.log(base, args);
    }
};

window.registerPlugin(obj, window.pluginIndex);