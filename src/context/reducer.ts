import { ProductType, Products } from "./types";
export const initialState: any = {
  viewed: 0,
};
type Action =
  | { type: "ADD"; payload: { id: number; name: string } }
  | { type: "DELETE"; payload: { id: number } }
|any;

export const reducer = (state:any, action: any): any => {
  switch (action.type) {
    case "ADD": {
      return { ...state, viewed:state.viewed+1  };
    }
    // case "DELETE": {
    //   return {
    //     basket: state.basket.filter((t) => t.id !== action.payload.id),
    //   };
    // }
    default:
      return state;
  }
};