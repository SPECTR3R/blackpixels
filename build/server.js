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
var blackPixelsPackage = grpcObj.blackPixelsPackage;
function main() {
    var server = getServer();
    server.bindAsync("0.0.0.0:" + PORT, grpc.ServerCredentials.createInsecure(), function (err, port) {
        if (err) {
            console.error(err);
            return;
        }
        server.start();
        console.log("Your server as started on port " + port);
    });
}
function getServer() {
    var server = new grpc.Server();
    server.addService(blackPixelsPackage.PixelService.service, {
        getMatrix: function (call) {
            call.request;
            call.write({ row: 0, col: 0, val: 1 });
            call.end();
        },
        getUpdtedMatrix: function (call) {
            call.request;
            call.write({ row: 0, col: 0, val: 2 });
            call.end();
        }
    });
    return server;
}
main();
