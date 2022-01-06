export default interface IServiceResponse {
    status: boolean;
    operationResult: string;
    data?: any;
    error?: any;
}