import { FOODS_PENDING, FOODS_SUCCESS, FOODS_ERROR } from '../constants/types';
import axios from 'axios';

export const fetchFoodsPending = () => ({
  type: FOODS_PENDING,
});

export const fetchFoodsSuccess = (food) => ({
  type: FOODS_SUCCESS,
  food,
});

export const fetchFoodsError = (error) => ({
  type: FOODS_ERROR,
  error,
});

export const fetchFoods = (filterParam) => (dispatch) => {
  dispatch(fetchFoodsPending());
  return axios
    .get('')
    .then((response) => dispatch(fetchFoodsSuccess(response.food)))
    .catch((error) => {
      dispatch(fetchFoodsError(error));
    });
};
