export default (success, data=[], ...errors) => {

    return{
        success,
        data,
        errors: errors.map((error)=>error)
    }
}