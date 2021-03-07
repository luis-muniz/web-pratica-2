export interface IData {
  name: string;
}

interface IUpdateCompanyDTO {
  id: string;
  data: IData;
}

export default IUpdateCompanyDTO;
