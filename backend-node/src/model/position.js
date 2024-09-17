class Position {
    id = ""
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
        this.image = image
    }
}

module.exports = {
    Position
}