export interface IData {
  name: string;
  phone: string;
  address: string;
  email: string;
}

interface IUpdateClientDTO {
  id: string;
  data: IData;
}

export default IUpdateClientDTO;
