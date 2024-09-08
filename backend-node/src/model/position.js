class Position {
    title = ""
    description = ""
    latitude = ""
    longitude = ""

    constructor(title, description, latitude, longitude) {
        this.title = title
        this.description = description
        this.latitude = latitude
        this.longitude = longitude
    }
}

module.exports = {
    Position
}