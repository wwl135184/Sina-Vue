<template>
	<div>
		<div class="card card11 ctype-1">
			<!---->
			<div class="card-list">
				<div data-v-74ec16e8="" class="card m-panel card41">
					<div data-v-74ec16e8="" class="card-wrap">
						<div data-v-74ec16e8="" class="card-main">
							<div data-v-74ec16e8="" class="data-row">
								<div data-v-74ec16e8="" class="m-box">
									<!---->
									<!---->
									<!---->
									<div data-v-74ec16e8="" class="box-left">所在地</div>
									<div data-v-74ec16e8="" class="box-main m-box-col">山东 潍坊</div>
									<!---->
									<!---->
								</div>
							</div>
						</div>
					</div>
				</div>
				<div data-v-74ec16e8="" class="card m-panel card41">
					<div data-v-74ec16e8="" class="card-wrap">
						<div data-v-74ec16e8="" class="card-main">
							<div data-v-74ec16e8="" class="data-row">
								<div data-v-74ec16e8="" class="m-box">
									<!---->
									<!---->
									<!---->
									<div data-v-74ec16e8="" class="box-left">学校</div>
									<div data-v-74ec16e8="" class="box-main m-box-col">青岛科技大学</div>
									<!---->
									<!---->
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card m-panel card6">
					<div class="card-wrap">
						<div class="card-main">
							<a href="javascript:;" class="color-gray">更多基本资料
								<!---->
							</a>
						</div>
					</div>
				</div>
				<!---->
				<!---->
			</div>
		</div>

		<div class="card m-panel card42">
			<div class="card-wrap">
				<div class="card-main">
					<div class="m-box">
						<div class="box-left m-box-col m-box-center-a">
							<!----><span class="link-text"><span class="main-link">我的热门内容</span></span>
						</div>
						<div class="box-right m-box-center-a"><span class="sub-link">更多</span> <i class="m-font iconfont icon-icon"></i></div>
					</div>
				</div>
			</div>
		</div>
		<sina></sina>
	</div>
</template>

<script>
	import sina from "./sina.vue"
	export default{
		components: {
			sina
		}
	}
</script>

<style lang="scss" scoped>
	a {
		text-decoration: none;
	}
	
	li {
		list-style: none;
	}
	
	img {
		border: 0;
	}
	
	i {
		font-style: normal;
	}
	
	.card {
		margin-bottom: .5625rem;
		background: #fff;
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
	
	.card-list {
		border-bottom: .5px solid #e6e6e6;
	}
	
	.iosx2 .card11.ctype-1 .card:not(.card9):not(.card59).m-panel:first-of-type {
		-o-border-image: none;
		border-image: none;
		border-top-width: .5px;
		border-right-width: 0;
		border-bottom-width: 0;
		border-left-width: 0;
	}
	
	.card11.ctype-1 .card:not(.card9):not(.card59).m-panel:first-of-type {
		border-top-width: 1px;
		border-right-width: 0;
		border-bottom-width: 0;
		border-left-width: 0;
		border-color: #e6e6e6;
		border-style: solid;
	}
	
	.card11 .card:not(.card9) {
		margin-bottom: 0;
		margin-top: -1px;
	}
	
	.card11.ctype-1 .card:not(.card9):not(.card59).m-panel:first-of-type .card-wrap {
		border-top: 0;
	}
	
	.iosx2 .card11.ctype-1 .card:not(.card9):not(.card59) .card-wrap {
		-o-border-image: none;
		border-image: none;
		border-top-width: .5px;
		border-right-width: 0;
		border-bottom-width: .5px;
		border-left-width: 0;
	}
	
	.card11.ctype-1 .card:not(.card9):not(.card59) .card-wrap {
		border-top-width: 1px;
		border-right-width: 0;
		border-bottom-width: 1px;
		border-left-width: 0;
		border-color: #e6e6e6;
		border-style: solid;
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
	
	.card41 .m-box {
		font-size: .9375rem;
		line-height: 1.25;
		padding: .9375rem 0;
		margin-left: .75rem;
		margin-right: .75rem;
	}
	
	.m-box {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	
	.card41 .box-left {
		width: 4rem;
		color: #939393;
	}
	
	.box-main[data-v-74ec16e8] {
		word-break: break-all;
	}
	
	.m-box-col {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		width: 100%;
		display: block;
		min-width: 0;
	}
	
	.card11.ctype-1 .card:not(.card9):not(.card59).m-panel:last-of-type .card-wrap {
		border-bottom: 0;
	}
	
	.card .card-wrap .card-main {
		box-sizing: border-box;
		margin-left: -.75rem;
		margin-right: -.75rem;
		height: 100%;
	}
	
	.card6 a.color-gray {
		color: #939393;
	}
	
	.card6 a {
		display: block;
		font-size: .875rem;
		line-height: 2.375rem;
		text-align: center;
	}
	
	.card42 .card-wrap {
		height: 2.25rem;
		
	}
	
	.card42 {
		height: 2.25rem;
		border-left: .1875rem solid #FF8200;
	}
	
	.card .card-wrap {
		margin-left: .75rem;
		margin-right: .75rem;
	}
	
	.card42 .card-wrap .card-main {
		margin: 0;
	}
	
	.card .card-wrap .card-main {
		box-sizing: border-box;
		height: 100%;
	}
	
	.card .card-wrap .card-main>.m-box {
		height: 100%;
	}
	
	.m-box {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	
	.card42 .box-left {
		font-size: 0;
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
		display: block;
		min-width: 0;
	}
	
	.link-text,
	.m-img-icon,
	.main-link,
	.sub-link {
		display: inline-block;
		vertical-align: middle;
	}
	
	.card42 .box-left {
		font-size: 0;
	}
	
	.card42 .box-left .main-link {
		color: #636363;
		font-size: .875rem;
		line-height: 2.25rem;
	}
	
	.link-text,
	.m-img-icon,
	.main-link,
	.sub-link {
		display: inline-block;
		vertical-align: middle;
	}
	
	.card42 .box-right .sub-link {
		font-size: .75rem;
		color: #939393;
		margin-right: .5rem;
		max-width: 5rem;
	}
	
	.link-text,
	.m-img-icon,
	.main-link,
	.sub-link {
		display: inline-block;
		vertical-align: middle;
	}
	
	.card42 .box-right .icon-icon {
		width: .75rem;
		height: .75rem;
		line-height: .75rem;
		text-align: center;
		background-color: #FF8200;
		border-radius: .125rem;
		color: #FFF;
		font-size: .5rem;
		font-weight: 700;
	}
	
	.m-font {
		font-family: marvelfont;
		display: inline-block;
		-webkit-font-smoothing: antialiased;
	}
	
	.m-font-arrow-right::before {
		content: "\E000";
	}
</style>