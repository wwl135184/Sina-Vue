<template>
	<div>
		<div class="login-wrapper" id="loginWrapper" style="display: block;min-height: initial;">
			<!-- 登陆成功跳转页 -->
			<input type="hidden" name="url" value="http%3A%2F%2Fm.weibo.cn" id="loginSuccessAddress">
			<!-- 登陆rf标识 -->
			<input type="hidden" name="rf" id="loginRF">
			<input type="hidden" name="rfcal" id="loginRFCAL">
			<input type="hidden" value="173*****082" id="oldUserName">
			<input type="hidden" value="" id="loginfrom">
			<input type="hidden" value="" id="featurecode">
			<input type="hidden" value="" id="hff" name="hff">
			<input type="hidden" value="" id="hfp" name="hfp">
			<a href="javascript:history.go(-1);" class="close">关闭</a>
			<section class="avatar-wrapper" id="avatarWrapper"></section>
			<form>
				<section class="box">
					<div class="input-wrapper">
						<i class="icon forName"></i>
						<!-- 用户名 -->
						<p class="input-box">
							<input v-model="phone" type="text" @focus="focus" placeholder="邮箱/手机号" id="loginName" value="">
							<!-- 清除用户名小叉 -->
							<a href="./tab/tab1" class="input-clear hid" id="loginnameclear"></a>
						</p>
					</div>
					<div class="input-wrapper">
						<i class="icon forPwd"></i>
						<p class="input-box">
							<input v-model="password" type="password" @focus="focus" placeholder="请输入密码" id="loginPassword">
						</p>
					</div>
				</section>

				<!-- 要隐藏添加 hid -->
				<div id="verifyCodeWrapper" style="display:none">
					<p class="vcode">
						<img src="" alt="" id="verifyCodeImage">
						<a href="javascript:;" id="changeVerifyCode">换一张</a>
					</p>

					<!-- 要隐藏添加 hid -->
					<div class="box">
						<input type="text" placeholder="请输入验证码" id="loginVCode">
					</div>
				</div>

				
				<div id="errorMsg" class="error-label" style="display:none"></div>

				<a href="javascript:;" @click="loginAction" class="btn btnRed" id="loginAction">登录</a>
			</form>
			<p class="label">
				<a href="https://passport.weibo.cn/signin/other?r=http%3A%2F%2Fm.weibo.cn">第三方帐号</a>
			</p>
			<footer class="footer">
				<a href="#/register">注册帐号</a>
				<a href="https://passport.weibo.cn/forgot/forgot?entry=wapsso&amp;from=0">忘记密码</a>
			</footer>
		</div>
	</div>
</template>

<script>
	export default {
		data:{
			phone:'',
			password:''
		},
		methods: {
			loginAction() {
				var username = $('#loginName').val();
				console.log(username)
				var password = $("#loginPassword").val();
				console.log(password)
				if(username.length == 0) {
					$("#errorMsg").html('用户名不能为空');
					$("#errorMsg").css('display','block');
				} else if(password.length == 0) {
					$("#errorMsg").html('密码不能为空');
					$("#errorMsg").css('display','block');
				}
				var self = this;
				$.ajax({
					type:"post",
					url:"http://10.30.152.85:3000/users/login",
					data:{"password":this.password,"phone":this.phone},
					success:function(data){
						if(data){
							self.$store.state.username = data;
							alert(self.$store.state.username);
//							$.cookie('username', data, { expires: 7 });
							window.location.href="#/index"
						}else{
							alert('登陆失败');
						}
					}
				})
			},
			focus(){
				$("#errorMsg").css('display','none');
			}
		}
	}

</script>

<style scoped>
	/**
 * @author zengang@
 * @date 2014-06-04
 * @info login
 */
	
	html,
	body,
	header,
	footer,
	nav,
	article,
	section,
	aside,
	time,
	code,
	div,
	p,
	ul,
	ol,
	li,
	dl,
	dd,
	dt,
	h1,
	h2,
	h3,
	a,
	span,
	strong,
	em,
	small,
	form,
	label,
	input,
	textarea {
		margin: 0;
		padding: 0;
	}
	
	ul,
	ol {
		list-style: none;
	}
	
	h1,
	h2,
	h3,
	input {
		font-size: 100%;
	}
	
	img {
		border: 0;
		vertical-align: middle;
	}
	
	label,
	input {
		vertical-align: middle;
	}
	
	a,
	a:hover {
		text-decoration: none;
	}
	
	body {
		position: relative;
		font: 1rem/1.5 normal 'Helvetica Neue', Helvetica, sans-serif;
		-webkit-text-size-adjust: none;
		overflow-x: hidden;
	}
	
	
	.nav {
		position: relative;
		z-index: 1;
		overflow: hidden;
		display: block;
		text-align: center;
		background: #f9f9f9;
		-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
		-moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
	}
	
	.nav .tit {
		display: inline-block;
		margin: 0;
		max-width: 75%;
		line-height: 44px;
		font-size: 1.125rem;
		color: #333333;
		vertical-align: middle;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.nav .btn {
		float: right;
		margin: 0 0 0 -41px;
	}
	
	.nav .btn .icon {
		display: block;
		padding: 0 7px;
	}
	
	.nav .btn .icon::before {
		display: block;
		font: 27px/44px normal "wb440";
		color: #555;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	.nav .home .icon::before {
		content: "\e611";
	}
	
	.nav .more .icon::before {
		content: "\e612";
	}
	
	.nav .back {
		float: left;
		margin: 0 -41px 0 0;
	}
	
	.nav .back .icon::before {
		content: "\e613";
	}
	
	.popup {
		position: absolute;
		z-index: 1000;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
	}
	
	.popup>.wrapper {
		position: absolute;
		top: 180px;
		left: 20px;
		padding: 16px 14px;
		width: 252px;
		background: #f8f8f8;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		border-radius: 5px;
		-webkit-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
		-moz-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
		box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
	}
	
	.popup>.wrapper .title {
		margin: -7px 0 0;
		font-size: 1.125rem;
		text-align: center;
	}
	
	.popup>.wrapper>.info {
		display: block;
		margin: 42px 6px 48px;
		font-size: 15px;
		line-height: 1.3em;
		color: #5d5d5d;
	}
	
	.popup>.wrapper>.info:first-child {
		line-height: 1.5em;
		margin: 15px 6px 45px;
	}
	
	.popup>.wrapper>.action {
		overflow: hidden;
	}
	
	.popup>.wrapper>.action>.btn {
		float: left;
		margin: 0 2% 0 0;
		width: 48%;
		line-height: 36px;
		font-size: 17px;
		text-align: center;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		border-radius: 5px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	
	.popup>.wrapper>.action>.btn:nth-of-type(2) {
		margin: 0 0 0 2%;
	}
	
	.popup>.wrapper>.action>.btn:only-of-type {
		margin: 0;
		width: 100%;
	}
	
	.popup>.wrapper>.action>.confirm {
		border: #d8d8d8 solid 1px;
		border-color: #ff8200;
		color: #ff8200;
		background: white;
	}
	
	.popup>.wrapper>.action>.cancel {
		border: #d8d8d8 solid 1px;
		border-color: #d8d8d8 #d1d1d1 #cbcbcb;
		color: #5d5d5d;
		background: white;
	}
	
	body {
		background: #f8f8f8;
		color: #333333;
	}
	
	a {
		color: #5184bc;
	}
	
	.hid {
		display: none !important;
	}
	
	.login-wrapper .box .input-clear,
	.login-wrapper .input-wrapper .input-clear {
		position: absolute;
		top: 13px;
		right: 30px;
		width: 16px;
		height: 16px;
		background: #c8c8c8;
		-webkit-border-radius: 8px;
		-moz-border-radius: 8px;
		border-radius: 8px;
	}
	
	.login-wrapper .box .input-clear::before,
	.login-wrapper .input-wrapper .input-clear::before,
	.login-wrapper .box .input-clear::after,
	.login-wrapper .input-wrapper .input-clear::after {
		content: " ";
		position: absolute;
		top: 8px;
		left: 4px;
		width: 8px;
		height: 1px;
		background: white;
		-webkit-transform: rotateZ(45deg);
		-moz-transform: rotateZ(45deg);
		-ms-transform: rotateZ(45deg);
		-o-transform: rotateZ(45deg);
		transform: rotateZ(45deg);
	}
	
	.login-wrapper .box .input-clear::after,
	.login-wrapper .input-wrapper .input-clear::after {
		-webkit-transform: rotateZ(-45deg);
		-moz-transform: rotateZ(-45deg);
		-ms-transform: rotateZ(-45deg);
		-o-transform: rotateZ(-45deg);
		transform: rotateZ(-45deg);
	}
	/* btn */
	
	.btn {
		display: block;
		margin: 0 0 15px;
		border-style: solid;
		border-width: 1px;
		font-size: 1.0625rem;
		line-height: 43px;
		text-align: center;
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		border-radius: 3px;
	}
	
	.btn.btnRed {
		border-color: #e86b0f;
		color: white;
		background: #ff8200;
	}
	
	.btn.btnWhite {
		border-color: #d8d8d8 #d1d1d1 #cbcbcb;
		color: #5d5d5d;
		background: white;
	}
	
	.btn.btnWhite.isDisabled {
		color: rgba(93, 93, 93, 0.3);
	}
	
	.btn.btnGreen {
		border-color: #199d18;
		color: white;
		background: #10b524;
	}
	
	.btn.isDisabled {
		color: rgba(255, 255, 255, 0.3);
	}
	
	.close {
		overflow: hidden;
		position: absolute;
		top: 13px;
		left: 16px;
		width: 22px;
		height: 22px;
		text-indent: -300px;
	}
	
	.close::before,
	.close::after {
		content: " ";
		position: absolute;
		left: 0;
		top: 10px;
		width: 22px;
		height: 1px;
		background: #666666;
		-webkit-transform: rotateZ(45deg);
		-moz-transform: rotateZ(45deg);
		-ms-transform: rotateZ(45deg);
		-o-transform: rotateZ(45deg);
		transform: rotateZ(45deg);
	}
	
	.close::after {
		-webkit-transform: rotateZ(-45deg);
		-moz-transform: rotateZ(-45deg);
		-ms-transform: rotateZ(-45deg);
		-o-transform: rotateZ(-45deg);
		transform: rotateZ(-45deg);
	}
	
	.avatar-wrapper {
		overflow: hidden;
		margin: 80px auto 0;
		border: rgba(0, 0, 0, 0.1) solid 1px;
		width: 70px;
		height: 70px;
		background-repeat: no-repeat;
		background-position: 0 0;
		background-image: url("../resource/images/default-avatar.png");
		-webkit-background-size: 100%;
		background-size: 100%;
		-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.17);
		-moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.17);
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.17);
	}
	

	
	.avatar-wrapper img {
		display: block;
		width: 100%;
	}
	

	/* welcome */
	
	.welcome-wrapper {
		margin: 0 11px;
		padding: 375px 0 1px;
		text-align: center;
		background-repeat: no-repeat;
		background-position: center 128px;
		background-image: url("/images/weibo/signin/index-pic.png");
		-webkit-background-size: 169px auto;
		background-size: 169px auto;
	}

	
	.welcome-wrapper .label {
		font-size: .875rem;
	}
	
	.welcome-wrapper .action {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: box;
		display: flex;
		width: 100%;
		margin: 15px 0;
	}
	
	.welcome-wrapper .action .btn {
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1 0 auto;
		box-flex: 1;
		flex: 1 0 auto;
		text-align: center;
		margin: 0;
		line-height: 42px;
	}
	
	.welcome-wrapper .action .btn:nth-child(1) {
		margin: 0 7px 0 0;
	}
	
	.welcome-wrapper .action .btn:nth-child(2) {
		margin: 0 0 0 7px;
	}
	
	.welcome-wrapper .btnQQ {
		border-color: #006ce2 #0072ee #0079fe;
		color: #0079fe;
		background: white;
	}
	
	.welcome-wrapper .btnQQ .icon {
		display: inline-block;
		margin: -3px 10px 0 -10px;
		width: 19px;
		height: 21px;
		vertical-align: middle;
		background-repeat: no-repeat;
		background-position: 0 0;
		background-image: url("../resource/images/icon.png");
		-webkit-background-size: 23px auto;
		background-size: 23px auto;
	}
	

	/* login */
	
	.login-wrapper {
		padding: 1px 0;
		min-height: 541px;
	}
	

	
	.login-wrapper form {
		margin: 27px 0 20px;
	}
	
	.login-wrapper form .btn {
		margin: 20px 16px 15px;
	}
	

	
	.login-wrapper .box {
		position: relative;
		border: #d7d7d7 solid 1px;
		border-left: none;
		border-right: none;
		background: white;
	}
	
	.login-wrapper .box input {
		display: block;
		border: none;
		padding: 12px 50px 12px 12px;
		width: 100%;
		font-size: .9275rem;
		background: white;
		outline: none;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	
	.login-wrapper .box input::-webkit-input-placeholder,
	.login-wrapper .box input::-moz-input-placeholder {
		color: #afafaf;
	}
	
	.login-wrapper .input-wrapper {
		overflow: hidden;
		margin: 0 16px;
		border-bottom: #dddddd solid 1px;
	}
	
	.login-wrapper .input-wrapper .icon {
		float: left;
		margin: 10px 15px 0 0;
		background-repeat: no-repeat;
		background-image: url("../resource/images/icon.png");
		-webkit-background-size: 23px auto;
		background-size: 23px auto;
	}
	

	
	.login-wrapper .input-wrapper .icon.forName {
		width: 19px;
		height: 20px;
		background-position: 0 -21px;
	}
	
	.login-wrapper .input-wrapper .icon.forPwd {
		width: 19px;
		height: 21px;
		background-position: 0 -41px;
	}
	
	.login-wrapper .input-wrapper .input-box {
		position: relative;
		overflow: hidden;
	}
	
	.login-wrapper .input-wrapper input {
		padding-right: 35px;
	}
	
	.login-wrapper .input-wrapper .input-clear {
		right: 14px;
	}
	
	.login-wrapper .input-wrapper:last-of-type {
		border: none;
	}
	
	.login-wrapper .shield-tit {
		padding: 10px;
		font-size: .875rem;
	}
	
	.login-wrapper .vcode {
		overflow: hidden;
		padding: 10px;
	}
	
	.login-wrapper .vcode img {
		float: left;
		margin: 0 15px 0 0;
		width: 100px;
		height: 20px;
	}
	
	.login-wrapper .vcode a {
		float: left;
		font-size: .875rem;
		color: #333333;
	}
	
	.login-wrapper .error-label {
		margin: 5px 12px 0;
		font-size: .875rem;
		color: #e24123;
	}
	
	.login-wrapper .label {
		margin: 27px 0 0;
		font-size: .875rem;
		text-align: center;
	}
	

	
	.login-wrapper .label a {
		color: #7c7c7c;
	}
	
	.login-wrapper .footer {
		padding: 20px 0 20px;
		width: 100%;
		font-size: .875rem;
		text-align: center;
	}
	

	
	.login-wrapper .footer a {
		color: #5184BC;
	}
	
	.login-wrapper .footer a:first-of-type {
		position: relative;
		margin: 0 30px 0 0;
	}
	
	.login-wrapper .footer a:first-of-type::after {
		content: " ";
		position: absolute;
		top: 0;
		right: -15px;
		width: 1px;
		height: 16px;
		background: #c8c8c8;
	}
	/* sms login */
	
	.vcode-wrapper .info {
		margin: 15px 12px;
		font-size: .875rem;
		line-height: 1.2em;
		color: #828282;
	}
	
	.vcode-wrapper .btn {
		margin: 20px 10px 15px;
	}
	
	.vcode-wrapper .btn:nth-of-type(2) {
		margin-top: 0;
	}
	/* account exsit */
	
	.account-wrapper {
		position: relative;
		padding: 1px 16px;
	}
	
	.account-wrapper .label {
		padding: 38px 0 0;
		min-height: 82px;
		font-size: .875rem;
		color: #828282;
		text-align: center;
	}
	
	.account-wrapper .label span {
		margin: 0 3px;
		color: #333333;
	}
	/* other */
	
	.nav .btn {
		border: none;
	}
	
	.other-list {
		margin: 10px 0 0;
		background: white;
	}
	
	.other-list li {
		border-bottom: #dadada solid 1px;
	}
	
	.other-list li a {
		position: relative;
		display: block;
		padding: 9px 20px 10px 10px;
		color: #333333;
	}
	
	.other-list li a .icon {
		display: inline-block;
		position: relative;
		top: -1px;
		margin: 0 10px 0 0;
		width: 23px;
		height: 23px;
		vertical-align: middle;
		background-repeat: no-repeat;
		background-position: 0 0;
		background-image: url("../resource/images/icon.png");
		-webkit-background-size: 23px auto;
		background-size: 23px auto;
	}
	

	
	.other-list li a .icon.forQQ {
		background-position: 0 -62px;
	}
	
	.other-list li a .icon.forUC {
		background-position: 0 -85px;
	}
	
	.other-list li a::after {
		content: " ";
		position: absolute;
		top: 17px;
		right: 10px;
		border: #aaaaaa solid 1px;
		border-left: none;
		border-top: none;
		width: 7px;
		height: 7px;
		-webkit-transform: rotateZ(-45deg);
		-moz-transform: rotateZ(-45deg);
		-ms-transform: rotateZ(-45deg);
		-o-transform: rotateZ(-45deg);
		transform: rotateZ(-45deg);
	}
	
	.other-list li:last-of-type {
		border: none;
	}
</style>