// Importando o mongoose
var mongoose = require('mongoose');

// Schema do banco de dados
var userSchema = mongoose.Schema({
    name: {
        type: String
    },

    Birthday: {
        type: Date, require: false
    },
    email: {
        type: String
    },
    cpf: {
        type: String, require: false
    },

    password: {
        type: String
    },

    Active: {
        type: Boolean, require: false
    },
    Telephones: {
        type: [Object], require: false
    },
    pets: { 
                type: [Object] , require: false
            },
    
    token: {
        type: String, require: false
    }
});

// Exportando o Schema.
module.exports = mongoose.model('users', userSchema);
