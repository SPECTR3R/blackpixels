"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveBlackPixels = void 0;
var RemoveBlackPixels = /** @class */ (function () {
    function RemoveBlackPixels(matrix) {
        this.currentRegion = 1;
        this.regionMatrix = this.createEmptyMatrix(matrix.length, matrix[0].length);
        this.inputMatrix = matrix;
        this.regionsData = {};
    }
    RemoveBlackPixels.prototype.createEmptyMatrix = function (n, m) {
        return new Array(n).fill(0).map(function () { return new Array(m).fill(0); });
    };
    RemoveBlackPixels.prototype.neighborExists = function (matrix, row, col) {
        if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length) {
            if (matrix[row][col] == 1) {
                return true;
            }
        }
        return false;
    };
    RemoveBlackPixels.prototype.doDFS = function (matrix, row, col) {
        if (this.regionMatrix[row][col]) {
            return;
        }
        // mark this vertex as visited and visit all its neighbors in depth first manner
        this.regionMatrix[row][col] = this.currentRegion;
        if (!this.regionsData[this.currentRegion]) {
            this.regionsData[this.currentRegion] = {
                regionSize: 1,
                isConnectedToBorder: row === 0 || row === matrix.length - 1 || col === 0 || col === matrix[0].length - 1
            };
        }
        else {
            this.regionsData[this.currentRegion].regionSize++;
            if (row === 0 || row === matrix.length - 1 || col === 0 || col === matrix[0].length - 1) {
                this.regionsData[this.currentRegion].isConnectedToBorder = true;
            }
        }
        var offsets = [-1, 0, +1];
        var rOffset, cOffset;
        for (var l = 0; l < offsets.length; l++) {
            rOffset = offsets[l];
            for (var m = 0; m < offsets.length; m++) {
                cOffset = offsets[m];
                // do not consider central vertex or diagonal vextexes as neighbors
                if (rOffset === 0 && cOffset === 0) {
                    continue;
                }
                if (rOffset === -1 && cOffset === -1) {
                    continue;
                }
                if (rOffset === -1 && cOffset === 1) {
                    continue;
                }
                if (rOffset === 1 && cOffset === -1) {
                    continue;
                }
                if (rOffset === 1 && cOffset === 1) {
                    continue;
                }
                // check if there exists a vertex at this offset and check if it is '1'
                if (this.neighborExists(matrix, row + rOffset, col + cOffset)) {
                    this.doDFS(matrix, row + rOffset, col + cOffset);
                }
            }
        }
    };
    RemoveBlackPixels.prototype.groupBlackPixels = function () {
        for (var row = 0; row < this.inputMatrix.length; row++) {
            for (var col = 0; col < this.inputMatrix[0].length; col++) {
                if (this.inputMatrix[row][col] === 1 && !this.regionMatrix[row][col]) {
                    this.doDFS(this.inputMatrix, row, col);
                    this.currentRegion++;
                }
            }
        }
        return { regionsMatrix: this.regionMatrix, regionsData: this.regionsData };
    };
    return RemoveBlackPixels;
}());
exports.RemoveBlackPixels = RemoveBlackPixels;
