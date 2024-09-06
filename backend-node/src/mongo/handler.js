const {MongoClient} = require('mongodb');

class MongoHandler {
    
    uri = "mongodb://user:pass>@mongodb:27017/test?retryWrites=true&w=majority";

    async addProject(req, user) {
        try {
            let client = new MongoClient(uri);
            await client.connect();

            let collection = client.db('').collection(user)
            let project = req
            project.id = await collection.countDocuments() + 1
            const result = await collection.insertOne(project);
            return result
     
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }

    async getProjects(user) {
        try {
            let client = new MongoClient(uri);
            await client.connect();
            const database = client.db('');

            let authorCollection = client.db('').collection(user)
            const authorQuery = { author: user };
            let projects = await authorCollection.findAll(authorQuery);

            const collections = await database.collections()
            for (let i = 0; i < collections.length; i++) {
                const editorQuery = { editor: user };
                let editorProjects = await collections[i].findAll(editorQuery);
                projects = projects.concat(editorProjects)
            }
            return projects
     
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }

}

module.exports = {
    MongoHandler
}