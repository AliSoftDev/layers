(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(238)},105:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),i=a(23),o=a(24),s=a(26),u=a(25),m=a(27),d=(a(105),a(81)),p=a.n(d),g=a(83),h=a.n(g),f=a(31),E=a.n(f),v=function(e){return r.a.createElement(p.a,{anchor:"right",open:e.open,onClose:function(){return e.onClose(!1)}},r.a.createElement(h.a,{component:"nav"},r.a.createElement(E.a,{button:!0,onClick:function(){return console.log("info")}},"About us"),r.a.createElement(E.a,{button:!0,onClick:function(){return console.log("Offer")}},"What we offer"),r.a.createElement(E.a,{button:!0,onClick:function(){return console.log("Menu")}},"Our Menu"),r.a.createElement(E.a,{button:!0,onClick:function(){return console.log("location")}},"Location")))},b=a(84),w=a.n(b),y=a(85),_=a.n(y),x=a(87),k=a.n(x),N=a(86),j=a.n(N),O=a(28),A=a.n(O),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showAppBar:!1,showDrawer:!1},a.scrollHandler=function(){window.scrollY>0?a.setState({showAppBar:!0}):a.setState({showAppBar:!1})},a.drawerToggleHandler=function(e){a.setState({showDrawer:e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollHandler)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(w.a,{position:"fixed",style:{backgroundColor:this.state.showAppBar?"#ef5a5a":"transparent",boxShadow:"none",padding:"10px 0px"}},r.a.createElement(_.a,null,r.a.createElement("div",{className:"header_logo"},r.a.createElement("div",{className:"font_comic_sans header_logo_layer"},"Layers"),r.a.createElement("div",{className:"header_logo_text"},"Experience the taste of joy")),r.a.createElement(A.a,{className:"buttons",color:"inherit"},"Home"),r.a.createElement(A.a,{className:"buttons",color:"inherit"},"Menu"),r.a.createElement(A.a,{className:"buttons",color:"inherit"},"Contact Us"),r.a.createElement(j.a,{"aria-label":"menu",color:"inherit",onClick:function(t){return e.drawerToggleHandler(t)}},r.a.createElement(k.a,null)),r.a.createElement(v,{open:this.state.showDrawer,onClose:function(t){return e.drawerToggleHandler(t)}})))}}]),t}(n.Component),S=a(88),H=a.n(S),q=a(89),L=a.n(q),B=a(90),F=a.n(B),T=a(91),D=a.n(T),M=function(){return r.a.createElement("div",{className:"carrousel_wrapper",style:{height:"".concat(window.innerHeight,"px"),overflow:"hidden"}},r.a.createElement(H.a,{dots:!1,infinite:!0,autoplay:!0,speed:400},r.a.createElement("div",null,r.a.createElement("div",{className:"carrousel_image",style:{background:"url(".concat(L.a,")"),height:"".concat(window.innerHeight,"px")}})),r.a.createElement("div",null,r.a.createElement("div",{className:"carrousel_image",style:{background:"url(".concat(F.a,")"),height:"".concat(window.innerHeight,"px")}})),r.a.createElement("div",null,r.a.createElement("div",{className:"carrousel_image",style:{background:"url(".concat(D.a,")"),height:"".concat(window.innerHeight,"px")}}))))},U=function(){return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(M,null),r.a.createElement("div",{className:"business_name"},r.a.createElement("div",{className:"wrapper font_comic_sans"},"Layers")))},P=a(16),W=a.n(P),J=a(48),z=a.n(J),R=function(){return r.a.createElement(W.a,null,r.a.createElement("div",{className:"center_wrapper"},r.a.createElement("h2",null,"About Us"),r.a.createElement("div",{className:"highlight_description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget aliquet nibh praesent tristique. Turpis egestas maecenas pharetra convallis posuere morbi leo. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Enim ut tellus elementum sagittis vitae et leo. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Nec tincidunt praesent semper feugiat nibh sed. Pellentesque elit eget gravida cum sociis natoque. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.")))},Y=a(92),G=a.n(Y),I=function(e){return r.a.createElement("div",null,r.a.createElement(A.a,{href:"",variant:"contained",size:"small",style:{background:e.bck,color:e.color}},e.text))},K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={discountStart:0,discountEnd:20},a.percentage=function(){a.state.discountStart<a.state.discountEnd&&a.setState({discountStart:a.state.discountStart+1})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;setTimeout(function(){e.percentage()},40)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"center_wrapper"},r.a.createElement("div",{className:"discount_wrapper"},r.a.createElement(W.a,{onReveal:function(){return e.percentage()}},r.a.createElement("div",{className:"discount_percentage"},r.a.createElement("span",null,this.state.discountStart,"%"),r.a.createElement("span",null,"OFF"))),r.a.createElement(G.a,{right:!0},r.a.createElement("div",{className:"discount_description"},r.a.createElement("h3",null,"Place your first order and get 20% OFF"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra. Amet venenatis urna cursus eget nunc scelerisque viverra mauris."),r.a.createElement("div",null,r.a.createElement(I,{text:"Place Order",bck:"#d34848",color:"#ffffff",link:""}))))))}}]),t}(n.Component),Q=function(){return r.a.createElement("div",{className:"highlight_wrapper"},r.a.createElement(R,null),r.a.createElement(K,null))},V=a(99),X=a.n(V),Z=a(17),$=a.n(Z),ee=a(93),te=a.n(ee),ae=a(94),ne=a.n(ae),re=a(95),ce=a.n(re),le=a(96),ie=a.n(le),oe=a(97),se=a.n(oe),ue=a(98),me=a.n(ue),de=function(){return r.a.createElement("div",{className:"menu_wrapper"},r.a.createElement(W.a,{left:!0},r.a.createElement("h3",null,"Our Menu")),r.a.createElement(te.a,{clear:!0},r.a.createElement(X.a,{cellHeight:150,cellWidth:150,spacing:5},r.a.createElement($.a,{col:3,style:{height:"300px"}},r.a.createElement("img",{src:z.a})),r.a.createElement($.a,{col:3,style:{height:"300px"}},r.a.createElement("img",{src:ce.a})),r.a.createElement($.a,{col:3,style:{height:"300px"}},r.a.createElement("img",{src:se.a})),r.a.createElement($.a,{col:3,style:{height:"300px"}},r.a.createElement("img",{src:ie.a})),r.a.createElement($.a,{col:3,style:{height:"300px"}},r.a.createElement("img",{src:ne.a})),r.a.createElement($.a,{col:3,style:{height:"300px"}},r.a.createElement("img",{src:me.a})))))},pe=function(){return r.a.createElement("div",{className:"location_wrapper"},r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.6931929206!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1554429731784!5m2!1sen!2suk",width:"100%",height:"500px",frameBorder:"0",allowFullScreen:!0}),r.a.createElement("div",{className:"location_tag"},r.a.createElement("div",null,"Location")))},ge=function(){return r.a.createElement("footer",{className:"bck_black"},r.a.createElement("div",{className:"font_comic_sans"},"Layers"),r.a.createElement("div",{className:"copyright"},"Layers 2019. All rights reserved."))},he=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",style:{height:"1500px",background:""}},r.a.createElement(C,null),r.a.createElement(U,null),r.a.createElement(Q,null),r.a.createElement(de,null),r.a.createElement(pe,null),r.a.createElement(ge,null))}}]),t}(n.Component);l.a.render(r.a.createElement(he,null),document.querySelector("#root"))},48:function(e,t,a){e.exports=a.p+"static/media/crepes.63ade3f5.jpg"},89:function(e,t,a){e.exports=a.p+"static/media/chocolate_waffle.e417d722.jpg"},90:function(e,t,a){e.exports=a.p+"static/media/small_cake.33e266e4.jpg"},91:function(e,t,a){e.exports=a.p+"static/media/strawberry.c62322b2.jpg"},94:function(e,t,a){e.exports=a.p+"static/media/cereal_bowl.2e01bee7.jpg"},95:function(e,t,a){e.exports=a.p+"static/media/chocolate_cake.9a421378.jpg"},96:function(e,t,a){e.exports=a.p+"static/media/black_coffee.23d837b2.jpg"},97:function(e,t,a){e.exports=a.p+"static/media/berries_waffle.d6a23e50.jpg"},98:function(e,t,a){e.exports=a.p+"static/media/smoothie.5750ad26.jpg"}},[[100,1,2]]]);
//# sourceMappingURL=main.7ecfd4d7.chunk.js.map