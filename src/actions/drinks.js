import axios from 'axios';
import {
  DRINKS_PENDING,
  DRINKS_SUCCESS,
  DRINKS_ERROR,
  DRINK_DETAILS_ERROR,
  DRINK_DETAILS_SUCCESS,
  DRINK_DETAILS_PENDING,
} from '../constants/types';

export const fetchDrinksPending = () => ({
  type: DRINKS_PENDING,
});

export const fetchDrinksSuccess = (drinks) => ({
  type: DRINKS_SUCCESS,
  drinks,
});

export const fetchDrinksError = (error) => ({
  type: DRINKS_ERROR,
  error,
});

export const fetchDrinkDetailsPending = () => ({
  type: DRINK_DETAILS_PENDING,
});

export const fetchDrinkDetailsSuccess = (drinkDetails) => ({
  type: DRINK_DETAILS_SUCCESS,
  drinkDetails,
});

export const fetchDrinkDetailsError = (error) => ({
  type: DRINK_DETAILS_ERROR,
  error,
});

export const fetchDrinks = (filterParam) => (dispatch) => {
  dispatch(fetchDrinksPending());
  return axios
    .get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${filterParam}`
    )
    .then((response) => {
      dispatch(fetchDrinksSuccess(response.data.drinks));
    })
    .catch((error) => {
      dispatch(fetchDrinksError(error));
    });
};

export const fetchDrinkDetails = (drinkName) => (dispatch) => {
  dispatch(fetchDrinkDetailsPending());
  return axios
    .get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
    )
    .then((response) => {
      dispatch(fetchDrinkDetailsSuccess(response.data.drinks[0]));
    })
    .catch((error) => {
      dispatch(fetchDrinkDetailsError(error));
    });
};
