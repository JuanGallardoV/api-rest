'use strict'

const Project = use('App/Models/Project')
const Task = use('App/Models/Task')
const AuthService = use('App/Services/AuthService')

class TaskController {
    async index({ auth, request, params }) {
        const user = await auth.getUser()
        const { id } = params
        const project = await Project.find(id)
        AuthService.checkPermission(project, user)
        return await project.tasks().fetch()
    }

    async create({ auth, request, params }) {
        const user = await auth.getUser()
        const { description } = request.all()
        const { id } = params
        const project = await Project.find(id)
        AuthService.checkPermission(project, user)
        const task = new Task()
        task.fill({
            description
        })
        await project.tasks().save(task)
        return task
    }
}

module.exports = TaskController
