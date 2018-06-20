define('test.js', function(exports, module, require) {
    exports.msg = 'Hello Wolrd';
    exports.status = 'ok';
    var sayHello = require('/test2.js');
    exports.hello = sayHello;
});