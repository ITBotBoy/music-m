(this["webpackJsonpreact-music"]=this["webpackJsonpreact-music"]||[]).push([[6],{242:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c}));var a=function(t){return 9<t/1e4?1e4<t/1e4?"".concat((t/1e8).toFixed(1),"\u4ebf"):"".concat(Math.ceil(t/1e4),"\u4e07"):Math.floor(t)},c=function(t,e){return t.findIndex((function(t){return t.id===e.id}))}},247:function(t,e,n){"use strict";var a=n(1),c=n(0),s=n(242),i=(c=n(248),n.n(c));e.a=function(t){var e=t.list,n=t.onItemClick;return Object(a.jsx)("div",{className:[i.a.columnWrapper,"column-wrapper"].join(" "),children:0<e.length&&e.map((function(t){return Object(a.jsxs)("div",{className:[i.a["column-item"],"column-item"].join(" "),onClick:function(){return n(t.id)},children:[Object(a.jsx)("div",{className:i.a["column-img"],"data-play":Object(s.b)(t.playCount),children:Object(a.jsx)("img",{width:"100%",height:"100%",src:"".concat(t.coverImgUrl,"?param=200y200"),alt:""})}),Object(a.jsx)("p",{className:i.a["column-title"],children:t.name.replace(/\s/g," ")})]},t.id)}))})}},248:function(t,e,n){t.exports={columnWrapper:"columnList_columnWrapper__1ZX-2","column-item":"columnList_column-item__vbmqK","column-img":"columnList_column-img__a78tD","column-title":"columnList_column-title__1F8iD"}},256:function(t,e,n){},257:function(t,e,n){},258:function(t,e,n){},265:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(19),s=n(36),i=n(70),r=n(69),o=n(0),u=n(11),l=n(71),h=n.n(l),p=n(22),m=n(251),d=n(242),j=(n(256),n(72)),f=n(64),b=n(77);var y=n(35);var v=n(73),O=n(25),g=(n(106),n(113),n(45)),x=(n(257),n(249)),N=(n(250),n(9)),k=n(247),C=(l=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).addPlay=function(t,e){Object(v.b)(t).then((function(t){var n;t.data.code===O.a&&((n=a.state.songs[e]).image=t.data.songs[0].al.picUrl,a.props.addPlay(n))}))},a.openPlayList=function(t){a.props.history.push({pathname:"".concat(router_prefix,"/playlist/").concat(t)})},a.toggleTab=function(t){0===a.state.songs.length||0===a.state.playlists.length?a.setState({loading:!0,type:t}):a.setState({type:t})},a.search=function(t,e){Object(v.f)(t,e).then((function(t){t.data.code===O.a&&setTimeout((function(){switch(e){case 1:return void a.setState({loading:!1,songs:t.data.result.songs});case 1e3:return void a.setState({loading:!1,playlists:t.data.result.playlists})}}),300)}))},a.musicNoteRef=Object(o.createRef)(),a.state={tabData:[{title:"\u5355\u66f2",type:1},{title:"\u6b4c\u5355",type:1e3}],type:1,songs:[],playlists:[],loading:!0},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"musicAnimation",value:function(t,e){this.startAnimation({x:t,y:e})}},{key:"componentWillReceiveProps",value:function(t){t.query!==this.props.query&&(this.setState({songs:[],playlists:[],loading:!0}),this.search(t.query,this.state.type))}},{key:"shouldComponentUpdate",value:function(t,e){return t.query&&e.type!==this.state.type&&this.search(t.query,e.type),!0}},{key:"render",value:function(){var t=this,e=(r=(this.props.currentMusic,this.state)).tabData,n=r.type,c=r.songs,s=r.playlists,i=r.loading,r=this.props.query;return Object(a.jsxs)("div",{className:h()("search-list",{"mm-none":!r}),children:[Object(a.jsx)("ul",{className:"search-list-tab",children:e.map((function(e){return Object(a.jsx)("li",{className:h()("search-tab-item",{active:n===e.type}),onClick:function(){return t.toggleTab(e.type)},children:Object(a.jsx)("span",{children:e.title})},e.type)}))}),Object(a.jsxs)("div",{className:"search-list-content",children:[Object(a.jsxs)("div",{className:h()("search-content-item",{active:1===n}),children:[i?Object(a.jsx)(j.a,{}):0<c.length&&Object(a.jsx)(g.a,{children:Object(a.jsx)(m.a,{fakeId:(new Date).getTime(),songs:c,collectCount:0,showCollect:!1,pullUpLoading:!1,musicAnimation:this.musicAnimation.bind(this.musicNoteRef.current),showBackground:!1})}),Object(a.jsx)(x.a,{ref:this.musicNoteRef})]}),Object(a.jsx)("div",{className:h()("search-content-item",{active:1e3===n}),children:i?Object(a.jsx)(j.a,{}):0<s.length&&Object(a.jsx)(g.a,{children:Object(a.jsx)(k.a,{list:s,onItemClick:function(e){return t.props.history.push("".concat(router_prefix,"/playlist/").concat(e))}})})})]})]})}}]),n}(o.Component),Object(p.b)((function(t){return{currentMusic:t.currentMusic,playList:t.playList}}),(function(t){return{addPlay:function(e){var n;t((n=e,function(t,e){var a=function(t){return function(t){if(Array.isArray(t))return Object(f.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(b.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e().playList);-1<(e=Object(d.a)(a,n))||(e=a.push(n)-1,t(function(t){return{type:y.c,playList:t}}(a))),t(function(t){return{type:y.a,currentIndex:t}}(e)),t(function(t){return{type:y.b,currentMusic:t}}(a[e])),t(function(t){return{type:y.d,showPlayer:t}}(!0))}))},reloadErrorList:function(){t(Object(N.c)((new Date).getTime()))}}}))(Object(u.g)(l)));n(258),n=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).searchChange=function(t){a.setState({value:t.target.value})},a.onEnter=function(t){13===t.keyCode&&a.setState({query:t.target.value})},a.state={value:"",query:"",type:1,hots:[]},Object(v.g)().then((function(t){t.data.code===O.a&&a.setState({hots:t.data.result.hots})})),a}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=(s=this.state).value,n=s.query,c=s.hots,s=this.props.history;return Object(a.jsxs)("div",{className:"mm-wrapper search",children:[Object(a.jsxs)("nav",{className:"search-head",children:[Object(a.jsx)("div",{className:"search-head-left",onClick:s.goBack}),Object(a.jsx)("div",{className:"search-head-box",children:Object(a.jsx)("input",{className:"search-head-input",type:"text",placeholder:"\u641c\u7d22\u4f60\u559c\u6b22\u7684",value:e,autoFocus:"autofocus",onChange:this.searchChange,onKeyDown:this.onEnter})})]}),Object(a.jsxs)("div",{className:"mm-wrapper",children:[Object(a.jsx)(C,{query:n}),Object(a.jsxs)("div",{className:h()("search-hots",{"mm-none":n}),children:[Object(a.jsx)("h1",{children:"\u70ed\u95e8\u641c\u7d22"}),Object(a.jsx)("ul",{children:0<c.length&&c.map((function(e,n){return Object(a.jsx)("li",{className:"search-hots-item",onClick:function(){t.setState({query:e.first,value:e.first})},children:e.first},n)}))})]})]})]})}}]),n}(o.Component);e.default=Object(u.g)(n)}}]);