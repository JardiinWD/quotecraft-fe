import { useEffect } from 'react';
import { setCookie } from 'nookies';

const useNavigatorLanguage = () => {
    useEffect(() => {
        // Define and GET the navigator Locale
        const navigatorLocale = navigator && navigator.language.split('-')[0] !== undefined && navigator.language.split('-')[1] !== undefined ? navigator.language.split('-')[0] : 'en';
        // Define and GET the Country Code
        const countryCode = navigator && navigator.language.split('-')[1] !== undefined ? navigator.language.split('-')[1] : 'US';
        // Set NAVIGATOR-LOCALE as a cookie
        setCookie(null, 'NAVIGATOR-LOCALE', navigatorLocale, { path: '/' });
        // Set NAVIGATOR-COUNTRY-CODE as a cookie
        setCookie(null, 'NAVIGATOR-COUNTRY-CODE', countryCode, { path: '/' });
    }, []);
};

export default useNavigatorLanguage;
