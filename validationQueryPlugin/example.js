const obj = {
    type: "validationQueryPlugin",
    id: "example",
    description: "This is an example for validation query plugin",
    author: "Hariyanto Tjhin",
    version: "1.0",
    lastUpdate: "3-JAN-2023",
    arguments: {
        var1: {type: "list", desc: "var1 argument is for ...", list: ["UP", "DOWN"]},
        var2: {type: "number", desc: "var2 argument is for ..."}
    },
    execute: (base, args) => {
        console.log(this, base, args;
    }
};

window.registerPlugin(obj, window.pluginIndex);