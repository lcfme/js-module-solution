(function(global) {
    'use strict';
    var urlReg = /\w+:\/\/\w+\/(.+)/;
    var rootModule = {};
    function ModuleCtor(id) {
        if (!this || this.__proto__ !== ModuleCtor.prototype) {
            return new ModuleCtor(id);
        }
        this.id = id;
        this.exports = {};
        this.loaded = !1;
    }

    function define(id, fn) {
        if (typeof id === 'function') {
            fn = id;
            id = document.currentScript
                ? document.currentScript.src
                : Math.random()
                      .toString(32)
                      .substr(2);
        }
        if (typeof id !== 'string') {
            id = '' + id;
        }
        var module = ModuleCtor(id);
        exec();
        function __require__(src) {
            if (rootModule[src] && rootModule[src].__proto__ === ModuleCtor.prototype) {
                return rootModule[src].exports;
            }
            loadScript(src, function() {
                exec();
            });
            throw new Error('module is not ready');
        }
        function exec() {
            try {
                fn.call(module.exports, module.exports, module, __require__);
                module.loaded = !0;
                rootModule[id] = module;
            } catch (err) {}
        }
    }

    function loadScript(src, callback) {
        var script = document.createElement('script');
        script.src = src;
        script.onload = function() {
            callback && callback(src);
        };
        document.body.appendChild(script);
        return script;
    }
    global.define = define;
})(window);
