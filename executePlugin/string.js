const obj = {
    type: "executePlugin",
    id: "string",
    description: "This plugin is for string case conversion",
    author: "Hariyanto Tjhin",
    version: "1.0",
    lastUpdate: "17-APR-2023",
    arguments: {
        stringFunction: {type: "list", desc: "string function", list: ["ToLowerCase", "ToUpperCase"]}
    },
    execute: (base, args) => {
        let _result = base.val;
        switch(args.stringFunction) {
            case "ToLowerCase":
                _result = base.val? base.val.toLowerCase() : base.val;
                break;
            case "ToUpperCase":
                _result = base.val? base.val.toUpperCase() : base.val;
                break;
            default:
        }

        return {status: "ok", value: _result};
    }
};

window.registerPlugin(obj, window.pluginIndex);