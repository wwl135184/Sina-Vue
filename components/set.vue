<template>
	<div>
		<div id="box" class="container stage-setting">
			<header class="module-topbar" id="boxId_1510216162776_1">
				<div class="title-group" style="position: relative;">
					<h1 class="title txt-cut">设置</h1>
				</div>
				<p style="position: absolute; left: 20px; top: 25%;" @click='back'>Back</p>
			</header>
			<div class="card11 card-combine" data-node="group" id="boxId_1510216162776_2">
				<h3 class="title mct-b txt-xs" data-node="gTitle"></h3>
				<div data-node="cardList" class="card-list">
					<div class="card card4 line-around" id="boxId_1510216162776_3">
						<a class="layout-box" data-act-type="hover">
							<div class="box-col txt-cut"><span class="mct-a ">个人资料</span></div> <span data-node="arrow" class="plus plus-s"><i class="icon-font icon-font-arrow-right txt-s"></i></span></a>
					</div>
				</div>
			</div>
			<div class="card11 card-combine" data-node="group" id="boxId_1510216162776_4">
				<div data-node="cardList" class="card-list">
					<div class="card card4 line-around" id="boxId_1510216162776_5">
						<a class="layout-box" data-act-type="hover">
							<div class="box-col txt-cut"><span class="mct-a ">隐私设置</span></div> <span data-node="arrow" class="plus plus-s"><i class="icon-font icon-font-arrow-right txt-s"></i></span></a>
					</div>
					<div class="card card4 line-around" id="boxId_1510216162776_6">
						<a class="layout-box" data-act-type="hover">
							<div class="box-col txt-cut"><span class="mct-a ">屏蔽设置</span></div> <span data-node="arrow" class="plus plus-s"><i class="icon-font icon-font-arrow-right txt-s"></i></span></a>
					</div>
					<div class="card card4 line-around" id="boxId_1510216162776_7">
						<a class="layout-box" data-act-type="hover">
							<div class="box-col txt-cut"><span class="mct-a ">悄悄关注</span></div> <span data-node="arrow" class="plus plus-s"><i class="icon-font icon-font-arrow-right txt-s"></i></span></a>
					</div>
				</div>
			</div>
			<div class="card11 card-combine" data-node="group" id="boxId_1510216162776_8">
				<div data-node="cardList" class="card-list">
					<div class="card card4 line-around" id="boxId_1510216162776_9">
						<a class="layout-box" data-act-type="hover">
							<div class="box-col txt-cut"><span class="mct-a ">帐号安全</span></div> <span data-node="arrow" class="plus plus-s"><i class="icon-font icon-font-arrow-right txt-s"></i></span></a>
					</div>
				</div>
			</div>
			<div class="card11 card-combine" data-node="group" id="boxId_1510216162776_10">
				<div data-node="cardList" class="card-list">
					<div class="card card4 line-around" id="boxId_1510216162776_11">
						<a class="layout-box" data-act-type="hover">
							<div class="box-col txt-cut"><span class="mct-a ">版本切换</span></div> <span data-node="arrow" class="plus plus-s"><i class="icon-font icon-font-arrow-right txt-s"></i></span></a>
					</div>
					<div class="card card4 line-around" id="boxId_1510216162776_12">
						<a class="layout-box" data-act-type="hover">
							<div class="box-col txt-cut"><span class="mct-a ">意见反馈</span></div> <span data-node="arrow" class="plus plus-s"><i class="icon-font icon-font-arrow-right txt-s"></i></span></a>
					</div>
				</div>
			</div>
			<div class="card card6" id="boxId_1510216162776_13">
				<a data-act-type="hover" class=" btn-red" @click='logout'>退出当前帐号 </a>
			</div>
			<div id="boxId_1510216162776_14"></div>
		</div>
	</div>
</template>

<script>
	import $ from "jquery";
	export default{
		methods:{
			back:function(){
				window.location.href='#/index';
			},
			logout:function(){
				$.ajax({
					type:"post",
					url:"http://10.30.152.85:3000/users/logout",
					success:function(data){
						alert(data);
						window.location.href = '#/login';
					}
				})
			}
		}
	}
</script>

<style scoped>
	@charset "UTF-8";
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
		vertical-align: baseline
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
		display: block
	}
	
	body {
		line-height: 1;
	}
	
	ol,
	ul {
		list-style: none
	}
	
	blockquote,
	q {
		quotes: none
	}
	
	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: '';
		content: none
	}
	
	table {
		border-collapse: collapse;
		border-spacing: 0
	}
	
	a {
		text-decoration: none;
		align-items: center;
		padding: .375rem 0 .375rem .75rem;
	}
	
	input,
	textarea,
	button,
	a {
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0)
	}
	
	body {
		-webkit-text-size-adjust: none
	}
	
	a,
	img {
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0)
	}
	
	input:focus {
		outline: 0
	}
	
	.btn {
		display: inline-block;
		vertical-align: middle;
		text-decoration: none;
		border-radius: .15625rem;
		border: none
	}
	
	.module-topbar {
		height: 44px;
		color: #333;
		text-align: center;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 19;
		-wekbit-box-shadow: 0 1px 2px #cfcfcf;
		box-shadow: 0 1px 2px #cfcfcf;
		background: #f9f9f9;
	}
	
	.module-topbar .title-group .title:only-child {
		font-size: 1.125rem;
		line-height: 44px;
	}
	
	.title-group {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	
	.title-group h1 {
		font-size: 1.125rem;
		line-height: 44px;
		font-size: 1.0625rem;
		line-height: 28px;
		color: #333;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.module-topbar .title-group .title {
		font-size: 1.0625rem;
		line-height: 28px;
		color: #333;
	}
	
	.txt-cut {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.module-topbar .iconf {
		width: 46px;
		font-size: 28px;
		height: 44px;
		line-height: 44px;
		color: #444;
		text-align: center;
	}
	
	.fl {
		float: left;
	}
	
	.btn:focus {
		outline: 0
	}
	
	.btn-default,
	.card .btn-default,
	.btn-red,
	.card .btn-red,
	.btn-green,
	.card .btn-green,
	.btn-blue,
	.card .btn-blue,
	.btn-orange,
	.card .btn-orange,
	.btn-white,
	.card .btn-white {
		display: block;
		text-align: center;
		height: 2.5rem;
		line-height: 2.5rem;
		font-size: .875rem;
		border-width: 1px;
		border-style: solid
	}
	
	.btn-default {
		color: #929292;
		border-color: #d6d6d6;
		background: #fff
	}
	
	.btn-default:active {
		background-color: #fafafa
	}
	
	.card .btn-default {
		color: #fff;
		border-color: #f0f0f0;
		background: #fff
	}
	
	.card .btn-default:active {
		background-color: #fefefe
	}
	
	.btn-red {
		color: #ffed7f;
		border-color: #ca001c;
		background: #de2b2b
	}
	
	.btn-red:active {
		background-color: #ca2828
	}
	
	.card .btn-red {
		color: #de2b2b;
		border-color: #f0f0f0;
		background: #fff
	}
	
	.card .btn-red:active {
		background-color: #fefefe
	}
	
	.btn-green {
		color: #fff;
		border-color: #0c9c1e;
		background: #10b524
	}
	
	.btn-green:active {
		background-color: #0ea020
	}
	
	.card .btn-green {
		color: #10b524;
		border-color: #f0f0f0;
		background: #fff
	}
	
	.card .btn-green:active {
		background-color: #fefefe
	}
	
	.btn-blue {
		color: #fff;
		border-color: #145fd7;
		background: #4a87ee
	}
	
	.btn-blue:active {
		background-color: #4274ee
	}
	
	.card .btn-blue {
		color: #4a87ee;
		border-color: #f0f0f0;
		background: #fff
	}
	
	.card .btn-blue:active {
		background-color: #fefefe
	}
	
	.btn-orange {
		color: #fff;
		border-color: #e86b0f;
		background: #ff8200
	}
	
	.btn-orange:active {
		background-color: #ed6707
	}
	
	.card .btn-orange {
		color: #ff8200;
		border-color: #f0f0f0;
		background: #fff
	}
	
	.card .btn-orange:active {
		background-color: #fefefe
	}
	
	.btn-white {
		color: #666;
		border-color: #f0f0f0;
		background: #fff
	}
	
	.btn-white:active {
		background-color: #fefefe
	}
	
	.card .btn-white {
		color: #fff;
		border-color: #f0f0f0;
		background: #fff
	}
	
	.card .btn-white:active {
		background-color: #fefefe
	}
	
	.card .btn-default,
	.card .btn-white {
		color: #929292
	}
	
	.btn-orange.btn-disable {
		color: rgba(255, 255, 255, .3);
		border-color: #e86b0f;
		background: #ff8200
	}
	
	.card6 .btn {
		width: 100%;
		border-width: 1px 0;
		border-radius: 0
	}
	
	.btn-block {
		width: 100%
	}
	
	.btn-link {
		box-shadow: inset 0 0 1px 0 #afafaf;
		padding: .25rem .3125rem;
		font-size: .75rem;
		line-height: .74rem;
		color: #5782b1;
		background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f3f3f3), to(#eee));
		background-image: -webkit-linear-gradient(#f3f3f3, #eee);
		background-image: linear-gradient(#f3f3f3, #eee)
	}
	
	.btn-vip,
	.btn-nvip {
		font-size: 0;
		height: 1.125rem;
		width: 2.25rem;
		text-align: center;
		background: rgba(242, 242, 242, .7);
		box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, .3)
	}
	
	.btn-vip .icon,
	.btn-nvip .icon {
		margin: -.0625rem .25rem 0 0;
		vertical-align: middle!important
	}
	
	.btn-vip .icon-font,
	.btn-nvip .icon-font {
		color: #f48800;
		font-size: .625rem;
		display: inline-block;
		vertical-align: middle;
		height: .75rem;
		line-height: .75rem
	}
	
	.btn-nvip {
		background: rgba(223, 223, 223, .7);
		box-shadow: none
	}
	
	.btn-nvip .icon-font {
		color: #b1b1b1
	}
	
	.btn-normal {
		color: #5d5d5d;
		background-color: #fdfdfd;
		border: 1px solid #dadada;
		border-radius: .1875rem;
		padding: .375rem .75rem;
		font-size: .875rem
	}
	
	.btn-normal:active {
		background-color: #e6e6e6
	}
	
	.btn-add,
	.btn-add .icon-font-add {
		color: #32963c
	}
	
	.btn-add,
	.btn-ok {
		font-size: .75rem;
		width: 4.1875rem;
		text-align: center;
		padding: .375rem 0;
		box-shadow: 0 .125rem .125rem -.0625rem rgba(0, 0, 0, .15)
	}
	
	.btn-add .icon-font-add,
	.btn-add .icon-font-ok,
	.btn-ok .icon-font-add,
	.btn-ok .icon-font-ok {
		margin-right: .125rem;
		font-size: .75rem;
		vertical-align: -.125rem
	}
	
	.btn-surl {
		font-size: .75rem;
		padding: .1875rem .375rem .25rem;
		height: .75rem;
		line-height: .75rem;
		color: #5184bc;
		margin: 0 .375rem
	}
	
	.btn-surl .iconimg {
		margin-right: .125rem;
		margin-top: -.125rem
	}
	
	.btn-surl .surl-text {
		display: inline-block;
		white-space: nowrap;
		max-width: 6.25rem;
		overflow: hidden;
		text-overflow: ellipsis;
		vertical-align: top
	}
	
	.container {
		padding: .4375rem 0
	}
	
	.container .card11 {
		margin: 0 0 .5625rem 0
	}
	
	.card .title {
		padding: .5rem .5rem .125rem .75rem
	}
	
	.card11>.card-list.line-around>.line-bottom:last-child,
	.card-combine .card11>.card-list.line-around>.line-around:last-child:not(.card9),
	.card11>.card-list.line-around>.line-separate:last-child::after {
		border-bottom: none;
		background-image: none
	}
	
	.card,
	.module {
		margin-bottom: .5625rem
	}
	
	.layout-padding {
		padding: 0 .75rem
	}
	
	.layout-box {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex
	}
	
	.box-row {
		-webkit-box-direction: normal;
		-webkit-box-orient: vertical;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column
	}
	
	.box-center-h {
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center
	}
	
	.box-center-v {
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center
	}
	
	.layout-box .box-col {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		width: 100%
	}
	
	.layout-box .plus {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-box-pack: end;
		-ms-flex-pack: end;
		-webkit-justify-content: flex-end;
		justify-content: flex-end
	}
	
	.layout-box .plus-s {
		width: 1rem;
		margin-right: .75rem
	}
	
	.layout-box .plus-m {
		width: 1.875rem;
		margin-right: .75rem
	}
	
	.layout-box .plus-m .icon-font {
		font-size: .875rem
	}
	
	.line-around,
	.module {
		background-color: #fff;
		border-top: 1px solid #e6e6e6;
		border-bottom: 1px solid #d8d8d8;
		box-sizing: border-box;
		box-shadow: 0 1px .1875rem -.125rem rgba(0, 0, 0, .2)
	}
	
	.line-all {
		border: 1px solid #f2f2f2
	}
	
	.line-right,
	.line-separate::before,
	.card.col-1 .line-separate::before,
	.card.col-2 .line-separate::before,
	.card.col-3 .line-separate::before,
	.card.col-4 .line-separate::before,
	.card.col-5 .line-separate::before,
	.line-gradient {
		border-right: 1px solid #dadada
	}
	
	.line-left {
		border-left: 1px solid #dadada
	}
	
	.line-top {
		border-top: 1px solid #dadada
	}
	
	.line-bottom,
	.card-combine .line-around:not(.card9),
	.line-separate::after {
		border-bottom: 1px solid #dadada
	}
	
	.card-combine>div:last-child {
		box-shadow: 0 1px .1875rem -.125rem rgba(0, 0, 0, .2)
	}
	
	.card-combine>.card-list>.card:not(.card9),
	.card-combine>.card-list>.module {
		margin-bottom: 0;
		margin-top: -1px
	}
	
	.line-around .line-around {
		box-shadow: none
	}
	
	.line-separate::before {
		position: absolute;
		right: -1px;
		top: 10%;
		content: ' ';
		width: 1px;
		height: 80%
	}
	
	.line-separate::after {
		position: absolute;
		left: 10%;
		bottom: -1px;
		content: ' ';
		width: 80%;
		height: 1px
	}
	
	.arrow-up {
		position: absolute;
		top: -.3125rem;
		left: .5rem;
		z-index: 0;
		width: .5rem;
		height: .5rem;
		background-color: #fefefe;
		-webkit-transform: rotate(45deg)
	}
	
	.arrow-up-in {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		-webkit-transform: rotate(-90deg)
	}
	
	.more-detail a {
		display: block;
		position: relative
	}
	
	.more-detail .line-separate:last-child::before {
		border-right: 0;
		background: 0 0
	}
	
	.card.col-1 .item-box {
		width: 100%
	}
	
	.card.col-2 .item-box {
		width: 50%
	}
	
	.card.col-3 .item-box {
		width: 33.3%
	}
	
	.card.col-4 .item-box {
		width: 25%
	}
	
	.card.col-5 .item-box {
		width: 20%
	}
	
	.card.col-1 .line-separate::before {
		border-right: 0;
		background: 0 0
	}
	
	.card.col-2 .line-separate:nth-child(2n)::before {
		border-right: 0;
		background: 0 0
	}
	
	.card.col-3 .line-separate:nth-child(3n)::before {
		border-right: 0;
		background: 0 0
	}
	
	.card.col-4 .line-separate:nth-child(4n)::before {
		border-right: 0;
		background: 0 0
	}
	
	.card.col-5 .line-separate:nth-child(5n)::before {
		border-right: 0;
		background: 0 0
	}
	
	.mod-media {
		position: relative;
		display: block;
		text-align: center;
		margin: .625rem 0 .625rem .5rem
	}
	
	.mod-media:first-child {
		margin-left: .75rem
	}
	
	.mod-media .media-main {
		position: relative
	}
	
	.mod-media .icon {
		position: absolute;
		right: -.3125rem;
		bottom: -.3125rem
	}
	
	.mod-media .icon-video {
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%)
	}
	
	.mod-media img {
		display: block;
		vertical-align: top
	}
	
	.mod-media .media-txt {
		margin: .5rem -.1rem 0 -.1rem;
		height: 1.5rem;
		line-height: 1.5rem
	}
	
	.mod-operate {
		width: 3.375rem;
		padding: .5rem 0;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center
	}
	
	.mod-operate i,
	.mod-operate div {
		color: #7fa9dc
	}
	
	.mod-operate.mod-operate-follow i,
	.mod-operate.mod-operate-follow div {
		color: #ff8200
	}
	
	.operate-inner .inner {
		text-align: center
	}
	
	.operate-inner .inner .txt-xxs {
		padding: .1875rem 0 0
	}
	
	.size-l {
		width: 4.375rem
	}
	
	.size-m {
		width: 4rem
	}
	
	.size-s {
		width: 3.125rem
	}
	
	.size-xs {
		width: 2.125rem
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
		overflow: hidden
	}
	
	.media-graphic .item-main {
		line-height: 1.125rem;
		overflow: hidden
	}
	
	.media-graphic .item-main .btn {
		vertical-align: bottom;
		margin: 0 0 0 .375rem
	}
	
	.media-graphic .item-main .icon {
		vertical-align: -.0625rem
	}
	
	.media-graphic .item-minor,
	.media-graphic .item-other {
		padding: .25rem 0 0;
		line-height: 1rem
	}
	
	.mod-media .score-box {
		display: block;
		width: 3.125rem;
		height: 3.125rem;
		line-height: 2.25rem;
		background: #fc9900;
		color: #fff;
		text-align: center;
		font-family: HelveticaNeue-Light;
		font-size: 1.125rem
	}
	
	.mod-media .score-box:first-letter {
		font-size: 2.25rem;
		vertical-align: -.75rem
	}
	
	.media-graphic .rank-stars .icon-font {
		margin-right: .125rem
	}
	
	.active {
		background-color: #ebebeb
	}
	
	.bubble {
		display: inline-block
	}
	
	.bubble-blue {
		width: 1.5rem;
		height: .8125rem;
		line-height: .8125rem;
		background-color: #61c3fc;
		border-radius: .125rem;
		color: #fff;
		overflow: hidden
	}
	
	.bubble-dot-red {
		min-width: 1rem;
		padding: 0 .3125rem;
		height: 1rem;
		line-height: 1rem;
		text-align: center;
		border-radius: .5rem;
		background-color: #fe6431;
		color: #fff;
		box-sizing: border-box;
		text-align: center
	}
	
	.animated {
		-webkit-animation-duration: 1s;
		animation-duration: 1s;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both
	}
	
	@-webkit-keyframes pulse {
		0% {
			-webkit-transform: scale(1)
		}
		50% {
			-webkit-transform: scale(1.5)
		}
		95% {
			-webkit-transform: scale(0.9)
		}
		100% {
			-webkit-transform: scale(1)
		}
	}
	
	@keyframes pulse {
		0% {
			transform: scale(1)
		}
		50% {
			transform: scale(1.5)
		}
		95% {
			transform: scale(0.9)
		}
		100% {
			transform: scale(1)
		}
	}
	
	.pulse {
		-webkit-animation-name: pulse;
		animation-name: pulse
	}
	
	@-webkit-keyframes starblink {
		0%,
		100% {
			-webkit-transform: scale(1)
		}
		50% {
			-webkit-transform: scale(1.4)
		}
		80% {
			-webkit-transform: scale(0.8)
		}
	}
	
	@keyframes starblink {
		0%,
		100% {
			transform: scale(1)
		}
		50% {
			transform: scale(1.4)
		}
		80% {
			transform: scale(0.8)
		}
	}
	
	.starblink {
		-webkit-animation: starblink 500ms ease-in;
		animation: starblink 500ms ease-in
	}
	
	body {
		background: #f2f2f2
	}
	
	a {
		color: #598abf
	}
	
	a .mct-a,
	.mct-a {
		color: #333
	}
	
	a .mct-b,
	.mct-b {
		color: #5d5d5d
	}
	
	a .mct-c,
	.mct-c {
		color: #5d5d5d
	}
	
	a .mct-d,
	.mct-d {
		color: #929292
	}
	
	a .mct-e,
	.mct-e {
		color: #e1a500
	}
	
	a .mct-f,
	.mct-f {
		color: #e14123
	}
	
	a .mct-g,
	.mct-g {
		color: #32963c
	}
	
	a .mct-h,
	.mct-h {
		color: #f48800
	}
	
	a .mct-i,
	.mct-i {
		color: #afafaf
	}
	
	a .mct-j,
	.mct-j {
		color: rgba(146, 146, 146, .4)
	}
	
	a .mct-k,
	.mct-k {
		color: #fff
	}
	
	a .mct-l,
	.mct-l {
		color: #507daf
	}
	
	.icon-font {
		color: #aaa
	}
</style>