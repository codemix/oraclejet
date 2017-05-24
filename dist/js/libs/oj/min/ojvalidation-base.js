/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojL10n!ojtranslations/nls/localeElements","ojs/ojmessaging"],function(a,g,c){a.ob={};o_("LocaleData",a.ob,a);a.ob.g5=function(b){a.ob.SV=b};o_("LocaleData.setBundle",a.ob.g5,a);a.ob.FQ=function(){return a.ob.XY("firstDay")};o_("LocaleData.getFirstDayOfWeek",a.ob.FQ,a);a.ob.bRa=function(){return a.ob.XY("weekendStart")};o_("LocaleData.getWeekendStart",a.ob.bRa,a);a.ob.aRa=function(){return a.ob.XY("weekendEnd")};o_("LocaleData.getWeekendEnd",a.ob.aRa,a);a.ob.FI=function(b){if(null==
b||"abbreviated"!==b&&"narrow"!==b)b="wide";b=a.ob.SX().days["stand-alone"][b];return[b.sun,b.mon,b.tue,b.wed,b.thu,b.fri,b.sat]};o_("LocaleData.getDayNames",a.ob.FI,a);a.ob.JI=function(b){if(null==b||"abbreviated"!==b&&"narrow"!==b)b="wide";b=a.ob.SX().months["stand-alone"][b];return[b["1"],b["2"],b["3"],b["4"],b["5"],b["6"],b["7"],b["8"],b["9"],b["10"],b["11"],b["12"]]};o_("LocaleData.getMonthNames",a.ob.JI,a);a.ob.Loa=function(){var b=a.ob.SX().dateFormats["long"].toUpperCase(),c=b.indexOf("M"),
b=b.indexOf("Y");return c<b};o_("LocaleData.isMonthPriorToYear",a.ob.Loa,a);a.ob.XY=function(b){var c=a.ob.Tl(),f=a.ob.pDa()||"001";b=c.supplemental.weekData[b];f=b[f];void 0===f&&(f=b["001"]);return f};a.ob.SX=function(){var b=a.ob.Tl().main,c,f;for(f in b)if(b.hasOwnProperty(f)){c=b[f];break}return c.dates.calendars.gregorian};a.ob.pDa=function(){var b=a.oa.fj();if(b&&(b=b.toUpperCase().split(/-|_/),2<=b.length)){var c=b[1];if(4==c.length){if(3<=b.length)return b[2]}else return c}return null};a.ob.Tl=
function(){var b=a.ob.SV;return b?b:a.PA()?(a.A.assert(void 0!==c,"LocaleElements module must be loaded"),c):{}};a.ob.xwa=function(a){c=a};a.N={};a.N.nr={latn:"0123456789",arab:"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669",thai:"\u0e50\u0e51\u0e52\u0e53\u0e54\u0e55\u0e56\u0e57\u0e58\u0e59"};a.N.wTa=/^\s+|\s+$|\u200f|\u200e/g;a.N.xTa=/\s+|\u200f|\u200e/g;a.N.yTa=/0+$/g;a.N.eVa=["0","00","000"];a.N.mU=/^\d{4}(?:-?\d{2}(?:-?\d{2})?)?(?:T\d{2}:?\d{2}(?::?\d{2}(?:\.\d{1,3})?)?(Z|[+-]\d{2}:\d{2})?)?$|^T\d{2}:?\d{2}(?::?\d{2}(?:\.\d{1,3})?)?(Z|[+-]\d{2}:\d{2})?$/;
a.N.JQ=function(){return a.N.hD("Etc/GMT",(new Date).getTimezoneOffset(),!1,!1)};a.N.xea=function(b){if(!b||"string"!==typeof b)return null;var c=a.N.mU.exec(b);null===c&&a.N.Pka(b);return void 0!==c[1]?c[1]:null};a.N.xe=function(b){var c=a.N.Mc(b.getFullYear(),4)+"-"+a.N.Mc(b.getMonth()+1,2)+"-"+a.N.Mc(b.getDate(),2)+"T"+a.N.Mc(b.getHours(),2)+":"+a.N.Mc(b.getMinutes(),2)+":"+a.N.Mc(b.getSeconds(),2);0<b.getMilliseconds()&&(c+="."+a.N.wS(a.N.Mc(b.getMilliseconds(),3)));return c};a.N.iTa=function(b){var c=
a.N.Mc(b[0],4)+"-"+a.N.Mc(b[1],2)+"-"+a.N.Mc(b[2],2)+"T"+a.N.Mc(b[3],2)+":"+a.N.Mc(b[4],2)+":"+a.N.Mc(b[5],2);0<b[6]&&(c+="."+a.N.wS(a.N.Mc(b[6],3)));return c};a.N.mt=function(a){return a&&"string"===typeof a?this.KHa(a):null};a.N.KHa=function(b){b=a.N.Xw(b);return new Date(b[0],b[1]-1,b[2],b[3],b[4],b[5],b[6])};a.N.Xw=function(b){var c=b.split("T"),f=b.indexOf("T");b=new Date;var h=[b.getFullYear(),b.getMonth()+1,b.getDate(),0,0,0,0];if(""!==c[0]){var k=c[0].split("-");for(b=0;b<k.length;b++)h[b]=
parseInt(k[b],10)}if(-1!==f){c=c[1].split(".");f=c[0].split(":");for(b=0;b<f.length;b++)h[3+b]=parseInt(f[b],10);2===c.length&&c[1]&&(h[6]=parseInt(a.N.I5(c[1],3,!1),10))}return h};a.N.ZC=function(b){var c={format:null,dateTime:null,timeZone:"",isoStrParts:null},f=a.N.mU.exec(b);null===f&&a.N.Pka(b);if(void 0===f[1]&&void 0===f[2])return c.format="local",c.dateTime=b,c.isoStrParts=a.N.Xw(c.dateTime),c;c.timeZone=void 0!==f[1]?f[1]:f[2];c.format="Z"===c.timeZone?"zulu":"offset";c.dateTime=b.substring(0,
b.indexOf(c.timeZone));c.isoStrParts=a.N.Xw(c.dateTime);return c};a.N.AWa=function(){var a;a=Error("time zone is not supported");a.errorInfo={errorCode:"timeZoneNotSupported"};throw a;};a.N.Pka=function(a){var b;b=Error("The string "+a+" is not a valid ISO 8601 string.");b.errorInfo={errorCode:"invalidISOString",parameterMap:{isoStr:a}};throw b;};a.N.trim=function(b){return(b+"").replace(a.N.wTa,"")};a.N.wS=function(b){return(b+"").replace(a.N.yTa,"")};a.N.vr=function(b){return(b+"").replace(a.N.xTa,
"")};a.N.Nz=function(a,b){return 0===a.indexOf(b)};a.N.fk=function(a){return a.split("\u00a0").join(" ").toUpperCase()};a.N.Mc=function(b,c){var f;f=b+"";return 1<c&&f.length<c?(f=a.N.eVa[c-2]+f,f.substr(f.length-c,c)):f};a.N.I5=function(a,b,c){a=""+a;var h;for(h=a.length;h<b;h+=1)a=c?"0"+a:a+"0";return a};a.N.hD=function(b,c,f,h){f=f?0<=c:0>c;c=Math.abs(c);var k=c/60<<0;c%=60;h&&(k=a.N.I5(k,2,!0));b=b+(f?"-":"+")+k;if(0<c||h)b+=":"+a.N.I5(c,2,!0);return b};a.N.BQa=function(b,c){if(void 0===c)return"latn";
var f=a.N.KQ(c);void 0===b.numbers["symbols-numberSystem-"+f]&&(f="latn");return f};a.N.UWa=function(a){return a.split("-")[0]};a.N.Qma=function(a){a=a.split("-");return 3===a.length?a[2]:2===a.length&&2===a[1].length?a[1]:"001"};a.N.KQ=function(a){a=a||"en-US";var b=a.indexOf("-u-nu-"),c="latn";-1!==b&&(c=a.substr(b+6,4));return c};a.N.WWa=function(a){var b=0,c;for(c in a)b++;return b};a.N.lh=function(a){a=a.main;var b,c;for(c in a){b=c;break}return a[b]};a.N.Gv=function(a){a=a.main;var b,c;for(c in a){b=
c;break}return b};a.N.rNa=function(a){if("string"===typeof a)switch(a.toLowerCase().trim()){case "true":case "1":return!0;case "false":case "0":return!1}return a};a.N.ri=function(b,c){if(void 0===b)throw Error("Internal "+c+" error. Default options missing.");return function(f,h,k,g){if(void 0!==b[f]){g=b[f];switch(h){case "boolean":g=a.N.rNa(g);break;case "string":g=String(g);break;case "number":g=Number(g);break;default:throw Error("Internal error. Wrong value type.");}if(void 0!==k&&-1===k.indexOf(g)){h=
[];for(g=0;g<k.length;g++)h.push(k[g]);k=new RangeError("The value '"+b[f]+"' is out of range for '"+c+"' options property '"+f+"'. Valid values: "+h);k.errorInfo={errorCode:"optionOutOfRange",parameterMap:{propertyName:f,propertyValue:b[f],propertyValueValid:h,caller:c}};throw k;}}return g}};a.N.cXa=function(b,c,f,h){void 0===h&&(h={fUa:"base",wXa:"sort"});var k=a.N.ri(h,"oj.OraI18nUtils.matchString");h.usage=k("usage","string",["sort","search"],"sort");h.sensitivity=k("sensitivity","string",["base",
"accent","case","variant"],"base");for(var g,m=b.length,p=c.length-1,k=0;k<m;k++)for(g=0;3>g;g++){var t=m-k,t=Math.min(t,p+g);if(0===b.substr(k,t).localeCompare(c,f,h))return[k,k+t-1]}return null};var b={fullYear:{ak:0,gw:4},month:{ak:1,gw:2},date:{ak:2,gw:2},hours:{ak:3,gw:2},minutes:{ak:4,gw:2},seconds:{ak:5,gw:2},milliseconds:{ak:6,gw:3},timeZone:{ak:7}};a.N.kR=function(a){return new Date(this._normalizeIsoString(a))};a.N._copyTimeOver=function(a,b){if(!a||!b)throw Error("Provided invalid arguments");
b=this._normalizeIsoString(b);var c=a.indexOf("T"),h=b.indexOf("T");return b.substring(0,h)+(-1!==c?a.substring(c):"T00:00:00.000")};a.N._clearTime=function(a){return this._dateTime(a,{hours:0,minutes:0,seconds:0,milliseconds:0})};a.N._dateTime=function(a,c,f){if(!a||!c)throw Error("Invalid argument invocation");var h,k=null,l=null,l=this.Mc;a=this._normalizeIsoString(a);var m=/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):?(\d{2})?\.?(\d{3})?(.*)?/.exec(a);if(!m)throw Error("Unable to capture anything");
m=m.slice(1);if(Array.isArray(c))for(var k={},p=0,t=c.length;p<t;p++){if(l=c[p],l in b){a=b[l].ak;h=m[a];if(f&&"timeZone"===l)throw Error("Dude you tried to ask timezone to be parsed");f?(h=parseInt(h,10),k[l]=1===a?h-1:h):k[l]=h}}else if(g.isPlainObject(c)){for(p in c)f=b[p],a=f.ak,h=c[p],1===a&&"number"===typeof h&&h++,m[a]=f.gw?l(h,f.gw):h;k=m[0]+"-"+m[1]+"-"+m[2]+"T"+m[3]+":"+m[4]+":"+m[5]+(6<m.length&&m[6]?"."+m[6]+(8===m.length&&m[7]?m[7]:""):"")}return k};a.N._normalizeIsoString=function(a){if(!a)throw Error("Provided invalid arguments");
var b=(new Date).toISOString(),b=b.substring(0,b.indexOf("T")),c=a.indexOf("T"),h=-1===c?a:a.substring(0,c);-1!==c?(a=a.substring(c),a=1<a.split(":").length?a:a+":00"):a="T00:00:00.000";return(h||b)+a};a.La={};o_("Validation",a.La,a);a.La.GW={};a.La.h2={};a.La.zba={};a.La.Bba={};a.La.NK={converter:{name:"oj.ConverterFactory",type:a.Rh},validator:{name:"oj.ValidatorFactory",type:a.Df}};a.La.$k=function(b,c){var f;b&&!c?f=a.La.kN(b,a.La.GW):b&&c&&(f=a.La.dC(b,c,a.La.GW,a.La.NK.converter));return f};
o_("Validation.converterFactory",a.La.$k,a);a.La.Rz=function(b,c){var f;b&&!c?f=a.La.kN(b,a.La.h2):b&&c&&(f=a.La.dC(b,c,a.La.h2,a.La.NK.validator));return f};o_("Validation.validatorFactory",a.La.Rz,a);a.La.cna=function(b){return a.La.kN(b,a.La.zba)};o_("Validation.getDefaultConverterFactory",a.La.cna,a);a.La.oQa=function(b){return a.La.kN(b,a.La.Bba)};o_("Validation.getDefaultValidatorFactory",a.La.oQa,a);a.La.tV=function(b,c){var f=a.La.NK.converter;a.La.dC(b,c,a.La.zba,f);a.La.dC(b,c,a.La.GW,f)};
a.La.QA=function(b,c){var f=a.La.NK.validator;a.La.dC(b,c,a.La.Bba,f);a.La.dC(b,c,a.La.h2,f)};a.La.AAa=function(b,c,f){if(c&&!a.La.LJa(b,c))throw Error("Factory instance does not implement the methods expected by the factory of type "+f);};a.La.kN=function(b,c){a.A.Us(b);var f=null;b&&(b=b.toLowerCase(),f=(c[b]||{}).instance||null);return f};a.La.LJa=function(b,c){var f=!0,h;a.A.Yi(b);a.A.Yi(c);for(h in c)if(c.hasOwnProperty(h)&&"function"===typeof c[h]&&!b[h]&&"function"!==typeof b[h]){f=!1;break}return f};
a.La.dC=function(b,c,f,h){a.A.Us(b);a.A.Yi(c);if(b){var k={};k.instance=c;a.La.AAa(c,h.type,h.name);f[b.toLowerCase()]=k}};a.Rh={CONVERTER_TYPE_NUMBER:"number",CONVERTER_TYPE_DATETIME:"datetime",CONVERTER_TYPE_COLOR:"color",createConverter:function(){}};o_("ConverterFactory",a.Rh,a);a.Df={VALIDATOR_TYPE_REQUIRED:"required",VALIDATOR_TYPE_REGEXP:"regexp",VALIDATOR_TYPE_NUMBERRANGE:"numberRange",VALIDATOR_TYPE_LENGTH:"length",VALIDATOR_TYPE_DATETIMERANGE:"dateTimeRange",VALIDATOR_TYPE_DATERESTRICTION:"dateRestriction",
createValidator:function(){}};o_("ValidatorFactory",a.Df,a);a.ul=function(a){this.Init(a)};o_("Converter",a.ul,a);a.f.xa(a.ul,a.f,"oj.Converter");a.ul.prototype.Init=function(b){a.ul.O.Init.call(this);this.nc=b};a.f.j("Converter.prototype.Init",{Init:a.ul.prototype.Init});a.ul.prototype.dl=function(){return this.nc||{}};a.f.j("Converter.prototype.getOptions",{dl:a.ul.prototype.dl});a.ul.prototype.resolvedOptions=function(){var a={};g.extend(a,this.nc);return a};a.f.j("Converter.prototype.resolvedOptions",
{resolvedOptions:a.ul.prototype.resolvedOptions});a.Vf=function(b,c){var f=new a.ta(b,c,a.ta.rd.ERROR);this.Init(f)};o_("ConverterError",a.Vf,a);a.Vf.prototype=Error();a.Vf.prototype.Init=function(a){var b=a.detail,c=a.summary;this.VB=a;this.name="Converter Error";this.message=b||c};a.f.j("ConverterError.prototype.Init",{Init:a.Vf.prototype.Init});a.Vf.prototype.aD=function(){return this.VB};a.f.j("ConverterError.prototype.getMessage",{aD:a.Vf.prototype.aD});a.io=function(){this.Init()};o_("Validator",
a.io,a);a.f.xa(a.io,a.f,"oj.Validator");a.io.prototype.Init=function(){a.io.O.Init.call(this)};a.f.j("Validator.prototype.Init",{Init:a.io.prototype.Init});a.Il=function(b,c){var f=new a.ta(b,c,a.ta.rd.ERROR);this.Init(f)};o_("ValidatorError",a.Il,a);a.Il.prototype=Error();a.Il.prototype.Init=function(a){var b=a.detail,c=a.summary;this.VB=a;this.name="Validator Error";this.message=b||c};a.f.j("ValidatorError.prototype.Init",{Init:a.Il.prototype.Init});a.Il.prototype.aD=function(){return this.VB};
a.f.j("ValidatorError.prototype.getMessage",{aD:a.Il.prototype.aD});a.yj=function(a){this.Init(a)};o_("RequiredValidator",a.yj,a);a.f.xa(a.yj,a.io,"oj.RequiredValidator");a.yj.UT="oj-validator.required.detail";a.yj.VT="oj-validator.required.summary";a.yj.prototype.Init=function(b){a.yj.O.Init.call(this);this.nc=b};a.yj.prototype.validate=function(b){var c,f="",h,k={};if("number"===typeof b&&0===b||b&&0!==b.length)return!0;this.nc&&(c=this.nc.messageDetail||this.nc.message||null,h=this.nc.messageSummary||
null,f=this.nc.label||"");k={label:f};b=h?a.ya.Rc(h,k):a.ya.R(this.OY(),k);c=c?a.ya.Rc(c,k):a.ya.R(this.$X(),k);throw new a.Il(b,c);};a.f.j("RequiredValidator.prototype.validate",{validate:a.yj.prototype.validate});a.yj.prototype.Oe=function(){var b="";this.nc&&this.nc.hint&&(b=a.ya.R(this.nc.hint));return b};a.f.j("RequiredValidator.prototype.getHint",{Oe:a.yj.prototype.Oe});a.yj.prototype.OY=function(){return a.yj.VT};a.yj.prototype.$X=function(){return a.yj.UT};(function(){function b(a,c){var d=
a.zu,e=a.ju,d=[f(Math.round(a.fv).toString(16)),f(Math.round(d).toString(16)),f(Math.round(e).toString(16))];return c&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0):d.join("")}function c(a){var b=a;"string"==typeof b&&-1!=b.indexOf(".")&&1===parseFloat(b)&&(a="100%");b="string"===typeof a&&-1!=a.indexOf("%");a=Math.min(255,Math.max(0,parseFloat(a)));b&&(a=parseInt(255*a,10)/100);return 1E-6>Math.abs(a-255)?
1:a%255/255}function f(a){return 1==a.length?"0"+a:""+a}a.Ph=function(a){this.Init(a)};o_("ColorConverter",a.Ph,a);a.f.xa(a.Ph,a.ul,"oj.ColorConverter");a.Ph.prototype.Init=function(b){b=b||{};b.format=b.format||"rgb";a.Ph.O.Init.call(this,b)};a.f.j("ColorConverter.prototype.Init",{Init:a.Ph.prototype.Init});a.Ph.prototype.format=function(h){var f=this.hY(),g=null;if("rgb"===f)g=h.toString();else if("hsl"===f){var f=h.fv,g=h.zu,m=h.ju,f=c(f),g=c(g),m=c(m),p=Math.max(f,g,m),t=Math.min(f,g,m),s,n=(p+
t)/2;if(p==t)s=t=0;else{var r=p-t,t=.5<n?r/(2-p-t):r/(p+t);switch(p){case f:s=(g-m)/r+(g<m?6:0);break;case g:s=(m-f)/r+2;break;case m:s=(f-g)/r+4}s/=6}s=Math.round(360*s);f=Math.round(100*t);n=Math.round(100*n);g=1==h.Vr?"hsl("+s+", "+f+"%, "+n+"%)":"hsla("+s+", "+f+"%, "+n+"%, "+h.Vr+")"}else if("hex"===f)g="#"+b(h,void 0);else if("hex3"===f)g="#"+b(h,!0);else if("hsv"===f){g=h.fv;m=h.zu;p=h.ju;g=c(g);m=c(m);p=c(p);s=Math.max(g,m,p);t=Math.min(g,m,p);f=s-t;if(s==t)n=0;else{switch(s){case g:n=(m-
p)/f+(m<p?6:0);break;case m:n=(p-g)/f+2;break;case p:n=(g-m)/f+4}n/=6}n=Math.round(360*n);f=Math.round(100*(0===s?0:f/s));s=Math.round(100*s);g=1==h.Vr?"hsv("+n+", "+f+"%, "+s+"%)":"hsva("+n+", "+f+"%, "+s+"%, "+h.Vr+")"}else throw new a.Vf("Invalid color format","Invalid color format option specification");return g?g:a.Ph.O.format.call(this,h)};a.f.j("ColorConverter.prototype.format",{format:a.Ph.prototype.format});a.Ph.prototype.parse=function(b){try{return new a.o(b)}catch(c){throw new a.Vf("Invalid color specification",
"Color specification does not conform to CSS3 standard");}};a.f.j("ColorConverter.prototype.parse",{parse:a.Ph.prototype.parse});a.Ph.prototype.Oe=function(){return this.hY()};a.f.j("ColorConverter.prototype.getHint",{Oe:a.Ph.prototype.Oe});a.Ph.prototype.resolvedOptions=function(){return{format:this.hY()}};a.f.j("ColorConverter.prototype.resolvedOptions",{resolvedOptions:a.Ph.prototype.resolvedOptions});a.Ph.prototype.hY=function(){return a.Ph.O.dl.call(this).format}})();a.Zra=function(){return{createConverter:function(b){return new a.Ph(b)}}}();
a.La.tV(a.Rh.CONVERTER_TYPE_COLOR,a.Zra);a.Tsa=function(){return{createValidator:function(b){return new a.yj(b)}}}();a.La.QA(a.Df.VALIDATOR_TYPE_REQUIRED,a.Tsa);a.Ssa=function(){return{createValidator:function(b){return new a.xj(b)}}}();a.La.QA(a.Df.VALIDATOR_TYPE_REGEXP,a.Ssa);a.wsa=function(){return{createValidator:function(b){return new a.Al(b)}}}();a.La.QA(a.Df.VALIDATOR_TYPE_LENGTH,a.wsa);a.xj=function(a){this.Init(a)};o_("RegExpValidator",a.xj,a);a.f.xa(a.xj,a.io,"oj.RegExpValidator");a.xj.UT=
"oj-validator.regExp.detail";a.xj.VT="oj-validator.regExp.summary";a.xj.prototype.Init=function(b){a.xj.O.Init.call(this);this.nc=b};a.xj.prototype.validate=function(b){var c,f,h=this.nc&&this.nc.pattern||"",k;if(null===b||void 0===b||""===b)return!0;b=b||0===b?b.toString():b;var g;g=b.match("^("+h+")$");if(null===g||g[0]!==b)throw this.nc&&(k=this.nc.messageSummary||null,c=this.nc.messageDetail||null,f=this.nc&&this.nc.label||""),b={label:f,pattern:h,value:b},k=k?a.ya.Rc(k,b):a.ya.R(this.OY(),b),
c=c?a.ya.Rc(c,b):a.ya.R(this.$X(),b),new a.Il(k,c);return!0};a.f.j("RegExpValidator.prototype.validate",{validate:a.xj.prototype.validate});a.xj.prototype.Oe=function(){var b=null,c={};this.nc&&this.nc.hint&&(c={pattern:this.nc.pattern},b=a.ya.Rc(this.nc.hint,c));return b};a.f.j("RegExpValidator.prototype.getHint",{Oe:a.xj.prototype.Oe});a.xj.prototype.OY=function(){return a.xj.VT};a.xj.prototype.$X=function(){return a.xj.UT};a.Ua={};o_("IntlConverterUtils",a.Ua,a);a.Ua.kR=function(b){return a.N.kR(b)};
o_("IntlConverterUtils.isoToDate",a.Ua.kR,a);a.Ua.mt=function(b){return a.N.mt(b)};o_("IntlConverterUtils.isoToLocalDate",a.Ua.mt,a);a.Ua.xe=function(b){return a.N.xe(b)};o_("IntlConverterUtils.dateToLocalIso",a.Ua.xe,a);a.Ua.xea=function(b){return a.N.xea(b)};a.Ua.JQ=function(){return a.N.JQ()};o_("IntlConverterUtils.getLocalTimeZoneOffset",a.Ua.JQ,a);a.Ua.EI=function(b){var c="",f={},h=null;b&&("object"===typeof b&&(b instanceof a.ul||b.parse&&"function"===typeof b.parse||b.format&&"function"===
typeof b.format?h=b:(c=b.type,f=b.options||{})),h||(c=c||b)&&"string"===typeof c&&(b=a.La.$k(c),h=b.createConverter(f)));return h};o_("IntlConverterUtils.getConverterInstance",a.Ua.EI,a);a.Ua.ny=function(a,b){if(a){b=b||this.xe(new Date);var c=b.indexOf("T");0===a.indexOf("T")&&0<c&&(a=b.substring(0,c)+a)}return a};o_("IntlConverterUtils._minMaxIsoString",a.Ua.ny,a);a.Ua.OA=function(b,c){a.A.Yi(c);var f="",h="",k=c.propertyName,g;"optionTypesMismatch"===b?(h=c.requiredPropertyName,g=c.requiredPropertyValueValid,
f=a.ya.R("oj-converter.optionTypesMismatch.summary",{propertyName:k,propertyValue:c.propertyValue,requiredPropertyName:h}),h=a.Ua.tN(h,g)):"optionTypeInvalid"===b?(k=c.propertyName,g=c.propertyValueValid,f=a.ya.R("oj-converter.optionTypeInvalid.summary",{propertyName:k}),h=a.Ua.tN(k,g)):"optionOutOfRange"===b?(f=a.ya.R("oj-converter.optionOutOfRange.summary",{propertyName:k,propertyValue:c.propertyValue}),g=c.propertyValueValid,h=a.Ua.tN(k,g)):"optionValueInvalid"===b&&(f=a.ya.R("oj-converter.optionValueInvalid.summary",
{propertyName:k,propertyValue:c.propertyValue}),g=c.propertyValueHint,h=a.Ua.tN(k,g));return new a.Vf(f,h)};a.Ua.tN=function(b,c){var f;return c?("string"===typeof c?f="oj-converter.optionHint.detail":(f="oj-converter.optionHint.detail-plural",c=c.join(a.ya.R("oj-converter.plural-separator"))),a.ya.R(f,{propertyName:b,propertyValueValid:c})):""};a.Ua.GVa=function(){return""};a.Ua._copyTimeOver=function(b,c){return a.N._copyTimeOver(b,c)};a.Ua._clearTime=function(b){return a.N._clearTime(b)};a.Ua._dateTime=
function(b,c,f){return a.N._dateTime(b,c,f)};a.Ua._normalizeIsoString=function(b){return a.N._normalizeIsoString(b)};a.Al=function(a){this.Init(a)};o_("LengthValidator",a.Al,a);a.Al.td={countBy:"codeUnit"};o_("LengthValidator.defaults",a.Al.td,a);a.f.xa(a.Al,a.io,"oj.LengthValidator");a.Al.prototype.Init=function(b){var c=b.countBy;a.Al.O.Init.call(this);this.Hj=void 0!==b.min?parseInt(b.min,10):null;this.Lk=void 0!==b.max?parseInt(b.max,10):null;if(isNaN(this.Hj))throw Error("length validator's min option is not a number. min option is "+
b.min);if(isNaN(this.Lk))throw Error("length validator's max option is not a number. max option is "+b.min);if(null!==this.Hj&&0>this.Hj)throw Error("length validator's min option cannot be less than 0. min option is "+b.min);if(null!==this.Lk&&1>this.Lk)throw Error("length validator's max option cannot be less than 1. max option is "+b.max);this.dza=void 0===c?a.Al.td.countBy:c;b&&(this.xG=b.hint||{},this.JF=b.messageSummary||{},this.IF=b.messageDetail||{})};a.Al.prototype.Oe=function(){var b=null,
c=this.xG,f=c.exact,h=c.inRange,k=c.max,c=c.min,g=this.Lk,m=this.Hj,p=a.ya;null!==m&&null!==g?m!==g?(b={min:m,max:g},b=h?p.Rc(h,b):p.R("oj-validator.length.hint.inRange",b)):(b={length:m},b=f?p.Rc(f,b):p.R("oj-validator.length.hint.exact",b)):null!==m?(b={min:m},b=c?p.Rc(c,b):p.R("oj-validator.length.hint.min",b)):null!==g&&(b={max:g},b=k?p.Rc(k,b):p.R("oj-validator.length.hint.max",b));return b};a.f.j("LengthValidator.prototype.getHint",{Oe:a.Al.prototype.Oe});a.Al.prototype.validate=function(b){var c=
this.IF,f=this.JF,h="",k,g=this.Lk,h=f.tooLong,f=f.tooShort,m=c.tooLong,c=c.tooShort,p=this.Hj,t;k="";var s=a.ya;t=""+b;k=this.eg(t);if((null===p||k>=this.Hj)&&(null===g||k<=this.Lk))return t;k<this.Hj?(b={value:b,min:p},k=f?s.Rc(f,b):s.R("oj-validator.length.messageSummary.tooShort"),h=c?s.Rc(c,b):s.R("oj-validator.length.messageDetail.tooShort",b)):(b={value:b,max:g},k=h?s.Rc(h,b):s.R("oj-validator.length.messageSummary.tooLong"),h=m?s.Rc(m,b):s.R("oj-validator.length.messageDetail.tooLong",b));
throw new a.Il(k,h);};a.f.j("LengthValidator.prototype.validate",{validate:a.Al.prototype.validate});a.Al.prototype.eg=function(b){var c=b.length,f,h=0;switch(this.dza.toLowerCase()){case "codepoint":for(f=0;f<c;f++)55296===(b.charCodeAt(f)&63488)&&h++;a.A.assert(0===h%2,"the number of surrogate chars must be an even number.");b=c-h/2;break;default:b=c}return b}});