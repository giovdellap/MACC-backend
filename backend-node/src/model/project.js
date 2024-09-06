class ProjectRequest {
    id = ""
    title = ""
    description = ""
    editors = []

    constructor(title, description) {
        this.title = title
        this.description = description
    }
}

module.exports = {
    ProjectRequest
}