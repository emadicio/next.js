"use strict";exports.__esModule=true;exports.detectLocaleCookie=detectLocaleCookie;function detectLocaleCookie(req,locales){let detectedLocale;if(req.headers.cookie&&req.headers.cookie.includes('NEXT_LOCALE')){const{NEXT_LOCALE}=req.cookies;if(locales.some(locale=>NEXT_LOCALE===locale)){detectedLocale=NEXT_LOCALE;}}return detectedLocale;}
//# sourceMappingURL=detect-locale-cookie.js.map