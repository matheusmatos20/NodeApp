const userRepository = require('../repositories/userRepositorie');


class UsersController {

    constructor(User) {
        this.User = User;
    }

    async get(req, res) {
        try {
            console.log('Controller')
            var user = await userRepository.get();
            res.status(200).send(user);            
        }
        catch (err) {
            res.status(400);//.send(user);
        }
    }

    async getById(req, res) {
        const { params: { id } } = req;
        try {
            var user = await userRepository.getById(id);
            res.status(200).send(user);
        }
        catch (err) {
            res.status(400).send(user);
        }
    }

    async post(req, res) {
        const newUser = new this.User(req.body);
        try {
            console.log('Try Post');
            var user = userRepository.post(newUser);
            res.status(200).send(user);
        }
        catch (err) {
            res.status(400).send(user);
            console.log(err)
        }

    }
    async put(req, res) {
        // const newUser = new this.User(req.body);
        try {
            // var user = await userRepository.put(newUser);
            res.status(200).send(user);

        }
        catch (err) {
            res.status(400).send(user);
        }
    }


    // return this.User.findOneAndUpdate({
    //     _id: req.params.id
    // }, req.body)
    //     .then(() => res.sendStatus(200))
    //     .catch(err => res.status(422).send(err.message));

    async postAuthenticate(req, res) {
        try {
             var user = await userRepository.postAuthenticate(req.body);
             res.status(200).send(user);

        }
        catch (err) {
            res.status(400).send({ err: 'Erro De Autnticação' });
        }


    }
    async getProject(req, res) {

        res.status(400).send({
            msg: 'OK'
            , user: req.userId
        });
    }

}

module.exports = UsersController;