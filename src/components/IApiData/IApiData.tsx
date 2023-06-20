export interface IApiData {
    rows: IRow[];
    setRows: any;
}

export interface IRow {
    id: number; 
    name: string; 
    email: string; 
    phone: string; 
    status: string; 
    notes: string;
  }

export interface IPrevRows extends Array<[]> {
    rows: [];
}