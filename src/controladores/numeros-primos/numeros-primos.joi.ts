import joi from '@hapi/joi';

export const obtenerPrimosAlgoritmoSchema = joi.object().keys({
    numero: joi.number().required()
})