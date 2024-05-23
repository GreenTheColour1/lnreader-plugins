var t=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(a,i){function o(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,s)}c((n=n.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(r=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:0};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],n=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:1}}([s,c])}}},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:1});var n=require("@libs/fetch"),a=require("cheerio"),i=require("@libs/defaultCover"),o=require("@libs/novelStatus"),s=r(require("dayjs")),c=function(t,e){return new RegExp(e.join("|")).test(t)},u=new(function(){function r(t){var e;this.fetchImage=n.fetchFile,this.parseData=function(t){var e,r=(0,s.default)(),n=(null===(e=t.match(/\d+/))||void 0===e?void 0:e[0])||"",a=parseInt(n,10);if(!n)return t;if(c(t,["detik","segundo","second","วินาที"]))r.subtract(a,"second");else if(c(t,["menit","dakika","min","minute","minuto","นาที","دقائق"]))r.subtract(a,"minute");else if(c(t,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))r.subtract(a,"hours");else if(c(t,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))r.subtract(a,"days");else if(c(t,["week","semana"]))r.subtract(a,"week");else if(c(t,["month","mes"]))r.subtract(a,"month");else{if(!c(t,["year","año"]))return t;r.subtract(a,"year")}return r.format("LL")},this.id=t.id,this.name=t.sourceName,this.icon="multisrc/madara/".concat(t.id.toLowerCase(),"/icon.png"),this.site=t.sourceSite;var r=(null===(e=t.options)||void 0===e?void 0:e.versionIncrements)||0;this.version="1.0.".concat(1+r),this.options=t.options,this.filters=t.filters}return r.prototype.getHostname=function(t){return t.split("/")[2]},r.prototype.getCheerio=function(r){return t(this,void 0,void 0,(function(){var t,i,o,s;return e(this,(function(e){switch(e.label){case 0:return[4,(0,n.fetchApi)(r)];case 1:if(!(t=e.sent()).ok)throw new Error("Could not reach site ("+t.status+") try to open in webview.");return o=a.load,[4,t.text()];case 2:if(i=o.apply(void 0,[e.sent()]),s=i("title").text().trim(),this.getHostname(r)!=this.getHostname(t.url)||"Bot Verification"==s||"You are being redirected..."==s||"Un instant..."==s||"Just a moment..."==s||"Redirecting..."==s)throw new Error("Captcha error, please open in webview");return[2,i]}}))}))},r.prototype.parseNovels=function(t){var e=this,r=[];return t(".manga-title-badges").remove(),t(".page-item-detail, .c-tabs-item__content").each((function(n,a){var i=t(a).find(".post-title").text().trim(),o=t(a).find(".post-title").find("a").attr("href")||"";if(i&&o){var s=t(a).find("img"),c={name:i,cover:s.attr("data-src")||s.attr("src")||s.attr("data-lazy-srcset"),path:o.replace(e.site,"")};r.push(c)}})),r},r.prototype.popularNovels=function(r,n){var a=n.filters,i=n.showLatestNovels;return t(this,void 0,void 0,(function(){var t,n,o,s,c,u;return e(this,(function(e){switch(e.label){case 0:for(n in t=this.site+"/page/"+r+"/?s=&post_type=wp-manga",a||(a={}),i&&(t+="&m_orderby=latest"),a)if("object"==typeof a[n].value)for(o=0,s=a[n].value;o<s.length;o++)c=s[o],t+="&".concat(n,"=").concat(c);else a[n].value&&(t+="&".concat(n,"=").concat(a[n].value));return[4,this.getCheerio(t)];case 1:return u=e.sent(),[2,this.parseNovels(u)]}}))}))},r.prototype.parseNovel=function(r){var c;return t(this,void 0,void 0,(function(){var t,u,l,h,p,f,m,d,v=this;return e(this,(function(e){switch(e.label){case 0:return[4,(0,n.fetchApi)(this.site+r).then((function(t){return t.text()}))];case 1:return t=e.sent(),(u=(0,a.load)(t))(".manga-title-badges, #manga-title span").remove(),(l={path:r,name:u(".post-title h1").text().trim()||u("#manga-title h1").text()}).cover=u(".summary_image > a > img").attr("data-lazy-src")||u(".summary_image > a > img").attr("data-src")||u(".summary_image > a > img").attr("src")||i.defaultCover,u(".post-content_item, .post-content").each((function(){var t=u(this).find("h5").text().trim(),e=u(this).find(".summary-content").text().trim();switch(t){case"Genre(s)":case"Género(s)":case"التصنيفات":l.genres=e;break;case"Author(s)":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":l.author=e;break;case"Status":case"Estado":l.status=e.includes("OnGoing")||e.includes("مستمرة")?o.NovelStatus.Ongoing:o.NovelStatus.Completed}})),u("div.summary__content .code-block,script").remove(),l.summary=u("div.summary__content").text().trim()||u("#tab-manga-about").text().trim()||u('.post-content_item h5:contains("Summary")').next().text().trim(),h=[],p="",(null===(c=this.options)||void 0===c?void 0:c.useNewChapterEndpoint)?[4,(0,n.fetchApi)(this.site+r+"ajax/chapters/",{method:"POST"}).then((function(t){return t.text()}))]:[3,3];case 2:return p=e.sent(),[3,5];case 3:return f=u(".rating-post-id").attr("value")||u("#manga-chapters-holder").attr("data-id")||"",(m=new FormData).append("action","manga_get_chapters"),m.append("manga",f),[4,(0,n.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:m}).then((function(t){return t.text()}))];case 4:p=e.sent(),e.label=5;case 5:return"0"!==p&&(u=(0,a.load)(p)),d=u(".wp-manga-chapter").length,u(".wp-manga-chapter").each((function(t,e){var r=u(e).find("a").text().trim(),n=u(e).find("span.chapter-release-date").text().trim();n=n?v.parseData(n):(0,s.default)().format("LL");var a=u(e).find("a").attr("href")||"";h.push({name:r,path:a.replace(v.site,""),releaseTime:n||null,chapterNumber:d-t})})),l.chapters=h.reverse(),[2,l]}}))}))},r.prototype.parseChapter=function(r){return t(this,void 0,void 0,(function(){var t,i;return e(this,(function(e){switch(e.label){case 0:return[4,(0,n.fetchApi)(this.site+r).then((function(t){return t.text()}))];case 1:return t=e.sent(),i=(0,a.load)(t),[2,i(".text-left").html()||i(".text-right").html()||i(".entry-content").html()||i(".c-blog-post > div > div:nth-child(2)").html()||""]}}))}))},r.prototype.searchNovels=function(r,n){return t(this,void 0,void 0,(function(){var t,a;return e(this,(function(e){switch(e.label){case 0:return t=this.site+"page/"+n+"/?s="+r+"&post_type=wp-manga",[4,this.getCheerio(t)];case 1:return a=e.sent(),[2,this.parseNovels(a)]}}))}))},r}())({id:"meownovel",sourceSite:"https://meownovel.com/",sourceName:"Meownovel",options:{useNewChapterEndpoint:1,lang:"English"}});exports.default=u;