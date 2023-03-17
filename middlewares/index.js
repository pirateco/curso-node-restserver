
const validaCampos = require('../middlewares/validar-campos');
const validaRoles = require('../middlewares/validar-roles');
const validaJWT = require('../middlewares/validar_jwt');

module.exports = {
    ...validaCampos,
    ...validaJWT,
    ...validaRoles,
}