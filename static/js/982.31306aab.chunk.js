"use strict";(self.webpackChunkShop_Inforce_Frontend=self.webpackChunkShop_Inforce_Frontend||[]).push([[982],{2862:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(8683),o=n(4925),i="InputField_label__su0GK",s="InputField_inputTitle__gI1yK",c="InputField_inputField__niwfm",a=n(3329),d=["inputTitle"];function u(e){var t=e.inputTitle,n=(0,o.Z)(e,d);return(0,a.jsxs)("label",{className:i,children:[(0,a.jsx)("p",{className:s,children:t}),(0,a.jsx)("input",(0,r.Z)({className:c},n))]})}},9215:function(e,t,n){n.d(t,{Z:function(){return c}});var r="PageWrapper_container__NKNYi",o="PageWrapper_bg_page__dDpv1",i="PageWrapper_wrapper__lKrPY",s=n(3329);function c(e){var t=e.children;return(0,s.jsx)("div",{className:o,children:(0,s.jsx)("div",{className:r,children:(0,s.jsx)("div",{className:i,children:t})})})}},1982:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var r=n(2791),o=n(7689),i=n(9434),s=n(2745),c=n(1755),a=n(6542),d=n(5581),u=n(9215),l="ProductInfo_infoWrapper__FbCcS",m="ProductInfo_img__SntSh",_="ProductInfo_descWrapper__2SQW4",p="ProductInfo_titleInfo__hAwXv",h="ProductInfo_nameProperty__CHnDU",f=n(3329);function v(e){var t=e.product,n=t.imageUrl,r=t.name,o=t.count,i=t.size,s=t.weight;return(0,f.jsxs)("div",{className:l,children:[(0,f.jsx)("img",{className:m,src:n,alt:r}),(0,f.jsxs)("div",{className:_,children:[(0,f.jsx)("h2",{className:p,children:"Product information"}),(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{className:h,children:"Count:"}),o]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{className:h,children:"Size:"}),"".concat(i.width," x ").concat(i.height)]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{className:h,children:"Weight:"}),s]})]})]})}var x=n(885),j=n(2862),g=n(8820),P="CommentsList_sectionWrapper__vnvo7",N="CommentsList_commentsWrapper__8WRJ0",C="CommentsList_titleComments__LTDGQ",b="CommentsList_listComments__Oqqu3",I="CommentsList_itemComment__Y5xuy",y="CommentsList_description__m29yd",E="CommentsList_date__K3JMc",Z="CommentsList_form__RnZNY",w="CommentsList_btnSubmit__rdzzA",W="CommentsList_buttonDelete__101Ab";function S(e){var t=e.comments,n=e.productId,o=(0,r.useState)(""),s=(0,x.Z)(o,2),a=s[0],d=s[1],u=(0,i.I0)();return(0,f.jsxs)("div",{className:P,children:[(0,f.jsx)("h2",{className:C,children:"Comments"}),(0,f.jsxs)("div",{className:N,children:[(0,f.jsx)("ul",{className:b,children:t.map((function(e){return(0,f.jsxs)("li",{className:I,children:[(0,f.jsx)("p",{className:y,children:e.description}),(0,f.jsx)("p",{className:E,children:e.date}),(0,f.jsx)("button",{className:W,onClick:function(){var t;t=e._id,u(c.Z.deleteCommentByProductId({productId:n,commentId:t}))},children:(0,f.jsx)(g.VPh,{size:20})})]},e._id)}))}),(0,f.jsxs)("form",{className:Z,children:[(0,f.jsx)(j.Z,{inputTitle:"Add comment",type:"text",name:"comment",onChange:function(e){d(e.target.value)},value:a}),(0,f.jsx)("button",{className:w,onClick:function(e){e.preventDefault(),u(c.Z.addCommentByProductId({productId:n,comment:a})),d("")},children:"Add comment"})]})]})]})}var F=n(4164),T=n(9126),A="ModalUniversalEdit_modal__backdrop__hE5AA",z="ModalUniversalEdit_modal__content__uo9GY",L="ModalUniversalEdit_btnClose__QF6br",M="ModalUniversalEdit_btnClose__icon__5XE3R",k=document.querySelector("#modal-root"),D=function(e){var t=e.toggleAction,n=e.children,o=(0,i.I0)();(0,r.useEffect)((function(){return document.addEventListener("keydown",c),document.body.style.overflow="hidden",function(){document.removeEventListener("keydown",c),document.body.style.overflow=""}}));var s=function(){o(t(!1))},c=function(e){"Escape"===e.code&&s()};return(0,F.createPortal)((0,f.jsx)("div",{className:A,onClick:function(e){e.currentTarget===e.target&&s()},type:"flipInX",children:(0,f.jsxs)("div",{className:z,children:[(0,f.jsx)("button",{className:L,onClick:s,children:(0,f.jsx)(T.C7Q,{className:M})}),n]})}),k)},U=n(5562),B={formWrapper:"EditProductForm_formWrapper__bqi-5",form:"EditProductForm_form__eUxtO",sizeWrapper:"EditProductForm_sizeWrapper__JIAin",button:"EditProductForm_button__hBFil",sizeTitle:"EditProductForm_sizeTitle__0r3p3"};function G(){var e=(0,i.v9)(s.t.currentProduct),t=(0,r.useState)(""),n=(0,x.Z)(t,2),o=n[0],a=n[1],d=(0,r.useState)(null),u=(0,x.Z)(d,2),l=u[0],m=u[1],_=(0,r.useState)(e.name),p=(0,x.Z)(_,2),h=p[0],v=p[1],g=(0,r.useState)(e.count),P=(0,x.Z)(g,2),N=P[0],C=P[1],b=(0,r.useState)(e.size.width),I=(0,x.Z)(b,2),y=I[0],E=I[1],Z=(0,r.useState)(e.size.height),w=(0,x.Z)(Z,2),W=w[0],S=w[1],F=(0,r.useState)(e.weight),T=(0,x.Z)(F,2),A=T[0],z=T[1],L=(0,i.I0)();return(0,f.jsxs)("div",{className:B.formWrapper,children:[(0,f.jsx)("form",{encType:"multipart/form-data",children:(0,f.jsxs)("label",{className:B.label,children:[(0,f.jsx)("p",{className:B.inputTitle,children:"Product photo"}),(0,f.jsx)("input",{type:"file",name:"productImg",onChange:function(e){var t=e.target.value,n=e.target.files[0],r=t.split(".").at(-1);if("png"!==r&&"jpeg"!==r&&"jpg"!==r)return U.Notify.failure("Invalid image format. It has to be: PNG, JPEG or JPG"),a(""),void m(null);var o=new FormData;o.append("product_img",n),a(t),m(o)},value:o})]})}),(0,f.jsxs)("form",{className:B.form,children:[(0,f.jsx)(j.Z,{inputTitle:"Product Name",type:"text",name:"productName",onChange:function(e){v(e.target.value)},value:h}),(0,f.jsx)(j.Z,{inputTitle:"Count",type:"number",name:"count",onChange:function(e){C(e.target.valueAsNumber)},value:N}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:B.sizeTitle,children:"Size:"}),(0,f.jsxs)("div",{className:B.sizeWrapper,children:[(0,f.jsx)(j.Z,{inputTitle:"Width",type:"number",name:"width",onChange:function(e){E(e.target.valueAsNumber)},value:y}),(0,f.jsx)(j.Z,{inputTitle:"Height",type:"number",name:"height",onChange:function(e){S(e.target.valueAsNumber)},value:W})]})]}),(0,f.jsx)(j.Z,{inputTitle:"Weight",type:"text",name:"weight",onChange:function(e){z(e.target.value)},value:A}),(0,f.jsx)("button",{className:B.button,onClick:function(t){t.preventDefault();var n={imgProductFile:l,imageUrl:e.imageUrl,productName:h,productCount:N,productWidth:y,productHeight:W,productWeight:A,productId:e._id};""!==h&&""!==A?L(c.Z.editProductById(n)):U.Notify.failure("All fields are required")},children:"Edit product"})]})]})}var q="ModalEditProduct_title__DFuRw",J=function(){return(0,f.jsxs)(D,{toggleAction:d.Be,children:[(0,f.jsx)("h2",{className:q,children:"Edit Product"}),(0,f.jsx)(G,{})]})},K="ProductPage_productWrapper__sURpd",R="ProductPage_titleWrapper__5fSDa",Y="ProductPage_title__TzV2g",Q="ProductPage_buttonEdit__k5Z2v";function V(){var e=(0,i.v9)(s.t.currentProduct),t=(0,i.I0)(),n=(0,i.v9)(a.M.showModalEditProduct),l=(0,o.UO)().productId;(0,r.useEffect)((function(){t(c.Z.getProductById(l))}),[t,l]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.Z,{children:e&&(0,f.jsxs)("div",{className:K,children:[(0,f.jsxs)("div",{className:R,children:[(0,f.jsx)("h1",{className:Y,children:e.name}),(0,f.jsx)("button",{className:Q,onClick:function(){t((0,d.Be)(!0))},children:"Edit Product"})]}),(0,f.jsx)(v,{product:e}),(0,f.jsx)(S,{comments:e.comments,productId:l})]})}),n&&(0,f.jsx)(J,{})]})}},6542:function(e,t,n){n.d(t,{M:function(){return r}});var r={showModalAddProduct:function(e){return e.modal.showModalAddProduct},showModalDeleteProduct:function(e){return e.modal.showModalDeleteProduct},getDeletedProductId:function(e){return e.modal.deletedProductId},showModalEditProduct:function(e){return e.modal.showModalEditProduct}}},2745:function(e,t,n){n.d(t,{t:function(){return r}});var r={products:function(e){return e.products.products},isLoadingProducts:function(e){return e.products.isLoading},sortedValue:function(e){return e.products.sortedValue},currentProduct:function(e){return e.products.currentProduct}}}}]);
//# sourceMappingURL=982.31306aab.chunk.js.map