(function(modulesArr) {
    var rootModule = {};
    function __require__ (id) {
        if (rootModule[id]) {
            return rootModule[id].exports;
        }
        var currentModule = modulesArr[id];
        var module = {
            id,
            exports: {},
        }
        currentModule.call(module.exports, module.exports, module, __require__);
        currentModule[id] = module;
        return module.exports;
    }
    return __require__(0);
})([function(exports, module, require) {
    var m1 = require(1);
    console.log(m1);
}, function(exports, module, require) {
    exports.msg = 'Hello World';
    var m2 = require(2);
    m2();
}, function(exports, module, require) {
    module.exports = function() {
        var str = 'Hello World';
        console.log(str);
        return str;
    }
}]);