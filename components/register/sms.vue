<!--手机注册-->
<template>
	<div>
		<section id="sms" class="main "><input type="hidden" name="act" value="sendcode">
			<div class="mod h5_select_long"><span id="country_code">0086</span><span id="country_name">中国大陆</span>
				<select id="sms_select_area">
					<option value="0086" data-type="CN">中国大陆</option>
					<option value="00852" data-type="HK">香港地区</option>
					<option value="00886" data-type="TW">台湾地区</option>
					<option value="00853" data-type="MO">澳门地区</option>
					<option value="0081" data-type="JP">日本</option>
					<option value="0082" data-type="KP">韩国</option>
					<option value="0065" data-type="SG">新加坡</option>
					<option value="0060" data-type="MY">马来西亚</option>
					<option value="001" data-type="US">美国</option>
					<option value="001" data-type="CA">加拿大</option>
					<option value="0061" data-type="AU">澳大利亚</option>
					<option value="0044" data-type="UK">英国</option>
					<option value="0033" data-type="FR">法国</option>
					<option value="0049" data-type="GM">德国</option>
					<option value="007" data-type="RU">俄罗斯</option>
					<option value="0091" data-type="IN">印度</option>
					<option value="0066" data-type="TL">泰国</option>
					<option value="0055" data-type="BRA">巴西</option>
					<option value="0062" data-type="ID">印尼</option>
					<option value="00855" data-type="KH">柬埔寨</option>
					<option value="0095" data-type="MM">缅甸</option>
					<option value="00673" data-type="BN">文莱</option>
					<option value="0063" data-type="PH">菲律宾</option>
					<option value="0084" data-type="VN">越南</option>
					<option value="00856" data-type="LA">老挝</option>
					<option value="0064" data-type="NZ">新西兰</option>
					<option value="0039" data-type="IT">意大利</option>
					<option value="0034" data-type="ES">西班牙</option>
				</select>
			</div>
			<p class="hint_12_tit">登录名（手机号）</p>
			<div class="mod mod_more h5_input">
				<input id="sms_phone_input" type="tel" name="phone" maxlength="11" placeholder="请输入手机号码" validate="mobile" @focus = "focus" @blur = "blur">
			</div>
			<div class="input_error hidden1">我是错误显示</div>
			<p class="hint_12_tit">设置密码</p>
			<div class="mod mod_more h5_input input_change_type"><input id="sms_pwd_input" disableemoticoninput="true" type="password" name="pwd" maxlength="16" placeholder="6~16位数字或字母，区分大小写" validate="pwd" @focus = "pwdfocus" @blur = "pwdblur">
				<div id="sms_toggle_type" class="change_type" @click='showhidden'>显示</div>
			</div>
			<div class="input_error mb_-5 hidden2">我是错误显示</div>
			<div class="mt_20">
				<a id="sms_vcode_fetch" href="javascript:void(0);" class="btn_common ok_btn" @click = "register">注册</a>
			</div>
			<div class="hint_14 hint_agreement"><span id="sms_btn_agree" class="checkbox on"></span>
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
		data(){
			return{
				show:false
			}
		},
		methods: {
			focus: function(){
				$("#sms_phone_input").focus(function(){
					$(".hidden1").css("display", "block").css("color", "#e24123").html("请输入手机号");
				})
			},
			blur: function(){
				$("#sms_phone_input").blur(function(){
					if($(this).val() == ""){
						$(".hidden1").css("color", "#e24123").html("手机号码不能为空");
					}else{
						if(/^1\d{10}$/.test($(this).val())){
							$(".hidden1").css("color", "#04BE02").html("手机号码正确");
						}else{
							$(".hidden1").css("color", "#e24123").html("请输入正确的手机号");
						}
					}
				})
			},
			pwdfocus: function(){
				$("#sms_pwd_input").focus(function(){
					$(".hidden2").css("display", "block").css("color", "#e24123").html("密码由6~16位数字或字母组成，区分大小写");
				})
			},
			pwdblur: function(){
				$("#sms_pwd_input").blur(function(){
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
			register: function(){
				var phone = $("#sms_phone_input").val();
				var password = $("#sms_pwd_input").val();
				$.ajax({
					type:"post",
					url:"http://10.30.152.85:3000/users/registor-phone",
					data:{"phone" : phone, "password":password},
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
				if(!this.show){
					$("#sms_toggle_type").html("显示")
					$("#sms_pwd_input").attr("type", "password");
				}else{
					$("#sms_toggle_type").html("隐藏")
					$("#sms_pwd_input").attr("type", "text");
				}
			},
		},
		mounted(){
			this.focus();
			this.blur();
			this.pwdfocus();
			this.pwdblur();
		}
	}
</script>

<style scoped>
	/*!
 * Weibo HTML5
 * (c) 2016 Weibo Company
 */
	
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
	
	.hidden1 {
		display: none
	}
	
	.hidden2 {
		display: none;
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
</style>