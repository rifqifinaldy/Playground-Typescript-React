import { Action } from "../actions/bank.action";
import { ActionType } from "../actions-types/bank.types";

const initialState = 0;

const bankReducers = (state: number = initialState, action: Action) => {
    switch (action.type){
        case ActionType.DEPOSIT:
            return state + action.payload;
        case ActionType.WITHDRAW:
            return state - action.payload;
        case ActionType.BANKRUPT:
            return 0;
        default: 
            return state 
    }
}

export default bankReducers