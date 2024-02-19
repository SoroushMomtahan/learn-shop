// imports
import multer from "multer";
import { existsSync, mkdirSync, unlinkSync } from 'fs'
import { resolve, join, extname } from 'path';
import logError from "./devLog.js";
import {randomlyNaming, makeDirFromRoot} from './fileSystem.js';
// destination function
function setDestination(filePath) {
    return function (req, file, cb) {
        const _filePath = makeDirFromRoot(filePath);
        cb(null, _filePath);
    }
}
// filename function
function setFileName(fileName) {
    return function (req, file, cb) {
        const _fileName = randomlyNaming(fileName);
        cb(null, _fileName + extname(file.originalname));
    }
}
// form data parser
export default function parser(filePath, fileName = '') {
    const storage = multer.diskStorage({
        destination: setDestination(filePath),
        filename: setFileName(fileName)
    });
    const parser = multer({ storage });
    return parser;
}
// export multer error type
export const multerError = multer.MulterError;