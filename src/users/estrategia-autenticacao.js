const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;

const User = require('./users-model');
const { InvalidArgumentError } = require('../erros');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function verificaUsuario(user) {
    if(!user) {
        throw new InvalidArgumentError('Não existe usuario com esse email')
    }
}

async function verificaSenha(password, passwordHash) {
    const senhaValida = await bcrypt.compare(password, passwordHash);
    if (!senhaValida) {
        throw new InvalidArgumentError('Email ou senha invalidos');
    }
}

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false
    }, async (email, password, done) => {
        try {
            const user = await User.searchByEmail(email);
            verificaUsuario(user);
            await verificaSenha(password, user.password);
            done(null, user);
        } catch (erro) {
            done(erro);
        }
    })
)

passport.use(
    new BearerStrategy(
        async (token, done) => {
            try {
                const payload = jwt.verify(token, process.env.KEY_JWT);
                const user = await User.searchById(payload.id);
                done(null, user, { token: token });
            } catch (erro) {
                done(erro)
            }
        }
    )
)