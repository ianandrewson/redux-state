import React from 'react';
import styles from './Controls.css';
import Face from '../components/face/Face';
import { useDispatch, useSelector } from 'react-redux';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions.js';

// export const isTired = state => state.coffees < 1 && state.naps < 1;
// export const isHyper = state => state.coffees > 3;
// export const isEducated = state => state.studies > 2;
// export const isHungry = state => state.snacks < 1;

// export const getFace = state => {
//   if(isTired(state) && isHungry(state)) return '🤬';
//   if(isHyper(state) && isHungry(state)) return '🤮';
//   if(isTired(state)) return '😴';
//   if(isHyper(state)) return '🙀';
//   if(isEducated(state)) return '🤯';
//   if(isHungry(state)) return '😡';

//   return '😀';
// };

export default function Moods() {
  const state = useSelector(state => state);

  // const face = getFace(state);

  const dispatch = useDispatch();
  const handleCoffee = () => dispatch(drinkCoffee());
  const handleSnack = () => dispatch(eatSnack());
  const handleNap = () => dispatch(takeNap());
  const handleStudy = () => dispatch(study());

  return (
    <>
      <div className={styles.Controls}>
        <button onClick={handleCoffee}>coffee - {state.coffees}</button>
        <button onClick={handleSnack}>snack - {state.snacks}</button>
        <button onClick={handleNap}>nap - {state.naps}</button>
        <button onClick={handleStudy}>study - {state.studies}</button>
      </div>
      {/* <Face emoji={face} /> */}
    </>
  );
}
