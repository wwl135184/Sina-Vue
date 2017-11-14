<template>
	<div>
		<div class="m-in-panel" >
			<!---->
			<div class="m-top-bar m-panel m-container-max m-topbar-max">
				<div class="nav-box">
					<div class="nav-left">
						<div class="nav-ctrl"><a href="#/index/tab1" style="color: #636363;"><i class="m-font m-font-arrow-left iconfont icon-jiantou"></i>返回</a></div>
					</div>
					<div class="nav-main">
						<h3 class="m-text-cut" >微博正文</h3></div>
					<div class="nav-right">
						<div class="nav-ctrl" ><i class="m-font m-font-dot-more iconfont icon-unie644" @click="popmenu"></i></div>
					</div>
				</div>
			</div>
			<div class="card m-panel card9 weibo-member" style="margin-top: 2.75rem;">
				<div class="card-wrap">
					<div class="card-main">
						<!---->
						<header class="weibo-top m-box m-avatar-box">
							<a class="m-img-box"><img :src="news[userid].userimg" /><i class="m-icon m-icon-goldv"></i></a>
							<div class="m-box-col m-box-dir m-box-center">
								<div class="m-text-box">
									<a>
										<h3 class="m-text-cut">{{news[userid].username}}
          <i class="m-icon m-icon-vipl3"></i></h3></a>
									<h4 class="m-text-cut"><span class="time">{{news[userid].time}}</span> <span class="from"> 来自微博 weibo.com</span></h4></div>
							</div>
							<!---->
						</header>
						<article class="weibo-main">
							<div class="weibo-og">
								<div class="weibo-text">{{news[userid].content}}</div>
								<div>
									<div class="weibo-media-wraps weibo-media media-b">
										<ul class="m-auto-list">
											<li class="m-auto-box" v-for="img in news[userid].img">
												<div class="m-img-box m-imghold-square"><img :src="img" @click="showimg(img)">
													<!---->
												</div>
											</li>
											
										</ul>
										<!---->
									</div>
								</div>
							</div>
							<!---->
						</article>
						<footer class="m-ctrl-box m-box-center-a">
							<div class="m-diy-btn m-box-col m-box-center m-box-center-a"><i class="m-font m-font-forward iconfont icon-zhuanfa"></i>
								<h4>{{news[userid].forward}}</h4></div> <span class="m-line-gradient"></span>
							<div class="m-diy-btn m-box-col m-box-center m-box-center-a"><i class="m-font m-font-comment iconfont icon-iconheji-"></i>
								<h4>{{news[userid].comment}}</h4></div> <span class="m-line-gradient"></span>
							<div class="m-diy-btn m-box-col m-box-center m-box-center-a"><i class="m-icon m-icon-like iconfont icon-dianzan-copy"></i>
								<h4>{{news[userid].like}}</h4></div>
						</footer>
					</div>
				</div>
			</div>
			<div data-v-36bb2c08="" class="h5-hl__comment">
				<div data-v-36bb2c08="" class="comment-top">
					<ul data-v-36bb2c08="" class="comment-top-left">
						<li data-v-36bb2c08="" class="" v-for="a in arr">
							<a data-v-36bb2c08="" :href="a.href" class="comment-tab" :class="{'comment-tab-cur':a.id == id}" @click="show(a.id)"><span data-v-36bb2c08="">{{a.content}}</span> <span data-v-36bb2c08="">{{a.num}}</span></a>
						</li>
						
					</ul>
				</div>
				<div data-v-36bb2c08="" first-check="true" class="comment-content J-tabCont">
					<router-view></router-view>
					<!---->
					<!--转发-->
					<!--<div data-v-36bb2c08="" v-if="id == 1">
						<div data-v-60ad2e50="" data-v-36bb2c08="" class="comment-item" v-for="b in news[userid].transpond">
							<div data-v-60ad2e50="" class="m-box comment-con-top">
								<div data-v-60ad2e50="" class="comment-user-img m-avatar-box">
									<a data-v-60ad2e50="" class="m-img-box"><img data-v-60ad2e50="" :src="b.userimg" alt="">
									
									</a>
								</div>
								<div data-v-60ad2e50="" class="m-box-col">
									<p data-v-60ad2e50="" class="comment-user-name"><span data-v-60ad2e50="">{{b.username}}</span></p>
									<p data-v-60ad2e50="" class="comment-time"><span data-v-60ad2e50="">{{b.time}}</span></p>
								</div>
							</div>
							<div data-v-60ad2e50="" class="comment-con-bot">
								<p data-v-60ad2e50="" class="comment-con"><span data-v-60ad2e50="">{{b.content}}</span></p>
							</div>
						</div>
					</div>-->
					<!--评论-->
					<!--<div data-v-36bb2c08="" v-if="id == 2">
					
						<div data-v-7f5164aa="" data-v-36bb2c08="" class="comment-item" v-for="c in news[userid].commentuser">
							<div data-v-7f5164aa="" class="m-box comment-con-top">
								<div data-v-7f5164aa="" class="comment-user-img m-avatar-box">
									<a data-v-7f5164aa="" class="m-img-box"><img data-v-7f5164aa="" :src="c.userimg" alt="">
										
									</a>
								</div>
								<div data-v-7f5164aa="" class="m-box-col">
									<p data-v-7f5164aa="" class="comment-user-name"><span data-v-7f5164aa="">{{c.username}}</span></p>
									<p data-v-7f5164aa="" class="comment-time"><span data-v-7f5164aa="">{{c.time}}</span></p>
								</div> <span data-v-7f5164aa="" class="comment-zan"><i data-v-7f5164aa="" class="m-icon m-icon-like"></i> <i data-v-7f5164aa="" class="comment-dz-num"></i></span></div>
							<div data-v-7f5164aa="" class="comment-con-bot">
								<div data-v-7f5164aa="" class="comment-con">
									<div data-v-7f5164aa="">{{c.content}}</div>
									
								</div>
							</div>
						</div>

					</div>-->
					<!--赞-->
					<!--<div data-v-36bb2c08="" v-if="id == 3">
						<div data-v-5068b85c="" data-v-36bb2c08="" class="like-item m-box-center-a" v-for="d in news[userid].support">
							<div data-v-5068b85c="" class="comment-user-img m-avatar-box">
								<a data-v-5068b85c="" href="https://m.weibo.cn/u/1936072655?uid=1936072655" class="m-img-box"><img data-v-5068b85c="" :src="d.userimg" alt="">
									
								</a>
							</div>
							<div data-v-5068b85c="" class="m-box-col">
								<p data-v-5068b85c="" class="comment-user-name">{{d.username}}</p>
							</div>
						</div>

					</div>-->
					<!---->
					<div data-v-52fd5d36="" data-v-36bb2c08="" class="m-tips m-tips-tp" style="display: none;">
						<div data-v-52fd5d36="" class="m-loading m-loading-dark"><span data-v-52fd5d36=""></span><span data-v-52fd5d36=""></span><span data-v-52fd5d36=""></span><span data-v-52fd5d36=""></span><span data-v-52fd5d36=""></span><span data-v-52fd5d36=""></span><span data-v-52fd5d36=""></span><span data-v-52fd5d36=""></span><span data-v-52fd5d36=""></span><span data-v-52fd5d36=""></span><span data-v-52fd5d36=""></span><span data-v-52fd5d36=""></span></div>
					</div>
				</div>
			</div>
			<!---->
			<!--收藏、取消、举报-->
			<div ><div class="m-wpop-box" v-if="bool"></div> <div class="m-wpbtn-lbox" v-if="bool"><ul class="m-wpbtn-list"><li><a>收藏</a></li><li><a>举报</a></li></ul> <ul class="m-wpbtn-list"><li><a @click="popmenu">取消</a></li></ul></div></div>
			<!---->
			<aside data-v-72b039ae="" class="tips m-container-max" style="bottom: 1.75rem;">
				<a data-v-72b039ae="" href="javascript:;" ontouchstart="" class="btn">微博内打开</a>
			</aside>
			<!---->
		</div>
		<!--图片放大-->
		<div v-if="imgbool" tabindex="-1" role="dialog" aria-hidden="false" class="pswp pswp--supports-fs pswp--open pswp--animate_opacity pswp--touch pswp--css_animation pswp--svg pswp--visible pswp--animated-in" style="position: fixed; opacity: 1;">
			<div class="pswp__bg" style="opacity: 1;"></div>
			<div class="pswp__scroll-wrap">
				<div class="pswp__container" style="transform: translate3d(0px, 0px, 0px);">
					<div class="pswp__item" style="display: block; transform: translate3d(-420px, 0px, 0px);">
						<div class="pswp__zoom-wrap" style="transform: translate3d(0px, 88px, 0px) scale(1);"><img class="pswp__img pswp__img--placeholder" :src="img" style="width: 375px; height: 492px; display: none;"><img class="pswp__img" src="https://wx2.sinaimg.cn/large/67c53c97gy1flbmcwjk1qj218g1magm0.jpg" style="width: 375px; height: 492px;"></div>
					</div>
					<div class="pswp__item" style="transform: translate3d(0px, 0px, 0px);">
						<div class="pswp__zoom-wrap" style="transform: translate3d(0px, 207px, 0px) scale(1);"><img class="pswp__img pswp__img--placeholder" :src="img" style="width: 375px; height: 252px; display: none;"><img class="pswp__img" :src="img" style="display: block; width: 375px; height: 252px;"></div>
					</div>
					<div class="pswp__item" style="display: block; transform: translate3d(420px, 0px, 0px);">
						<div class="pswp__zoom-wrap" style="transform: translate3d(0px, 202px, 0px) scale(1);"><img class="pswp__img pswp__img--placeholder" src="https://wx3.sinaimg.cn/orj360/67c53c97gy1flbmcxlhgij218g0v60tc.jpg" style="width: 375px; height: 263px; display: none;"><img class="pswp__img" src="https://wx3.sinaimg.cn/large/67c53c97gy1flbmcxlhgij218g0v60tc.jpg" style="width: 375px; height: 263px;"></div>
					</div>
				</div>
				<div class="pswp__ui">
					<div class="pswp__top-bar">
						<div class="pswp__counter"></div> <button title="Close (Esc)" class="pswp__button pswp__button--close iconfont icon-o1" ></button> <button title="Toggle fullscreen" class="pswp__button pswp__button--fs"></button> <button title="Zoom in/out" class="pswp__button pswp__button--zoom"></button>
						<div class="pswp__preloader">
							<div class="pswp__preloader__icn">
								<div class="pswp__preloader__cut">
									<div class="pswp__preloader__donut"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
						<div class="pswp__share-tooltip">1/6</div>
					</div> <button title="Previous (arrow left)" class="pswp__button pswp__button--arrow--left" @click="showimg()"></button> <button title="Next (arrow right)" class="pswp__button pswp__button--arrow--right"></button>
					<div class="pswp__caption pswp__caption--empty">
						<div class="pswp__caption__center"></div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bool: false,
				news: [],
				img:"",
				id: "",
				imgbool:false,
				userid:"",
				arr: [{
					id: 1,
					content: "转发",
					num: "",
					href:"#/weibocontent/forward"
				}, {
					id: 2,
					content: "评论",
					num: "",
					href:"#/weibocontent/comment"
				}, {
					id: 3,
					content: "赞",
					num: "",
					href:"#/weibocontent/like"
				}]
				//				imgbool:false,
				//				img:""
			}
		},
		methods:{
			popmenu() {
				this.bool = !this.bool;
				console.log(this.bool)
			},
			showimg(img){
				this.imgbool = !this.imgbool;
				this.img = img;
			},
			show(id) {
				this.id = id;
			},
			sendid(){
				this.id = this.$store.state.sendid;
			},
			loadMore: function() {
				var self = this;
				$.ajax({
					url: "http://10.30.152.85:3000/users/content",
					type: "post",
					success: function(data) {
						//	console.log(data.newslist)
						for(var i = 0; i < data.length;i++){
							if(data[i].id == self.$store.state.userid){
								self.userid = i;
								break;
							}
						}
						
						
						
						self.news = self.news.concat(data)                                         
						console.log(self.news)
						console.log(self.$store.state.userid);
					
						console.log(self.arr[0].num)
						self.arr[0].num = self.news[self.userid].forward;
						self.arr[1].num = self.news[self.userid].comment;
						self.arr[2].num = self.news[self.userid].like;
					}
				})
			}

		},
		mounted() {
			this.loadMore();	
			this.sendid();
		}
		
	

	}
</script>

<style>
	a,
	abbr,
	address,
	article,
	aside,
	audio,
	b,
	big,
	blockquote,
	body,
	caption,
	center,
	cite,
	code,
	dd,
	del,
	details,
	dfn,
	dl,
	dt,
	em,
	embed,
	fieldset,
	figcaption,
	figure,
	footer,
	form,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	header,
	hgroup,
	html,
	i,
	iframe,
	img,
	ins,
	label,
	legend,
	li,
	mark,
	menu,
	nav,
	ol,
	output,
	p,
	pre,
	q,
	ruby,
	s,
	samp,
	section,
	small,
	strike,
	strong,
	sub,
	summary,
	sup,
	table,
	tbody,
	td,
	tfoot,
	th,
	thead,
	time,
	tr,
	u,
	ul,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	
	a,
	button,
	div,
	input,
	select,
	textarea {
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
		-webkit-tap-highlight-color: transparent!important;
	}
	
	.m-in-panel>.m-panel {
		border-top: 0!important;
	}
	
	.iosx2 .m-panel {
		-o-border-image: none;
		border-image: none;
		border-top-width: .5px;
		border-right-width: 0;
		border-bottom-width: .5px;
		border-left-width: 0;
	}
	
	.m-topbar-max {
		right: 0;
	}
	
	.m-top-bar {
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #f5f5f5;
		height: 2.75rem;
	}
	
	.m-panel {
		border-top-width: 1px;
		border-right-width: 0;
		border-bottom-width: 1px;
		border-left-width: 0;
		border-color: #e6e6e6;
		border-style: solid;
		background: #fff;
	}
	
	.m-top-bar .nav-left {
		left: 0;
	}
	
	.m-top-bar .nav-left,
	.m-top-bar .nav-main,
	.m-top-bar .nav-right {
		position: absolute;
		line-height: 2.75rem;
	}
	
	.nav-left,
	.nav-right {
		z-index: 100;
	}
	
	.m-top-bar .nav-ctrl {
		color: #636363;
		font-size: .9375rem;
		text-align: center;
		display: inline-block;
		padding: 0 .625rem;
	}
	
	.m-top-bar .nav-ctrl .m-font {
		vertical-align: top;
		font-size: 1.25rem;
	}
	
	.m-font {
		font-family: marvelfont;
		display: inline-block;
		-webkit-font-smoothing: antialiased;
	}
	
	.m-top-bar .nav-main {
		left: 0;
		right: 0;
		top: 0;
		right: 0;
		text-align: center;
		font-size: 1.125rem;
		color: #333;
	}
	
	.m-top-bar .nav-left,
	.m-top-bar .nav-main,
	.m-top-bar .nav-right {
		position: absolute;
		line-height: 2.75rem;
	}
	
	.m-top-bar .nav-main h3 {
		display: inline-block;
		max-width: 12rem;
	}
	
	.m-text-cut {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.m-top-bar .nav-right {
		right: 0;
	}
	
	.card {
		margin-bottom: .5625rem;
	}
	
	.card9>.card-wrap {
		padding-top: .9375rem;
	}
	
	.card .card-wrap {
		margin-left: .75rem;
		margin-right: .75rem;
		height: 100%;
	}
	
	.card .card-wrap .card-main {
		box-sizing: border-box;
		margin-left: -.75rem;
		margin-right: -.75rem;
		height: 100%;
	}
	
	.card .card-wrap .card-main>.m-box {
		height: 100%;
	}
	
	.card9 .weibo-top {
		padding: 0 .75rem;
	}
	
	.m-box {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	
	.card9 .weibo-top .m-img-box {
		width: 2.375rem;
		height: 2.375rem;
	}
	
	.m-avatar-box .m-img-box {
		border-radius: 50%;
		position: relative;
	}
	
	.m-img-box {
		display: inline-block;
		width: 100%;
	}
	
	/*a {
		color: #507DAF;
	}*/
	
	.iosx2 .m-avatar-box .m-img-box::before {
		border: .5px solid rgba(0, 0, 0, .05);
	}
	
	.m-avatar-box .m-img-box::before {
		content: "";
		position: absolute;
		z-index: 2;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border: 1px solid rgba(0, 0, 0, .05);
		border-radius: 50%;
	}
	
	.m-avatar-box .m-img-box img {
		border-radius: 50%;
	}
	
	.m-img-box img {
		width: 100%;
		height: 100%;
		vertical-align: top;
		-o-object-fit: cover;
		object-fit: cover;
	}
	
	a,
	img,
	label {
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}
	
	.m-avatar-box .m-img-box .m-icon {
		position: absolute;
		z-index: 3;
		right: -.0625rem;
		bottom: -.0625rem;
	}
	
	.m-icon-goldv {
		position: relative;
	}
	
	.m-icon {
		font-size: 14px;
	}
	
	.m-icon-goldv {
		background-position: -1em -52em;
	}
	
	.m-icon {
		display: inline-block;
		vertical-align: top;
		/*background-image: url(../../img/sprite.svg);*/
		background-size: 3em auto;
		width: 1em;
		height: 1em;
	}
	
	.m-icon-goldv::after {
		content: ' ';
		display: block;
		height: 100%;
		width: 100%;
		background-repeat: no-repeat;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAJ2CAMAAAAezuDMAAACylBMV…/72gRo2DOk2m4hGqJwmyANDwx9FjT8m0tDl4YuDf8faPgvWQgJbA2v0gUAAAAASUVORK5CYII=);
		background-size: 1em auto;
		background-position: 0 -10000px;
		-webkit-animation: sprite 2s steps(15) 3 backwards;
		animation: sprite 2s steps(15) 3 backwards;
	}
	
	.m-box-dir {
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
	}
	
	.m-box-center {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
	}
	
	.m-box-col {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		width: 100%;
		display: block;
		min-width: 0;
	}
	
	.card9 .weibo-top .m-text-box {
		margin-left: .75rem;
	}
	
	.m-text-box>* {
		margin: 0 0 .375rem 0;
	}
	
	.card9.weibo-member .weibo-top .m-text-box h3 {
		color: #F46200;
	}
	
	.card9 .weibo-top .m-text-box h3 {
		font-size: .9375rem;
		margin: 0;
	}
	
	.m-text-box h3 {
		font-size: 1rem;
		color: #333;
		line-height: 1.4;
	}
	
	.m-text-cut {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.m-text-box h3 .m-icon {
		vertical-align: -.125rem;
	}
	
	.m-icon {
		font-size: 14px;
	}
	
	.m-icon-vipl3 {
		background-position: -1em -40em;
	}
	
	.m-icon {
		display: inline-block;
		vertical-align: top;
		/*background-image: url(../../img/sprite.svg);*/
		background-size: 3em auto;
		width: 1em;
		height: 1em;
	}
	
	.card9 .weibo-top .m-text-box h4 {
		color: #939393;
	}
	
	.m-text-box h4:last-child {
		color: #939393;
	}
	
	.m-text-box>:last-child {
		margin: 0;
	}
	
	.m-text-box h4 {
		font-size: .75rem;
		color: #636363;
		line-height: 1.5;
	}
	
	.m-text-box>* {
		margin: 0 0 .375rem 0;
	}
	
	.m-text-cut {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.card9 .weibo-main .weibo-og {
		font-size: 1.0625rem;
		color: #333;
		padding: .75rem;
	}
	
	.card9 .weibo-main .weibo-text {
		line-height: 1.5;
		word-wrap: break-word;
	}
	
	.card9 .weibo-main .media-b {
		margin: .625rem -.125rem -.375rem;
	}
	
	.card9 .weibo-main .weibo-media {
		margin-top: .625rem;
	}
	
	.card9 .weibo-main .media-b .m-auto-list {
		max-width: 100%;
	}
	
	.card9 .weibo-main .media-b .m-auto-list {
		margin-left: -.125rem;
		margin-right: -.125rem;
		margin-bottom: -.25rem;
		padding: 0 0;
	}
	
	.card9 .weibo-main .media-b .m-auto-list {
		max-width: 28.75rem;
	}
	
	.m-auto-list {
		overflow: hidden;
		font-size: 0;
	}
	
	ol,
	ul {
		list-style: none;
	}
	
	.card9 .weibo-main .media-b .m-auto-list .m-auto-box {
		width: 33.33%;
	}
	
	.card9 .weibo-main .weibo-media .m-auto-list li {
		display: inline-block;
		vertical-align: top;
	}
	
	.card9 .weibo-main .media-b .m-auto-box {
		padding-left: .125rem;
		padding-right: .125rem;
		margin-bottom: .25rem;
	}
	
	.m-auto-box {
		display: inline-block;
		vertical-align: top;
		box-sizing: border-box;
	}
	
	.m-imghold-square {
		padding-bottom: 100%;
	}
	
	[class*=m-imghold] {
		height: 0;
		position: relative;
	}
	
	.m-img-box {
		display: inline-block;
		width: 100%;
	}
	
	[class*=m-imghold]>img {
		z-index: 0;
		height: 100%;
		position: absolute;
	}
	
	.m-img-box img {
		width: 100%;
		height: 100%;
		vertical-align: top;
		-o-object-fit: cover;
		object-fit: cover;
	}
	
	.iosx2 footer.m-ctrl-box {
		-o-border-image: none;
		border-image: none;
		border-top-width: .5px;
		border-right-width: 0;
		border-bottom-width: 0;
		border-left-width: 0;
	}
	
	footer.m-ctrl-box {
		border-top-width: 1px;
		border-right-width: 0;
		border-bottom-width: 0;
		border-left-width: 0;
		border-color: #e6e6e6;
		border-style: solid;
		height: 2.125rem;
	}
	.m-ctrl-box .m-diy-btn {
		color: #939393;
		height: 100%;
	}
	
	.m-box-center {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
	}
	
	.m-box-center-a {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	
	.m-box-col {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		width: 100%;
		/*display: block;*/
		min-width: 0;
	}
	
	.m-ctrl-box .m-font {
		font-size: 1rem;
		vertical-align: middle;
	}
	
	.m-font {
		font-family: marvelfont;
		display: inline-block;
		-webkit-font-smoothing: antialiased;
	}
	
	.m-ctrl-box .m-diy-btn h4 {
		font-size: .8125rem;
		display: inline-block;
		margin-top: 0;
		margin-left: .25rem;
	}
	
	.iosx2 .m-line-gradient {
		width: .5px;
	}
	
	.m-line-gradient {
		-webkit-mask: -webkit-linear-gradient(top, transparent, #000 30%, #000 70%, transparent 100%);
		width: 1px;
		background-color: #e6e6e6;
		height: 1.5rem;
	}
	
	.iosx2 .h5-hl__comment[data-v-36bb2c08] {
		-o-border-image: none;
		border-image: none;
		border-top-width: .5px;
		border-right-width: 0;
		border-bottom-width: 0;
		border-left-width: 0;
	}
	
	.h5-hl__comment[data-v-36bb2c08] {
		border-top-width: 1px;
		border-right-width: 0;
		border-bottom-width: 0;
		border-left-width: 0;
		border-color: #e7e7e7;
		border-style: solid;
		-webkit-box-shadow: 0 -1px 0.125rem #eee;
		box-shadow: 0 -1px 0.125rem #eee;
	}
	
	.iosx2 .comment-top[data-v-36bb2c08] {
		-o-border-image: none;
		border-image: none;
		border-top-width: 0;
		border-right-width: 0;
		border-bottom-width: .5px;
		border-left-width: 0;
	}
	
	.comment-top-left[data-v-36bb2c08] {
		float: left;
		height: 100%;
		width: 100%;
	}
	
	.comment-top-left li[data-v-36bb2c08] {
		margin: 0 .75rem;
		float: left;
		height: 100%;
	}
	
	.comment-tab[data-v-36bb2c08] {
		padding: 0 .25rem;
		font-size: 0;
		letter-spacing: -6px;
		position: relative;
		display: block;
		height: 100%;
		line-height: 2.75rem;
	}
	
	.comment-tab span[data-v-36bb2c08]:first-child {
		margin-right: .25rem;
	}
	
	.comment-tab span[data-v-36bb2c08] {
		font-size: .875rem;
		color: #929292;
		letter-spacing: normal;
	}
	
	.comment-top[data-v-36bb2c08] {
		background-color: #fff;
		border-top-width: 0;
		border-right-width: 0;
		border-bottom-width: 1px;
		border-left-width: 0;
		border-color: #e0e0e0;
		border-style: solid;
		overflow: hidden;
		height: 2.75rem;
	}
	
	.comment-top-left .comment-tab-cur[data-v-36bb2c08]:after {
		content: "";
		position: absolute;
		width: 100%;
		height: .125rem;
		background-color: #ff8200;
		bottom: 0;
		left: 0;
		-webkit-transform: scaleY(1);
		transform: scaleY(1);
		z-index: 2;
	}
	
	.comment-item[data-v-60ad2e50]:first-child {
		border-top: 0;
	}
	
	.iosx2 .comment-item[data-v-60ad2e50] {
		-o-border-image: none;
		border-image: none;
		border-top-width: .5px;
		border-right-width: 0;
		border-bottom-width: 0;
		border-left-width: 0;
	}
	
	.comment-item[data-v-60ad2e50] {
		background-color: #fcfcfc;
		border-top-width: 1px;
		border-right-width: 0;
		border-bottom-width: 0;
		border-left-width: 0;
		border-color: #e0e0e0;
		border-style: solid;
		padding: .8125rem 0;
		position: relative;
	}
	
	.m-box {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	
	.comment-user-img[data-v-60ad2e50] {
		width: 2.4375rem;
		height: 2.4375rem;
		margin: 0 .75rem;
	}
	
	.comment-user-img a[data-v-60ad2e50] {
		width: 100%;
		height: 100%;
		display: block;
	}
	
	.m-avatar-box .m-img-box {
		border-radius: 50%;
		position: relative;
	}
	
	.m-img-box {
		display: inline-block;
		width: 100%;
	}
	
	.iosx2 .m-avatar-box .m-img-box::before {
		border: .5px solid rgba(0, 0, 0, .05);
	}
	
	.m-avatar-box .m-img-box::before {
		content: "";
		position: absolute;
		z-index: 2;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border: 1px solid rgba(0, 0, 0, .05);
		border-radius: 50%;
	}
	
	.comment-user-img a img[data-v-60ad2e50] {
		width: 100%;
		height: 100%;
	}
	
	.m-avatar-box .m-img-box img {
		border-radius: 50%;
	}
	
	.m-img-box img {
		width: 100%;
		height: 100%;
		vertical-align: top;
		-o-object-fit: cover;
		object-fit: cover;
	}
	
	.comment-user-img+.m-box-col[data-v-60ad2e50] {
		padding-right: .75rem;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	.comment-user-name[data-v-60ad2e50] {
		color: #333;
		font-size: .875rem;
		line-height: 1.43;
		word-break: break-word;
	}
	
	.comment-time[data-v-60ad2e50] {
		color: #939393;
		font-size: 0;
		letter-spacing: -6px;
		margin-bottom: .25rem;
	}
	
	.comment-time span[data-v-60ad2e50] {
		letter-spacing: normal;
		font-size: .75rem;
		line-height: 1.58;
		margin-right: .625rem;
		display: inline-block;
	}
	
	.comment-con-bot[data-v-60ad2e50] {
		padding-left: 3.9375rem;
		padding-right: .75rem;
	}
	
	.comment-con-bot .comment-con[data-v-60ad2e50] {
		text-align: justify;
	}
	
	.comment-con[data-v-60ad2e50] {
		font-size: 1rem;
		color: #636363;
		line-height: 1.375;
		word-break: break-word;
	}
	
	.comment-item[data-v-7f5164aa]:first-child {
		border-top: 0;
	}
	
	.iosx2 .comment-item[data-v-7f5164aa] {
		-o-border-image: none;
		border-image: none;
		border-top-width: .5px;
		border-right-width: 0;
		border-bottom-width: 0;
		border-left-width: 0;
	}
	
	.comment-item[data-v-7f5164aa] {
		background-color: #fcfcfc;
		border-top-width: 1px;
		border-right-width: 0;
		border-bottom-width: 0;
		border-left-width: 0;
		border-color: #e0e0e0;
		border-style: solid;
		padding: .8125rem 0;
		position: relative;
	}
	
	.comment-user-img[data-v-7f5164aa] {
		width: 2.4375rem;
		height: 2.4375rem;
		margin: 0 .75rem;
	}
	
	.comment-user-img a[data-v-7f5164aa] {
		width: 100%;
		height: 100%;
		display: block;
	}
	
	.comment-user-img a img[data-v-7f5164aa] {
		width: 100%;
		height: 100%;
	}
	
	.comment-user-img+.m-box-col[data-v-7f5164aa] {
		padding-right: .75rem;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	
	.comment-user-name[data-v-7f5164aa] {
		color: #333;
		font-size: .875rem;
		line-height: 1.43;
		word-break: break-word;
	}
	
	.comment-time[data-v-7f5164aa] {
		color: #939393;
		font-size: 0;
		letter-spacing: -6px;
		margin-bottom: .25rem;
	}
	
	.comment-time span[data-v-7f5164aa] {
		letter-spacing: normal;
		font-size: .75rem;
		line-height: 1.58;
		margin-right: .625rem;
		display: inline-block;
	}
	
	.comment-zan[data-v-7f5164aa] {
		height: 1rem;
		padding-right: .75rem;
		font-size: 0;
		letter-spacing: -6px;
		padding-top: .25rem;
	}
	
	.comment-zan .m-icon[data-v-7f5164aa] {
		width: 1rem;
		height: 1rem;
	}
	
	.comment-dz-num[data-v-7f5164aa] {
		font-size: .75rem;
		color: #939393;
		letter-spacing: normal;
		line-height: 1.4;
		margin-left: .25rem;
	}
	
	.comment-con-bot[data-v-7f5164aa] {
		padding-left: 3.9375rem;
		padding-right: .75rem;
	}
	
	.comment-con-bot .comment-con[data-v-7f5164aa] {
		text-align: justify;
	}
	
	.comment-con[data-v-7f5164aa] {
		font-size: 1rem;
		color: #636363;
		line-height: 1.375;
		word-break: break-word;
	}
	
	.like-item[data-v-5068b85c]:first-child {
		border-top: 0;
	}
	
	.iosx2 .like-item[data-v-5068b85c] {
		-o-border-image: none;
		border-image: none;
		border-top-width: .5px;
		border-right-width: 0;
		border-bottom-width: 0;
		border-left-width: 0;
	}
	
	.like-item[data-v-5068b85c] {
		background-color: #fcfcfc;
		border-top-width: 1px;
		border-right-width: 0;
		border-bottom-width: 0;
		border-left-width: 0;
		border-color: #e0e0e0;
		border-style: solid;
		padding: .8125rem 0;
		position: relative;
	}
	
	.comment-user-img[data-v-5068b85c] {
		width: 2.4375rem;
		height: 2.4375rem;
		margin: 0 .75rem;
	}
	
	.comment-user-img a[data-v-5068b85c] {
		width: 100%;
		height: 100%;
		display: block;
	}
	
	.comment-user-img a img[data-v-5068b85c] {
		width: 100%;
		height: 100%;
	}
	
	.comment-user-name[data-v-5068b85c] {
		color: #333;
		font-size: .875rem;
		line-height: 1.43;
		word-break: break-word;
	}
.tips {
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}
.btn{
    -webkit-animation: fadeInUp-data-v-2c3bd7c5 .5s ease-in-out both;
}
.btn{
    display: inline-block;
    width: 7.75rem;
    line-height: 2.0625rem;
    text-align: center;
    border: 1px solid #fd993c;
    font-size: 1rem;
    vertical-align: middle;
    border-radius: 7.5rem;
    -webkit-box-shadow: 0 4px 9px 0 hsla(29,25%,53%,.38);
    box-shadow: 0 4px 9px 0 hsla(29,25%,53%,.38);
    background: #fd993c;
    background-clip: padding-box;
    color: #fff;
}
.m-wpbtn-lbox, .m-wpop-box {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
.m-wpop-box {
    background-color: rgba(0,0,0,.45);
    top: 0;
    z-index: 10000;
}
.m-wpbtn-lbox {
    z-index: 10001;
}
.m-wpbtn-lbox, .m-wpop-box {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
.m-wpbtn-list {
    background-color: hsla(0,0%,100%,.8);
    display: block;
}
.iosx2 .m-wpbtn-list li {
    border-width: .5px;
}
.m-wpbtn-list li {
    width: 100%;
    display: block;
    text-align: center;
    border-width: 1px;
    border-color: hsla(0,0%,84%,.8);
    border-bottom-style: solid;
}
.m-wpbtn-list+.m-wpbtn-list {
    margin-top: .3125rem;
}
.m-wpbtn-list li a {
    font-size: 1.125rem;
    color: #333;
    display: inline-block;
    height: 3rem;
    line-height: 3rem;
}
.m-wpbtn-list li:last-child {
    border-bottom: 0;
}
.pswp {
    z-index: 999999999;
}
.pswp--open {
    display: block;
}
.pswp--animate_opacity {
    opacity: .001;
    will-change: opacity;
    transition: opacity 333ms cubic-bezier(.4,0,.22,1);
}
.pswp {
    /*display: none;*/
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    -ms-touch-action: none;
    touch-action: none;
    z-index: 1500;
    -webkit-text-size-adjust: 100%;
    -webkit-backface-visibility: hidden;
    outline: none;
}
.pswp--animated-in .pswp__bg, .pswp--animated-in .pswp__zoom-wrap {
    transition: none;
}
.pswp__bg {
    will-change: opacity;
    transition: opacity 333ms cubic-bezier(.4,0,.22,1);
}
.pswp__bg, .pswp__scroll-wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.pswp__bg {
    background: #000;
    opacity: 0;
    -webkit-backface-visibility: hidden;
}
.pswp * {
    box-sizing: border-box;
}
.pswp__scroll-wrap {
    overflow: hidden;
}
.pswp__container, .pswp__zoom-wrap {
    -webkit-backface-visibility: hidden;
}
.pswp__container, .pswp__img {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
}
.pswp__container, .pswp__zoom-wrap {
    -ms-touch-action: none;
    touch-action: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.pswp__img, .pswp__item {
    position: absolute;
    left: 0;
    top: 0;
}
.pswp__item {
    right: 0;
    bottom: 0;
    overflow: hidden;
}
.pswp--animated-in .pswp__bg, .pswp--animated-in .pswp__zoom-wrap {
    transition: none;
}
.pswp__container, .pswp__zoom-wrap {
    -webkit-backface-visibility: hidden;
}
.pswp__zoom-wrap {
    position: absolute;
    width: 100%;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    transition: transform 333ms cubic-bezier(.4,0,.22,1);
}
.pswp__container, .pswp__zoom-wrap {
    -ms-touch-action: none;
    touch-action: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.pswp img {
    max-width: none;
}
.pswp__img--placeholder {
    -webkit-backface-visibility: hidden;
}
.pswp__img {
    width: auto;
    height: auto;
}
.pswp__img, .pswp__item {
    position: absolute;
    left: 0;
    top: 0;
}
.pswp__container, .pswp__img {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
}
.pswp__ui {
    -webkit-font-smoothing: auto;
    visibility: visible;
    opacity: 1;
    z-index: 1550;
}
.pswp__caption, .pswp__top-bar {
    background-color: rgba(0,0,0,.5);
}
.pswp--has_mouse .pswp__button--arrow--left, .pswp--has_mouse .pswp__button--arrow--right, .pswp__caption, .pswp__top-bar {
    -webkit-backface-visibility: hidden;
    will-change: opacity;
    transition: opacity 333ms cubic-bezier(.4,0,.22,1);
}
.pswp__top-bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 44px;
    width: 100%;
}
.pswp__counter {
    position: absolute;
    left: 0;
    top: 0;
    height: 44px;
    font-size: 13px;
    line-height: 44px;
    color: #fff;
    opacity: .75;
    padding: 0 10px;
}
.pswp__counter, .pswp__share-modal {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
@media (-webkit-min-device-pixel-ratio: 1.1), (-webkit-min-device-pixel-ratio: 1.09375), (min-resolution: 1.1dppx), (min-resolution: 105dpi)
.pswp--svg .pswp__button, .pswp--svg .pswp__button--arrow--left:before, .pswp--svg .pswp__button--arrow--right:before {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY0IiBoZWlnaHQ9Ijg4IiB2aWV3Qm94P…A5LjA0MyAxOS4wMDhsLS4wODUgNS0xLS4wMTcuMDg1LTV6Ii8+PC9nPjwvZz48L2c+PC9zdmc+);
}

.pswp__button--close {
    background-position: 0 -44px;
    background: #fff;
}
.pswp__button, .pswp__button--arrow--left:before, .pswp__button--arrow--right:before {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAABYCAQAAACjBqE3AAAB6klEQ…trXvCVx0U9gt3fxvnA0/hB4nmRJEmSJEmSJEmSJGmHfgFLaDPoMu5xWwAAAABJRU5ErkJggg==) 0 0 no-repeat;
    background-size: 264px 88px;
    color:#fff;
    width: 44px;
    height: 44px;
}
.pswp__button {
    width: 44px;
    height: 44px;
    position: relative;
    background: none;
    cursor: pointer;
    overflow: visible;
    -webkit-appearance: none;
    display: block;
    border: 0;
    padding: 0;
    margin: 0;
    float: right;
    opacity: .75;
    transition: opacity .2s;
    box-shadow: none;
}
.pswp--supports-fs .pswp__button--fs {
    display: block;
}
.pswp__button--zoom {
    display: none;
    background-position: -88px 0;
}
@media screen and (max-width: 1024px)
.pswp__preloader {
    position: relative;
    left: auto;
    top: auto;
    margin: 0;
    float: right;
}
.pswp__preloader {
    width: 44px;
    height: 44px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -22px;
    opacity: 0;
    transition: opacity .25s ease-out;
    will-change: opacity;
    direction: ltr;
}
.pswp--css_animation .pswp__preloader__icn {
    background: none;
    opacity: .75;
    width: 14px;
    height: 14px;
    position: absolute;
    left: 15px;
    top: 15px;
    margin: 0;
}
.pswp--css_animation .pswp__preloader__cut {
    position: relative;
    width: 7px;
    height: 14px;
    overflow: hidden;
}
.pswp--css_animation .pswp__preloader__donut {
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    border: 2px solid #fff;
    border-radius: 50%;
    border-left-color: transparent;
    border-bottom-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    background: none;
    margin: 0;
}
.pswp__preloader__icn {
    width: 20px;
    height: 20px;
    margin: 12px;
}
</style>