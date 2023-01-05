const obj = {
    type: "executePlugin",
    id: "example",
    description: "This is an example plugin",
    arguments: [
        {id: "var1", type: "string", desc: "var1 argument is for ..."},
        {id: "var2", type: "number", desc: "var2 argument is for ..."}
    ],
    execute: (base, args) => {
        console.log(base, args);
    }
};

window.registerPlugin(obj);