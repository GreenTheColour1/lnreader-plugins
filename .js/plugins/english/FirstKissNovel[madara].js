var e=this&&this.__awaiter||function(e,a,t,l){return new(t||(t=Promise))((function(r,n){function i(e){try{s(l.next(e))}catch(e){n(e)}}function o(e){try{s(l.throw(e))}catch(e){n(e)}}function s(e){var a;e.done?r(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(i,o)}s((l=l.apply(e,a||[])).next())}))},a=this&&this.__generator||function(e,a){var t,l,r,n,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return n={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function o(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;n&&(n=0,o[0]&&(i=0)),i;)try{if(t=1,l&&(r=2&o[0]?l.return:o[0]?l.throw||((r=l.return)&&r.call(l),0):l.next)&&!(r=r.call(l,o[1])).done)return r;switch(l=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:0};case 5:i.label++,l=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=a.call(e,i)}catch(e){o=[6,e],l=0}finally{t=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:1}}([o,s])}}},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:1});var l=require("@libs/fetch"),r=require("cheerio"),n=require("@libs/defaultCover"),i=require("@libs/novelStatus"),o=t(require("dayjs")),s=function(e,a){return new RegExp(a.join("|")).test(e)},u=new(function(){function t(e){var a;this.fetchImage=l.fetchFile,this.parseData=function(e){var a,t=(0,o.default)(),l=(null===(a=e.match(/\d+/))||void 0===a?void 0:a[0])||"",r=parseInt(l,10);if(!l)return e;if(s(e,["detik","segundo","second","วินาที"]))t.subtract(r,"second");else if(s(e,["menit","dakika","min","minute","minuto","นาที","دقائق"]))t.subtract(r,"minute");else if(s(e,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))t.subtract(r,"hours");else if(s(e,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))t.subtract(r,"days");else if(s(e,["week","semana"]))t.subtract(r,"week");else if(s(e,["month","mes"]))t.subtract(r,"month");else{if(!s(e,["year","año"]))return e;t.subtract(r,"year")}return t.format("LL")},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/madara/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var t=(null===(a=e.options)||void 0===a?void 0:a.versionIncrements)||0;this.version="1.0.".concat(1+t),this.options=e.options,this.filters=e.filters}return t.prototype.getHostname=function(e){return e.split("/")[2]},t.prototype.getCheerio=function(t){return e(this,void 0,void 0,(function(){var e,n,i,o;return a(this,(function(a){switch(a.label){case 0:return[4,(0,l.fetchApi)(t)];case 1:if(!(e=a.sent()).ok)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return i=r.load,[4,e.text()];case 2:if(n=i.apply(void 0,[a.sent()]),o=n("title").text().trim(),this.getHostname(t)!=this.getHostname(e.url)||"Bot Verification"==o||"You are being redirected..."==o||"Un instant..."==o||"Just a moment..."==o||"Redirecting..."==o)throw new Error("Captcha error, please open in webview");return[2,n]}}))}))},t.prototype.parseNovels=function(e){var a=this,t=[];return e(".manga-title-badges").remove(),e(".page-item-detail, .c-tabs-item__content").each((function(l,r){var n=e(r).find(".post-title").text().trim(),i=e(r).find(".post-title").find("a").attr("href")||"";if(n&&i){var o=e(r).find("img"),s={name:n,cover:o.attr("data-src")||o.attr("src")||o.attr("data-lazy-srcset"),path:i.replace(a.site,"")};t.push(s)}})),t},t.prototype.popularNovels=function(t,l){var r=l.filters,n=l.showLatestNovels;return e(this,void 0,void 0,(function(){var e,l,i,o,s,u;return a(this,(function(a){switch(a.label){case 0:for(l in e=this.site+"/page/"+t+"/?s=&post_type=wp-manga",r||(r={}),n&&(e+="&m_orderby=latest"),r)if("object"==typeof r[l].value)for(i=0,o=r[l].value;i<o.length;i++)s=o[i],e+="&".concat(l,"=").concat(s);else r[l].value&&(e+="&".concat(l,"=").concat(r[l].value));return[4,this.getCheerio(e)];case 1:return u=a.sent(),[2,this.parseNovels(u)]}}))}))},t.prototype.parseNovel=function(t){var s;return e(this,void 0,void 0,(function(){var e,u,c,v,h,p,b,m,d=this;return a(this,(function(a){switch(a.label){case 0:return[4,(0,l.fetchApi)(this.site+t).then((function(e){return e.text()}))];case 1:return e=a.sent(),(u=(0,r.load)(e))(".manga-title-badges, #manga-title span").remove(),(c={path:t,name:u(".post-title h1").text().trim()||u("#manga-title h1").text()}).cover=u(".summary_image > a > img").attr("data-lazy-src")||u(".summary_image > a > img").attr("data-src")||u(".summary_image > a > img").attr("src")||n.defaultCover,u(".post-content_item, .post-content").each((function(){var e=u(this).find("h5").text().trim(),a=u(this).find(".summary-content").text().trim();switch(e){case"Genre(s)":case"Género(s)":case"التصنيفات":c.genres=a;break;case"Author(s)":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":c.author=a;break;case"Status":case"Estado":c.status=a.includes("OnGoing")||a.includes("مستمرة")?i.NovelStatus.Ongoing:i.NovelStatus.Completed}})),u("div.summary__content .code-block,script").remove(),c.summary=u("div.summary__content").text().trim()||u("#tab-manga-about").text().trim()||u('.post-content_item h5:contains("Summary")').next().text().trim(),v=[],h="",(null===(s=this.options)||void 0===s?void 0:s.useNewChapterEndpoint)?[4,(0,l.fetchApi)(this.site+t+"ajax/chapters/",{method:"POST"}).then((function(e){return e.text()}))]:[3,3];case 2:return h=a.sent(),[3,5];case 3:return p=u(".rating-post-id").attr("value")||u("#manga-chapters-holder").attr("data-id")||"",(b=new FormData).append("action","manga_get_chapters"),b.append("manga",p),[4,(0,l.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:b}).then((function(e){return e.text()}))];case 4:h=a.sent(),a.label=5;case 5:return"0"!==h&&(u=(0,r.load)(h)),m=u(".wp-manga-chapter").length,u(".wp-manga-chapter").each((function(e,a){var t=u(a).find("a").text().trim(),l=u(a).find("span.chapter-release-date").text().trim();l=l?d.parseData(l):(0,o.default)().format("LL");var r=u(a).find("a").attr("href")||"";v.push({name:t,path:r.replace(d.site,""),releaseTime:l||null,chapterNumber:m-e})})),c.chapters=v.reverse(),[2,c]}}))}))},t.prototype.parseChapter=function(t){return e(this,void 0,void 0,(function(){var e,n;return a(this,(function(a){switch(a.label){case 0:return[4,(0,l.fetchApi)(this.site+t).then((function(e){return e.text()}))];case 1:return e=a.sent(),n=(0,r.load)(e),[2,n(".text-left").html()||n(".text-right").html()||n(".entry-content").html()||n(".c-blog-post > div > div:nth-child(2)").html()||""]}}))}))},t.prototype.searchNovels=function(t,l){return e(this,void 0,void 0,(function(){var e,r;return a(this,(function(a){switch(a.label){case 0:return e=this.site+"page/"+l+"/?s="+t+"&post_type=wp-manga",[4,this.getCheerio(e)];case 1:return r=a.sent(),[2,this.parseNovels(r)]}}))}))},t}())({id:"1stkissnovel",sourceSite:"https://1stkissnovel.org/",sourceName:"FirstKissNovel",options:{useNewChapterEndpoint:1},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"Action",value:"action"},{label:"Adult",value:"adult"},{label:"Adventure",value:"adventure"},{label:"Anime",value:"anime"},{label:"Apocalypse",value:"apocalypse"},{label:"Boy's Love",value:"boys-love"},{label:"Comedy",value:"comedy"},{label:"Completed",value:"completed"},{label:"Cooking",value:"cooking"},{label:"Demons",value:"demons"},{label:"Detective",value:"detective"},{label:"Drama",value:"drama"},{label:"Ecchi",value:"ecchi"},{label:"Fan-Fiction",value:"fan-fiction"},{label:"Fantasy",value:"fantasy"},{label:"Food",value:"food"},{label:"Game",value:"game"},{label:"Gender Bender",value:"gender-bender"},{label:"Girls Love",value:"girls-love"},{label:"Harem",value:"harem"},{label:"Historical",value:"historical"},{label:"Horror",value:"horror"},{label:"Humor",value:"humor"},{label:"Isekai",value:"isekai"},{label:"Josei",value:"josei"},{label:"Magic",value:"magic"},{label:"Magical",value:"magical"},{label:"Manhua",value:"manhua"},{label:"Manhwa",value:"manhwa"},{label:"Martial Arts",value:"martial-arts"},{label:"Mature",value:"mature"},{label:"Mecha",value:"mecha"},{label:"Medical",value:"medical"},{label:"Military",value:"military"},{label:"Moder",value:"moder"},{label:"Modern",value:"modern"},{label:"Murim",value:"murim"},{label:"Music",value:"music"},{label:"Mystery",value:"mystery"},{label:"Psychological",value:"psychological"},{label:"Reverse",value:"reverse"},{label:"Reverse harem",value:"reverse-harem"},{label:"Romance",value:"romance"},{label:"School Life",value:"school-life"},{label:"Sci-fi",value:"sci-fi"},{label:"Seinen",value:"seinen"},{label:"Shoujo",value:"shoujo"},{label:"Shoujo Ai",value:"shoujo-ai"},{label:"Shounen",value:"shounen"},{label:"Shounen Ai",value:"shounen-ai"},{label:"Slice of Life",value:"slice-of-life"},{label:"Smut",value:"smut"},{label:"Sports",value:"sports"},{label:"Super power",value:"super-power"},{label:"Superhero",value:"superhero"},{label:"Supernatural",value:"supernatural"},{label:"Thriller",value:"thriller"},{label:"Tragedy",value:"tragedy"},{label:"Urban Life",value:"urban-life"},{label:"Vampire",value:"vampire"},{label:"Webtoons",value:"webtoons"},{label:"Wuxia",value:"wuxia"},{label:"Xianxia",value:"xianxia"},{label:"Xuanhuan",value:"xuanhuan"},{label:"Yaoi",value:"yaoi"},{label:"Yuri",value:"yuri"}]},op:{type:"Switch",label:"having all selected genres",value:0},author:{type:"Text",label:"Author",value:""},artist:{type:"Text",label:"Artist",value:""},release:{type:"Text",label:"Year of Released",value:""},adult:{type:"Picker",label:"Adult content",value:"",options:[{label:"All",value:""},{label:"None adult content",value:"0"},{label:"Only adult content",value:"1"}]},"status[]":{type:"Checkbox",label:"Status",value:[],options:[{label:"OnGoing",value:"on-going"},{label:"Completed",value:"end"},{label:"Canceled",value:"canceled"},{label:"On Hold",value:"on-hold"},{label:"Upcoming",value:"upcoming"}]},m_orderby:{type:"Picker",label:"Order by",value:"",options:[{label:"Relevance",value:""},{label:"Latest",value:"latest"},{label:"A-Z",value:"alphabet"},{label:"Rating",value:"rating"},{label:"Trending",value:"trending"},{label:"Most Views",value:"views"},{label:"New",value:"new-manga"}]}}});exports.default=u;