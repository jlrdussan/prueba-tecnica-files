export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}


export interface FileData {
  id?:string;
  identityDocument: number;
  firstName:string
  lastName:string
  nameFile:string
  amountPages:number
  size:number
  file:File|null
pinUp?:boolean
}
