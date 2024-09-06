class ProjectRequest {
    id = ""
    title = ""
    description = ""

    constructor(title, description) {
        this.title = title
        this.description = description
    }
}

module.exports = {
    ProjectRequest
}