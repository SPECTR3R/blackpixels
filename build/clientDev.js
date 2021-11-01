"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var grpc = __importStar(require("@grpc/grpc-js"));
var protoLoader = __importStar(require("@grpc/proto-loader"));
var PORT = 8082;
var PROTO_FILE = './proto/blackPixels.proto';
var packageDef = protoLoader.loadSync(path_1.default.resolve(__dirname, PROTO_FILE));
var grpcObj = grpc.loadPackageDefinition(packageDef);
var client = new grpcObj.blackPixelsPackage.PixelService("0.0.0.0:" + PORT, grpc.credentials.createInsecure());
var deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, function (err) {
    if (err) {
        console.error(err);
        return;
    }
    onClientReady();
});
function onClientReady() {
    var stream1 = client.getMatrix({ n: 5, m: 5 });
    var initialMatrix = [];
    stream1.on('data', function (chunk) {
        initialMatrix.push(chunk.list);
    });
    stream1.on('end', function () {
        console.log(initialMatrix);
    });
    var stream2 = client.getNewMatrixValues({});
    stream2.on('data', function (chunk) {
        console.log(chunk);
    });
    stream2.on('end', function () {
        console.log('pos olle 2');
    });
}
