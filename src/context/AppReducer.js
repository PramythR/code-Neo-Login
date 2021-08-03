export default (state, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        users: [action.payload, ...state.regUsers],
      };
    case "LOGIN_USER":
      return {
        users: [action.payload, ...state.users],
      };

    default:
      return state;
  }
};
