import { siteConfig } from "@/site.config";

/**
 * Cookie consent for Google Analytics (gtag.js).
 *
 * How it works:
 * 1. A small script in <head> runs before the page is shown. It sets Google
 *    Consent Mode defaults to "denied" and reads the visitor's saved choice.
 * 2. Google Analytics is only loaded once the visitor has accepted. If they
 *    reject, or haven't chosen yet, nothing is loaded from Google at all.
 * 3. The choice is saved in this browser (localStorage) for 12 months, then
 *    the banner asks again. Raising CONSENT_VERSION asks everyone again, for
 *    example if the banner wording changes or advertising tags are added.
 * 4. "Cookie settings" in the footer reopens the banner at any time.
 *
 * Saving the choice itself needs no consent: it is strictly necessary to
 * remember what the visitor decided.
 */

export const CONSENT_STORAGE_KEY = "mfp-cookie-consent";
export const CONSENT_VERSION = 1;
export const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

/** Events the banner and footer button use to talk to each other. */
export const OPEN_CONSENT_EVENT = "mfp:open-cookie-settings";

export function analyticsEnabled() {
  return Boolean(siteConfig.analytics.ga4Id);
}

/**
 * The script that runs first in <head>. Kept as a plain string so it runs
 * before React, with no flash of the banner for people who have already chosen.
 */
export function consentHeadScript() {
  const id = JSON.stringify(siteConfig.analytics.ga4Id);
  return `(function(){
var w=window,d=document;
w.dataLayer=w.dataLayer||[];
function gtag(){w.dataLayer.push(arguments);}
w.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied',security_storage:'granted'});
gtag('set','ads_data_redaction',true);
w.__mfpLoadGa=function(){
  if(w.__mfpGaLoaded)return;
  w.__mfpGaLoaded=true;
  gtag('js',new Date());
  gtag('config',${id});
  var s=d.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+${id};
  d.head.appendChild(s);
};
var state='unset';
try{
  var raw=localStorage.getItem(${JSON.stringify(CONSENT_STORAGE_KEY)});
  if(raw){var c=JSON.parse(raw);
    if(c&&c.v===${CONSENT_VERSION}&&typeof c.t==='number'&&Date.now()-c.t<${CONSENT_MAX_AGE_MS}){state=c.analytics==='granted'?'granted':'denied';}}
}catch(e){}
d.documentElement.setAttribute('data-consent',state);
if(state==='granted'){gtag('consent','update',{analytics_storage:'granted'});w.__mfpLoadGa();}
})();`;
}
