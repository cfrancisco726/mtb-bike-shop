(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[82],{"Vr/o":function(e,t,r){"use strict";r.r(t);var o=r("CH9N"),n=r("LHL8"),c=r("mstN"),a=r("ERkP"),i=r.n(a),l=r("8InP"),s=r("H+dX"),u=r("RC+L"),d=r("1tGQ"),p=r("lMkJ"),b=r("OaOK"),v=i.a.createElement;function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}t.default=function(){var e=Object(d.b)("pdp").t,t=Object(a.useRef)(!0),r=Object(a.useContext)(p.b)[0],i=r.availabilityStatus,f=r.id,O=r.selectedSku,j=r.selectedColor,y=r.selectedSize,P=r.hasCompleteData,k=r.selectedQuantity,w=r.warrantyOffer,C=r.fastEnabled,h=Object(a.useContext)(l.b).services.fastCheckout,_=Object(a.useContext)(u.D)[1].trackEvent,g=Object(b.a)("next_fast_revenue_tracking").next_fast_revenue_tracking,x=Object(u.G)({event:"promoImpression",ecommerce:{promoView:{promotions:[{id:"Fast PDP",name:"Fast Checkout",position:1,creative:"Fast PDP Placement"}]}}}),E=Object(c.a)(x,1)[0];Object(a.useEffect)((function(){function e(e){var r,o;switch(null===e||void 0===e||null===(r=e.detail)||void 0===r||null===(o=r.event)||void 0===o?void 0:o.name){case"Buy Now - Button Clicked":t.current&&(_({event:"promotionClick",ecommerce:{promoClick:{promotions:[{id:"Fast PDP",name:"Fast Checkout",position:1,creative:"Fast PDP Placement"}]}}}),t.current=!1);break;case"Checkout - Order Completed":var n,c,a,i,l,s;if(g)_({event:"thirdPartyEvent",eventCategory:"optimizely",eventAction:"purchase complete",eventLabel:null===(n=e.detail)||void 0===n||null===(c=n.event)||void 0===c||null===(a=c.properties)||void 0===a||null===(i=a.ecommerce)||void 0===i||null===(l=i.purchase)||void 0===l||null===(s=l.actionField)||void 0===s?void 0:s.revenue})}}return document.addEventListener("user_event",e),function(){document.removeEventListener("user_event",e)}}),[]);var D=C&&!("Backorderable"===i)&&!(null!==w&&void 0!==w&&w.plans.length)>0,F=P?!!j&&!!y:!(null===O||void 0===O||!O.length),L=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({app_id:h.appId,product_id:f,variant_id:O,quantity:k},!F&&{disabled:!0});return D?v(s.b,{mx:2},v("fast-checkout-button",Object(o.a)({ref:E},L)),v(s.b,{display:"flex",alignItems:"center",my:3},v(s.b,{as:"span",flexGrow:1,borderTop:"1px",borderColor:"border.decorative"}),v(s.w,{color:"txt.muted",mx:3},e("or")),v(s.b,{as:"span",flexGrow:1,borderTop:"1px",borderColor:"border.decorative"}))):null}}}]);