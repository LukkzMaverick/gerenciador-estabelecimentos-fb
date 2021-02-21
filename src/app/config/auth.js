const TOKEN_KEY = "gerenciador-de-estabelecimentos";
const getToken = () => {
  const data = JSON.parse(localStorage.getItem(TOKEN_KEY));
  if (data && data.token) {
    return data.token;
  }
  return false;
};
const getUser = () => {
  const data = JSON.parse(localStorage.getItem(TOKEN_KEY));
  if (data && data.user) {
    return data.user;
  }
  return false;
};

const saveLocalStorage = (data) =>
  localStorage.setItem(TOKEN_KEY, JSON.stringify(data));

const removeToken = () => localStorage.removeItem(TOKEN_KEY);

const isAuthenticated = () => {
  return getToken() !== false;
};

export { isAuthenticated, getToken, getUser, saveLocalStorage, removeToken };
