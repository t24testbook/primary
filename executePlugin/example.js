const obj = {
    type: "executePlugin",
    id: "example",
    arguments: {},
    execute: (base, args) => {
        console.log(args);
    }
};

window.registerPlugin(obj);