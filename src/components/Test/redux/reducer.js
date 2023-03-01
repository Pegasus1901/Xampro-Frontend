import { CHANGE_AMOUNT, CHANGE_CATEGOERY, CHANGE_DIFFICULT, CHANGE_SCORE, CHANGE_TYPE } from "./actionTypes";

const initialState = {
    question_categoery: "",
    question_difficult: "",
    question_type: "",
    amount_of_questions: 10,
    score: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CATEGOERY:
            return {
                ...state,
                question_categoery: action.payload,
            };
        case CHANGE_DIFFICULT:
            return {
                ...state,
                question_difficult: action.payload,
            };
        case CHANGE_TYPE:
            return {
                ...state,
                question_type: action.payload,
            };
        case CHANGE_AMOUNT:
            return {
                ...state,
                amount_of_questions: action.payload,
            };
        case CHANGE_SCORE:
            return {
                ...state,
                score: action.payload,
            };
        default:
            return state;
    }
}
export default reducer;