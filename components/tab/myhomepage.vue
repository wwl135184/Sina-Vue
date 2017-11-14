<template>
	<div>
		<div class="profile-cover" style="background-image: url(../resource/images/549d0121tw1egm1kjly3jj20hs0hsq4f.jpg)">
			<div class="overlay"></div>
			<div class="mod-fil-img m-avatar-box"><span class="m-img-box"><img src="https://tva3.sinaimg.cn/crop.0.1.510.510.180/0062LSdrjw8fbmfkj0tt7j30e60e83z1.jpg"> <!----></span></div>
			<div class="item-list" style="position: relative;">
				<div class="mod-fil-name m-txt-cut"><span class="mod-fil-n"><span class="txt-shadow username"></span>
					<!----><i class="m-icon iconfont icon-boy2"></i></span>
					<!---->
				</div>
				<div class="mod-fil-fans">
					<div class="txt-shadow">关注<span>392</span></div>
					<div class="txt-shadow">粉丝<span>39</span></div>
				</div>
				<p class="mod-fil-desc m-text-cut">哈哈，</p>
			</div>
		</div>
		<div class="bg">
			<div data-v-79ad1edf="">
				<div data-v-79ad1edf="" class="m-top-nav-wrapper hide"></div>
				<nav data-v-79ad1edf="" class="m-top-nav m-container-max">
					<div data-v-79ad1edf="" class="m-box">
						<div data-v-79ad1edf="" class="m-box-col nav-main">
							<div data-v-79ad1edf="" class="scroll-box">
								<ul data-v-79ad1edf="" class="nav-item" style="text-align: center;">
									<li @click="change(a.id)" data-v-79ad1edf="" v-for="a in arr" :class="{'m-cur' : id == a.id}">
										<a :href="a.href"><span data-v-79ad1edf="">{{a.title}}</span></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import $ from "jquery";
	import homepage from "./homepage.vue"
	export default {
		data: function() {
			return {
				arr: [{
					id: 1,
					title: "主页",
					href: "#/myhomepage/homepage"
				}, {
					id: 2,
					title: "微博",
					href: "#/myhomepage/sina"
				}],
				id: 1,
				username:'',
			}
		},
		methods: {
			change: function(id) {
				this.id = id;
			}
		},
		components: {
			homepage
		},
		mounted(){
			this.username = this.$store.state.username;
			$(".username").html(this.username);
		},
	}
</script>

<style lang="scss" scoped>
	a {
		text-decoration: none;
	}
	
	li {
		list-style: none;
	}
	
	i {
		font-style: normal;
	}
	
	img {
		border: 0;
	}
	
	.bg {
		background: #f2f2f2;
		overflow: hidden;
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
	
	.profile-cover {
		position: relative;
		height: 11.25rem;
		background-repeat: no-repeat;
		background-position: 50%;
		background-size: cover;
		text-align: center;
	}
	
	.overlay {
		opacity: .7;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: -webkit-gradient(linear, left top, left bottom, color-stop(40%, rgba(0, 0, 0, .01)), to(rgba(0, 0, 0, .95)));
		background: linear-gradient(180deg, rgba(0, 0, 0, .01) 40%, rgba(0, 0, 0, .95));
	}
	
	.mod-fil-img {
		padding-top: .625rem;
	}
	
	.m-avatar-box .m-img-box {
		border-radius: 50%;
		position: relative;
	}
	
	.mod-fil-img span,
	.mod-fil-img span img {
		border-radius: 999px;
		border-radius: 50%;
		width: 4.375rem;
		height: 4.375rem;
	}
	
	.mod-fil-img span {
		display: inline-block;
		padding: .25rem;
		background-color: hsla(0, 0%, 100%, .4);
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
	
	.m-avatar-box .m-img-box img {
		border-radius: 50%;
	}
	
	.mod-fil-img span,
	.mod-fil-img span img {
		border-radius: 999px;
		border-radius: 50%;
		width: 4.375rem;
		height: 4.375rem;
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
	
	.mod-fil-name {
		padding: .625rem 0;
	}
	
	.mod-fil-fans {
		line-height: 1.125rem;
		font-size: 0;
	}
	
	.mod-fil-fans div {
		position: relative;
		font-size: .75rem;
	}
	
	.mod-fil-fans div,
	.mod-fil-name a {
		color: #fff;
		display: inline-block;
	}
	
	.mod-fil-fans div:last-child:before {
		content: "";
		width: 100%;
		height: 80%;
		position: absolute;
		top: 10%;
		left: 0;
		border-left: 1px solid hsla(0, 0%, 100%, .3);
	}
	
	.txt-shadow {
		color: #fff;
		text-shadow: 0 1px 1px rgba(0, 0, 0, .5);
	}
	
	.mod-fil-fans span {
		font-family: Arial;
		margin-left: .3125rem;
	}
	
	.mod-fil-fans div:last-child {
		padding-left: .625rem;
		margin-left: .625rem;
	}
	
	.mod-fil-fans div {
		position: relative;
	}
	
	.mod-fil-desc {
		padding: 0 .75rem;
		line-height: 1.125rem;
		font-size: .75rem;
		color: #fff;
		text-shadow: 0 1px 1px rgba(0, 0, 0, .5);
	}
	
	.m-text-cut {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.icon-boy2 {
		font-size: 10px;
		display: inline-block;
		vertical-align: top;
		color: blue;
	}
	
	.m-top-nav-wrapper.hide[data-v-79ad1edf] {
		height: 0;
	}
	
	.m-top-nav[data-v-79ad1edf] {
		position: relative;
		margin-bottom: 1rem;
	}
	
	.iosx2 .m-top-nav {
		border-bottom: .5px solid #e6e6e6;
	}
	
	.m-top-nav {
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #fff;
		height: 2.3125rem;
		box-sizing: border-box;
		border-bottom: 1px solid #e6e6e6;
	}
	
	.m-box {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	
	.m-top-nav .nav-main {
		overflow: hidden;
		width: 1px;
	}
	
	.m-box-col {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		width: 100%;
		display: block;
		min-width: 0;
	}
	
	.m-top-nav .nav-main::before {
		content: "";
		position: absolute;
		z-index: 9;
		width: .75rem;
		left: 0;
		top: 0;
		bottom: 0;
		background: -webkit-linear-gradient(left, #fff 0, #fff 50%, rgba(255, 255, 255, 0) 100%);
		background: linear-gradient(to right, #fff 0, #fff 50%, rgba(255, 255, 255, 0) 100%);
	}
	
	.m-top-nav .scroll-box {
		overflow: auto;
		-webkit-overflow-scrolling: touch;
	}
	
	.m-top-nav .nav-item {
		white-space: nowrap;
		padding: 0 .5rem;
	}
	
	.m-top-nav .nav-item li {
		display: inline-block;
		font-size: 1rem;
		line-height: 2.3125rem;
		padding: 0 .5625rem;
	}
	
	.m-top-nav .nav-item li a {
		color: #000;
	}
	
	.m-top-nav .nav-item li span {
		display: block;
		padding: 0 .25rem;
	}
	
	.m-top-nav .nav-item li {
		display: inline-block;
		font-size: 1rem;
		line-height: 2.3125rem;
		padding: 0 .5625rem;
	}
	
	.m-top-nav .nav-item li.m-cur span {
		color: #FF8200;
		box-shadow: inset 0 -2px 0 0 #FF8200;
	}
	
	.m-top-nav .nav-item li span {
		display: block;
		padding: 0 .25rem;
	}
</style>