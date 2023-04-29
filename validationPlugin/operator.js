const obj = {
    type: "validationPlugin",
    id: "operator",
    description: "Operator for validating expected and actual results",
    author: "Hariyanto Tjhin",
    version: "1.0",
    lastUpdate: "29-APR-2023",
    arguments: {
        operand: {type: "list", desc: "choose which operand", list: ["EQ", "NE", "GT", "GE", "LT", "LE", "CONTAINS", "NOT CONTAINS", "BEGINS WITH", "ENDS WITH"]}
    },
    execute: (base, args) => {
        console.log(obj);
        return obj[args.operand](base.actual, base.expected);
    },
    EQ: (_act, _exp) => {
        console.log("EQ", _act, _exp);
        return (_act === _exp);
    },
    NE: (_act, _exp) => {
        console.log("NE", _act, _exp);
        return (_act !== _exp);
    }
};

window.registerPlugin(obj, window.pluginIndex);