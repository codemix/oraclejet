/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojeditablevalue"],function(t,e){var i={properties:{describedBy:{type:"string"},disabled:{type:"boolean",value:!1},displayOptions:{type:"object",properties:{converterHint:{type:"Array<string>|string",value:["placeholder","notewindow"]},helpInstruction:{type:"Array<string>|string",value:["notewindow"]},messages:{type:"Array<string>|string",value:["inline"]},validatorHint:{type:"Array<string>|string",value:["notewindow"]}}},help:{type:"object",properties:{instruction:{type:"string"}}},helpHints:{type:"object",properties:{definition:{type:"string",value:""},source:{type:"string",value:""}}},labelHint:{type:"string",value:""},messagesCustom:{type:"Array<Object>",writeback:!0,value:[]},readonly:{type:"boolean",value:!1},translations:{type:"object",value:{}},valid:{type:"string",writeback:!0,enumValues:["invalidHidden","invalidShown","pending","valid"],readOnly:!0},value:{type:"boolean",writeback:!0,value:!1}},methods:{refresh:{},reset:{},showMessages:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojAnimateStart:{},ojAnimateEnd:{}},extension:{}};t.__registerWidget("oj.ojSwitch",e.oj.editableValue,{version:"1.1.0",defaultElement:"<input>",widgetEventPrefix:"oj",options:{disabled:!1,readOnly:!1,value:!1},widget:function(){return this._element2},getNodeBySubId:function(t){var e,i=this._super(t),s=this.widget();return i||(i=null==t||null==t.subId?s:null)||"oj-switch-thumb"!==(e=t.subId)&&"oj-switch-track"!==e?i||null:s.find("."+e)[0]},getSubIdByNode:function(t){var i,s=e(this.element).attr("id"),n=this._super(t);return null!=t&&(e(t).hasClass("oj-switch-track")||e(t).hasClass("oj-switch-thumb"))&&(s===(i=e(t).parents("div.oj-switch").find("input.oj-component-initnode").attr("id"))&&e(t).hasClass("oj-switch-track")?n={subId:"oj-switch-track"}:s===i&&e(t).hasClass("oj-switch-thumb")&&(n={subId:"oj-switch-thumb"})),n},_BUNDLE_KEY:{_SWITCH_OFF:"SwitchOFF",_SWITCH_ON:"SwitchON"},_InitOptions:function(e,i){var s,n;s=[{attribute:"disabled",validateOption:!0},{attribute:"readonly",option:"readOnly",validateOption:!0},{attribute:"checked",option:"value",validateOption:!1,coerceDomValue:function(t){return!!t}},{attribute:"title"}],this._super(e,i),this._IsCustomElement()||(t.EditableValueUtils.initializeOptionsFromDom(s,i,this),n=this.option("value"),this.option({value:!!n},{_context:{writeback:!0,internalSet:!0}}))},_ComponentCreate:function(){if(this._super(),!this.element.is("input"))throw new Error("ojSwitch can be bound to INPUT only.");this._inputElementOriginalDisplay=this.element.css("display"),this.element.css("display","none").attr("type","checkbox").attr("checked",this.option("value")).attr("tabindex","-1").attr("disabled",this.option("disabled")).attr("readonly",this.option("readOnly")),this.OuterWrapper?this._element2=e(this.OuterWrapper):this._element2=this.element.wrap("<div></div>").parent(),this._element2.addClass("oj-switch oj-component oj-form-control"),this._element2.append("<div class='oj-switch-container'><div class='oj-switch-track'><div class='oj-switch-thumb' tabIndex='0'></div></div></div>"),this.switchThumb=this._element2.find(".oj-switch-thumb"),this.switchThumb.attr("role",this._setSwitchRole())},_AfterCreate:function(){this._super();var t=this.switchThumb;this._SetAriaInfo(t)},_SetAriaInfo:function(e){var i,s;if(i=this.OuterWrapper?this._element2[0]:this._element2[0].querySelector("input"),this._IsCustomElement()){var n=this.uuid+"_Label";s=t.EditableValueUtils.getOjLabelId(this.widget(),n)}else{var a=this._GetLabelElement();a&&(s=a.attr("id"))}if(s)e.attr("aria-labelledby",s);else{var o=i.getAttribute("aria-label");o&&(e.attr("aria-label",o),i.removeAttribute("aria-label"))}},_setup:function(){var t=e(this.widget());this._setupEvents(),void 0!==t&&(this.element.attr("checked",this.option("value")),t.removeClass("oj-disabled oj-read-only oj-selected oj-hover oj-active"),e(this.switchThumb).attr("tabindex","0"),e(this.switchThumb).html(""),(this.option("disabled")||this.option("readOnly"))&&(this.option("disabled")?(t.addClass("oj-disabled"),e(this.switchThumb).removeAttr("tabindex")):(t.addClass("oj-read-only"),e(this.switchThumb).html(this._setReadOnlyValue()))),this.option("value")&&t.addClass("oj-selected"),e(this.switchThumb).attr("aria-checked",this.option("value")),e(this.switchThumb).removeAttr("aria-disabled"),t.removeAttr("aria-disabled"),this._CanSetValue()||e(this.switchThumb).attr("aria-disabled","true"))},_setReadOnlyValue:function(){var t=this._BUNDLE_KEY._SWITCH_OFF;return this.option("value")&&(t=this._BUNDLE_KEY._SWITCH_ON),this.getTranslatedString(t)},_setupEvents:function(){this._off(this._element2,"keydown keyup mousedown mouseup mouseleave mouseenter touchstart touchend"),this._CanSetValue()&&(this._on(this._element2,this._switchEvents),this._AddHoverable(this._element2)),this._focusable({element:this.switchThumb,applyHighlight:!0})},_switchEvents:{keydown:function(t){t.which!==e.ui.keyCode.ENTER&&t.which!==e.ui.keyCode.SPACE||(e(t.currentTarget).addClass("oj-active"),t.preventDefault())},keyup:function(t){t.which!==e.ui.keyCode.ENTER&&t.which!==e.ui.keyCode.SPACE||this._SetValueReturnBoolean(!this.option("value"),t)},mousedown:function(t){1===t.which&&(e(t.currentTarget).addClass("oj-active"),t.preventDefault())},mouseup:function(t){1===t.which&&this._SetValueReturnBoolean(!this.option("value"),t)},mouseleave:function(t){1===t.which&&e(t.currentTarget).removeClass("oj-active")},mouseenter:function(t){1===t.which&&e(t.currentTarget).addClass("oj-active")},touchstart:function(t){e(t.currentTarget).addClass("oj-active"),t.preventDefault()},touchend:function(t){this._SetValueReturnBoolean(!this.option("value"),t)}},_GetDefaultStyleClass:function(){return"oj-switch"},_CanSetValue:function(){return!!this._super()&&!this.options.readOnly},_setSwitchRole:function(){return"switch checkbox"},_destroy:function(){return this._CanSetValue()&&this._RemoveHoverable(this._element2),this._element2.find(".oj-switch-track").remove(),t.DomUtils.unwrap(this.element),this._RestoreAttributes(this.element),this._super()},_GetMessagingLauncherElement:function(){return this._element2},_GetContentElement:function(){return this.switchThumb},_AfterSetOption:function(e,i,s){switch(this._superApply(arguments),e){case"readOnly":this._AfterSetOptionDisabledReadOnly(e,t.EditableValueUtils.readOnlyOptionOptions)}},_setOption:function(t,e,i){var s;switch(t){case"disabled":case"readOnly":case"value":s=!!e;break;default:s=e}this._super(t,s,i)},_Refresh:function(t,e,i){this._superApply(arguments),this._setup()}}),i.extension._WIDGET_NAME="ojSwitch",i.extension._INNER_ELEM="input",i.extension._ALIASED_PROPS={readonly:"readOnly"},t.CustomElementBridge.registerMetadata("oj-switch","editableValue",i),t.CustomElementBridge.register("oj-switch",{metadata:t.CustomElementBridge.getMetadata("oj-switch")})});