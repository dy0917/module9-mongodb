# module9-mongodb
The purpose of this exercise is to connect to a mongodb docker image using mongoosejs lib.
Reference: https://mongoosejs.com/

## key note
connection string: As we talk to mongodb docker image. The image has setup a user and password. We will not get anyway with login user and password. So connection string should look like:
const mongoUrl = `mongodb://dbadmin:Password1@localhost:27017/myFirstDB?authSource=admin`;
Reference: https://www.mongodb.com/basics/mongodb-connection-string

## Structure
require('../controllers'); // if require looks for a folder, it access to the index file in that folder. What index file does, it builds up a collect of controllers. When use the controllers, we only need to import or require the index file, rather import every controller individually.

## Exercise
Following the same structure, add a update and delete function
Go through the code and figure out what the structure works
