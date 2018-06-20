define('/test2.js', function(exports, module, require) {
    module.exports = function(str) {
        return 'hello ' + str;
    }
});