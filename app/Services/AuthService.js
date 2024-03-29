const DeniedAccessException = use('App/Exceptions/DeniedAccessException')
const ResourceNotFoundException = use('App/Exceptions/ResourceNotFoundException')

class AuthService {
    checkPermission(resource, user) {
        if(!resource) {
            throw new ResourceNotFoundException()
        }

        if(resource.user_id !== user.id) {
            throw new DeniedAccessException()
        }
    }
}

module.exports = AuthService