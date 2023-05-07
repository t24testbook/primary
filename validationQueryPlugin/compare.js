const obj = {
    type: "validationQueryPlugin",
    id: "compare",
    description: "This plugin is for comparing actual and expected value with different operator, %...% check if actual is part of the expected value. v1.07 fixed numerical compare",
    author: "Hariyanto Tjhin",
    version: "1.07",
    lastUpdate: "7-MAY-2023",
    arguments: {
        op: {type: "list", desc: "compare operator", list: ["=", "<>", ">", ">=", "<", "<=", "%...%"]}
    },
    validate: (args) => {
        return {status: "error", message: "test validate error message"};
    },
    execute: (base, args) => {
        let actual = base.actual;
        let expected = base.expected;

        if(!isNaN(actual)) {
            if(actual.indexOf(".") === -1) actual = Math.parseInt(actual)
            else actual = Math.parseFloat(actual);
        }

        if(!isNaN(expected)) {
            if(expected.indexOf(".") === -1) expected = Math.parseInt(expected)
            else expected = Math.parseFloat(expected);
        }

        switch(args.op) {
            case "=":
                return {status: "ok", value: (actual === expected)};
            case "<>":
                return {status: "ok", value: (actual !== expected)};
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
    }
};

window.registerPlugin(obj, window.pluginIndex);