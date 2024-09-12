class Position {
    title = ""
    description = ""
    latitude = ""
    longitude = ""
    image = ""

    constructor(title, description, latitude, longitude, image) {
        this.title = title
        this.description = description
        this.latitude = latitude
        this.longitude = longitude
    }
}

module.exports = {
    Position
}