<template>
	<div>
		<body>
			<nav id="header" class="nav">
				<a class="btn back" href="#/login">
					<i class="icon"></i>
				</a>
				<span class="tit">注册</span>
			</nav>
			<div id="body">
				<nav id="reg_menus" class="menus">
					<a v-for="a in arr" :href="a.href" @click="navnarOn(a.id)" :id="a.id" :class="{'on':id==a.id}">{{a.title}}</a>
				</nav>
			</div>
			<router-view></router-view>
		</body>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [{
					title: "手机注册",
					id: 1,
					href: '#/register/sms'
				}, {
					title: "邮箱注册",
					id: 2,
					href: '#/register/email'
				}],
				id : 1
			}
		},
		methods: {
			navnarOn: function(id) {
				console.log(id)
				this.id = id
			}
		}
	}
</script>

<style scoped>
	a,
	article,
	aside,
	body,
	code,
	dd,
	div,
	dl,
	dt,
	em,
	footer,
	form,
	h1,
	h2,
	h3,
	header,
	html,
	input,
	label,
	li,
	nav,
	ol,
	p,
	section,
	small,
	span,
	strong,
	textarea,
	time,
	ul {
		margin: 0;
		padding: 0
	}
	
	html {
		height: 100%
	}
	
	body {
		-webkit-text-size-adjust: none;
		background-color: #ededed;
		font: 1rem/1.5 normal, Droid Sans Fallback, sans-serif;
		position: relative;
		min-height: 667px
	}
	
	a {
		text-decoration: none;
		color: #507daf
	}
	
	a,
	input,
	select {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0)
	}
	
	input::-webkit-input-placeholder {
		color: #cbcbd1
	}
	
	input::-moz-placeholder {
		color: #cbcbd1
	}
	

	
	.nav {
		position: relative;
		z-index: 1;
		display: block;
		text-align: center;
		background: #f9f9f9;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .2)
	}
	
	.nav,
	.nav .tit {
		overflow: hidden
	}
	
	.nav .tit {
		white-space: nowrap;
		text-overflow: ellipsis;
		display: inline-block;
		vertical-align: middle;
		max-width: 75%;
		line-height: 44px;
		font-size: 1.125rem;
		color: #333
	}
	
	.nav .btn {
		float: right;
		margin: 0 0 0 -41px
	}
	
	.nav .btn .icon {
		display: block;
		padding: 0 7px
	}
	
	.nav .btn .icon:before {
		display: block;
		font: 27px/44px normal;
		font-family: wb440;
		color: #555;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale
	}
	
	.nav .home .icon:before {
		content: "\2302"
	}
	
	.nav .more .icon:before {
		content: "\2026"
	}
	
	.nav .back {
		float: left;
		margin: 0 -41px 0 0
	}
	
	.nav .back .icon:before {
		content: "<"
	}
	
	.clearfix {
		clear: both
	}
	
	.mod {
		background-color: #fff;
		-ms-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .22);
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .22)
	}
	
	.mod_more {
		margin-top: 10px;
		font-size: 16px;
		color: #333
	}
	
	.mod_more>div {
		padding: 0 15px;
		height: 44px;
		line-height: 44px;
		border-bottom: 1px solid #e6e6e6
	}
	
	.mod_more>div:last-child {
		border-bottom: 0
	}
	
	.mod_more span:first-child {
		font-weight: 700
	}

	.menus {
		margin: 7px 6px;
		border: 1px solid #848484;
		border-radius: 3px
	}
	
	.menus a {
		display: inline-block;
		text-align: center;
		width: 50%;
		font-size: 14px;
		line-height: 29px;
		color: #333
	}
	
	.menus a.on {
		color: #fff;
		background: #848484
	}
	
	
</style>