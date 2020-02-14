import React from 'react';
import styles from './Controls.css';
import Face from '../components/face/Face';
import { useDispatch, useSelector } from 'react-redux';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions.js';
import { getFace } from '../selectors/moodSelectors.js';

export default function Moods() {
  const state = useSelector(state => state);

  const face = getFace(state);

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
      <Face emoji={face} />
    </>
  );
}
