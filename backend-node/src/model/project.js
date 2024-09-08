class ProjectRequest {
    id = ""
    title = ""
    description = ""
    author = ""
    editors = []
    positions = []

    constructor(author, title, description) {
        this.title = title
        this.description = description
        this.author = author
    }
}

module.exports = {
    ProjectRequest
}