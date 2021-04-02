export interface IData {
  name: string;
  url: string;
  description: string;
}

interface IUpdateCompanyDTO {
  id: string;
  data: IData;
}

export default IUpdateCompanyDTO;
