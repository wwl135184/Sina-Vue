<template>
	<div style="overflow: auto; height: 667px;" v-scroll="loadMore">
	<div  id="fix">
		<!---->
		<div v-for="n in news" class="card card9 line-around" data-act-type="hover" data-jump="/status/Fu8menGs2" id="boxId_1510127736127_62" @click="weibocontent(n.id)" >
			<div class="vip-card" style="background-image: url(&quot;https://img.t.sinajs.cn/t6/skin/public/feed_cover/star_104_os7.png&quot;); z-index: 0;"></div>
			<header class="layout-box media-graphic">
				<a href="https://m.weibo.cn/u/2718604160?uid=2718604160&amp;luicode=20000174" class="mod-media size-xs">
					<div class="media-main"><img :src="n.userimg" width="100%"><i class="icon icon-yellowv icon-v iconfont"></i></div>
				</a>
				<div class="box-col item-list">
					<a href="https://m.weibo.cn/u/2718604160?uid=2718604160&amp;luicode=20000174" class="item-main txt-l mct-a txt-cut"><span>{{n.username}}</span> </a>
					<div class="item-minor txt-xxs mct-d txt-cut"><span class="time">{{n.time}}</span><span class="from">来自微博 weibo.com</span></div>
				</div>
				<a class="operate-box" @click="popmenu" data-act-type="hover"><i class="icon-font icon-icon88 iconfont txt-s"></i></a>
			</header>
			<section class="weibo-detail">
				<p class="default-content txt-xl">{{n.content}}</p>
				<div class="media-pic-list">
					<ul>
						<li v-for="img in n.img"><img data-node="pic" data-act-type="hover" :src="img" class="loaded" @click="showimg(img)"></li>

					</ul>
				</div>
				
			</section>
			<footer class="more-detail line-top layout-box box-center-v">
				<a :href="arr[0].href" @click="sendid(arr[0].id)" class="box-col txt-s" data-act-type="hover" data-node="forward"><i class="icon-font icon-font-forward iconfont icon-zhuanfa"></i><em class="num mct-d">{{n.forward}}</em></a><i class="line-gradient"></i>
				<a :href="arr[1].href" @click="sendid(arr[1].id)" class="box-col txt-s" data-act-type="hover" data-node="comment"><i class="icon-font icon-font-comment iconfont icon-iconheji-"></i><em class="num mct-d">{{n.comment}}</em></a><i class="line-gradient"></i>
				<a :href="arr[2].href" @click="sendid(arr[2].id)" class="box-col txt-s" data-act-type="hover" data-node="like"><i class="icon icon-likesmall iconfont icon-dianzan-copy"></i><em class="num mct-d">{{n.like}}</em></a>
			</footer>
		</div>
		<!--图片放大-->
		<div class="J-slider" v-if="imgbool" style="position: fixed; margin: auto; overflow: hidden;z-index:999;">
			<div id="J-slider-cont" style="position: relative; top: 0px; left: 0px; width: 375px; height: 667px; transform: translate(0px, 0px) translateZ(0px);">
				<div id="J-wrapper1" class="wrapper " style="-webkit-transform:translate3d(0,0,0);width:375px;height:667px" pid="006DQuwQly1flbm99li3uj30kf07ldgb" zannum="10" zanliked="true">
					<div id="J-scroller1" class="scroller" style="transform-origin: 0px 0px 0px; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) scale(1) translateZ(0px); line-height: 667px;"><img :src="img" style="opacity: 1;"></div>
				</div>
			</div>
			<div class="ctrlbar" style="position:fixed">
				<a id="J-zan" href="javascript:;" class=""><i class="icon animated  icon-liked iconfont icon-dianzan" :style="{'color': colorbool?'orange':'#fff'}" @click="like"></i><span id="J-zan-text" class="zan" style="display: none;">赞</span><span id="J-zan-count" data-num="0" style="">{{num}}</span></a>
				<a id="J-close" @click="showimg">关闭</a>
			</div>
		</div>
		<!--底部弹出框-->
		<div class="ux-popmenu" v-if="bool" style="position: fixed; background-color: rgba(0, 0, 0, 0.5);">
			<div class="content show" style="bottom: 0px; position: fixed;">
				<section class="card-combine">
					<a href="javascript:;" node-type="addFav" class="line-bottom" reporttype=""><span>收藏</span></a>
					<a href="javascript:;" node-type="shield" class="line-bottom" reporttype=""><span>屏蔽</span></a>
					<a href="javascript:;" node-type="report" reporttype="1"><span>举报</span></a>
					<a @click="popmenu" class="close line-top" href="javascript:;"><span>取消</span></a>
				</section>
			</div>
		</div>
		<div class="appTips">
			<a href="javascript:;" ontouchstart="">微博内打开</a>
		</div>
		<!--更多加载-->
				<!--<div class="line-around layout-box mod-pagination" data-node="turnPage" style="display: block;">
					<a href="javascript:;" class="btn box-col line-right isDisabled" data-node="prevPage">上一页</a>
					<a href="javascript:;" class="box-col">
						<div class="select-wrapper layout-box box-center-h">
							<select name="" id="" data-node="pageSelect">
								<option value="1">第1页</option>
								<option value="2">第2页</option>
								<option value="3">第3页</option>
								<option value="4">第4页</option>
								<option value="5">第5页</option>
								<option value="6">第6页</option>
								<option value="7">第7页</option>
								<option value="8">第8页</option>
								<option value="9">第9页</option>
								<option value="10">第10页</option>
							</select><span class="select-txt" data-node="curPage" data-curpage="1">第1页</span><span class="plus"><i class="icon-font icon-font-arrow-down"></i></span></div>
					</a>
					<a href="javascript:;" class="btn box-col line-left" data-node="nextPage">下一页</a>
				</div>-->
				<div class="loading" data-node="more" style="display: block;"></div>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bool: false,
				news: [],
				imgbool: false,
				img: "",
				num:10,
				colorbool:false,
				arr:[{
					id:1,
					href:"#/weibocontent/forward"
				},{
					id:2,
					href:"#/weibocontent/comment"
				},{
					id:3,
					href:"#/weibocontent/like"
				}]
			}
		},
		methods: {
			like(){
				console.log(this.colorbool)
				if(!this.colorbool){
					this.num += 1;
				}else{
					this.num -= 1;
				}
				this.colorbool = !this.colorbool;
				
			},
			sendid(id){
				this.$store.state.sendid = id;
			},
			popmenu() {
				this.bool = !this.bool
			},
			showimg(img) {
				this.imgbool = !this.imgbool;
				this.img = img;
			},
			weibocontent(id) {
				this.$store.state.userid = id;
			},
			loadMore: function() {
				var self = this;
				$.ajax({
					url: "http://10.30.152.85:3000/users/content",
					type: "post",
					success: function(data) {
						//	console.log(data.newslist)
						self.news = self.news.concat(data)
						console.log(self.news)
					}
				})
			}

		},
		directives: {
					scroll: {
						bind: function(el, binding) {
							el.addEventListener("scroll", function(e) {
								if(e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight) {							
									binding.value()
								}
							})
						}
					}
		},
		mounted() {
			this.loadMore()
			
		},
		/*watch:{
			weibocontent(id){
				this.$store.state.userid = id;
			}
		}*/
	}
</script>

<style scoped>
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	#fix{
		background: #f2f2f2;
	}
	[data-jump] {
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}
	
	.card9 {
		position: relative;
	}
	
	@media (-webkit-min-device-pixel-ratio: 2),
	not all base-d1c7f99e51…39d97dbb.css:1 .line-around,
	.module {
		border: none;
		background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #e6e6e6), color-stop(50%, #e6e6e6), color-stop(50%, transparent)), -webkit-gradient(linear, left top, left bottom, color-stop(50%, transparent), color-stop(50%, transparent), color-stop(100%, #d8d8d8));
		background-image: -webkit-linear-gradient(top, #e6e6e6 0, #e6e6e6 50%, transparent 50%), -webkit-linear-gradient(top, transparent 50%, #d8d8d8 50%, #d8d8d8 100%);
		background-image: linear-gradient(to bottom, #e6e6e6 0, #e6e6e6 50%, transparent 50%), linear-gradient(to bottom, transparent 50%, #d8d8d8 50%, #d8d8d8 100%);
		-webkit-background-size: 100% 1px, 100% 1px;
		background-size: 100% 1px, 100% 1px;
		background-repeat: no-repeat;
		background-position: top, bottom;
	}
	
	.line-around,
	.module {
		background-color: #fff;
		border-top: 1px solid #e6e6e6;
		border-bottom: 1px solid #d8d8d8;
		box-sizing: border-box;
		box-shadow: 0 1px 0.1875rem -0.125rem rgba(0, 0, 0, .2);
	}
	/*@media (-webkit-min-device-pixel-ratio: 2), not all*/
	
	.card9 header .media-main:before {
		width: 4.25rem;
		height: 4.25rem;
		-webkit-transform: scale(0.5) translate(-50%, -50%);
	}
	
	.card9 header .media-main:before {
		/*content: " ";*/
		position: absolute;
		border: .0625rem solid #e4e4e4;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		top: 0;
		left: 0;
		border-radius: 50%;
	}
	
	.card,
	.module {
		margin-bottom: .5625rem;
	}
	
	@media (max-width: 414px) cards-9babdfd7d…79a2977d.css:1 .card9 .vip-card {
		background-repeat: no-repeat;
		background-position: top right;
		background-size: 100% auto;
		position: absolute;
		top: -4px;
		right: 0;
		width: 100%;
		height: 60px;
		z-index: 1;
	}
	
	.layout-box {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
	}
	
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}
	
	.card9 header .mod-media {
		margin-top: .75rem;
		margin-bottom: .5rem;
	}
	
	.mod-media:first-child {
		margin-left: .75rem;
	}
	
	.size-xs {
		width: 2.125rem;
	}
	
	.mod-media {
		position: relative;
		display: block;
		text-align: center;
		margin: .625rem 0 .625rem .5rem;
	}
	
	a,
	img {
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}
	
	input,
	textarea,
	button,
	a {
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}
	
	a {
		text-decoration: none;
	}
	
	.mod-media .media-main {
		position: relative;
	}
	
	.card9 header .mod-media img {
		border-radius: 50%;
		width: 34px;
		height: 34px;
	}
	
	.mod-media img {
		display: block;
		vertical-align: top;
	}
	
	.card9 header .mod-media .icon {
		right: -.125rem;
		bottom: -.125rem;
	}
	
	.mod-media .icon {
		position: absolute;
		right: -.3125rem;
		bottom: -.3125rem;
	}
	
	.icon-yellowv {
		background-position: 0 0;
		width: .875rem;
		height: .875rem;
	}
	
	.icon {
		display: inline-block;
		/*background-image: url(../../img/lib/icons.a5c1305b.svg);*/
		background-size: 6.875rem 10.3125rem;
	}
	
	.card9 header .item-list {
		padding: .6875rem .6875rem 0;
	}
	
	.media-graphic .item-list {
		padding: .5rem .6875rem;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-direction: normal;
		-webkit-box-orient: vertical;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		overflow: hidden;
	}
	
	.layout-box .box-col {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		width: 100%;
	}
	
	.card9 .item-main {
		overflow: hidden;
		font-weight: 400;
		line-height: 1rem;
	}
	
	.media-graphic .item-main {
		line-height: 1.125rem;
		overflow: hidden;
	}
	
	a .mct-a,
	.mct-a {
		color: #333;
	}
	
	.txt-cut {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.txt-l {
		font-size: .9375rem;
	}
	
	.card9 header .item-minor {
		padding: 0;
		line-height: 1rem;
	}
	
	.media-graphic .item-minor,
	.media-graphic .item-other {
		padding: .25rem 0 0;
		line-height: 1rem;
	}
	
	.txt-xxs {
		font-size: .625rem;
	}
	
	.card9 .item-minor .from {
		padding: 0 0 0 .5rem;
	}
	
	.card9 .media-graphic .operate-box {
		position: relative;
		display: block;
		width: 3.75rem;
	}
	
	.card9 .operate-box .icon-font {
		position: absolute;
		margin: 0;
		top: .5rem;
		right: .5rem;
	}
	
	.icon-font {
		color: #aaa;
	}
	
	.txt-s {
		font-size: .8125rem;
	}
	
	.icon-font {
		font-family: wbfontregular;
		display: inline-block;
	}
	
	.card9 .weibo-detail {
		padding: .25rem .75rem .625rem;
	}
	
	card9 .default-content {
		word-wrap: break-word;
		line-height: 1.35rem;
	}
	
	.txt-xl {
		font-size: 1rem;
	}
	
	.card9 .media-pic-list {
		overflow: hidden;
		width: 15.5rem;
		margin-top: .4375rem;
	}
	
	.card9 .media-pic-list ul {
		margin-top: -.3125rem;
	}
	
	ol,
	ul {
		list-style: none;
	}
	
	.card9 .media-pic-list li {
		float: left;
		width: 4.75rem;
		height: 4.75rem;
		margin: .3125rem .3125rem 0 0;
	}
	
	.card9 .media-pic-list li img {
		height: 4.75rem;
		width: 4.75rem;
	}
	
	.card9 .more-detail {
		height: 2.25rem;
		text-align: center;
		line-height: 1.5rem;
		margin-bottom: -.0625rem;
	}
	
	@media (-webkit-min-device-pixel-ratio: 2),
	not all base-d1c7f99e51…39d97dbb.css:1 @media (-webkit-min-device-pixel-ratio: 2),
	not all base-d1c7f99e51…39d97dbb.css:1 .line-top {
		border: none;
		background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #dadada), color-stop(50%, #dadada), color-stop(50%, transparent));
		background-image: -webkit-linear-gradient(top, #dadada 0, #dadada 50%, transparent 50%);
		background-image: linear-gradient(to bottom, #dadada 0, #dadada 50%, transparent 50%);
		-webkit-background-size: 100% 1px;
		background-size: 100% 1px;
		background-repeat: no-repeat;
		background-position: top;
	}
	
	.line-top {
		border-top: 1px solid #dadada;
	}
	
	.box-center-v {
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	
	.layout-box {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
	}
	
	.card9 .more-detail a {
		padding: .375rem 0;
		text-decoration: none;
	}
	
	.layout-box .box-col {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		width: 100%;
	}
	
	.more-detail a {
		display: block;
		position: relative;
	}
	
	.txt-s {
		font-size: .8125rem;
	}
	
	.card9 .line-gradient {
		height: 1.5rem;
	}
	
	.line-gradient {
		-webkit-mask: -webkit-gradient(linear, left top, left bottom, color-stop(0%, transparent), color-stop(30%, #000), color-stop(70%, #000), color-stop(100%, transparent));
		-webkit-mask: -webkit-linear-gradient(top, transparent, #000 30%, #000 70%, transparent 100%);
		width: 1px;
	}
	
	@media (-webkit-min-device-pixel-ratio: 2),
	not all base-d1c7f99e51…39d97dbb.css:1 .line-right,
	.line-separate::before,
	.card.col-1 .line-separate::before,
	.card.col-2 .line-separate::before,
	.card.col-3 .line-separate::before,
	.card.col-4 .line-separate::before,
	.card.col-5 .line-separate::before,
	.line-gradient {
		border: none;
		background-image: -webkit-gradient(linear, left top, right top, color-stop(50%, transparent), color-stop(50%, #dadada), color-stop(100%, #dadada));
		background-image: -webkit-linear-gradient(left, transparent 50%, #dadada 50%, #dadada 100%);
		background-image: linear-gradient(to right, transparent 50%, #dadada 50%, #dadada 100%);
		background-size: 1px 100%;
		background-repeat: no-repeat;
		background-position: right;
	}
	
	.line-right,
	.line-separate::before,
	.card.col-1 .line-separate::before,
	.card.col-2 .line-separate::before,
	.card.col-3 .line-separate::before,
	.card.col-4 .line-separate::before,
	.card.col-5 .line-separate::before,
	.line-gradient {
		border-right: 1px solid #dadada;
	}
	
	.card9 .more-detail .icon-font,
	.card9 .more-detail .icon {
		vertical-align: -.125rem;
		color: #929292;
	}
	
	.card9 .more-detail .num {
		padding: 0 0 0 .1875rem;
		vertical-align: top;
	}
	
	a .mct-d,
	.mct-d {
		color: #929292;
	}
	
	.ux-popmenu {
		/*display: none;*/
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1001;
		transition: background-color .2s ease-in-out;
		overflow: hidden;
	}
	
	.ux-popmenu .content.show {
		bottom: 0;
		transition: bottom .2s ease-in-out;
	}
	
	.ux-popmenu .content {
		position: absolute;
		left: 0;
		bottom: -300px;
		width: 100%;
		background: #e7e7e7;
		border-top: 3px solid orange;
		box-shadow: 0 -1px 40px rgba(0, 0, 0, .3);
	}
	
	.ux-popmenu section a {
		display: block;
		height: 48px;
		line-height: 48px;
		text-align: center;
		font-size: 16px;
		background: #f8f8f8;
		color: #333;
		margin-bottom: 1px;
	}
	
	.ux-popmenu section span {
		display: block;
		background: #f8f8f8;
	}
	
	.ux-popmenu section .close {
		padding: 4px 0 0;
		background: #e7e7e7;
		color: orange;
	}
	
	.appTips {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 1.75rem;
		text-align: center;
	}
	
	.appTips a {
		display: inline-block;
		width: 7.75rem;
		line-height: 2.0625rem;
		text-align: center;
		border: #FD993C solid 1px;
		font-size: 1rem;
		vertical-align: middle;
		border-radius: 7.5rem;
		-webkit-box-shadow: 0 4px 9px 0 rgba(165, 133, 104, 0.38);
		box-shadow: 0 4px 9px 0 rgba(165, 133, 104, 0.38);
		background: #FD993C;
		background-clip: padding-box;
		color: #FFF;
		-webkit-animation: fadeInUp 0.5s ease-in-out both;
	}
	
	.J-slider {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #000;
	}
	
	.J-slider * {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	
	.J-slider .wrapper {
		float: left;
		z-index: 1;
		overflow: hidden;
		text-align: center;
	}
	
	.J-slider .scroller {
		z-index: 1;
	}
	
	.J-slider .scroller img {
		max-width: 100%;
		vertical-align: middle;
		opacity: 0;
		-webkit-transition: opacity .3s ease-out;
	}
	
	.J-slider .ctrlbar {
		position: absolute;
		bottom: 30px;
		left: 0;
		z-index: 99;
		width: 100%;
		line-height: 30px;
		text-align: center;
		color: #fff;
	}
	
	.J-slider #J-zan {
		float: right;
		margin: 0 15px 0 0;
	}
	
	.J-slider .ctrlbar a {
		display: block;
		width: 72px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 16px;
		color: #fff;
		background: rgba(128, 128, 128, .4);
		-webkit-box-shadow: 0 0 1px rgba(0, 0, 0, .3) inset;
		box-shadow: 0 0 1px rgba(0, 0, 0, .3) inset;
		border-radius: 2px;
		-webkit-border-radius: 2px;
	}
	
	.J-slider #J-zan .icon {
		float: left;
		margin: 3px 0 0 10px;
	}
	
	.animated {
		-webkit-animation-duration: 1s;
		animation-duration: 1s;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
	}
	
	.icon-liked {
		background-position: -3.125rem -2.5rem;
		width: 1.5rem;
		height: 1.5rem;
	}
	
	.icon {
		display: inline-block;
		/*background-image: url(../../img/lib/icons.a5c1305b.svg);*/
		background-size: 6.875rem 10.3125rem;
	}
	
	.J-slider #J-zan span {
		width: 35px;
		display: block;
		height: 30px;
		text-align: center;
		float: left;
	}
	
	.J-slider #J-zan #J-zan-count {
		font-size: 15px;
	}
	
	.J-slider #J-zan span {
		width: 35px;
		display: block;
		height: 30px;
		text-align: center;
		float: left;
	}
	
	.J-slider #J-close {
		float: left;
		margin: 0 0 0 15px;
	}
	@media (-webkit-min-device-pixel-ratio: 2), not all
.line-bottom, .card-combine .line-around:not(.card9), .line-separate::after {
    border: none;
    background-image: linear-gradient(to bottom,transparent 50%,#dadada 50%,#dadada 100%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: bottom;
}
.mod-pagination {
    line-height: 43px;
    font-size: .875rem;
}
.line-around, .module {
    background-color: #fff;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #d8d8d8;
    box-sizing: border-box;
    box-shadow: 0 1px 0.1875rem -0.125rem rgba(0,0,0,.2);
}
.mod-pagination .btn.isDisabled {
    color: rgba(146,146,146,.4);
}
.mod-pagination .btn {
    color: #929292;
    text-align: center;
}
.mod-pagination .box-col {
    display: block;
}
.layout-box .box-col {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
}
@media (-webkit-min-device-pixel-ratio: 2), not all
.line-right, .line-separate::before, .card.col-1 .line-separate::before, .card.col-2 .line-separate::before, .card.col-3 .line-separate::before, .card.col-4 .line-separate::before, .card.col-5 .line-separate::before, .line-gradient {
    border: none;
    background-image: -webkit-gradient(linear,left top,right top,color-stop(50%,transparent),color-stop(50%,#dadada),color-stop(100%,#dadada));
    background-image: -webkit-linear-gradient(left,transparent 50%,#dadada 50%,#dadada 100%);
    background-image: linear-gradient(to right,transparent 50%,#dadada 50%,#dadada 100%);
    background-size: 1px 100%;
    background-repeat: no-repeat;
    background-position: right;
}
.line-right, .line-separate::before, .card.col-1 .line-separate::before, .card.col-2 .line-separate::before, .card.col-3 .line-separate::before, .card.col-4 .line-separate::before, .card.col-5 .line-separate::before, .line-gradient {
    border-right: 1px solid #dadada;
}
.btn {
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    border-radius: .15625rem;
    border: none;
}
.card-combine>div:last-child {
    box-shadow: 0 1px 0.1875rem -0.125rem rgba(0,0,0,.2);
}
.loading {
    text-align: center;
    height: 25px;
}
.loading {
    display: block;
    min-height: 50px;
    background: url("https://h5.sinaimg.cn/weibocn/v6/img/440/loading.96c5cf34.gif") no-repeat center center;
    -webkit-background-size: 19px auto;
    background-size: 19px auto;
}
</style>