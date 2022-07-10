const User = require('./users-model');
const { InvalidArgumentError, InternalServerError } = require('../erros');

const jwt = require('jsonwebtoken');

function criaTokenJWT(user) {
    const payload = {
      id: user.id
    };
  
const token = jwt.sign(payload, process.env.KEY_JWT, { expiresIn: "15m" });
    return token;
}

exports.add = async (req, res) => {
    const {name, email, password} = req.body

    try {
        const user = new User({
            name,
            email
        });

        await user.addPassword(password);

        await user.addUser();

        res.status(201).json();
    } catch (erro) {
        if (erro instanceof InvalidArgumentError) {
            res.status(422).json({ erro: erro.message });
        } else if (erro instanceof InternalServerError) {
            res.status(500).json({ erro: erro.message });
        } else {
            res.status(500).json({ erro: erro.message });
        }
    }
},

exports.login = async (req, res) => {
    const token = criaTokenJWT(req.user);
    res.set('Authorization', token);
    res.status(204).send();
}

exports.list = async (req, res) => {
    const users = await User.listUsers();
    res.json(users);
};

exports.delete = async (req, res) => {
    const user = await User.searchById(req.params.id);
    try {
        await user.deleteUser();
        res.status(200).send();
    } catch (erro) {
        res.status(500).json({erro: erro});
    }
}