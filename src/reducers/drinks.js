import {
  DRINKS_ERROR,
  DRINKS_SUCCESS,
  DRINKS_PENDING,
  DRINK_DETAILS_ERROR,
  DRINK_DETAILS_PENDING,
  DRINK_DETAILS_SUCCESS,
} from '../constants/types';

const defaultState = { drinksList: [], drinkDetails: {} };

export const drinks = (state = defaultState, action) => {
  switch (action.type) {
    case DRINKS_PENDING:
    case DRINK_DETAILS_PENDING:
      return state;
    case DRINKS_ERROR:
    case DRINK_DETAILS_ERROR:
      return { ...state, ...action.error };
    case DRINKS_SUCCESS:
      return { ...state, ...{ drinksList: action.drinks } };

    case DRINK_DETAILS_SUCCESS:
      return { ...state, ...{ drinkDetails: action.drinkDetails } };
    default:
      return state;
  }
};
