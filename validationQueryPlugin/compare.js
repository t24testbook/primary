const obj = {
    type: "validationQueryPlugin",
    id: "compare",
    description: "This plugin is for comparing actual and expected value with different operator, %...% check if actual is part of the expected value",
    author: "Hariyanto Tjhin",
    version: "1.01",
    lastUpdate: "12-JAN-2023",
    arguments: {
        op: {type: "list", desc: "compare operator", list: ["=", "<>", ">", ">=", "<", "<=", "%...%"]}
    },
    execute: (base, args) => {
        //console.log(this, base, args);
        switch(args.op) {
            case "=":
                break;
            case "<>":
                break;
            case ">":
                break;
            case ">=":
                break;
            case "<":
                break;
            case "<=":
                break;
            case "%...%":
                let x = args.test.include("x");
                break;
            default:
        }

        return true;
    }
};

window.registerPlugin(obj, window.pluginIndex);