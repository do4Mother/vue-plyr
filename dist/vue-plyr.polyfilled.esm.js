import t from"plyr/dist/plyr.polyfilled";import"plyr/dist/plyr.css";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,r,e){return t(e={path:r,exports:{},require:function(t,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&e.path)}},e.exports),e.exports}var n,o,i=function(t){return t&&t.Math==Math&&t},u=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof r&&r)||function(){return this}()||Function("return this")(),c=function(t){try{return!!t()}catch(t){return!0}},f=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a=!c((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),s=Function.prototype.call,l=a?s.bind(s):function(){return s.apply(s,arguments)},p={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,b={f:y&&!p.call({1:2},1)?function(t){var r=y(this,t);return!!r&&r.enumerable}:p},h=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},d=Function.prototype,g=d.bind,v=d.call,m=a&&g.bind(v,v),O=a?function(t){return t&&m(t)}:function(t){return t&&function(){return v.apply(t,arguments)}},S=O({}.toString),w=O("".slice),j=function(t){return w(S(t),8,-1)},P=u.Object,E=O("".split),T=c((function(){return!P("z").propertyIsEnumerable(0)}))?function(t){return"String"==j(t)?E(t,""):P(t)}:P,L=u.TypeError,F=function(t){if(null==t)throw L("Can't call method on "+t);return t},D=function(t){return T(F(t))},M=function(t){return"function"==typeof t},A=function(t){return"object"==typeof t?null!==t:M(t)},C=function(t){return M(t)?t:void 0},k=function(t,r){return arguments.length<2?C(u[t]):u[t]&&u[t][r]},x=O({}.isPrototypeOf),N=k("navigator","userAgent")||"",I=u.process,R=u.Deno,G=I&&I.versions||R&&R.version,_=G&&G.v8;_&&(o=(n=_.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&N&&(!(n=N.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=N.match(/Chrome\/(\d+)/))&&(o=+n[1]);var z=o,V=!!Object.getOwnPropertySymbols&&!c((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&z&&z<41})),q=V&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,B=u.Object,W=q?function(t){return"symbol"==typeof t}:function(t){var r=k("Symbol");return M(r)&&x(r.prototype,B(t))},Y=u.String,$=function(t){try{return Y(t)}catch(t){return"Object"}},H=u.TypeError,U=function(t){if(M(t))return t;throw H($(t)+" is not a function")},X=u.TypeError,J=Object.defineProperty,K=function(t,r){try{J(u,t,{value:r,configurable:!0,writable:!0})}catch(e){u[t]=r}return r},Q=u["__core-js_shared__"]||K("__core-js_shared__",{}),Z=e((function(t){(t.exports=function(t,r){return Q[t]||(Q[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.22.2",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE",source:"https://github.com/zloirock/core-js"})})),tt=u.Object,rt=function(t){return tt(F(t))},et=O({}.hasOwnProperty),nt=Object.hasOwn||function(t,r){return et(rt(t),r)},ot=0,it=Math.random(),ut=O(1..toString),ct=function(t){return"Symbol("+(void 0===t?"":t)+")_"+ut(++ot+it,36)},ft=Z("wks"),at=u.Symbol,st=at&&at.for,lt=q?at:at&&at.withoutSetter||ct,pt=function(t){if(!nt(ft,t)||!V&&"string"!=typeof ft[t]){var r="Symbol."+t;V&&nt(at,t)?ft[t]=at[t]:ft[t]=q&&st?st(r):lt(r)}return ft[t]},yt=u.TypeError,bt=pt("toPrimitive"),ht=function(t,r){if(!A(t)||W(t))return t;var e,n,o=null==(e=t[bt])?void 0:U(e);if(o){if(void 0===r&&(r="default"),n=l(o,t,r),!A(n)||W(n))return n;throw yt("Can't convert object to primitive value")}return void 0===r&&(r="number"),function(t,r){var e,n;if("string"===r&&M(e=t.toString)&&!A(n=l(e,t)))return n;if(M(e=t.valueOf)&&!A(n=l(e,t)))return n;if("string"!==r&&M(e=t.toString)&&!A(n=l(e,t)))return n;throw X("Can't convert object to primitive value")}(t,r)},dt=function(t){var r=ht(t,"string");return W(r)?r:r+""},gt=u.document,vt=A(gt)&&A(gt.createElement),mt=function(t){return vt?gt.createElement(t):{}},Ot=!f&&!c((function(){return 7!=Object.defineProperty(mt("div"),"a",{get:function(){return 7}}).a})),St=Object.getOwnPropertyDescriptor,wt={f:f?St:function(t,r){if(t=D(t),r=dt(r),Ot)try{return St(t,r)}catch(t){}if(nt(t,r))return h(!l(b.f,t,r),t[r])}},jt=f&&c((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Pt=u.String,Et=u.TypeError,Tt=function(t){if(A(t))return t;throw Et(Pt(t)+" is not an object")},Lt=u.TypeError,Ft=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,Mt={f:f?jt?function(t,r,e){if(Tt(t),r=dt(r),Tt(e),"function"==typeof t&&"prototype"===r&&"value"in e&&"writable"in e&&!e.writable){var n=Dt(t,r);n&&n.writable&&(t[r]=e.value,e={configurable:"configurable"in e?e.configurable:n.configurable,enumerable:"enumerable"in e?e.enumerable:n.enumerable,writable:!1})}return Ft(t,r,e)}:Ft:function(t,r,e){if(Tt(t),r=dt(r),Tt(e),Ot)try{return Ft(t,r,e)}catch(t){}if("get"in e||"set"in e)throw Lt("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},At=f?function(t,r,e){return Mt.f(t,r,h(1,e))}:function(t,r,e){return t[r]=e,t},Ct=O(Function.toString);M(Q.inspectSource)||(Q.inspectSource=function(t){return Ct(t)});var kt,xt,Nt,It=Q.inspectSource,Rt=u.WeakMap,Gt=M(Rt)&&/native code/.test(It(Rt)),_t=Z("keys"),zt=function(t){return _t[t]||(_t[t]=ct(t))},Vt={},qt=u.TypeError,Bt=u.WeakMap;if(Gt||Q.state){var Wt=Q.state||(Q.state=new Bt),Yt=O(Wt.get),$t=O(Wt.has),Ht=O(Wt.set);kt=function(t,r){if($t(Wt,t))throw new qt("Object already initialized");return r.facade=t,Ht(Wt,t,r),r},xt=function(t){return Yt(Wt,t)||{}},Nt=function(t){return $t(Wt,t)}}else{var Ut=zt("state");Vt[Ut]=!0,kt=function(t,r){if(nt(t,Ut))throw new qt("Object already initialized");return r.facade=t,At(t,Ut,r),r},xt=function(t){return nt(t,Ut)?t[Ut]:{}},Nt=function(t){return nt(t,Ut)}}var Xt={set:kt,get:xt,has:Nt,enforce:function(t){return Nt(t)?xt(t):kt(t,{})},getterFor:function(t){return function(r){var e;if(!A(r)||(e=xt(r)).type!==t)throw qt("Incompatible receiver, "+t+" required");return e}}},Jt=Function.prototype,Kt=f&&Object.getOwnPropertyDescriptor,Qt=nt(Jt,"name"),Zt={EXISTS:Qt,PROPER:Qt&&"something"===function(){}.name,CONFIGURABLE:Qt&&(!f||f&&Kt(Jt,"name").configurable)},tr=e((function(t){var r=Zt.CONFIGURABLE,e=Xt.get,n=Xt.enforce,o=String(String).split("String");(t.exports=function(t,e,i,c){var f,a=!!c&&!!c.unsafe,s=!!c&&!!c.enumerable,l=!!c&&!!c.noTargetGet,p=c&&void 0!==c.name?c.name:e;M(i)&&("Symbol("===String(p).slice(0,7)&&(p="["+String(p).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!nt(i,"name")||r&&i.name!==p)&&At(i,"name",p),(f=n(i)).source||(f.source=o.join("string"==typeof p?p:""))),t!==u?(a?!l&&t[e]&&(s=!0):delete t[e],s?t[e]=i:At(t,e,i)):s?t[e]=i:K(e,i)})(Function.prototype,"toString",(function(){return M(this)&&e(this).source||It(this)}))})),rr=Math.ceil,er=Math.floor,nr=function(t){var r=+t;return r!=r||0===r?0:(r>0?er:rr)(r)},or=Math.max,ir=Math.min,ur=function(t,r){var e=nr(t);return e<0?or(e+r,0):ir(e,r)},cr=Math.min,fr=function(t){return(r=t.length)>0?cr(nr(r),9007199254740991):0;var r},ar=function(t){return function(r,e,n){var o,i=D(r),u=fr(i),c=ur(n,u);if(t&&e!=e){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===e)return t||c||0;return!t&&-1}},sr={includes:ar(!0),indexOf:ar(!1)}.indexOf,lr=O([].push),pr=function(t,r){var e,n=D(t),o=0,i=[];for(e in n)!nt(Vt,e)&&nt(n,e)&&lr(i,e);for(;r.length>o;)nt(n,e=r[o++])&&(~sr(i,e)||lr(i,e));return i},yr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],br=yr.concat("length","prototype"),hr={f:Object.getOwnPropertyNames||function(t){return pr(t,br)}},dr={f:Object.getOwnPropertySymbols},gr=O([].concat),vr=k("Reflect","ownKeys")||function(t){var r=hr.f(Tt(t)),e=dr.f;return e?gr(r,e(t)):r},mr=function(t,r,e){for(var n=vr(r),o=Mt.f,i=wt.f,u=0;u<n.length;u++){var c=n[u];nt(t,c)||e&&nt(e,c)||o(t,c,i(r,c))}},Or=/#|\.prototype\./,Sr=function(t,r){var e=jr[wr(t)];return e==Er||e!=Pr&&(M(r)?c(r):!!r)},wr=Sr.normalize=function(t){return String(t).replace(Or,".").toLowerCase()},jr=Sr.data={},Pr=Sr.NATIVE="N",Er=Sr.POLYFILL="P",Tr=Sr,Lr=wt.f,Fr=function(t,r){var e,n,o,i,c,f=t.target,a=t.global,s=t.stat;if(e=a?u:s?u[f]||K(f,{}):(u[f]||{}).prototype)for(n in r){if(i=r[n],o=t.noTargetGet?(c=Lr(e,n))&&c.value:e[n],!Tr(a?n:f+(s?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;mr(i,o)}(t.sham||o&&o.sham)&&At(i,"sham",!0),tr(e,n,i,t)}},Dr=Object.keys||function(t){return pr(t,yr)};Fr({target:"Object",stat:!0,forced:c((function(){Dr(1)}))},{keys:function(t){return Dr(rt(t))}});var Mr={};Mr[pt("toStringTag")]="z";var Ar,Cr="[object z]"===String(Mr),kr=pt("toStringTag"),xr=u.Object,Nr="Arguments"==j(function(){return arguments}()),Ir=Cr?j:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=xr(t),kr))?e:Nr?j(r):"Object"==(n=j(r))&&M(r.callee)?"Arguments":n},Rr=u.String,Gr=function(t){if("Symbol"===Ir(t))throw TypeError("Cannot convert a Symbol value to a string");return Rr(t)},_r=f&&!jt?Object.defineProperties:function(t,r){Tt(t);for(var e,n=D(r),o=Dr(r),i=o.length,u=0;i>u;)Mt.f(t,e=o[u++],n[e]);return t},zr={f:_r},Vr=k("document","documentElement"),qr=zt("IE_PROTO"),Br=function(){},Wr=function(t){return"<script>"+t+"<\/script>"},Yr=function(t){t.write(Wr("")),t.close();var r=t.parentWindow.Object;return t=null,r},$r=function(){try{Ar=new ActiveXObject("htmlfile")}catch(t){}var t,r;$r="undefined"!=typeof document?document.domain&&Ar?Yr(Ar):((r=mt("iframe")).style.display="none",Vr.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(Wr("document.F=Object")),t.close(),t.F):Yr(Ar);for(var e=yr.length;e--;)delete $r.prototype[yr[e]];return $r()};Vt[qr]=!0;var Hr=Object.create||function(t,r){var e;return null!==t?(Br.prototype=Tt(t),e=new Br,Br.prototype=null,e[qr]=t):e=$r(),void 0===r?e:zr.f(e,r)},Ur=function(t,r,e){var n=dt(r);n in t?Mt.f(t,n,h(0,e)):t[n]=e},Xr=u.Array,Jr=Math.max,Kr=hr.f,Qr="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Zr=function(t){try{return Kr(t)}catch(t){return function(t,r,e){for(var n=fr(t),o=ur(r,n),i=ur(void 0===e?n:e,n),u=Xr(Jr(i-o,0)),c=0;o<i;o++,c++)Ur(u,c,t[o]);return u.length=c,u}(Qr)}},te={f:function(t){return Qr&&"Window"==j(t)?Zr(t):Kr(D(t))}},re={f:pt},ee=u,ne=Mt.f,oe=Mt.f,ie=pt("toStringTag"),ue=O(O.bind),ce=Array.isArray||function(t){return"Array"==j(t)},fe=function(){},ae=[],se=k("Reflect","construct"),le=/^\s*(?:class|function)\b/,pe=O(le.exec),ye=!le.exec(fe),be=function(t){if(!M(t))return!1;try{return se(fe,ae,t),!0}catch(t){return!1}},he=function(t){if(!M(t))return!1;switch(Ir(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return ye||!!pe(le,It(t))}catch(t){return!0}};he.sham=!0;var de,ge,ve,me=!se||c((function(){var t;return be(be.call)||!be(Object)||!be((function(){t=!0}))||t}))?he:be,Oe=pt("species"),Se=u.Array,we=function(t,r){return new(function(t){var r;return ce(t)&&(r=t.constructor,(me(r)&&(r===Se||ce(r.prototype))||A(r)&&null===(r=r[Oe]))&&(r=void 0)),void 0===r?Se:r}(t))(0===r?0:r)},je=O([].push),Pe=function(t){var r=1==t,e=2==t,n=3==t,o=4==t,i=6==t,u=7==t,c=5==t||i;return function(f,s,l,p){for(var y,b,h=rt(f),d=T(h),g=function(t,r){return U(t),void 0===r?t:a?ue(t,r):function(){return t.apply(r,arguments)}}(s,l),v=fr(d),m=0,O=p||we,S=r?O(f,v):e||u?O(f,0):void 0;v>m;m++)if((c||m in d)&&(b=g(y=d[m],m,h),t))if(r)S[m]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return m;case 2:je(S,y)}else switch(t){case 4:return!1;case 7:je(S,y)}return i?-1:n||o?o:S}},Ee={forEach:Pe(0),map:Pe(1),filter:Pe(2),some:Pe(3),every:Pe(4),find:Pe(5),findIndex:Pe(6),filterReject:Pe(7)},Te=Ee.forEach,Le=zt("hidden"),Fe=Xt.set,De=Xt.getterFor("Symbol"),Me=Object.prototype,Ae=u.Symbol,Ce=Ae&&Ae.prototype,ke=u.TypeError,xe=u.QObject,Ne=wt.f,Ie=Mt.f,Re=te.f,Ge=b.f,_e=O([].push),ze=Z("symbols"),Ve=Z("op-symbols"),qe=Z("wks"),Be=!xe||!xe.prototype||!xe.prototype.findChild,We=f&&c((function(){return 7!=Hr(Ie({},"a",{get:function(){return Ie(this,"a",{value:7}).a}})).a}))?function(t,r,e){var n=Ne(Me,r);n&&delete Me[r],Ie(t,r,e),n&&t!==Me&&Ie(Me,r,n)}:Ie,Ye=function(t,r){var e=ze[t]=Hr(Ce);return Fe(e,{type:"Symbol",tag:t,description:r}),f||(e.description=r),e},$e=function(t,r,e){t===Me&&$e(Ve,r,e),Tt(t);var n=dt(r);return Tt(e),nt(ze,n)?(e.enumerable?(nt(t,Le)&&t[Le][n]&&(t[Le][n]=!1),e=Hr(e,{enumerable:h(0,!1)})):(nt(t,Le)||Ie(t,Le,h(1,{})),t[Le][n]=!0),We(t,n,e)):Ie(t,n,e)},He=function(t,r){Tt(t);var e=D(r),n=Dr(e).concat(Ke(e));return Te(n,(function(r){f&&!l(Ue,e,r)||$e(t,r,e[r])})),t},Ue=function(t){var r=dt(t),e=l(Ge,this,r);return!(this===Me&&nt(ze,r)&&!nt(Ve,r))&&(!(e||!nt(this,r)||!nt(ze,r)||nt(this,Le)&&this[Le][r])||e)},Xe=function(t,r){var e=D(t),n=dt(r);if(e!==Me||!nt(ze,n)||nt(Ve,n)){var o=Ne(e,n);return!o||!nt(ze,n)||nt(e,Le)&&e[Le][n]||(o.enumerable=!0),o}},Je=function(t){var r=Re(D(t)),e=[];return Te(r,(function(t){nt(ze,t)||nt(Vt,t)||_e(e,t)})),e},Ke=function(t){var r=t===Me,e=Re(r?Ve:D(t)),n=[];return Te(e,(function(t){!nt(ze,t)||r&&!nt(Me,t)||_e(n,ze[t])})),n};V||(Ce=(Ae=function(){if(x(Ce,this))throw ke("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?Gr(arguments[0]):void 0,r=ct(t),e=function(t){this===Me&&l(e,Ve,t),nt(this,Le)&&nt(this[Le],r)&&(this[Le][r]=!1),We(this,r,h(1,t))};return f&&Be&&We(Me,r,{configurable:!0,set:e}),Ye(r,t)}).prototype,tr(Ce,"toString",(function(){return De(this).tag})),tr(Ae,"withoutSetter",(function(t){return Ye(ct(t),t)})),b.f=Ue,Mt.f=$e,zr.f=He,wt.f=Xe,hr.f=te.f=Je,dr.f=Ke,re.f=function(t){return Ye(pt(t),t)},f&&(Ie(Ce,"description",{configurable:!0,get:function(){return De(this).description}}),tr(Me,"propertyIsEnumerable",Ue,{unsafe:!0}))),Fr({global:!0,wrap:!0,forced:!V,sham:!V},{Symbol:Ae}),Te(Dr(qe),(function(t){!function(t){var r=ee.Symbol||(ee.Symbol={});nt(r,t)||ne(r,t,{value:re.f(t)})}(t)})),Fr({target:"Symbol",stat:!0,forced:!V},{useSetter:function(){Be=!0},useSimple:function(){Be=!1}}),Fr({target:"Object",stat:!0,forced:!V,sham:!f},{create:function(t,r){return void 0===r?Hr(t):He(Hr(t),r)},defineProperty:$e,defineProperties:He,getOwnPropertyDescriptor:Xe}),Fr({target:"Object",stat:!0,forced:!V},{getOwnPropertyNames:Je}),function(){var t=k("Symbol"),r=t&&t.prototype,e=r&&r.valueOf,n=pt("toPrimitive");r&&!r[n]&&tr(r,n,(function(t){return l(e,this)}))}(),ge="Symbol",(de=Ae)&&!ve&&(de=de.prototype),de&&!nt(de,ie)&&oe(de,ie,{configurable:!0,value:ge}),Vt[Le]=!0;var Qe=V&&!!Symbol.for&&!!Symbol.keyFor,Ze=Z("string-to-symbol-registry"),tn=Z("symbol-to-string-registry");Fr({target:"Symbol",stat:!0,forced:!Qe},{for:function(t){var r=Gr(t);if(nt(Ze,r))return Ze[r];var e=k("Symbol")(r);return Ze[r]=e,tn[e]=r,e}});var rn=Z("symbol-to-string-registry");Fr({target:"Symbol",stat:!0,forced:!Qe},{keyFor:function(t){if(!W(t))throw TypeError($(t)+" is not a symbol");if(nt(rn,t))return rn[t]}});var en=Function.prototype,nn=en.apply,on=en.call,un="object"==typeof Reflect&&Reflect.apply||(a?on.bind(nn):function(){return on.apply(nn,arguments)}),cn=O([].slice),fn=k("JSON","stringify"),an=O(/./.exec),sn=O("".charAt),ln=O("".charCodeAt),pn=O("".replace),yn=O(1..toString),bn=/[\uD800-\uDFFF]/g,hn=/^[\uD800-\uDBFF]$/,dn=/^[\uDC00-\uDFFF]$/,gn=!V||c((function(){var t=k("Symbol")();return"[null]"!=fn([t])||"{}"!=fn({a:t})||"{}"!=fn(Object(t))})),vn=c((function(){return'"\\udf06\\ud834"'!==fn("\udf06\ud834")||'"\\udead"'!==fn("\udead")})),mn=function(t,r){var e=cn(arguments),n=r;if((A(r)||void 0!==t)&&!W(t))return ce(r)||(r=function(t,r){if(M(n)&&(r=l(n,this,t,r)),!W(r))return r}),e[1]=r,un(fn,null,e)},On=function(t,r,e){var n=sn(e,r-1),o=sn(e,r+1);return an(hn,t)&&!an(dn,o)||an(dn,t)&&!an(hn,n)?"\\u"+yn(ln(t,0),16):t};fn&&Fr({target:"JSON",stat:!0,forced:gn||vn},{stringify:function(t,r,e){var n=cn(arguments),o=un(gn?mn:fn,null,n);return vn&&"string"==typeof o?pn(o,bn,On):o}}),Fr({target:"Object",stat:!0,forced:!V||c((function(){dr.f(1)}))},{getOwnPropertySymbols:function(t){var r=dr.f;return r?r(rt(t)):[]}});var Sn,wn=pt("species"),jn=Ee.filter;Fr({target:"Array",proto:!0,forced:!(Sn="filter",z>=51||!c((function(){var t=[];return(t.constructor={})[wn]=function(){return{foo:1}},1!==t[Sn](Boolean).foo})))},{filter:function(t){return jn(this,t,arguments.length>1?arguments[1]:void 0)}});var Pn=Cr?{}.toString:function(){return"[object "+Ir(this)+"]"};Cr||tr(Object.prototype,"toString",Pn,{unsafe:!0});var En=wt.f,Tn=c((function(){En(1)}));Fr({target:"Object",stat:!0,forced:!f||Tn,sham:!f},{getOwnPropertyDescriptor:function(t,r){return En(D(t),r)}});var Ln={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Fn=mt("span").classList,Dn=Fn&&Fn.constructor&&Fn.constructor.prototype,Mn=Dn===Object.prototype?void 0:Dn,An=Ee.forEach,Cn=function(t,r){var e=[][t];return!!e&&c((function(){e.call(null,r||function(){return 1},1)}))}("forEach"),kn=Cn?[].forEach:function(t){return An(this,t,arguments.length>1?arguments[1]:void 0)},xn=function(t){if(t&&t.forEach!==kn)try{At(t,"forEach",kn)}catch(r){t.forEach=kn}};for(var Nn in Ln)Ln[Nn]&&xn(u[Nn]&&u[Nn].prototype);function In(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function Rn(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function Gn(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?Rn(Object(e),!0).forEach((function(r){In(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Rn(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}xn(Mn),Fr({target:"Object",stat:!0,sham:!f},{getOwnPropertyDescriptors:function(t){for(var r,e,n=D(t),o=wt.f,i=vr(n),u={},c=0;i.length>c;)void 0!==(e=o(n,r=i[c++]))&&Ur(u,r,e);return u}});var _n=Zt.EXISTS,zn=Mt.f,Vn=Function.prototype,qn=O(Vn.toString),Bn=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,Wn=O(Bn.exec);f&&!_n&&zn(Vn,"name",{configurable:!0,get:function(){try{return Wn(Bn,qn(this))[1]}catch(t){return""}}});var Yn={name:"VuePlyr",props:{options:{type:Object,required:!1,default:()=>({})}},data:()=>({player:{}}),computed:{opts(){const t=this.options;return Object.prototype.hasOwnProperty.call(this.options,"hideYouTubeDOMError")||(t.hideYouTubeDOMError=!0),t}},mounted(){this.player=new t(this.$el,this.opts)},beforeUnmount(){try{this.player.destroy()}catch(t){this.opts.hideYouTubeDOMError&&"The YouTube player is not attached to the DOM."===t.message||console.error(t)}},render(){const t=this.$slots.default;return"function"==typeof t?t()[0]:t},install:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r.plyr&&(Yn.props.options.default=function(){return Gn({},r.plyr)}),t.component(Yn.name,Yn)}};export{Yn as default};
//# sourceMappingURL=vue-plyr.polyfilled.esm.js.map
