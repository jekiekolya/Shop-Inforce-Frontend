"use strict";(self.webpackChunkShop_Inforce_Frontend=self.webpackChunkShop_Inforce_Frontend||[]).push([[255],{9215:function(e,t,n){n.d(t,{Z:function(){return s}});var r="PageWrapper_container__NKNYi",o="PageWrapper_bg_page__dDpv1",a="PageWrapper_wrapper__lKrPY",c=n(3329);function s(e){var t=e.children;return(0,c.jsx)("div",{className:o,children:(0,c.jsx)("div",{className:r,children:(0,c.jsx)("div",{className:a,children:t})})})}},9255:function(e,t,n){n.r(t),n.d(t,{default:function(){return se}});var r=n(885),o=n(2791),a=n(9434),c=n(5581),s=function(e){return e.modal.showModalAddProduct},u=function(e){return e.modal.showModalDeleteProduct},i=function(e){return e.modal.deletedProductId},l=n(2745),d=n(4494),_=n(9215),m=n(2982),p=n(1087),h=n(3559),f=n(8820),v=n(4164),j=n(9126),x="ModalUniversal_modal__backdrop__GcVSK",g="ModalUniversal_modal__content__3pztF",N="ModalUniversal_btnClose__uttkB",P="ModalUniversal_btnClose__icon__w2Hmi",b=n(3329),C=document.querySelector("#modal-root"),A=function(e){var t=e.toggleAction,n=e.children,r=(0,a.I0)();(0,o.useEffect)((function(){return document.addEventListener("keydown",s),document.body.style.overflow="hidden",function(){document.removeEventListener("keydown",s),document.body.style.overflow=""}}));var c=function(){r(t(!1))},s=function(e){"Escape"===e.code&&c()};return(0,v.createPortal)((0,b.jsx)("div",{className:x,onClick:function(e){e.currentTarget===e.target&&c()},type:"flipInX",children:(0,b.jsxs)("div",{className:g,children:[(0,b.jsx)("button",{className:N,onClick:c,children:(0,b.jsx)(j.C7Q,{className:P})}),n]})}),C)},y="ModalDeleteProduct_title__L6d1S",I="ModalDeleteProduct_desc__jL7MV",T="ModalDeleteProduct_buttonWrapper__I4-7E",w="ModalDeleteProduct_buttonConfirm__AKAiu",F="ModalDeleteProduct_buttonCancel__DMvqE";function k(){var e=(0,a.I0)(),t=(0,a.v9)(i);return(0,b.jsxs)(A,{toggleAction:c.OT,children:[(0,b.jsx)("h2",{className:y,children:"Delete Product?"}),(0,b.jsx)("p",{className:I,children:"The product will be permanently deleted. Are you sure?"}),(0,b.jsxs)("div",{className:T,children:[(0,b.jsx)("button",{className:w,onClick:function(){e(h.Z.deleteProductById(t))},children:"Yes"}),(0,b.jsx)("button",{className:F,onClick:function(){e((0,c.OT)(!1))},children:"No"})]})]})}var D="ProductList_list__p4MKS",W="ProductList_item__mFImT",Z="ProductList_link__VWBD5",M="ProductList_img__q7WBP",S="ProductList_productName__cYpF8",L="ProductList_buttonDelete__9C0Qg",E="ProductList_productCount__9Qnso";function V(){var e=(0,a.v9)(l.t.products),t=(0,a.v9)(l.t.sortedValue),n=(0,a.I0)(),r=(0,m.Z)(e).sort((function(e,n){return"name"===t?e.name.localeCompare(n.name):"count"===t?(console.log("a.count",e.count),n.count-e.count):1}));(0,o.useEffect)((function(){n(h.Z.getAllProducts())}),[n]);var s=(0,a.v9)(u);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("ul",{className:D,children:r.map((function(e){return(0,b.jsxs)("li",{className:W,children:[(0,b.jsx)("button",{className:L,onClick:function(){var t;t=e._id,n((0,c.O$)(t)),n((0,c.OT)(!0))},children:(0,b.jsx)(f.VPh,{size:20})}),(0,b.jsxs)(p.rU,{className:Z,to:"/".concat(e._id),children:[(0,b.jsx)("img",{className:M,src:e.imageUrl,alt:"Img product"}),(0,b.jsx)("h2",{className:S,children:e.name}),(0,b.jsx)("p",{className:E,children:"Count: ".concat(e.count)})]})]},e._id)}))}),s&&(0,b.jsx)(k,{})]})}var z=n(5562),H=n(7619),K=n(8683),G=n(4925),U="InputField_label__su0GK",Y="InputField_inputTitle__gI1yK",q="InputField_inputField__niwfm",O=["inputTitle"];function B(e){var t=e.inputTitle,n=(0,G.Z)(e,O);return(0,b.jsxs)("label",{className:U,children:[(0,b.jsx)("p",{className:Y,children:t}),(0,b.jsx)("input",(0,K.Z)({className:q},n))]})}var Q={formWrapper:"AddProductForm_formWrapper__YDqzr",form:"AddProductForm_form__OFEIg",sizeWrapper:"AddProductForm_sizeWrapper__AZP4Z",button:"AddProductForm_button__20iRW",sizeTitle:"AddProductForm_sizeTitle__E-i+J"};function X(){var e=(0,o.useState)(""),t=(0,r.Z)(e,2),n=t[0],c=t[1],s=(0,o.useState)(null),u=(0,r.Z)(s,2),i=u[0],d=u[1],_=(0,o.useState)(""),m=(0,r.Z)(_,2),p=m[0],f=m[1],v=(0,o.useState)(0),j=(0,r.Z)(v,2),x=j[0],g=j[1],N=(0,o.useState)(0),P=(0,r.Z)(N,2),C=P[0],A=P[1],y=(0,o.useState)(0),I=(0,r.Z)(y,2),T=I[0],w=I[1],F=(0,o.useState)(""),k=(0,r.Z)(F,2),D=k[0],W=k[1],Z=(0,a.I0)(),M=(0,a.v9)(l.t.isLoadingProducts);return(0,b.jsxs)("div",{className:Q.formWrapper,children:[(0,b.jsx)("form",{encType:"multipart/form-data",children:(0,b.jsxs)("label",{className:Q.label,children:[(0,b.jsx)("p",{className:Q.inputTitle,children:"Product photo"}),(0,b.jsx)("input",{type:"file",name:"productImg",onChange:function(e){var t=e.target.value,n=e.target.files[0],r=t.split(".").at(-1);if("png"!==r&&"jpeg"!==r&&"jpg"!==r)return z.Notify.failure("Invalid image format. It has to be: PNG, JPEG or JPG"),c(""),void d(null);var o=new FormData;o.append("product_img",n),c(t),d(o)},value:n})]})}),(0,b.jsxs)("form",{className:Q.form,children:[(0,b.jsx)(B,{inputTitle:"Product Name",type:"text",name:"productName",onChange:function(e){f(e.target.value)},value:p}),(0,b.jsx)(B,{inputTitle:"Count",type:"number",name:"count",onChange:function(e){g(e.target.valueAsNumber)},value:x}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:Q.sizeTitle,children:"Size:"}),(0,b.jsxs)("div",{className:Q.sizeWrapper,children:[(0,b.jsx)(B,{inputTitle:"Width",type:"number",name:"width",onChange:function(e){A(e.target.valueAsNumber)},value:C}),(0,b.jsx)(B,{inputTitle:"Height",type:"number",name:"height",onChange:function(e){w(e.target.valueAsNumber)},value:T})]})]}),(0,b.jsx)(B,{inputTitle:"Weight",type:"text",name:"weight",onChange:function(e){W(e.target.value)},value:D}),(0,b.jsx)("button",{className:Q.button,onClick:function(e){e.preventDefault();var t={imgProductFile:i,productName:p,productCount:x,productWidth:C,productHeight:T,productWeight:D};null!==i&&""!==p&&""!==D?Z(h.Z.addProduct(t)):z.Notify.failure("All fields are required")},children:M?(0,b.jsx)(H.a,{height:"20",width:"20"}):"Add product"})]})]})}var J="ModalAddProduct_title__0FXbS",R=function(){return(0,b.jsxs)(A,{toggleAction:c.XA,children:[(0,b.jsx)("h2",{className:J,children:"Add Product"}),(0,b.jsx)(X,{})]})},$="DropdownMenu_list__D80T-",ee="DropdownMenu_item__g0wxK";function te(e){var t=e.handleChooseValue;return(0,b.jsxs)("ul",{className:$,children:[(0,b.jsx)("li",{className:ee,onClick:function(){t("name")},children:"name"}),(0,b.jsx)("li",{className:ee,onClick:function(){t("count")},children:"count"})]})}var ne="Homepage_titleWrapper__mArgD",re="Homepage_title__PTGen",oe="Homepage_buttonAdd__Pw6vj",ae="Homepage_dropWrapper__QV54Y",ce="Homepage_buttonDrop__2E-+o",se=function(){var e=(0,o.useState)(!1),t=(0,r.Z)(e,2),n=t[0],u=t[1],i=(0,a.I0)(),m=(0,a.v9)(s),p=(0,a.v9)(l.t.sortedValue);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_.Z,{children:(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:ne,children:[(0,b.jsx)("h1",{className:re,children:"Products"}),(0,b.jsxs)("div",{className:ae,children:[(0,b.jsx)("button",{className:ce,onClick:function(){u(!n)},children:"Sorted by: ".concat(p)}),n&&(0,b.jsx)(te,{handleChooseValue:function(e){i((0,d.fd)(e)),u(!n)}})]}),(0,b.jsx)("button",{className:oe,onClick:function(){i((0,c.XA)(!0))},children:"Add Product"})]}),(0,b.jsx)(V,{})]})}),m&&(0,b.jsx)(R,{})]})}},2745:function(e,t,n){n.d(t,{t:function(){return r}});var r={products:function(e){return e.products.products},isLoadingProducts:function(e){return e.products.isLoading},sortedValue:function(e){return e.products.sortedValue},currentProduct:function(e){return e.products.currentProduct}}}}]);
//# sourceMappingURL=255.63929ad7.chunk.js.map