export interface IData {
  name: string;
  ingredients: string;
  price: number;
}

interface IUpdateFoodDTO {
  companyId: string;
  foodId: string;
  data: IData;
}

export default IUpdateFoodDTO;
