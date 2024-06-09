type CookiesProps = { [key: string]: string };

export const getCookie = (name: string): string => {
  const cookies: CookiesProps = document.cookie
    .split(';')
    .reduce((acc: CookiesProps, cookie: string) => {
      const [key, value] = cookie.trim().split('=');
      return { ...acc, [key]: value };
    }, {});
  return cookies[name] || '';
};

export const setCookie = (
  name: string,
  value: string,
) => {
  document.cookie =`${name}=${value};path=/;`;
};

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=;path=/;Max-Age=-99999999;`;
};
