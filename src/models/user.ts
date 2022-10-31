import { Veiculo } from "./veiculo.model";

export interface User {
    key?: string;
    email: string;
    password: string;
    passwordTwo: string;
    active?: boolean;
    veiculos?: Veiculo[];
}