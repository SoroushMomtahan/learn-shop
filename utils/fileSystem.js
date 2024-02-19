// imports 
import { existsSync, mkdirSync, unlinkSync } from 'fs'
import { resolve, join } from 'path';
import logError from "./devLog.js";
// randomly file naming
export function randomlyNaming(filename = '') {
    try {
        return filename + '_' + Date.now() + Math.floor(Math.random() * 1E6).toString();
    } catch (err) {
        logError('randomly naming failed ' + err, 'utils error', '', {});
        throw err;
    }
}
// getPathFromRoot
export function concatPathToRoot(path = '') {
    try {
        return join(resolve(), path)
    } catch (err) {
        logError('concat path to root failed - ' + err, 'utils error', '', {});
        throw err;
    }
}
// makeDirFromRoot
export function makeDirFromRoot(path = '') {
    try {
        const pathFromRoot = concatPathToRoot(path);
        if (!existsSync(pathFromRoot, { recursive: true })) {
            mkdirSync(pathFromRoot, { recursive: true });
        }
        return pathFromRoot;
    } catch (err) {
        logError('make dir from root failed - ' + err, 'utils error', '', {});
        throw err;
    }
}
// delete files
export function deleteFile(path, fileName) {
    try {
        const _path = concatPathToRoot(path + '/' + fileName);
        unlinkSync(_path);
    } catch (err) {
        logError('delete file failed - ' + err, 'utils error', '', {});
        throw err;
    }
}