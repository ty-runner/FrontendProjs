function mycallback(number) {
    return number*2;
}
function mainFunc(number, shouldCall, callback) {
    let result = number;
    if (shouldCall) {
        return callback(number);
    }
    return result;
}
console.log(mainFunc(10, true, mycallback));