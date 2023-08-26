const { MongoClient } = require('mongodb');

// const databaseMiddleware = async (req, res, next) => {
//   try {
//     const mongoClient = await MongoClient.connect('mongodb://127.0.0.1:27017/');
//     const db = mongoClient.db('revou');
  
//     req.db = db;
  
//     next();
//   } catch (error) {
//     res.status(500).json({
//       message: error.message // Use error.message to get the error message
//     });
//   }
// };

const databaseMiddleware = async (req, res, next) => {
  try {
    const mongoClient = await MongoClient.connect(`mongodb+srv://resyanac:Resyaa21@cluster21.guz7tco.mongodb.net/resyanac?retryWrites=true&w=majority`);
    const db = mongoClient.db('revou');
    console.log("connect to mongodb");
    req.db = db;
  
    next();
  } catch (error) {
    console.log(error.message);
    throw error
    // res.status(500).json({
    //   message: error.message // Use error.message to get the error message
    // });
  }
};

module.exports = databaseMiddleware;
