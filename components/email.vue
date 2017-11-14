<!--邮箱注册-->
<template>
	<div>
		<section id="email" class="main hid"><input type="hidden" name="step" value="0">
			<p class="hint_12_tit">邮箱</p>
			<div class="mod mod_more h5_input"><input id="email_input" type="text" name="email" validate="email" @focus = "emailfocus" @blur = "emailblur"></div>
			<div class="input_error hidden1">我是错误显示</div>
			<p class="hint_12_tit">设置密码</p>
			<div class="mod mod_more h5_input input_change_type"><input id="email_pwd_input" type = "text" disableemoticoninput="true" name="pwd" maxlength="16" validate="pwd" @focus = "pwdfocus" @blur = "pwdblur">
				<a href="javascript:;" id="email_toggle_type" class="change_type" @click = "showhidden">隐藏</a>
			</div>
			<div class="input_error mb_-5 hidden2">我是错误显示</div>
			<p class="hint_12_tit">昵称</p>
			<div class="mod mod_more h5_input"><input id="email_nick_input" type="text" name="nick"  validate="nickname" @focus = "nickfocus" @blur = "nickblur"></div>
			<div class="input_error mb_-5 hidden3">我是错误显示</div>
			<div class="mt_20">
				<a id="email_register_now" href="javascript:void(0);" class="btn_common ok_btn" @click = "register">立即注册</a>
			</div>
			<div class="hint_14 hint_agreement"><span id="email_btn_agree" class="checkbox on"></span>
				<p>已阅读并同意<br>
					<a target="_blank" href="http://weibo.cn/dpool/ttt/h5/regagreement.php?from=h5&amp;wm=3349&amp;lang=zh_CN&amp;siminfo=" class="emp_link">微博服务使用协议</a>&nbsp;及&nbsp;
					<a target="_blank" href="http://m.weibo.cn/reg/privacyagreement?from=h5&amp;wm=3349&amp;lang=zh_CN&amp;siminfo=" class="emp_link">微博个人信息保护政策</a>
				</p>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		data: function(){
			return{
				show:false
			}
		},
		methods: {
			emailfocus: function(){
				$("#email_input").focus(function(){
					$(".hidden1").css("display", "block").css("color", "#e24123").html("请输入邮箱账号");
				})
			},
			emailblur: function(){
				$("#email_input").blur(function(){
					if($(this).val() == "" || $(this).val() == null){
						$(".hidden1").css("color", "#e24123").html("邮箱账号不能为空");
					}else{
						 var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
						if(filter.test($(this).val())){
							$(".hidden1").css("color", "#04BE02").html("邮箱账号正确");
						}else{
							$(".hidden1").css("color", "#e24123").html("请输入正确的邮箱账号");
						}
					}
				})
			},
			pwdfocus(){
				$("#email_pwd_input").focus(function(){
					$(".hidden2").css("display", "block").css("color", "#e24123").html("密码由6~16位数字或字母组成，区分大小写");
				})
			},
			pwdblur(){
				$("#email_pwd_input").blur(function(){
					if($(this).val() == ""){
						$(".hidden2").css("color", "#e24123").html("密码不能为空");
					}else{
						var reg = /((?=.*[a-z])(?=.*\d)|(?=[a-z])(?=.*[#@!~%^&*])|(?=.*\d)(?=.*[#@!~%^&*]))[a-z\d#@!~%^&*.,/\ ]{6,16}$/i
						if(/^[A-Za-z]{6,16}$/.test($(this).val()) || /^[0-9]{6,16}$/.test($(this).val())){
							$(".hidden2").css("display", "block").css("color", "#e24123").html("密码强度不够，请包含字母和数字");
						}else if(reg.test($(this).val())){
							$(".hidden2").css("color", "#04BE02").html("密码格式正确");
						}else{
							$(".hidden2").css("display", "block").css("color", "#e24123").html("密码由6~16位数字或字母组成，区分大小写");
						}
					}
				})
			},
			nickfocus: function(){
				$("#email_nick_input").focus(function(){
					$(".hidden3").css("display", "block").css("color", "#e24123").html("昵称由4-24位字符组成：支持中文、英文、数字");
				})
			},
			nickblur: function(){
				$("#email_nick_input").blur(function(){
					if($(this).val() == "" || $(this).val() == null){
						$(".hidden3").css("color", "#e24123").html("昵称不能为空");
					}else{
						if(/^[A-Za-z]{4,24}$/.test($(this).val()) || /^[\u4E00-\u9FA5]{4,24}$/.test($(this).val()) || /^[A-Za-z0-9_\u4e00-\u9fa5]{4,24}$/.test($(this).val()) || /^[0-9]{4,24}$/.test($(this).val())){
							$(".hidden3").css("color", "#04BE02").html("昵称格式正确");
						}else{
							$(".hidden3").css("color", "#e24123").html("昵称由4-24位字符组成：支持中文、英文、数字");
						}
					}
				})
			},
			register: function(){
				var name = $("#email_nick_input").val();
				var password = $("#email_pwd_input").val();
				var email = $("#email_input").val();
				$.ajax({
					type:"post",
					url:"http://10.30.152.85:3000/users/registor-email",
					data:{"email":email, "password":password, "name":name},
					success:function(data){
						if(data){
							alert('注册成功！'+data+"，你好")
						}else{
							alert("注册失败");
						}
					}
				});
			},
			showhidden: function(){
				this.show = !this.show;
				if(this.show){
					$("#email_toggle_type").html("显示")
					$("#email_pwd_input").attr("type", "password");
				}else{
					$("#email_toggle_type").html("隐藏")
					$("#email_pwd_input").attr("type", "text");
				}
			}
		},
		mounted(){
			this.emailfocus();
			this.emailblur();
			this.pwdfocus();
			this.pwdblur();
			this.nickfocus();
			this.nickblur();
		}
	}
</script>

<style scoped>

	
	body {
		-webkit-text-size-adjust: none;
		background-color: #ededed;
		font: 1rem/1.5 normal, Droid Sans Fallback, sans-serif;
		position: relative;
		min-height: 667px
	}
	
	.hidden1,.hidden2,.hidden3{
		display: none;
	}
	
	@font-face {
		font-family: wb440;
		src: url("//h5.sinaimg.cn/weibocn/v6/img/font/wb440.4bebc899.eot");
		src: url("//h5.sinaimg.cn/weibocn/v6/img/font/wb440.4bebc899.eot?#iefix") format("embedded-opentype"), url("//h5.sinaimg.cn/weibocn/v6/img/font/wb440.7dd0d4bb.woff") format("woff"), url("//h5.sinaimg.cn/weibocn/v6/img/font/wb440.fb892313.ttf") format("truetype"), url("//h5.sinaimg.cn/weibocn/v6/img/font/wb440.b314df22.svg") format("svg");
		font-weight: 400;
		font-style: normal
	}
	
	.nav {
		position: relative;
		z-index: 1;
		display: block;
		text-align: center;
		background: #f9f9f9;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .2)
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
	
	.h5_select_long {
		position: relative;
		height: 44px;
		line-height: 44px;
		text-align: center;
		padding: 0 36px 0 0;
		border: 1px solid #c8c8c8;
		border-left: none;
		border-right: none;
		-ms-box-shadow: inset 0 1px 1px 0 #fff;
		box-shadow: inset 0 1px 1px 0 #fff
	}
	
	.h5_select_long:before {
		content: "";
		position: absolute;
		top: 17px;
		right: 11px;
		border: 1px solid #aaa;
		border-top: none;
		border-left: none;
		width: 7px;
		height: 7px;
		border-radius: 1px;
		-webkit-transform: rotate(-45deg);
		transform: rotate(-45deg)
	}
	
	.h5_select_long>select {
		-webkit-appearance: none;
		-moz-appearance: none;
		opacity: 0;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 44px;
		outline: none
	}
	
	.h5_select_long>span:first-child {
		float: left;
		width: 70px;
		font-weight: 700;
		color: #333;
		border-right: 1px solid #c8c8c8
	}
	
	.h5_select_long>span:nth-child(2) {
		color: #333
	}
	
	.h5_input {
		-webkit-appearance: none;
		-moz-appearance: none;
		position: relative;
		border: 1px solid #c8c8c8;
		border-left: none;
		border-right: none;
		outline: none;
		box-shadow: none
	}
	
	.h5_input.input_dis {
		background-color: #ebebe4
	}
	
	.h5_input input {
		-webkit-appearance: none;
		-moz-appearance: none;
		vertical-align: top;
		font-size: 16px;
		height: 44px;
		width: 100%;
		border: none;
		padding: 0 0 0 12px;
		outline: none;
		box-sizing: border-box
	}
	
	.btn_common {
		display: block;
		margin: 0 10px;
		border: 1px solid #e86b0f;
		height: 43px;
		line-height: 43px;
		font-size: 17px;
		color: #fff;
		text-align: center;
		border-radius: 3px
	}
	
	.ok_btn {
		border-color: #e86b0f;
		background-color: #ff8200
	}
	
	.re_btn {
		border-color: #199d18;
		background-color: #10b524
	}
	
	.disabled,
	.locked {
		color: hsla(0, 0%, 100%, .3)
	}
	
	.h5_err_mes {
		margin-top: 10px;
		padding: 5px 15px;
		font-size: 14px;
		line-height: 20px;
		color: #f48800;
		border: 1px solid #fbee5b;
		border-radius: 4px;
		background: #fffcda
	}
	

	
	.menus {
		margin: 7px 6px;
		border: 1px solid #848484;
		border-radius: 3px
	}
	
	.menus a {
		display: inline-block;
		text-align: center;
		width: 49%;
		font-size: 14px;
		line-height: 29px;
		color: #333
	}
	
	.menus a.on {
		color: #fff;
		background: #848484
	}
	
	.hint_12_tit {
		margin: 12px 12px -4px;
		font-size: 12px;
		color: #828282
	}
	
	.hint_info {
		margin: 16px 12px -3px;
		line-height: 1.3em;
		font-size: 13px;
		color: #828282
	}
	
	.hint_14 {
		line-height: 20px;
		margin-top: 10px;
		font-size: 14px;
		color: #828282
	}
	
	.hint_12>span,
	.hint_14>span {
		color: #f48800
	}
	
	.hint_agreement {
		position: relative;
		margin: 13px 12px 0;
		padding-left: 28px
	}
	
	.hint_agreement p {
		line-height: 23px
	}
	
	.mb_-5 {
		margin-bottom: -5px!important
	}
	
	.mt_2 {
		margin-top: 2px!important
	}
	
	.mt_10 {
		margin-top: 10px!important
	}
	
	.mt_15 {
		margin-top: 15px!important
	}
	
	.mt_20 {
		margin-top: 20px!important
	}
	
	.mt_50 {
		margin-top: 50px!important
	}
	
	.input_change_type {
		padding-right: 55px!important
	}
	
	.input_change_type .change_type {
		position: absolute;
		right: 10px;
		top: 5px;
		z-index: 9000;
		border: 1px solid #ecebeb!important;
		padding: 0;
		width: 40px;
		height: 32px;
		font-size: 14px;
		line-height: 32px;
		text-align: center;
		color: #717981;
		background: #f4f4f4
	}
	
	.input_show_code {
		padding-left: 70px!important
	}
	
	.input_show_code>div {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		border-right: 1px solid #c8c8c8;
		padding: 0;
		width: 70px;
		z-index: 9000;
		text-align: center;
		font-weight: 700
	}
	
	.checkbox {
		position: absolute;
		left: 0;
		top: 1px;
		width: 16px;
		height: 16px
	}
	
	.checkbox:after,
	.checkbox:before {
		content: " ";
		position: absolute;
		left: 0;
		top: 0
	}
	
	.checkbox:before {
		border: 1px solid #ccc;
		width: 16px;
		height: 16px;
		background: #fff
	}
	
	.checkbox:after {
		top: 1px;
		left: 6px;
		display: none;
		border: 1px solid #32963c;
		border-left: none;
		border-top: none;
		width: 5px;
		height: 11px;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg)
	}
	
	.checkbox.on:after {
		display: block
	}
	
	#verify_code {
		display: none
	}
	
	#verify_code.show {
		display: block
	}
	
	.validate_code_box,
	.validate_icon {
		vertical-align: middle;
		line-height: 22px;
		display: inline-block
	}
	
	.validate_code_box {
		outline: 0;
		width: 100px;
		height: 22px;
		margin-right: 10px;
		padding: 0 5px;
		box-sizing: border-box;
		border: 1px solid #ccc
	}
	
	.validate_code_box:focus {
		outline: 0;
		border: 1px solid #4d90fe
	}
	
	.validate_layer {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .4);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10000
	}
	
	.validate_layer h2 {
		margin: 1.875rem 0 2.1875rem;
		font-size: 1.125rem;
		font-weight: 400;
		color: #636363
	}
	
	.validate_layer h3 {
		font-size: .9375rem;
		margin: 2.1875rem 0 1.25rem;
		color: #636363;
		padding: 1px 0
	}
	
	.validate_layer .m-dialog {
		position: fixed;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		box-sizing: border-box;
		width: 17.5rem;
		background: #f8f8f8;
		padding: 1rem .5rem;
		border-radius: .125rem;
		box-shadow: 0 0 .1875rem rgba(0, 0, 0, .2);
		text-align: center
	}
	
	.validate_layer .m-box {
		display: flex;
		height: 100%
	}
	
	.validate_layer .code_error {
		font-size: 14px;
		color: #e24123;
		margin-bottom: 10px;
		min-height: 16px
	}
	
	.m-box-col {
		flex: 1;
		width: 100%;
		display: block
	}
	
	.m-btn {
		width: 100%;
		text-align: center;
		line-height: 2.5rem;
		height: 2.5rem;
		font-size: .875rem;
		border-radius: .1875rem;
		border: .35714px solid #ccc;
		outline: 0;
		display: inline-block;
		min-width: 4.375rem;
		box-sizing: border-box;
		padding: 0;
		color: #787878
	}
	
	.m-btn:active {
		background: linear-gradient(180deg, #e0e0e0 0, #dbdbdb)
	}
	
	.hint_error {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .15);
		z-index: 9991
	}
	
	.hint_error>div {
		background: rgba(0, 0, 0, .65);
		border-radius: 5px;
		margin: 180px auto 0;
		width: 85%;
		line-height: 32px;
		font-size: 15px;
		text-align: center;
		color: #fff;
		padding: 16px 0
	}
	
	.input_error {
		margin: 6px 12px 15px;
		font-size: 14px;
		color: #e24123
	}
	
	.succ_img {
		padding: 195px 0 0;
		background: url(//u1.sinaimg.cn/upload/img/h5/440/success-result.png) no-repeat center 75px;
		background-size: 88px auto
	}
	
	@media only screen and (-webkit-min-device-pixel-ratio:2) {
		.succ_img {
			background-image: url(//u1.sinaimg.cn/upload/img/h5/440/success-result_2x.png)
		}
	}
	
	.succ_info {
		font-size: 14px;
		color: #aaa
	}
	
	.succ_tip {
		margin: 12px
	}
	
	.resend_tit,
	.succ_tip {
		font-size: 14px;
		color: #828282
	}
	
	.resend_tit {
		margin: 20px 12px 0
	}
	
	.resend_imgcode_box {
		margin: 10px 12px
	}
	
	.text_center {
		text-align: center
	}
	
	.dec_line {
		width: 100%;
		height: 1px;
		margin: 5px 0;
		position: relative;
		background: #cfcfcf;
		background: linear-gradient(90deg, hsla(0, 0%, 81%, 0), #cfcfcf 50%, hsla(0, 0%, 81%, 0))
	}
	
	.cpt_code {
		display: inline-block;
		vertical-align: middle;
		margin-top: -.14em
	}
	
	.skip_link {
		display: none;
		margin: 20px 12px;
		font-size: 14px
	}
	
	.skip_link.disabled {
		color: rgba(80, 125, 175, .4)
	}
	
	.tipe-text {
		font-size: .875rem;
		text-align: center;
		line-height: 1.6;
		padding: .625rem 0
	}
	
	.tipe-text a {
		color: #507daf
	}
	
	.input_error {
		margin: 6px 12px 15px;
		font-size: 14px;
		color: #e24123;
	}
</style>