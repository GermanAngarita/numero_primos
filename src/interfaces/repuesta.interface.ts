export default interface IRespuesta {
    estatus: boolean;
    resultadoOperacion: string;
    data?: any;
    error?: any;
    link?: string;
}