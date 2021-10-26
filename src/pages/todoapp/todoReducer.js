export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    case 'delete':
      const newState = state.slice()
      newState.splice(action.payload, 1)
      return newState;

    case 'toggle':
      const value = state[action.payload].done
      state[action.payload].done = !value
      return state;

    default:
      return state;
  }
};
