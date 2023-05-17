const obj = {
    type: "validationPlugin",
    id: "operator",
    description: "Operator for validating expected and actual results, fixed variable type",
    author: "Hariyanto Tjhin",
    version: "1.1",
    lastUpdate: "17-MAY-2023",
    arguments: {
        operand: {type: "list", desc: "choose which operand", list: ["EQ", "NE", "GT", "GE", "LT", "LE", "CONTAINS", "NOT CONTAINS", "BEGINS WITH", "ENDS WITH"]}
    },
    execute: (base, args) => {
        let actual = base.actual;
        let expected = base.expected;

        if(!isNaN(actual)) {
            if(actual.toString().indexOf(".") === -1) actual = Number.parseInt(actual.toString())
            else actual = Number.parseFloat(actual.toString());
        }

        if(!isNaN(expected)) {
            if(expected.toString().indexOf(".") === -1) expected = Number.parseInt(expected.toString())
            else expected = Number.parseFloat(expected.toString());
        }

        return obj[args.operand](actual, expected);
    },
    EQ: (_act, _exp) => {
        return {status: "ok", value: (_act === _exp)};
    },
    NE: (_act, _exp) => {
        return {status: "ok", value: (_act !== _exp)};
    }
};

window.registerPlugin(obj, window.pluginIndex);