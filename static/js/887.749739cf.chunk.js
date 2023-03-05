"use strict";(self.webpackChunkShop_Inforce_Frontend=self.webpackChunkShop_Inforce_Frontend||[]).push([[887],{2862:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(8683),o=n(4925),c="InputField_label__su0GK",a="InputField_inputTitle__gI1yK",d="InputField_inputField__niwfm",u=n(3329),i=["inputTitle"];function s(e){var t=e.inputTitle,n=(0,o.Z)(e,i);return(0,u.jsxs)("label",{className:c,children:[(0,u.jsx)("p",{className:a,children:t}),(0,u.jsx)("input",(0,r.Z)({className:d},n))]})}},9215:function(e,t,n){n.d(t,{Z:function(){return d}});var r="PageWrapper_container__NKNYi",o="PageWrapper_bg_page__dDpv1",c="PageWrapper_wrapper__lKrPY",a=n(3329);function d(e){var t=e.children;return(0,a.jsx)("div",{className:o,children:(0,a.jsx)("div",{className:r,children:(0,a.jsx)("div",{className:c,children:t})})})}},1887:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var r=n(885),o=n(2791),c=n(9434),a=n(5581),d=n(6542),u=n(2745),i=n(4494),s=n(9215),l=n(2982),_=n(1087),m=n(1755),p=n(8820),h=n(4164),f=n(9126),v="ModalUniversal_modal__backdrop__GcVSK",g="ModalUniversal_modal__content__3pztF",j="ModalUniversal_btnClose__uttkB",x="ModalUniversal_btnClose__icon__w2Hmi",P=n(3329),N=document.querySelector("#modal-root"),b=function(e){var t=e.toggleAction,n=e.children,r=(0,c.I0)();(0,o.useEffect)((function(){return document.addEventListener("keydown",d),document.body.style.overflow="hidden",function(){document.removeEventListener("keydown",d),document.body.style.overflow=""}}));var a=function(){r(t(!1))},d=function(e){"Escape"===e.code&&a()};return(0,h.createPortal)((0,P.jsx)("div",{className:v,onClick:function(e){e.currentTarget===e.target&&a()},type:"flipInX",children:(0,P.jsxs)("div",{className:g,children:[(0,P.jsx)("button",{className:j,onClick:a,children:(0,P.jsx)(f.C7Q,{className:x})}),n]})}),N)},A="ModalDeleteProduct_title__L6d1S",C="ModalDeleteProduct_desc__jL7MV",M="ModalDeleteProduct_buttonWrapper__I4-7E",w="ModalDeleteProduct_buttonConfirm__AKAiu",Z="ModalDeleteProduct_buttonCancel__DMvqE";function D(){var e=(0,c.I0)(),t=(0,c.v9)(d.M.getDeletedProductId);return(0,P.jsxs)(b,{toggleAction:a.OT,children:[(0,P.jsx)("h2",{className:A,children:"Delete Product?"}),(0,P.jsx)("p",{className:C,children:"The product will be permanently deleted. Are you sure?"}),(0,P.jsxs)("div",{className:M,children:[(0,P.jsx)("button",{className:w,onClick:function(){e(m.Z.deleteProductById(t))},children:"Yes"}),(0,P.jsx)("button",{className:Z,onClick:function(){e((0,a.OT)(!1))},children:"No"})]})]})}var I=n(4116),y="ProductList_list__p4MKS",T="ProductList_item__mFImT",F="ProductList_link__VWBD5",k="ProductList_img__q7WBP",W="ProductList_productName__cYpF8",L="ProductList_buttonDelete__9C0Qg",S="ProductList_productCount__9Qnso";function E(){var e=(0,c.v9)(u.t.products),t=(0,c.v9)(u.t.sortedValue),n=(0,c.v9)(u.t.isLoadingProducts),r=(0,c.I0)(),i=(0,c.v9)(d.M.showModalDeleteProduct);(0,o.useEffect)((function(){r(m.Z.getAllProducts())}),[r]);var s=(0,l.Z)(e).sort((function(e,n){return"name"===t?e.name.localeCompare(n.name):"count"===t?n.count-e.count:1}));return(0,P.jsxs)(P.Fragment,{children:[n?(0,P.jsx)(I.Z,{center:!0}):(0,P.jsx)("ul",{className:y,children:s.map((function(e){return(0,P.jsxs)("li",{className:T,children:[(0,P.jsx)("button",{className:L,onClick:function(){var t;t=e._id,r((0,a.O$)(t)),r((0,a.OT)(!0))},children:(0,P.jsx)(p.VPh,{size:20})}),(0,P.jsxs)(_.rU,{className:F,to:"/".concat(e._id),children:[(0,P.jsx)("img",{className:k,src:e.imageUrl,alt:"Img product"}),(0,P.jsx)("h2",{className:W,children:e.name}),(0,P.jsx)("p",{className:S,children:"Count: ".concat(e.count)})]})]},e._id)}))}),i&&(0,P.jsx)(D,{})]})}var V=n(5562),z=n(8308),H=n(2862),K={formWrapper:"AddProductForm_formWrapper__YDqzr",form:"AddProductForm_form__OFEIg",sizeWrapper:"AddProductForm_sizeWrapper__AZP4Z",button:"AddProductForm_button__20iRW",sizeTitle:"AddProductForm_sizeTitle__E-i+J"};function G(){var e=(0,o.useState)(""),t=(0,r.Z)(e,2),n=t[0],a=t[1],d=(0,o.useState)(null),i=(0,r.Z)(d,2),s=i[0],l=i[1],_=(0,o.useState)(""),p=(0,r.Z)(_,2),h=p[0],f=p[1],v=(0,o.useState)(0),g=(0,r.Z)(v,2),j=g[0],x=g[1],N=(0,o.useState)(0),b=(0,r.Z)(N,2),A=b[0],C=b[1],M=(0,o.useState)(0),w=(0,r.Z)(M,2),Z=w[0],D=w[1],I=(0,o.useState)(""),y=(0,r.Z)(I,2),T=y[0],F=y[1],k=(0,c.I0)(),W=(0,c.v9)(u.t.isLoadingAddProduct);return(0,P.jsxs)("div",{className:K.formWrapper,children:[(0,P.jsx)("form",{encType:"multipart/form-data",children:(0,P.jsxs)("label",{className:K.label,children:[(0,P.jsx)("p",{className:K.inputTitle,children:"Product photo"}),(0,P.jsx)("input",{type:"file",name:"productImg",onChange:function(e){var t=e.target.value,n=e.target.files[0],r=t.split(".").at(-1);if("png"!==r&&"jpeg"!==r&&"jpg"!==r)return V.Notify.failure("Invalid image format. It has to be: PNG, JPEG or JPG"),a(""),void l(null);var o=new FormData;o.append("product_img",n),a(t),l(o)},value:n})]})}),(0,P.jsxs)("form",{className:K.form,children:[(0,P.jsx)(H.Z,{inputTitle:"Product Name",type:"text",name:"productName",onChange:function(e){f(e.target.value)},value:h}),(0,P.jsx)(H.Z,{inputTitle:"Count",type:"number",name:"count",onChange:function(e){x(e.target.valueAsNumber)},value:j}),(0,P.jsxs)("div",{children:[(0,P.jsx)("p",{className:K.sizeTitle,children:"Size:"}),(0,P.jsxs)("div",{className:K.sizeWrapper,children:[(0,P.jsx)(H.Z,{inputTitle:"Width",type:"number",name:"width",onChange:function(e){C(e.target.valueAsNumber)},value:A}),(0,P.jsx)(H.Z,{inputTitle:"Height",type:"number",name:"height",onChange:function(e){D(e.target.valueAsNumber)},value:Z})]})]}),(0,P.jsx)(H.Z,{inputTitle:"Weight",type:"text",name:"weight",onChange:function(e){F(e.target.value)},value:T}),(0,P.jsx)("button",{className:K.button,onClick:function(e){e.preventDefault();var t={imgProductFile:s,productName:h,productCount:j,productWidth:A,productHeight:Z,productWeight:T};null!==s&&""!==h&&""!==T?k(m.Z.addProduct(t)):V.Notify.failure("All fields are required")},children:W?(0,P.jsx)(z.a,{height:"20",width:"20"}):"Add product"})]})]})}var U="ModalAddProduct_title__0FXbS",Y=function(){return(0,P.jsxs)(b,{toggleAction:a.XA,children:[(0,P.jsx)("h2",{className:U,children:"Add Product"}),(0,P.jsx)(G,{})]})},q="DropdownMenu_list__D80T-",O="DropdownMenu_item__g0wxK";function B(e){var t=e.handleChooseValue;return(0,P.jsxs)("ul",{className:q,children:[(0,P.jsx)("li",{className:O,onClick:function(){t("name")},children:"name"}),(0,P.jsx)("li",{className:O,onClick:function(){t("count")},children:"count"})]})}var Q="Homepage_titleWrapper__mArgD",X="Homepage_title__PTGen",J="Homepage_buttonAdd__Pw6vj",R="Homepage_dropWrapper__QV54Y",$="Homepage_buttonDrop__2E-+o",ee=function(){var e=(0,o.useState)(!1),t=(0,r.Z)(e,2),n=t[0],l=t[1],_=(0,c.I0)(),m=(0,c.v9)(d.M.showModalAddProduct),p=(0,c.v9)(u.t.sortedValue);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(s.Z,{children:(0,P.jsxs)("div",{children:[(0,P.jsxs)("div",{className:Q,children:[(0,P.jsx)("h1",{className:X,children:"Products"}),(0,P.jsxs)("div",{className:R,children:[(0,P.jsx)("button",{className:$,onClick:function(){l(!n)},children:"Sorted by: ".concat(p)}),n&&(0,P.jsx)(B,{handleChooseValue:function(e){_((0,i.fd)(e)),l(!n)}})]}),(0,P.jsx)("button",{className:J,onClick:function(){_((0,a.XA)(!0))},children:"Add Product"})]}),(0,P.jsx)(E,{})]})}),m&&(0,P.jsx)(Y,{})]})}},6542:function(e,t,n){n.d(t,{M:function(){return r}});var r={showModalAddProduct:function(e){return e.modal.showModalAddProduct},showModalDeleteProduct:function(e){return e.modal.showModalDeleteProduct},getDeletedProductId:function(e){return e.modal.deletedProductId},showModalEditProduct:function(e){return e.modal.showModalEditProduct}}},2745:function(e,t,n){n.d(t,{t:function(){return r}});var r={products:function(e){return e.products.products},sortedValue:function(e){return e.products.sortedValue},currentProduct:function(e){return e.products.currentProduct},isLoadingProducts:function(e){return e.products.isLoading},isLoadingAddProduct:function(e){return e.products.isLoadingAddProduct}}}}]);
//# sourceMappingURL=887.749739cf.chunk.js.map