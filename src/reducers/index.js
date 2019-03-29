const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, loading: true };
    case 'USERS_RECEIVED':
      return {
        ...state,
        users: action.json.data,
        per_page: action.json.per_page,
        page: action.json.page,
        total: action.json.total,
        total_pages: action.json.total_pages,
        loading: false
      }
    default:
      return state;
  }
};

export default reducer;