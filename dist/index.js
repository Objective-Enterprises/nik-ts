"use strict";
// type Input <T> = T[]
// interface Output <T> {
//   timestamp: Date
//   value: T[]
// }
Object.defineProperty(exports, "__esModule", { value: true });
function label(input) {
    return {
        date: new Date(),
        value: input.data
    };
}
const stringOutput = label({ creatorName: 'Dorothy', data: 'hello' });
const numberOutput = label({ creatorName: 'Tallulah', data: 100 });
function formatString(value) {
    console.log(value.toUpperCase());
}
function formatNumber(value) {
    console.log(value.toFixed(2));
}
formatString(stringOutput.value);
formatNumber(numberOutput.value);
//# sourceMappingURL=index.js.map