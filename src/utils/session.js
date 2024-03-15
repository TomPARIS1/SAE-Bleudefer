export function createCookie(cookieName, cookieValue, expiresInDays) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expiresInDays);

    const expires = `expires=${expirationDate.toUTCString()}`;

    document.cookie = `${cookieName}=${cookieValue}; ${expires}; path=/`;
}

export function checkCookie(cookieName) {
    return document.cookie.split(';').some((item) => item.trim().startsWith(cookieName + '='));
}

export function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}