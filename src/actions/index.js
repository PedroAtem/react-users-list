export const getUsers = (per_page = 5, page = 1) => ({
  type: 'GET_USERS',
  per_page,
  page
});
  