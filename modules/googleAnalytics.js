/* Google Analytics gtag snippet

Author: Jagan Ganti
Version: 1.0
Company: Kony Inc
License: MIT

Notes: Replace UA-XXXXXXX-X with your actual Google tracking id
at both the places in the below code snippet

The code snippet below works for SPA applications, i.e., our responsive websites only.
It tracks the hash changes out of the box, by listening to the hash change in the url
and firing a pageview event to Google Analytics.

*/

//#ifdef spaip
//#define CHANNEL_CONDITION__google_analytics_spaip_spaan_spawinphone8_spabb_desktopweb
//#endif
//#ifdef spaan
//#define CHANNEL_CONDITION__google_analytics_spaip_spaan_spawinphone8_spabb_desktopweb
//#endif
//#ifdef spawinphone8
//#define CHANNEL_CONDITION__google_analytics_spaip_spaan_spawinphone8_spabb_desktopweb
//#endif
//#ifdef spabb
//#define CHANNEL_CONDITION__google_analytics_spaip_spaan_spawinphone8_spabb_desktopweb
//#endif
//#ifdef desktopweb
//#define CHANNEL_CONDITION__google_analytics_spaip_spaan_spawinphone8_spabb_desktopweb
//#endif
//#ifdef CHANNEL_CONDITION__google_analytics_spaip_spaan_spawinphone8_spabb_desktopweb
//#endif
//#ifdef CHANNEL_CONDITION__google_analytics_spaip_spaan_spawinphone8_spabb_desktopweb
window.$ga||(function(d,s){var z=$ga=function(c){z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;
$.src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX-X";z.t=+new Date;$.
type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");


var insertGA = document.createElement("script");

insertGA.innerHTML = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config','UA-88758516-1', {'page_path': window.location.hash}); window.addEventListener('hashchange', function (event) { gtag('event', 'pageview', { 'page_path': window.location.hash});})";

document.head.appendChild(insertGA);
//#endif