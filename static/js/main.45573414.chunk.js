(this["webpackJsonpmbents.github.io"]=this["webpackJsonpmbents.github.io"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(9),c=a.n(i),r=(a(91),a(55)),o=a(66),l=a(23),h=a(125),d=a(33),b=a(136),j=a(137),p=a(138),u=a(139),m=a(43),O=a(140),x=a(147),g=a(141),f=a(142),w=a(143),y=a(145),v=a(146),N=a(37),k=a(11),I=(a(92),a(5)),S=a(71),C=a.n(S),B=a(75),A=a.n(B),T=a(74),H=a.n(T),R=a(144),G=a(76),E=a.n(G),F=a(78),P=a.n(F),L=a(79),M=a.n(L),U=a(77),K=a.n(U),W=a(72),J=a.n(W),q=a(73),z=a.n(q),D=a(148),V=a(127),Y=a(104),X=a(129),Q=a(2),Z=Object(h.a)((function(){return Object(D.a)({paper:{padding:"10px",minHeight:"50vh",backgroundColor:"#99ccff"}})})),$=function(){var e=Z();return Object(Q.jsxs)(V.a,{container:!0,spacing:3,children:[Object(Q.jsx)(V.a,{item:!0,xs:4,children:Object(Q.jsxs)(Y.a,{elevation:3,className:e.paper,children:[Object(Q.jsx)(X.a,{variant:"h6",color:"inherit",href:"/#/about",children:"ABOUT"}),Object(Q.jsx)(m.a,{variant:"body1",children:"What is going on with this website?"})]})}),Object(Q.jsx)(V.a,{item:!0,xs:4,children:Object(Q.jsxs)(Y.a,{elevation:3,className:e.paper,children:[Object(Q.jsx)(X.a,{variant:"h6",color:"inherit",href:"/#/ballparks",children:"BALLPARKS"}),Object(Q.jsx)(m.a,{variant:"body1",children:"Check out some ballparks!"})]})}),Object(Q.jsx)(V.a,{item:!0,xs:4,children:Object(Q.jsxs)(Y.a,{elevation:3,className:e.paper,children:[Object(Q.jsx)(X.a,{variant:"h6",color:"inherit",href:"/#/franchises",children:"FRANCHISES"}),Object(Q.jsx)(m.a,{variant:"body1",children:"Look up current and historical baseball franchises."})]})})]})},_=a(130),ee=a(131),te=a(132),ae=a(133),se=a(134),ne=a(135),ie=a(54),ce=Object(s.createContext)(null);var re=Object(h.a)((function(e){return Object(D.a)({head:{backgroundColor:e.palette.info.main,color:e.palette.common.white}})})),oe=Object(ie.a)((function(){var e,t,a=function(e){var t=Object(s.useContext)(ce);return e?e(t):t}(),i=re();return Object(Q.jsxs)(n.a.Fragment,{children:[Object(Q.jsx)("h4",{children:"B A L L P A R K S"}),Object(Q.jsx)(_.a,{component:Y.a,children:Object(Q.jsxs)(ee.a,{size:"small","aria-label":"ballparks table",children:[Object(Q.jsx)(te.a,{children:Object(Q.jsxs)(ae.a,{className:i.head,children:[Object(Q.jsx)(se.a,{children:"Ballpark Name"}),Object(Q.jsx)(se.a,{children:"City"}),Object(Q.jsx)(se.a,{children:"State"})]})}),Object(Q.jsx)(ne.a,{children:(null===(e=a.ballparks)||void 0===e?void 0:e.length)>0?null===(t=a.ballparks)||void 0===t?void 0:t.map((function(e,t){return Object(Q.jsxs)(ae.a,{children:[Object(Q.jsx)(se.a,{children:e.NAME}),Object(Q.jsx)(se.a,{children:e.CITY}),Object(Q.jsx)(se.a,{children:e.STATE})]},"".concat(e.AKA,"-").concat(t))})):Object(Q.jsx)(ae.a,{children:Object(Q.jsx)(se.a,{colSpan:3,children:Object(Q.jsx)(m.a,{variant:"h6",children:"No data to display"})})})})]})})]})})),le=Object(ie.a)((function(){return Object(Q.jsx)("h4",{children:"F R A N C H I S E S"})})),he=Object(h.a)((function(){return Object(D.a)({sectionHeader:{fontFamily:'"Courier New",Courier,monospace',fontWeight:"bold"},sectionBreak:{marginBottom:"20px"},paper:{padding:"20px",margin:"20px 20px",backgroundColor:"#e8e8e8"},container:{width:"65%"},code:{backgroundColor:"#e8e8e8",borderRadius:"5px",padding:"5px"},dateStamp:{flex:1}})})),de=function(){var e=he();return Object(Q.jsxs)("div",{className:e.container,children:[Object(Q.jsx)(m.a,{align:"right",className:e.dateStamp,children:"February 24, 2021"}),Object(Q.jsx)(m.a,{variant:"h5",className:e.sectionHeader,children:"What's all this then"}),Object(Q.jsx)(m.a,{variant:"body1",className:e.sectionBreak,children:"For quite a while I've been wanting to build a web application that makes use of baseball data. I had what seemed like a pretty simple goal for it: I wanted it to be something that I would use to look up baseball data or statistics or the boxscore from a certain game. But I could never quite get a fully functional application running. I would start out pretty well by scraping or downloading/parsing/cleaning data from somewhere and then run out of steam when it came time to figure out how to host the data, let alone come up with a way to show and interact with it. Now don't get me wrong, I don't think that what I describe below is the fully-functional baseball application of my dreams. But what I've put together is a good step in that direction. I think it's a solid foundation and it's something that I hope to continue to work on."}),Object(Q.jsx)(m.a,{variant:"h5",className:e.sectionHeader,children:"Let's get started"}),Object(Q.jsxs)(m.a,{variant:"body1",className:e.sectionBreak,children:["The entire system\u2014if you will\u2014is currently made up of two different GitHub repositories:",Object(Q.jsxs)(Y.a,{elevation:3,className:e.paper,children:[Object(Q.jsx)(X.a,{href:"https://github.com/mbents/mbents.github.io",children:"https://github.com/mbents/mbents.github.io"}),Object(Q.jsx)("br",{}),Object(Q.jsx)(X.a,{href:"https://github.com/mbents/rs-data",children:"https://github.com/mbents/rs-data"})]}),"The web application was created using Create React App (",Object(Q.jsx)(X.a,{href:"https://github.com/facebook/create-react-app",children:"https://github.com/facebook/create-react-app"}),") and is hosted on GitHub using GitHub Pages. I found a lot of different tutorials for doing this. Here are the ones that I found most useful:",Object(Q.jsxs)(Y.a,{elevation:3,className:e.paper,children:[Object(Q.jsx)(X.a,{href:"https://create-react-app.dev/docs/deployment/#github-pages",children:"https://create-react-app.dev/docs/deployment/#github-pages"}),Object(Q.jsx)("br",{}),Object(Q.jsx)(X.a,{href:"https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f",children:"https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f"})]}),Object(Q.jsx)("span",{className:e.code,children:"gh-pages"})," is a package that helps publish your website. There's a handy deploy step that packages up your site's files and pushes them to a branch on GitHub. My web application also uses ",Object(Q.jsx)("span",{className:e.code,children:"mobx-state-tree"})," for state management and ",Object(Q.jsx)("span",{className:e.code,children:"Material-UI"})," to build the UI."]}),Object(Q.jsxs)(m.a,{variant:"body1",className:e.sectionBreak,children:["The backend data is also hosted via GitHub Pages. Basically it's a static API that only serves data to ",Object(Q.jsx)("span",{className:e.code,children:"GET"})," requests, but that's really all I needed and it's easy to do. I originally got the idea from this post:",Object(Q.jsx)(Y.a,{elevation:3,className:e.paper,children:Object(Q.jsx)(X.a,{href:"https://dev.to/matmooredev/can-you-host-a-read-only-api-on-github-pages-1jib",children:"https://dev.to/matmooredev/can-you-host-a-read-only-api-on-github-pages-1jib"})}),"The repository itself is a collection of historical baseball data that I downloaded from a website called Retrosheet (",Object(Q.jsx)(X.a,{href:"https://www.retrosheet.org/",children:"https://www.retrosheet.org/"}),"). I parsed the event files using a couple utilities that I had created several years ago:",Object(Q.jsxs)(Y.a,{elevation:3,className:e.paper,children:[Object(Q.jsx)(X.a,{href:"https://github.com/mbents/retrosheet-download-dotnet",children:"https://github.com/mbents/retrosheet-download-dotnet"}),Object(Q.jsx)("br",{}),Object(Q.jsx)(X.a,{href:"https://github.com/mbents/csv-to-json",children:"https://github.com/mbents/csv-to-json"})]}),"They both still worked, which was pretty cool! The first project was written in C# and uses an executable found on the Retrosheet website called ",Object(Q.jsx)("span",{className:e.code,children:"BGAME"})," to parse the files into CSV files. The second utility is a Node.js application that converts the CSV files to JSON. After everything was parsed and I pushed the changes, I had a basic API up and running."]}),Object(Q.jsx)(m.a,{variant:"h5",className:e.sectionHeader,children:"Gotcha!"}),Object(Q.jsxs)(m.a,{variant:"body1",className:e.sectionBreak,children:["A nice thing, in my opinion, about doing it this way is I can access the data just using the URL to the directory. For example, this will return JSON data:",Object(Q.jsx)(Y.a,{elevation:3,className:e.paper,children:Object(Q.jsx)(X.a,{href:"https://mbents.github.io/rs-data/ballparks/",children:"https://mbents.github.io/rs-data/ballparks/"})}),"I don't need to specify ",Object(Q.jsx)("span",{className:e.code,children:"index.json"})," in the URL\u2014which is the file located in the ",Object(Q.jsx)("span",{className:e.code,children:"/ballparks"})," directory\u2014but it's important that it's there. Because I'm fetching the directory and the directory contains a file named ",Object(Q.jsx)("span",{className:e.code,children:"index.json"}),", the data returned will be the contents of that file. This is a nice (possibly undocumented?) feature of GitHub, apparently."]}),Object(Q.jsxs)(m.a,{variant:"body1",className:e.sectionBreak,children:["There are a couple things to take note of from this guide:",Object(Q.jsx)(Y.a,{elevation:3,className:e.paper,children:Object(Q.jsx)(X.a,{href:"https://create-react-app.dev/docs/deployment/#github-pages",children:"https://create-react-app.dev/docs/deployment/#github-pages"})}),"If you want to point a domain to your GitHub Pages project, you'll have to add a ",Object(Q.jsx)("span",{className:e.code,children:"CNAME"})," file to your repository, as noted in Step 5.",Object(Q.jsx)("br",{}),"Also, if your React application uses client-side routing, you might need to make some changes. My app uses ",Object(Q.jsx)("span",{className:e.code,children:"React Router"})," and I switched from the common ",Object(Q.jsx)("span",{className:e.code,children:"Router"})," to use ",Object(Q.jsx)("span",{className:e.code,children:"HashRouter"}),".",Object(Q.jsx)("br",{}),"One more thing: I strongly recommend NOT tweaking the ",Object(Q.jsx)("span",{className:e.code,children:"package.json"})," scripts to push deployments to your main branch. In hindsight, it seems pretty obvious. However, at the time, I didn't consider that all my React code was going to be overwritten by the ",Object(Q.jsx)("span",{className:e.code,children:"gh-pages"})," deployment process."]}),Object(Q.jsx)(m.a,{variant:"h5",className:e.sectionHeader,children:"Conclusion"}),Object(Q.jsx)(m.a,{variant:"body1",className:e.sectionBreak,children:"I certainly didn't intend for this to be a step-by-step guide for creating a React application using a GitHub Pages repository as an API, but here we are. I mainly put this together because I know that, given the way I start and stop my personal projects, at some point I will need to reference this material again. If you're here and you aren't me, then I hope that this was useful to you!"})]})},be=a(60),je=a.n(be),pe=a(80),ue=a(15),me=ue.c.model("Ballpark",{PARKID:ue.c.string,NAME:ue.c.string,AKA:ue.c.string,CITY:ue.c.string,STATE:ue.c.string,START:ue.c.string,END:ue.c.string,LEAGUE:ue.c.string,NOTES:ue.c.string}),Oe=ue.c.model("BallparkStore",{ballparks:ue.c.optional(ue.c.maybeNull(ue.c.array(me)),null)}).actions((function(e){var t=Object(ue.b)(je.a.mark((function t(){var a,s;return je.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.mikebents.com/rs-data/ballparks/");case 2:return a=t.sent,t.next=5,a.json();case 5:s=t.sent,Object(ue.a)(e,{ballparks:Object(pe.a)(s)});case 7:case"end":return t.stop()}}),t)})));return{load:t,afterCreate:function(){t()}}})),xe=function(e){var t=e.children,a=Object(s.useState)(Oe.create({ballparks:[]})),n=Object(r.a)(a,1)[0],i=ce.Provider;return Object(Q.jsx)(i,{value:n,children:t})},ge=240,fe=Object(h.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:ge,width:"calc(100% - ".concat(ge,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:ge,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:ge,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(l.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(o.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},badgeSection:Object(l.a)({float:"right",display:"none"},e.breakpoints.up("md"),{display:"flex"}),grow:{flexGrow:1},toolbarHeader:{fontFamily:'"Courier New",Courier,monospace'}}}));var we=function(){var e,t,a=fe(),n=Object(d.a)(),i=Object(s.useState)(!1),c=Object(r.a)(i,2),o=c[0],h=c[1];return Object(Q.jsx)("div",{className:a.root,children:Object(Q.jsxs)(N.a,{basename:"/",children:[Object(Q.jsx)(b.a,{}),Object(Q.jsx)(j.a,{color:"default",position:"fixed",className:Object(I.a)(a.appBar,Object(l.a)({},a.appBarShift,o)),children:Object(Q.jsxs)(p.a,{children:[Object(Q.jsx)(u.a,{color:"inherit","aria-label":"open drawer",onClick:function(){h(!0)},edge:"start",className:Object(I.a)(a.menuButton,Object(l.a)({},a.hide,o)),children:Object(Q.jsx)(C.a,{})}),Object(Q.jsx)(m.a,{variant:"h4",className:a.toolbarHeader,noWrap:!0,children:"mikebents.com"}),Object(Q.jsx)("div",{className:a.grow}),Object(Q.jsxs)("div",{className:a.badgeSection,children:[Object(Q.jsx)(u.a,{title:"GitHub repos",color:"inherit",href:"https://github.com/mbents",children:Object(Q.jsx)(O.a,{color:"secondary",children:Object(Q.jsx)(J.a,{})})}),Object(Q.jsx)(u.a,{title:"Twitter",color:"inherit",href:"https://twitter.com/MikeBents",children:Object(Q.jsx)(O.a,{color:"secondary",children:Object(Q.jsx)(z.a,{})})})]})]})}),Object(Q.jsxs)(x.a,{variant:"permanent",className:Object(I.a)(a.drawer,(e={},Object(l.a)(e,a.drawerOpen,o),Object(l.a)(e,a.drawerClose,!o),e)),classes:{paper:Object(I.a)((t={},Object(l.a)(t,a.drawerOpen,o),Object(l.a)(t,a.drawerClose,!o),t))},children:[Object(Q.jsx)("div",{className:a.toolbar,children:Object(Q.jsx)(u.a,{onClick:function(){h(!1)},children:"rtl"===n.direction?Object(Q.jsx)(H.a,{}):Object(Q.jsx)(A.a,{})})}),Object(Q.jsx)(g.a,{}),Object(Q.jsxs)(f.a,{children:[Object(Q.jsxs)(w.a,{button:!0,component:N.b,to:"/",children:[Object(Q.jsx)(R.a,{children:Object(Q.jsx)(E.a,{})}),Object(Q.jsx)(y.a,{primary:"Home"})]},"home"),Object(Q.jsxs)(w.a,{button:!0,component:N.b,to:"/about",children:[Object(Q.jsx)(R.a,{children:Object(Q.jsx)(K.a,{})}),Object(Q.jsx)(y.a,{primary:"About"})]},"about"),Object(Q.jsxs)(w.a,{button:!0,component:N.b,to:"/ballparks",children:[Object(Q.jsx)(R.a,{children:Object(Q.jsx)(P.a,{})}),Object(Q.jsx)(y.a,{primary:"Ballparks"})]},"ballparks"),Object(Q.jsxs)(w.a,{button:!0,component:N.b,to:"/franchises",children:[Object(Q.jsx)(R.a,{children:Object(Q.jsx)(M.a,{})}),Object(Q.jsx)(y.a,{primary:"Franchises"})]},"franchises")]})]}),Object(Q.jsxs)("main",{className:a.content,children:[Object(Q.jsx)("div",{className:a.toolbar}),Object(Q.jsx)(v.a,{maxWidth:"lg",children:Object(Q.jsxs)(k.c,{children:[Object(Q.jsx)(k.a,{path:"/franchises",component:le}),Object(Q.jsx)(k.a,{path:"/ballparks",children:Object(Q.jsx)(xe,{children:Object(Q.jsx)(oe,{})})}),Object(Q.jsx)(k.a,{path:"/about",component:de}),Object(Q.jsx)(k.a,{path:"/",component:$})]})})]})]})})},ye=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,149)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),i(e),c(e)}))};c.a.render(Object(Q.jsx)(n.a.StrictMode,{children:Object(Q.jsx)(we,{})}),document.getElementById("root")),ye()},91:function(e,t,a){},92:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.45573414.chunk.js.map