import{
    CHANGE_CATEGOERY,
    CHANGE_DIFFICULT,
    CHANGE_TYPE,
    CHANGE_AMOUNT,
    CHANGE_SCORE
} from './actionTypes'

export const handleCategoeryChange = payload => ({
    type: CHANGE_CATEGOERY,
    payload,
})
export const handleDifficultyChange = payload => ({
    type: CHANGE_DIFFICULT,
    payload,
})
export const handleAmountChange = payload => ({
    type: CHANGE_AMOUNT,
    payload,
})
export const handleTypeChange = payload => ({
    type: CHANGE_TYPE,
    payload,
})
export const handleScoreChange = payload => ({
    type: CHANGE_SCORE,
    payload,
})