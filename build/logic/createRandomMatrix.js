"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRandomMatrix = void 0;
function createRandomMatrix(n, m) {
    return new Array(n).fill(0).map(function () { return new Array(m).fill(0).map(function () { return (Math.random() < 0.5 ? 0 : 1); }); });
}
exports.createRandomMatrix = createRandomMatrix;
