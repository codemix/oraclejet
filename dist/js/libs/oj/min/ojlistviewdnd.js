/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojdnd","ojs/ojlistview"],function(a,g){a.ib=function(a){this.Ga=a};o_("ListViewDndContext",a.ib,a);a.b.ta(a.ib,a.b,"oj.ListViewDndContext");a.ib.wja=67;a.ib.UO=86;a.ib.WO=88;a.ib.prototype.FS=function(a){var b=this.Ga.me("dnd");return null!=b&&b[a]?b[a].items:null};a.ib.prototype.SI=function(){return this.FS("drag")};a.ib.prototype.GS=function(){return this.FS("drop")};a.ib.prototype.qq=function(){return"enabled"==this.FS("reorder")};a.ib.prototype.bg=function(a){return this.Ga.Am(a)};
a.ib.prototype.iT=function(){var a,b,d,e;a=[];if(this.Ga.xc())for(b=this.Ga.me("selection"),d=0;d<b.length;d++)e=this.Ga.Ne(b[d]),null==e||this.Ga.ok(g(e))||a.push(e);else e=this.tS(),null!=e&&a.push(e);null!=this.Cw&&0<this.Cw.length&&-1==a.indexOf(this.Cw.get(0))&&a.push(this.Cw.get(0));return a};a.ib.prototype.tS=function(){return null==this.Ga.N?null:this.Ga.N.elem[0]};a.ib.prototype.zw=function(a){var b;g(a).hasClass(this.Ga.Xi())||(a=a.firstElementChild);a=g(a).find(".oj-listview-drag-handle");
null!=a&&0<a.length&&(b=a.attr("aria-labelledby"),null==b?a.attr("aria-labelledby",this.Ga.$u("instr")):a.attr("aria-labelledby",b+" "+this.Ga.$u("instr")),this.Ga.Ll()&&a.attr("draggable","true"))};a.ib.prototype.Pba=function(a){var b,d;if(null!=this.SI()||this.qq()){if(a.hasClass("oj-listview-drag-handle"))b=g(a);else{a=this.bg(a);if(null!=a){d=a.find(".oj-listview-drag-handle");if(null!=d&&0<d.length)return;a.addClass("oj-draggable")}d=this.tS();null!=d&&(null!=a&&0==a.find(".oj-listview-drag-handle").length&&
a[0]==d?b=a:g(d).removeClass("oj-draggable"))}null!=b&&b.attr("draggable",!0)}};a.ib.prototype.ida=function(a){if(null!=this.SI()||this.qq())a=a.hasClass("oj-listview-drag-handle")?g(a):this.bg(a),null!=a&&a.removeAttr("draggable")};a.ib.prototype.dn=function(c,b,d,e){var f;if(c="drag"===c?this.SI():this.GS())if((b=c[b])&&"function"==typeof b)try{d.dataTransfer=d.originalEvent.dataTransfer,f=b(d,e)}catch(g){a.r.error("Error: "+g)}else return-1;return f};a.ib.prototype.QBa=function(a,b,d){var e,f=
[],g;for(e=0;e<d.length;e++)(g=this.Ga.M6(d[e]))&&(g.innerHTML&&g.tagName&&"LI"==g.tagName?f.push(g.innerHTML):f.push(g));return 0<f.length?(this.PBa(a.originalEvent,b,f),this.RBa(a.originalEvent,d),{items:f}):null};a.ib.prototype.PBa=function(a,b,d){var e;a=a.dataTransfer;d=JSON.stringify(d);if("string"==typeof b)a.setData(b,d);else if(b)for(e=0;e<b.length;e++)a.setData(b[e],d);a.setData("text/ojlistview-dragsource-id",this.Ga.element.get(0).id)};a.ib.prototype.RBa=function(a,b){var d,e,f=Number.MAX_VALUE,
h,k,l,m=0,r=0;d=a.target;if(1<b.length){d=g(document.createElement("ul"));d.get(0).className=this.Ga.element.get(0).className;d.addClass("oj-listview-drag-image").css({width:this.Ga.element.css("width"),height:this.Ga.element.css("height")});for(e=0;e<b.length;e++)f=Math.min(f,b[e].offsetTop);for(e=0;e<b.length;e++)h=b[e].offsetTop-f,k=b[e].offsetWidth,l=g(b[e].cloneNode(!0)),l.removeClass("oj-selected oj-focus oj-hover").css({position:"absolute",top:h,width:k}),d.append(l)}else g(d).hasClass("oj-listview-drag-handle")&&
(m=Math.max(0,d.offsetLeft-b[0].offsetLeft)+d.offsetWidth/2,r=d.offsetTop+d.offsetHeight/2),l=g(b[0].cloneNode(!0)),l.removeClass("oj-selected oj-focus oj-hover").addClass("oj-drag"),d=g(document.createElement("ul")),d.get(0).className=this.Ga.element.get(0).className,d.addClass("oj-listview-drag-image").css({width:this.Ga.element.css("width"),height:2*b[0].offsetHeight}).append(l);g("body").append(d);this.UM=d;a.dataTransfer.setDragImage(d.get(0),m,r)};a.ib.prototype.JT=function(a){var b,d,e;b=this.SI();
if(null!=b||this.qq())if(d=null!=b?b.dataTypes:"text/ojlistview-items-data",g(a.target).hasClass("oj-listview-drag-handle")?(e=[],e.push(this.bg(a.target)[0])):e=this.iT(),0<e.length){if(null==b&&1<e.length)return!1;this.br=e;this.PM=g(e[0]);if(b=this.QBa(a,d,e)){if(a=this.dn("drag","dragStart",a,b),-1!==a)return a}else return!1}};a.ib.prototype.Yua=function(a){return this.dn("drag","drag",a)};a.ib.prototype.kI=function(){null!=this.UM&&(this.UM.remove(),this.UM=null)};a.ib.prototype.FT=function(a){var b;
if(null!=this.PM&&null!=this.br)for(this.PM.find(".oj-listview-drag-handle").removeAttr("draggable"),this.PM.removeClass("oj-drag oj-draggable").removeAttr("draggable"),b=0;b<this.br.length;b++)g(this.br[b]).css("display","block");this.jC();this.kI();this.dn("drag","dragEnd",a);this.PM=this.UM=null};a.ib.prototype.TU=function(a){var b,d;b=this.GS();if(this.qq()&&null==b)return!0;if(b&&b.dataTypes)for(b=b.dataTypes,b="string"==typeof b?[b]:b,a=a.originalEvent.dataTransfer.types,d=0;d<a.length;d++)if(0<=
b.indexOf(a[d]))return!0;return!1};a.ib.prototype.en=function(a,b,d){a=this.dn("drop",a,b,d);(void 0===a||-1===a)&&this.TU(b)&&b.preventDefault();return a};a.ib.prototype.S4=function(a){var b;null==this.cj&&(b=g(a.get(0).cloneNode(!1)),b.addClass("oj-drop").removeClass("oj-drag oj-draggable oj-hover oj-focus oj-selected").css({display:"block",height:a.outerHeight()}),this.cj=b);return this.cj};a.ib.prototype.s4=function(){null!=this.Dn&&-1===this.sA&&this.Dn.children("."+this.Ga.lg()).removeClass("oj-drop")};
a.ib.prototype.jC=function(){null!=this.cj&&(this.cj.css("height","0"),this.cj.remove(),this.cj=null);this.s4()};a.ib.prototype.GT=function(a){var b;b=this.bg(a.target);a=this.en("dragEnter",a,{item:b.get(0)});if(-1!=a)return a};a.ib.prototype.Mba=function(a){null!=this.Dn&&this.Dn.removeClass("oj-valid-drop oj-invalid-drop");this.Dn=a;this.Dn.addClass("oj-valid-drop")};a.ib.prototype.Gba=function(a,b){var d;d=a.attr("aria-label");null==d&&(d=a.text());d=this.Ga.Y.F("accessibleReorder"+b.charAt(0).toUpperCase()+
b.substr(1)+"Item",{item:d});this.Ga.Jg(d)};a.ib.prototype.ioa=function(){null==this.bha&&this.Ga.Ll()&&(this.Ga.element.find("ul."+this.Ga.oi()).each(function(){g(this).attr("oldMaxHeight",g(this).css("maxHeight").toString());g(this).css("maxHeight",1E4)}),this.bha="adjusted")};a.ib.prototype.pba=function(){this.Ga.Ll()&&this.Ga.element.find("ul."+this.Ga.oi()).each(function(){g(this).css("maxHeight",parseInt(g(this).attr("oldMaxHeight"),10));g(this).removeAttr("oldMaxHeight")});this.bha=null};a.ib.prototype.IT=
function(a){var b,d,e,f;if(null!=this.GS()||this.qq()){this.ioa();if(null!=this.br&&"none"!=g(this.br[0]).css("display")){b=g(this.br[0]);d=this.S4(b);for(a=0;a<this.br.length;a++)g(this.br[a]).css("display","none");d.insertBefore(b);this.sA=d.index()}else b=this.bg(a.target),null!=b&&0<b.length&&(e=this.en("dragOver",a,{item:b.get(0)}),-1===e&&this.qq()||!1===e||a.isDefaultPrevented()?(b.hasClass(this.Ga.Xi())?(this.s4(),b.hasClass("oj-drop")||(d=this.S4(b),f=b.index(),null==this.sA||this.sA<f?(d.insertAfter(b),
this.rA="after"):(d.insertBefore(b),this.rA="before"),this.Gba(b,this.rA),this.Mba(b),this.sA=d.index())):(this.jC(),b.children("."+this.Ga.lg()).addClass("oj-drop"),this.Mba(b),this.sA=-1,this.rA="inside",this.Gba(b,this.rA)),a.preventDefault()):g(a.target).hasClass(this.Ga.oi())||(b.addClass("oj-invalid-drop"),this.jC()));return e}};a.ib.prototype.wU=function(a,b){var d,e;d=b.getBoundingClientRect();e=a.originalEvent;return e.clientX>=d.left&&e.clientX<d.right&&e.clientY>=d.top&&e.clientY<d.bottom};
a.ib.prototype.HT=function(a){var b,d;if(null!=this.Dn&&(b=this.bg(a.target),null!=b&&0<b.length&&(b.removeClass("oj-valid-drop oj-invalid-drop"),d=this.en("dragLeave",a,{item:b.get(0)}),this.wU(a,a.currentTarget)||(this.jC(),this.pba())),-1!=d))return d};a.ib.prototype.KT=function(a){var b,d;if(null!=this.Dn&&(b=a.originalEvent.dataTransfer.getData("text/ojlistview-dragsource-id"),d={item:this.Dn.get(0),position:this.rA},this.qq()&&b===this.Ga.element.get(0).id?d.reorder=!0:d.reorder=!1,b=this.en("drop",
a,d),d.reorder&&(d.items=this.br,d.reference=d.item,this.Ga.pk("reorder",a,d),a.preventDefault()),null!=this.Dn&&this.Dn.removeClass("oj-valid-drop"),this.jC(),this.pba(),this.kI(),this.Dn=null,this.sA=-1,this.rA=null,-1!==b))return b};a.ib.prototype.gEa=function(a){var b=this,d,e;this.qq()&&(void 0==a&&(a=this.Ga.me("contextMenu")),null!=a&&(null==this.gm&&(this.gm=[]),a=g(a),d=a.find("[data-oj-command]"),e=[],d.each(function(){var a,c;0===g(this).children("a").length?0==g(this).attr("data-oj-command").indexOf("oj-listview-")&&
(a=g(this).attr("data-oj-command").substring(12),c=b.zj(a),c.get(0).className=g(this).get(0).className,g(this).replaceWith(c)):(a=g(this).attr("data-oj-command"),"pasteBefore"==a?a="paste-before":"pasteAfter"==a&&(a="paste-after"));null!=a&&e.push(a)}),this.gm=e,0<e.length&&(a.data("oj-ojMenu")&&a.ojMenu("refresh"),a.on("ojselect",this.Gk.bind(this)))))};a.ib.prototype.zj=function(a){return"paste-before"===a?this.Zf("pasteBefore"):"paste-after"===a?this.Zf("pasteAfter"):this.Zf(a)};a.ib.prototype.Zf=
function(a){var b=g("\x3cli\x3e\x3c/li\x3e");b.attr("data-oj-command",a);b.append(this.eC(a));return b};a.ib.prototype.eC=function(a){a="label"+a.charAt(0).toUpperCase()+a.slice(1);return g('\x3ca href\x3d"#"\x3e\x3c/a\x3e').text(this.Ga.Y.F(a))};a.ib.prototype.aD=function(a){var b;null!=this.Cn&&g(this.Cn).removeClass("oj-listview-cut");b=this.iT();g(b).addClass("oj-listview-cut");this.Cn=b;this.Ga.pk("cut",a,{items:b})};a.ib.prototype.o8=function(a){var b;null!=this.Cn&&g(this.Cn).removeClass("oj-listview-cut");
this.Cn=b=this.iT();this.Ga.pk("copy",a,{items:b})};a.ib.prototype.cD=function(a,b,d){this.Ga.pk("paste",a,{item:b.get(0)});g(this.Cn).removeClass("oj-listview-cut");this.Ga.pk("reorder",a,{items:this.Cn,position:d,reference:b.get(0)});this.Cn=null};a.ib.prototype.Gk=function(a,b){if(null!=this.Cw)switch(b.item.attr("data-oj-command")){case "cut":this.aD(a);break;case "copy":this.o8(a);break;case "paste":var d=!0;case "pasteBefore":var e=!0;case "pasteAfter":var f="after";d?f="inside":e&&(f="before");
this.cD(a,this.Cw,f);this.Cw=null}};a.ib.prototype.YB=function(a,b){null!=this.gm&&("paste-before"==b?b="pasteBefore":"paste-after"==b&&(b="pasteAfter"),a.find("[data-oj-command\x3d'"+b+"']").removeClass("oj-disabled"))};a.ib.prototype.Pua=function(a,b){var d;a.find("[data-oj-command]").addClass("oj-disabled");d=this.bg(b.originalEvent.target);null==d||null==this.gm||0==this.gm.length?a.ojMenu("refresh"):(d.children().first().hasClass(this.Ga.lg())?null!=this.Cn&&this.YB(a,"paste"):(this.YB(a,"cut"),
this.YB(a,"copy"),null!=this.Cn&&(this.YB(a,"paste-before"),this.YB(a,"paste-after"))),a.ojMenu("refresh"),this.Cw=d)};a.ib.prototype.sG=function(c){var b,d;if(!this.qq()||null==this.gm||0==this.gm.length)return!1;if(c.ctrlKey||c.metaKey){b=c.keyCode;if(b===a.ib.WO&&-1<this.gm.indexOf("cut"))return this.aD(c),!0;if(b===a.ib.wja&&-1<this.gm.indexOf("copy"))return this.o8(c),!0;if(b===a.ib.UO&&null!=this.Cn&&(b=g(this.tS()),b.children().first().hasClass(this.Ga.lg())?-1<this.gm.indexOf("paste")&&(d=
"inside"):-1<this.gm.indexOf("paste-before")?d="before":-1<this.gm.indexOf("paste-after")&&(d="after"),null!=d))return this.cD(c,b,d),!0}return!1}});