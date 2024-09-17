const {MongoClient} = require('mongodb');

class MongoHandler {
    
    uri = "mongodb://user:pass@mongodb:27017";
    client = new MongoClient(this.uri);

    async addProject(req, user) {
        try {
            await this.client.connect();
            let collection = this.client.db('projects').collection(user)

            let project = req
            let counter = await collection.countDocuments() + 1
            project.id = String(counter)

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
                //console.log(proj)
                projects.push(proj)
              }

              let collections = await database.collections()
              for (const coll of collections) {
                let allProjects = coll.find({})
                for await (const proj of allProjects) {
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

    async getProject(author, projId) {
        let projects = []

        try {
            await this.client.connect();
            const database = this.client.db('projects');
    
            let authorCollection = database.collection(author)
            const filter = { id: projId };
            // Update the first document that matches the filter
            const doc = await authorCollection.findOne(filter);
            return doc
        } catch (e) {
            console.error(e);
        } finally {
            await this.client.close();
        }
        
        await this.client.close()
        return projects
    }

    async deleteProject(author, id) {
        try {
            await this.client.connect();
            let collection = this.client.db('projects').collection(author)
            const filter = { id: id };
            const r = await collection.deleteOne(filter);
            return r
     
        } catch (e) {
            console.error(e);
        } finally {
            await this.client.close();
        }
    }

    async addPosition(position, author, id) {
        try {
            await this.client.connect();
            let collection = this.client.db('projects').collection(author)
            const filter = { id: id };
            // Update the first document that matches the filter
            const doc = await collection.findOne(filter);
            let counter = await doc.positions.length
            position.id = String(counter + 1)
            const options = { upsert: false };
            const updateDoc = {
              $push: {
                positions: position}
            }
            // Update the first document that matches the filter
            const r = await collection.updateOne(filter, updateDoc, options);
            return r
     
        } catch (e) {
            console.error(e);
        } finally {
            await this.client.close();
        }
    }

    async deletePosition(position, author, id) {
        try {
            await this.client.connect();
            let collection = this.client.db('projects').collection(author)
            const filter = { id: id };
            const doc = await collection.findOne(filter)
            console.log("DOC", doc)
            let toDelete = doc.positions.find(elem => elem.id == position)
            // Update the first document that matches the filter
            const options = { upsert: false };
            const updateDoc = {
              $pull: {
                positions: toDelete}
            }
            // Update the first document that matches the filter
            const r = await collection.updateOne(filter, updateDoc, options);
            return r
     
        } catch (e) {
            console.error(e);
        } finally {
            await this.client.close();
        }
    }

    async getPositions(author, id) {
        try {

            await this.client.connect();
            let collection = this.client.db('projects').collection(author)
            const filter = { id: id };
            // Update the first document that matches the filter
            const r = await collection.findOne(filter);
            return r.positions
     
        } catch (e) {
            console.error(e);
        } finally {
            await this.client.close();
        }
    }

    async addEditor(editor, author, id) {
        try {
            await this.client.connect();
            let collection = this.client.db('projects').collection(author)
            const filter = { id: id };
            // Update the first document that matches the filter
            const doc = await collection.findOne(filter);
            const options = { upsert: false };
            const updateDoc = {
              $push: {
                editors: editor}
            }
            // Update the first document that matches the filter
            const r = await collection.updateOne(filter, updateDoc, options);
            return r
     
        } catch (e) {
            console.error(e);
        } finally {
            await this.client.close();
        }
    }

    async deleteEditor(editor, author, id) {
        try {
            await this.client.connect();
            let collection = this.client.db('projects').collection(author)
            const filter = { id: id };
            // Update the first document that matches the filter
            const options = { upsert: false };
            const updateDoc = {
              $pull: {
                editors: editor}
            }
            // Update the first document that matches the filter
            const r = await collection.updateOne(filter, updateDoc, options);
            return r
     
        } catch (e) {
            console.error(e);
        } finally {
            await this.client.close();
        }
    }

}

module.exports = {
    MongoHandler
}