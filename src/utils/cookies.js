import Cookies from "js-cookie";

export const getTokenFromCookie = () => {
  return Cookies.get("authToken");
};

export const deleteTokenFromCookie = () => {
  Cookies.remove("authToken");
};

export const saveTokenToCookie = (token, expiresInDays = 1) => {
    Cookies.set('authToken', token, { expires: expiresInDays, secure: true, sameSite: 'Strict' });
};