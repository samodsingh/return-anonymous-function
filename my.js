// Returning Anonymous Function
function disp(a){
    return function(b){
        return a+b;

    };
}
var af = (disp(10));
document.write(af(20));