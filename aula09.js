"use strict";
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
function printImportant(key, message) {
    const num = LogLevel[key];
    if (num == LogLevel.ERROR) {
        return message;
    }
    else
        return 'Deu bom';
}
;
console.log(printImportant("ERROR", "THIS FUCK"));
let directions = [
    0,
    1,
    2,
    3,
];
console.log(0);
