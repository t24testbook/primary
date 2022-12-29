const obj = {
    type: "executePlugin",
    id: "match",
    arguments: {},
    execute: (args) => {
        console.log(args);
    }
}

window.registerPlugin(obj);