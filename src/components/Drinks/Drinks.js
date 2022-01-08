import React from 'react';
import { connect } from 'react-redux';
import { fetchDrinkDetails, fetchDrinks } from '../../actions/drinks';
import './drinks.scss';

const Drinks = ({ drinks, drinkDetails, fetchDrinks, fetchDrinkDetails }) => {
  const [filterParam, setFilterParam] = React.useState('a=Alcoholic');
  const [drinksList, setDrinksList] = React.useState(drinks);
  const [showDrinkDetails, setShowDrinkDetails] = React.useState(false);

  React.useEffect(() => {
    fetchDrinks(filterParam);
  }, []);

  React.useEffect(() => {
    setDrinksList(drinks);
  }, [drinks]);

  const handleOnClick = (drinkName) => {
    fetchDrinkDetails(drinkName);
    setShowDrinkDetails(true);
  };

  const renderDrinksList = () => (
    <div className="drinks">
      {drinksList.map((drink) => (
        <div
          className="drink"
          key={drink.idDrink}
          onClick={() => handleOnClick(drink.strDrink)}
        >
          <div className="drink-img">
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
          </div>
          <div className="drink-name">
            <p>{drink.strDrink}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDrinkIngredients = (details) => {
    const ingredients = [];

    for (let i = 1; i < 16; i++) {
      if (details[`strIngredient${i}`] && details[`strMeasure${i}`]) {
        ingredients.push({
          ingredient: details[`strIngredient${i}`],
          measure: details[`strMeasure${i}`],
        });
      }
    }
    return ingredients.map((ingredient, key) => (
      <div className="ingredient" key={ingredient.ingredient}>
        <p>{ingredient.ingredient}:</p>
        <p>{ingredient.measure}</p>
      </div>
    ));
  };

  const renderDrinkDetails = () => (
    <div className="drink-details">
      <div className="left">
        <div className="drink">
          <div className="drink-img">
            <img src={drinkDetails.strDrinkThumb} alt={drinkDetails.strDrink} />
          </div>
          <div className="drink-name">
            <p>{drinkDetails.strDrink}</p>
          </div>
          <p className="back-to-drinks">Drinks list</p>
        </div>
      </div>
      <div className="right">
        <div className="details">
          <p>Category: {drinkDetails.strCategory}</p>
          <p>Type: {drinkDetails.strAlcoholic}</p>
          <p>Glass type: {drinkDetails.strGlass}</p>
          <p>Instructions: {drinkDetails.strInstructions}</p>
        </div>
        <div className="ingredients">
          {renderDrinkIngredients(drinkDetails)}
        </div>
      </div>
    </div>
  );

  return showDrinkDetails ? renderDrinkDetails() : renderDrinksList();
};

const mapStateToProps = (state) => ({
  drinks: state.drinks.drinksList,
  drinkDetails: state.drinks.drinkDetails,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDrinks: (filterParam) => dispatch(fetchDrinks(filterParam)),
  fetchDrinkDetails: (drinkName) => dispatch(fetchDrinkDetails(drinkName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
