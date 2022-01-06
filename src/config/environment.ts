import dotenv from 'dotenv'

export interface IVariablesEntorno {
    domain: string;
    port: string;
    principalPath: string;
    timeZone: string;
    environment: string;
}

const variablesCargadas = dotenv.config().parsed


const variablesEntorno: IVariablesEntorno = {
    domain: process.env.DOMINIO ? process.env.DOMINIO : 'http://localhost:5050',
    environment: process.env.ENTORNO ? process.env.ENTORNO : 'prod',
    port: process.env.PORT ? process.env.PORT : '3000',
    principalPath: process.env.ROOT_PATH ? process.env.ROOT_PATH : '/api/v1',
    timeZone: process.env.ZONA_HORARIA? process.env.ZONA_HORARIA : 'America/Bogota',
}


export default variablesEntorno
