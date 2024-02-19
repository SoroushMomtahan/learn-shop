function entityGuard(acceptedEntity){
    return (req, res, next)=>{
        // get permissions
        const permissions = req.user.permissions;
        // find target permission
        const targetPermission = permissions.forEach((permission)=>{
            if(permission.entityName === acceptedEntity){
                return permission
            }
        });
    }
}
function requestMethodGuard(){

}