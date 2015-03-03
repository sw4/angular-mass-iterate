(function(angular) {
    'use strict';
    angular.module('iterator', [])
        .factory('iterate', [function() {
            return{
                duffs:function(array, fn){
                    var i = 0,
                        l=array.length,
                        n = l % 8;
                    function process(x){
                        fn(array[x], x);
                    }
                    while (n--) {
                        process(i++);
                    }
                    n = Math.floor(l / 8);
                    while (n--) {
                        process(i++);
                        process(i++);
                        process(i++);
                        process(i++);
                        process(i++);
                        process(i++);
                        process(i++);
                        process(i++);
                    }
                },
                nonBlocking:function(array, fn, msPerChunk, context){
                    context = context || window;
                    msPerChunk = msPerChunk || 200;
                    var i = 0,
                        l=array.length;
                    function now() {
                        return new Date().getTime();
                    }
                    function process() {
                        var startTime = now();
                        while (i < l && (now() - startTime) <= msPerChunk) {
                            fn.call(context, array[i]);
                            ++i;
                        }
                        if (i < l) {
                            setTimeout(process, 1);
                        }
                    }
                    process();
                }
            }
        }]);
})(angular);
