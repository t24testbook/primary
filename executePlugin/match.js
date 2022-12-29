const init = function(callback) {
    callback("test");
}

init((s) => {
    console.log(s);
    console.log(window.pluginIndex);
});