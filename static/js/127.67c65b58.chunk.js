"use strict";(self.webpackChunkShop_Inforce_Frontend=self.webpackChunkShop_Inforce_Frontend||[]).push([[127],{2862:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(8683),s=n(4925),c="InputField_label__su0GK",o="InputField_inputTitle__gI1yK",d="InputField_inputField__niwfm",i=n(3329),a=["inputTitle"];function u(t){var e=t.inputTitle,n=(0,s.Z)(t,a);return(0,i.jsxs)("label",{className:c,children:[(0,i.jsx)("p",{className:o,children:e}),(0,i.jsx)("input",(0,r.Z)({className:d},n))]})}},9215:function(t,e,n){n.d(e,{Z:function(){return d}});var r="PageWrapper_container__NKNYi",s="PageWrapper_bg_page__dDpv1",c="PageWrapper_wrapper__lKrPY",o=n(3329);function d(t){var e=t.children;return(0,o.jsx)("div",{className:s,children:(0,o.jsx)("div",{className:r,children:(0,o.jsx)("div",{className:c,children:e})})})}},1127:function(t,e,n){n.r(e),n.d(e,{default:function(){return z}});var r=n(2982),s=n(2791),c=n(7689),o=n(9434),d=n(2745),i=n(1755),a=n(6542),u=n(5581),l=n(9215),m="ProductInfo_infoWrapper__FbCcS",_="ProductInfo_img__SntSh",p="ProductInfo_descWrapper__2SQW4",h="ProductInfo_titleInfo__hAwXv",f="ProductInfo_nameProperty__CHnDU",x=n(3329);function j(t){var e=t.product,n=e.imageUrl,r=e.name,s=e.count,c=e.size,o=e.weight;return(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)("img",{className:_,src:n,alt:r}),(0,x.jsxs)("div",{className:p,children:[(0,x.jsx)("h2",{className:h,children:"Product information"}),(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{className:f,children:"Count:"}),s]}),(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{className:f,children:"Size:"}),"".concat(c.width," x ").concat(c.height)]}),(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{className:f,children:"Weight:"}),o]})]})]})}var P=n(885),v=n(2862),N=n(8820),C="CommentsList_sectionWrapper__vnvo7",g="CommentsList_commentsWrapper__8WRJ0",I="CommentsList_titleComments__LTDGQ",b="CommentsList_listComments__Oqqu3",w="CommentsList_itemComment__Y5xuy",L="CommentsList_description__m29yd",Z="CommentsList_date__K3JMc",W="CommentsList_form__RnZNY",M="CommentsList_btnSubmit__rdzzA",S="CommentsList_buttonDelete__101Ab";function D(t){var e=t.comments,n=t.productId,r=(0,s.useState)(""),c=(0,P.Z)(r,2),d=c[0],a=c[1],u=(0,o.I0)();return(0,x.jsxs)("div",{className:C,children:[(0,x.jsx)("h2",{className:I,children:"Comments"}),(0,x.jsxs)("div",{className:g,children:[(0,x.jsx)("ul",{className:b,children:e.map((function(t){return(0,x.jsxs)("li",{className:w,children:[(0,x.jsx)("p",{className:L,children:t.description}),(0,x.jsx)("p",{className:Z,children:t.date}),(0,x.jsx)("button",{className:S,onClick:function(){var e;e=t._id,u(i.Z.deleteCommentByProductId({productId:n,commentId:e}))},children:(0,x.jsx)(N.VPh,{size:20})})]},t._id)}))}),(0,x.jsxs)("form",{className:W,children:[(0,x.jsx)(v.Z,{inputTitle:"Add comment",type:"text",name:"comment",onChange:function(t){a(t.target.value)},value:d}),(0,x.jsx)("button",{className:M,onClick:function(t){t.preventDefault(),u(i.Z.addCommentByProductId({productId:n,comment:d})),a("")},children:"Add comment"})]})]})]})}function k(t){t.product;return(0,x.jsx)("div",{children:"sasd"})}var y="ProductPage_productWrapper__sURpd",F="ProductPage_titleWrapper__5fSDa",A="ProductPage_title__TzV2g",T="ProductPage_buttonEdit__k5Z2v";function z(){var t=(0,o.v9)(d.t.currentProduct),e=(0,o.I0)(),n=(0,o.v9)(a.M.showModalEditProduct),m=(0,c.TH)(),_=(0,r.Z)(m.pathname);_.shift();var p=_.join("");(0,s.useEffect)((function(){e(i.Z.getProductById(p))}),[e,p]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l.Z,{children:t&&(0,x.jsxs)("div",{className:y,children:[(0,x.jsxs)("div",{className:F,children:[(0,x.jsx)("h1",{className:A,children:t.name}),(0,x.jsx)("button",{className:T,onClick:function(){e((0,u.Be)(!0))},children:"Edit Product"})]}),(0,x.jsx)(j,{product:t}),(0,x.jsx)(D,{comments:t.comments,productId:p})]})}),n&&(0,x.jsx)(k,{product:t})]})}},6542:function(t,e,n){n.d(e,{M:function(){return r}});var r={showModalAddProduct:function(t){return t.modal.showModalAddProduct},showModalDeleteProduct:function(t){return t.modal.showModalDeleteProduct},getDeletedProductId:function(t){return t.modal.deletedProductId},showModalEditProduct:function(t){return t.modal.showModalEditProduct}}},2745:function(t,e,n){n.d(e,{t:function(){return r}});var r={products:function(t){return t.products.products},isLoadingProducts:function(t){return t.products.isLoading},sortedValue:function(t){return t.products.sortedValue},currentProduct:function(t){return t.products.currentProduct}}}}]);
//# sourceMappingURL=127.67c65b58.chunk.js.map