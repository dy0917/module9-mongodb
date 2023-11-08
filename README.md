# module9-mongodb
The purpose of this exercise is to connect to a MongoDB docker image using mongoosejs lib.
Reference: https://mongoosejs.com/

## keynotes
### connection string
connection string: As we talk to MongoDB docker image. The image has set up a user and password. We will not get any data with the login user and password. So connection string should look like this:
const mongoUrl = `mongodb://dbadmin:Password1@localhost:27017/myFirstDB?authSource=admin`;
Reference: https://www.mongodb.com/basics/mongodb-connection-string

### Data type
As we discuss to prevent duplicate mails in MongoDB, MongoDB provides a unique attribute when building a schema
 emailId: { type: String, trim: true, required: true, unique: true },
 By using this attribute, if insert an exist email into MongoDB, Mongoose would throw an error

### Structure
require('../controllers'); // if require looks for a folder, it accesses the index file in that folder. What an index file does, it build up a collection of controllers. When using the controllers, we only need to import or require the index file, rather than import every controller individually.



## Exercise
Following the same structure, add an update and delete function
Go through the code and figure out what the structure works
