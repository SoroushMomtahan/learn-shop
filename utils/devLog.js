// other error structer
export default function logError(message = '', type = '', statusCode = '', other = {}) {
    console.log('-------------------------');
    console.error(`${type} | (${statusCode})\n${message}\n${other}\n${new Date().toLocaleString('fa-IR')}`)
    console.log('-------------------------');
}
// db errors
export function connectError(message = '', instance = '') {
    const error = {
        type: 'db error',
        statusCode: 600,
        instance: instance,
        message: 'connect failed - ' + message,
        date: new Date().toLocaleString('fa-IR')
    }
    console.log('-------------------------');
    console.error(`${error.type} | (${error.statusCode}) | instance -> (${error.instance})\n${error.message}\n${error.date}`)
    console.log('-------------------------');
}
export function createInstanceError(message = '', instance = '') {
    const error = {
        type: 'db error',
        statusCode: 601,
        instance: instance,
        message: 'create failed - ' + message,
        date: new Date().toLocaleString('fa-IR')
    }
    console.log('-------------------------');
    console.error(`${error.type} | (${error.statusCode}) | instance -> (${error.instance})\n${error.message}\n${error.date}`)
    console.log('-------------------------');
}
export function readInstanceError(message = '', instance = '') {
    const error = {
        type: 'db error',
        statusCode: 602,
        instance: instance,
        message: 'get failed - ' + message,
        date: new Date().toLocaleString('fa-IR')
    }
    console.log('-------------------------');
    console.error(`${error.type} | (${error.statusCode}) | instance -> (${error.instance})\n${error.message}\n${error.date}`)
    console.log('-------------------------');
}
export function updateInstanceError(message = '', instance = '') {
    const error = {
        type: 'db error',
        statusCode: 603,
        instance: instance,
        message: 'update failed - ' + message,
        date: new Date().toLocaleString('fa-IR')
    }
    console.log('-------------------------');
    console.error(`${error.type} | (${error.statusCode}) | instance -> (${error.instance})\n${error.message}\n${error.date}`)
    console.log('-------------------------');
}
export function deleteInstanceError(message = '', instance = '') {
    const error = {
        type: 'db error',
        statusCode: 604,
        instance: instance,
        message: 'delete failed - ' + message,
        date: new Date().toLocaleString('fa-IR')
    }
    console.log('-------------------------');
    console.error(`${error.type} | (${error.statusCode}) | instance -> (${error.instance})\n${error.message}\n${error.date}`)
    console.log('-------------------------');
} 