"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{6:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(791),a=n(689),c="Contacts_form_container__EhZdb",s=n(420),o=n(526),i=n(553),l=function(e){return e.contacts},u=(0,i.P1)(l,(function(e){return e.items})),m=(0,i.P1)(l,(function(e){return e.filter})),d="ContactForm_form__dhl+T",_="ContactForm_label__-cVXI",f="ContactForm_input__Bl93P",h="ContactForm_btn__wll+u",v=n(184),p=function(){var e=(0,s.I0)(),t=(0,s.v9)(u);return(0,v.jsx)("div",{children:(0,v.jsxs)("form",{className:d,onSubmit:function(n){n.preventDefault();var r=n.currentTarget.elements.name.value;if(t.map((function(e){return e.name})).some((function(e){return e.toLowerCase()===r.toLowerCase()})))alert("".concat(r," is already in contacts."));else{var a=n.currentTarget.elements.number.value,c={name:r,phone:a};e((0,o.uK)(c)),n.currentTarget.reset()}},children:[(0,v.jsx)("label",{className:_,children:"Name"}),(0,v.jsx)("input",{className:f,type:"text",name:"name",required:!0}),(0,v.jsx)("label",{className:_,children:"Number"}),(0,v.jsx)("input",{className:f,type:"tel",name:"number",required:!0}),(0,v.jsx)("button",{className:h,type:"submit",children:"Add contact"})]})})},x="ContactList_phoneList__7TkTB",j="ContactList_contact_item__MaQF6",b="ContactList_delete_btn__nRLrj",C=function(){var e=(0,s.I0)(),t=(0,s.v9)(u),n=(0,s.v9)(m);(0,r.useEffect)((function(){e((0,o.SC)())}),[e]);var a=t&&Array.isArray(t)?t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):[];return(0,v.jsx)("div",{children:(0,v.jsx)("ul",{className:x,children:a.length>0?a.map((function(t){return(0,v.jsxs)("li",{className:j,children:[t.name,": ",t.phone,(0,v.jsx)("button",{type:"button",className:b,onClick:function(){return n=t.id,void e((0,o.GK)(n));var n},children:"Delete"})]},t.id)})):(0,v.jsx)("li",{children:"No matching contacts found"})})})},N=n(61),k="Filter_filter_input__eu2zm",w=function(){var e=(0,s.I0)(),t=(0,s.v9)(m);return(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{children:"Find contacts by name"}),(0,v.jsx)("input",{className:k,type:"text",value:t,onChange:function(t){t.preventDefault(),e((0,N.T)(t.target.value))}})]})},y=function(){var e=(0,a.TH)();return(0,v.jsxs)("div",{className:c,children:[(0,v.jsx)("h1",{children:"Phonebook"}),(0,v.jsx)(p,{location:e}),(0,v.jsx)("h2",{children:"Contacts"}),(0,v.jsx)(w,{location:e}),(0,v.jsx)(C,{location:e})]})}}}]);
//# sourceMappingURL=6.e472bdc0.chunk.js.map