import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions.js';
import moodReducer from './moodReducers.js';


describe('mood reducer tests', () => {
  it('can handle the DRINK_COFFEE action', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 0 };
    const newState = moodReducer(initialState, action);
    expect(newState).toEqual({ coffees: 1 });

    newState.snacks = 2;
    const secondState = moodReducer(newState, action);
    expect(secondState).toEqual({ coffees: 2, snacks: 2 });

  });

  it('can handle the EAT_SNACK action', () => {
    const action = eatSnack();
    const initialState = { snacks: 0 };
    const newState = moodReducer(initialState, action);
    expect(newState).toEqual({ snacks: 1 });

    newState.coffees = 3;
    const secondState = moodReducer(newState, action);
    expect(secondState).toEqual({ snacks: 2, coffees: 3 });
  });

  it('can handle the TAKE_NAP action', () => {
    const action = takeNap();
    const initialState = { naps: 0 };
    const newState = moodReducer(initialState, action);
    expect(newState).toEqual({ naps: 1 });

    newState.snacks = 4;
    const secondState = moodReducer(newState, action);
    expect(secondState).toEqual({ naps: 2, snacks: 4 });
  });

  it('can handle the STUDY action', () => {
    const action = study();
    const initialState = { studies: 0 };
    const newState = moodReducer(initialState, action);
    expect(newState).toEqual({ studies: 1 });

    newState.naps = 5;
    const secondState = moodReducer(newState, action);
    expect(secondState).toEqual({ studies: 2, naps: 5 });
  });

  it('can handle the default case method', () => {
    const action = { type: 'TAKE_VACATION' };
    const initialState = { naps: 2, snacks: 2};
    const newState = moodReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
