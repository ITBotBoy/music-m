(this["webpackJsonpreact-music"]=this["webpackJsonpreact-music"]||[]).push([[4],{244:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var s=function(e){return 9<e/1e4?1e4<e/1e4?"".concat((e/1e8).toFixed(1),"\u4ebf"):"".concat(Math.ceil(e/1e4),"\u4e07"):Math.floor(e)},i=function(e,t){return e.findIndex((function(e){return e.id===t.id}))}},245:function(e,t,n){"use strict";var s=n(19),i=n(36),r=n(70),o=n(69),l=n(0),c=n(21),a=n.n(c),u=n(74),p=(c=n(246),n(1)),h={observeDOM:!0,click:!0,probeType:1,scrollbar:!1,pullDownRefresh:!1,pullUpLoad:!1};(l=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).onPullingDown=function(){},i.onPullingUp=function(){i.setState({isPullUpLoad:!0}),i.props.pullUpLoad()},i.state={isPullingDown:!1,isPullUpLoad:!1},i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.initScroll()}},{key:"shouldComponentUpdate",value:function(e,t){var n;return(this.scroll.options.pullDownRefresh||this.scroll.options.pullUpLoad)&&0<e.children[0].props.list.length&&(n=e.children[0].props.list,e=this.props.children[0].props.list,n.length!==e.length&&this.refresh()),!0}},{key:"componentWillUnmount",value:function(){this.scroll.destroy(),clearTimeout(this.refreshTimer)}},{key:"initScroll",value:function(){var e;this.scrollWrapper=a.a.findDOMNode(this.refs.scrollWrapper),this.scroll||(e=Object.assign({},h,this.props.options),this.scroll=new u.a(this.scrollWrapper,e)),this.props.options.pullDownRefresh&&this.scroll.on("pullingDown",this.onPullingDown),this.props.options.pullUpLoad&&this.scroll.on("pullingUp",this.onPullingUp)}},{key:"refresh",value:function(){var e=this;clearTimeout(this.refreshTimer),this.refreshTimer=setTimeout((function(){e.forceUpdate(!0)}),this.props.refreshDelay)}},{key:"forceUpdate",value:function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];this.props.options.pullDownRefresh&&this.state.isPullingDown?this.setState({isPullingDown:!1}):(this.props.options.pullUpLoad&&this.state.isPullUpLoad&&(this.setState({isPullUpLoad:!1}),this.scroll.finishPullUp()),e&&this.scroll.refresh())}},{key:"render",value:function(){var e=void 0===(e=this.props.className)?"":e;return Object(p.jsx)("div",{className:"scroll-wrapper ".concat(e),ref:"scrollWrapper",children:Object(p.jsx)("div",{children:this.props.children})})}}]),n}(l.Component)).defaultProps={options:{},refreshDelay:20},t.a=l},246:function(e,t,n){},247:function(e,t,n){"use strict";var s=n(0),i=n(244),r=(s=n(248),n.n(s)),o=n(1);t.a=function(e){var t=e.list,n=e.onItemClick;return Object(o.jsx)("div",{className:[r.a.columnWrapper,"column-wrapper"].join(" "),children:0<t.length&&t.map((function(e){return Object(o.jsxs)("div",{className:[r.a["column-item"],"column-item"].join(" "),onClick:function(){return n(e.id)},children:[Object(o.jsx)("div",{className:r.a["column-img"],"data-play":Object(i.b)(e.playCount),children:Object(o.jsx)("img",{width:"100%",height:"100%",src:"".concat(e.coverImgUrl,"?param=200y200"),alt:""})}),Object(o.jsx)("p",{className:r.a["column-title"],children:e.name.replace(/\s/g," ")})]},e.id)}))})}},248:function(e,t,n){e.exports={columnWrapper:"columnList_columnWrapper__3uAjL","column-item":"columnList_column-item__3Cq0r","column-img":"columnList_column-img__zQtu1","column-title":"columnList_column-title__3TmDo"}},253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},267:function(e,t,n){"use strict";function s(e){var t=e.data,n=e.currentIndex;return Object(f.jsx)("div",{className:"dots",children:0<t.length&&t.map((function(e,t){return Object(f.jsx)("span",{className:d()("dot",{on:t===n})},t)}))})}n.r(t);var i=n(19),r=n(36),o=n(70),l=n(69),c=n(0),a=n(31),u=n(21),p=n.n(u),h=n(74),d=(u=n(71),n.n(u)),f=(n(253),n(1));(u=(n(254),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e))._play=function(){clearTimeout(s.timer),s.timer=setTimeout((function(){s.slide&&s.slide.next()}),s.props.interval)},s._onScrollEnd=function(){var e=s.slide.getCurrentPage().pageX;s.setState({currentPageIndex:e}),s.props.autoPlay&&s._play()},s.state={currentPageIndex:0},s}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.slider||(this._initWdith(),this._initSlide(),this.props.autoPlay&&this._play())}},{key:"componentWillUnmount",value:function(){this.slide&&this.slide.destroy()}},{key:"refresh",value:function(){if(null===this.slide)return!1;this.slide&&this.slide.refresh()}},{key:"_initSlide",value:function(){var e=this,t=p.a.findDOMNode(this.refs.sildeWrapper);this.slide=new h.a(t,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.props.loop,threshold:this.props.threshold,speed:this.props.speed},bounce:!this.props.loop,stopPropagation:!0}),this.slide.goToPage(this.state.currentPageIndex,0,0),this.slide.on("scrollEnd",this._onScrollEnd),t.removeEventListener("touchend",this._touchEndEvent,!1),this._touchEndEvent=function(){e.props.autoPlay&&e._play()},t.addEventListener("touchend",this._touchEndEvent,!1),this.slide.on("beforeScrollStart",(function(){e.props.autoPlay&&clearTimeout(e.timer)}))}},{key:"_initWdith",value:function(){var e=p.a.findDOMNode(this.refs.sildeWrapper).clientWidth,t=p.a.findDOMNode(this.refs.sildeList),n=0;if(t.children.length)for(var s=0;s<t.children.length;s++)t.children[s].style.width="".concat(e,"px"),n+=e;this.props.loop&&1<t.children.length&&(n+=2*e),p.a.findDOMNode(this.refs.sildeList).style.width="".concat(n,"px")}},{key:"render",value:function(){var e=this.props.data;return Object(f.jsxs)("div",{className:"silde-wrapper",ref:"sildeWrapper",children:[Object(f.jsx)("div",{className:"slide-group",ref:"sildeList",children:e&&0<e.length&&e.map((function(e,t){return Object(f.jsx)("div",{className:"slide-item",children:Object(f.jsx)("img",{src:e.imageUrl,alt:""})},e.targetId+t)}))}),Object(f.jsx)(s,{data:e,currentIndex:this.state.currentPageIndex})]})}}]),n}(c.Component))).defaultProps={interval:4e3,loop:!0,autoPlay:!0,threshold:.1,speed:400};var m=u,j=n(72),b=n(245),v=n(247),O=n(73),x=n(25),g=n(113);n(255),c=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(i.a)(this,n),(e=t.call(this,e)).state={banners:[],personalized:[]},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(O.a)().then((function(t){t.data.code===x.a&&e.setState({banners:t.data.banners})})),Object(O.c)().then((function(t){t.data.code===x.a&&e.setState({personalized:Object(g.b)(t.data.result)})}))}},{key:"render",value:function(){var e=this,t=(n=this.state).banners,n=n.personalized;return Object(f.jsx)("div",{className:"discover mm-wrapper",children:0<n.length&&0<t.length?Object(f.jsxs)(b.a,{className:"Recommend",options:{bounce:!1},children:[this.state.banners&&Object(f.jsx)("div",{className:"banner",children:Object(f.jsx)(m,{ref:"slide",data:this.state.banners})}),Object(f.jsxs)("div",{className:"menu",children:[Object(f.jsxs)(a.b,{className:"menu-item",to:router_prefix+"/toplist",children:[Object(f.jsx)("div",{className:"menuIcon iconfont iconpaihangbang--"}),Object(f.jsx)("p",{children:"\u6392\u884c\u699c"})]}),Object(f.jsxs)(a.b,{className:"menu-item",to:router_prefix+"/sheetlist",children:[Object(f.jsx)("div",{className:"menuIcon iconfont icongedan"}),Object(f.jsx)("p",{children:"\u6b4c\u5355"})]})]}),Object(f.jsxs)("div",{className:"lcrlist",children:[Object(f.jsxs)("h1",{className:"lcrlist-hd",onClick:function(){e.props.history.push("".concat(router_prefix,"/sheetlist"))},children:[Object(f.jsx)("span",{children:"\u63a8\u8350\u6b4c\u5355"}),Object(f.jsx)("i",{className:"iconfont icontubiao-"})]}),Object(f.jsx)(v.a,{list:n,onItemClick:function(t){return e.props.history.push("".concat(router_prefix,"/playlist/").concat(t))}})]})]}):Object(f.jsx)(j.a,{})})}}]),n}(c.Component);t.default=c}}]);