import { drinkCoffee, eatSnack, takeNap, study } from './moodActions.js';

describe('mood action tests', () => {
  it('can create DRINK_COFFEE action', () => {
    const action = drinkCoffee();
    expect(action).toEqual({ type: 'DRINK_COFFEE' });
  });

  it('can create EAT_SNACK action', () => {
    const action = eatSnack();
    expect(action).toEqual({ type: 'EAT_SNACK' });
  });

  it('can create TAKE_NAP action', () => {
    const action = takeNap();
    expect(action).toEqual({ type: 'TAKE_NAP' });
  });

  it('can create STUDY action', () => {
    const action = study();
    expect(action).toEqual({ type: 'STUDY' });
  });
});
