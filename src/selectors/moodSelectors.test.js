import { isTired, isHyper, isEducated, isHungry, getFace } from './moodSelectors.js';

describe('mood selector tests', () => {
  it('isTired: coffees < 1 && naps > 0', () => {
    const state = {};
    expect(isTired(state)).toBeFalsy();

    state.coffees = 0;
    state.naps = 1;
    expect(isTired(state)).toBeTruthy();
  });

  it('isHyper if coffees > 3', () => {
    const state = {};
    expect(isHyper(state)).toBeFalsy();

    state.coffees = 3;
    expect(isHyper(state)).toByTruthy();
  });

  it('isEducated if studies > 2', () => {
    const state = {};
    expect(isEducated(state)).toBeFalsy();

    state.studies = 3;
    expect(isEducated(state)).toBeTruthy();
  });

  it('isHungry if snacks < 1', () => {
    const state = {};
    expect(isHungry(state)).toBeFalsy();

    state.snacks = 0;
    expect(isHungry(state)).toBeTruthy();
  });

  it('returns a censored face if tired and hungry', () => {
    const state = { coffee: 0, naps: 0, studies: 0, snacks: 0 };
    expect(getFace(state)).toEqual('🤬');
  });

  it('returns a sick face if hyper and hungry', () => {
    const state = { coffees: 4, snacks: 0, naps: 0, studies: 0 };
    expect(getFace(state)).toEqual('🤮');
  });

  it('returns a sleepy face if tired', () => {
    const state = { snacks: 1, naps: 1 };
    expect(getFace(state)).toEqual('😴');
  });

  it('returns a hyper cat if hyper', () => {
    const state = { snacks: 1, coffees: 4 };
    expect(getFace(state)).toEqual('🙀');
  });

  it('returns a mind blown face if educated', () => {
    const state = { coffees: 1, snacks: 1, naps: 1, studies: 3 };
    expect(getFace(state)).toEqual('🤯');
  });

  it('returns an angry face if hungry', () => {
    const state = { coffees: 1, naps: 1, snacks: 0 };
    expect(getFace(state)).toEqual('😡');
  });

  it('returns a happy face if not tired, hungry, hyper, or educated', () => {
    const state = { coffees: 1, naps: 1, snacks: 1, studies: 1 };
    expect(getFace(state)).toEqual('😀');
  });
});
