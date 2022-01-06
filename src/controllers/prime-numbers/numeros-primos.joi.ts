import joi from '@hapi/joi';

// TODO: ENVIAR MESANJE DE RANGO DE 2 ENTRE X, Sólo número entero
export const getPrimesListSchema = joi.object().keys({
    number: joi.number().integer().min(2).required()
})