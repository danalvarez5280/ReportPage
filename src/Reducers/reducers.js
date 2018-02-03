export const selectUser = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_USER":
      return Object.assign({}, state, action.userInfo);

    default:
      return state;
  }
};
