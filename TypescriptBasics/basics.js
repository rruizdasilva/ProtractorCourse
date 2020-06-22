var a = 4;
var b = "hello";
var c = 4;
var list = [1, 2, 3];
var dynamic;
dynamic = 3;
c = "hello";
var flag = false;
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 100 * i);
};
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
