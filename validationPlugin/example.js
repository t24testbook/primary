const obj = {
    type: "validationPlugin",
    id: "example",
    description: "This is an example for validation plugin",
    author: "Hariyanto Tjhin",
    version: "1.0",
    lastUpdate: "3-JAN-2023",
    arguments: {
        var1: {type: "number", desc: "var1 argument is for ..."},
        var2: {type: "number", desc: "var2 argument is for ..."}
    },
    execute: (base, args) => {
        console.log(this, base, args);
    }
};

window.registerPlugin(obj, window.pluginIndex);