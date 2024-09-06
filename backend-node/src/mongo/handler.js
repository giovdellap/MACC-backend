const {MongoClient} = require('mongodb');

class MongoHandler {
    
    uri = "mongodb://user:pass@mongodb:27017";
    client = new MongoClient(this.uri);

    async addProject(req, user) {
        try {
            await this.client.connect();
            let collection = this.client.db('projects').collection(user)

            let project = req
            project.id = await collection.countDocuments() + 1

            const result = await collection.insertOne(project);

            return result
     
        } catch (e) {
            console.error(e);
        } finally {
            await this.client.close();
        }
    }

    async getProjects(user) {
        let projects = []

        try {
            await this.client.connect();
            const database = this.client.db('projects');
    
            let authorCollection = database.collection(user)
            const authorQuery = {};
            let authorProjects = authorCollection.find(authorQuery);
            for await (const proj of authorProjects) {
                console.log(proj)
                projects.push(proj)
              }

              let collections = await database.collections()
              for (const coll of collections) {
                let allProjects = coll.find({})
                for await (const proj of all) {
                    if(proj.editors) {
                        if (user in proj.editors) {
                            projects.push(proj)
                        }
                    }
                }
              }
              
            
        } catch (e) {
            console.error(e);
        } finally {
            await this.client.close();
        }
        
        await this.client.close()
        return projects
     
    }

}

module.exports = {
    MongoHandler
}