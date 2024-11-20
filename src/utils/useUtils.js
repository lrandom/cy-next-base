import {cookies} from "next/headers";

export function useUtils() {
    function getCookieOnClient(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    async function getCookieOnServer(name) {
        const cookieStore = await cookies()
        return cookieStore.get(name).value;
    }

    async function getCookie(name) {
        if (typeof window === 'undefined') {
            console.log(name);
            return await getCookieOnServer(name)
        }
        return getCookieOnClient(name);
    }

    return {
        getCookieOnServer,
        getCookieOnClient,
        getCookie
    }
}