export class UsuarioModel{
    id: number;
    nombre:string;
    apellido: string;
    email:string;
    tel: number;
    code: number;
    colonia: string;
    region: string;
    city: string;
    municipio: string;
    calle:string;
}
export interface formularioModel {
    id?: number,
    nombre?:string,
    apellido?: string,
    email?:string,
    tel?: string,
    code?: string,
    colonia?: string,
    region?: string,
    city?: string,
    municipio?: string,
    calle?:string,
  }