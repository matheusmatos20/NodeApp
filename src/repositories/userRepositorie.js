 const user = require('../models/userSchema.js');
const md5 = require('md5');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

 const MongoClient = require('mongodb').MongoClient;
 const authConfig = require('../config/auth')
 const uri = "mongodb+srv://Admin:admin123@cluster-lgmml.mongodb.net/dbMali?retryWrites=true&w=majority";
// const uri = "mongodb+srv://Admin:admin123@cluster-lgmml.mongodb.net/dbMali?retryWrites=true&useNewUrlParser=true&w=majority"


function generateToken(params = {}) {
    try{    
    
    return  jwt.sign(params, authConfig.secret, {
            expiresIn: 86400
        })
    }
    catch(err){

        return 'Erro na Geração de Token'
    }
    
 }
 
 exports.get = (async () => {
    console.log("get reposito");

    
    const client = await MongoClient.connect(uri, { useNewUrlParser: true })
        .catch(err => { console.log(err); });
    if (!client) {
        return;
    }

    try {
         const db = client.db("dbMali");
         
         let collection = db.collection('Users');
         return collection.findOne({});
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
});

exports.getById = (async (id) => {

    return{msg:"Get By Id"};
    // return user.find({ _id: id })

});

exports.post = (async (body) => {
    return{msg:"User Post"}

    //     const newUser = new user(body)
//     newUser.name = body.name,
//         newUser.password = md5(body.password, global.key),
//         newUser.email = body.email,
//         newUser.Active = body.type,
//         newUser.order = body.order
//     console.log(newUser)

//     return newUser.save();

// });

// exports.postAuthenticate = (async (body) => {
//     console.log('body', body)
//     const { email, password } = body;

//     const client = await MongoClient.connect(uri, { useNewUrlParser: true })
//         .catch(err => { console.log(err); });

//     if (!client) {

//         return;
//     }

//     try {

//         const db = client.db("dbMali");
//         let collection = db.collection('Users');
//         const User = await collection.findOne({ "Email": email });


//          if (!User)
//              return status(400).send({ error: "User not found" });


//         return {
//             "user": User.Email,
//             "token": await generateToken({ _id: User._id })
//         }

//     } catch (err) {
//         return status(400).send({ error: "User not found" });
//     } finally {
//         client.close();
//     }

// });
// exports.put = (async (body) => {
//     return user.findOneAndUpdate({
//         _id: body.id
//     }, body)

})