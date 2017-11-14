<template>
	<div class="top">
		<div class="topLeft">
			<div class="index-logo">
				<div v-for='a in tab' v-html='a.left' v-show='id==a.id'></div>
			</div>
		</div>
		<div class="topRight">
			<p class="iconfont icon-config aaa" @click='set'></p>
			<p class="iconfont icon-xiaoxi bbb"></p>
			<p class="iconfont icon-shuaxin"></p>
			<p class="iconfont icon-search1"></p>
			<p class="iconfont icon-xie" @click='close'></p>
		</div>
		<div class="tab">
			<p>
				<a v-for='a in tab' :href="a.href" @click='choose(a.id)' :class="{now:a.id==id}">{{a.text}}</a>
			</p>
		</div>
		<div class="write" v-show='writeBool'>
			<div class="write-top">
				<div class="close" @click='close'>×</div>
				<div class="myImg"><img src="../resource/images/myImg.jpg"/></div>
				<div @click='send' class="send" :class="{canSend:numed}"><p>发送</p></div>
				<span class="num" v-show='numed'>{{numed}}</span>
			</div>
			<div class="mian">
				<p>
					<textarea placeholder="分享新鲜事…"  v-model='num'></textarea>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
	import $ from "jquery";
	
/*	$(".tab p").find("a").addEventListener('click',function(){
		alert(1);
	})*/
	export default {
		data(){
			return {
				img:require("../resource/images/logo.png"),
				tab:[{
					text:'首页',
					id:1,
					href:'#/index/tab1',
					left:"<p class='username' style='padding-left: 12px;float: left;'>sjr</p><span class='more' style='padding-left: 5px;float: left;transform:rotateZ(90deg);-ms-transform:rotateZ(90deg);-moz-transform:rotateZ(90deg); -webkit-transform:rotateZ(90deg);color: orange;'>></span>",
					
				},{
					text:'消息',
					id:2,
					href:'#/index/tab2',
					left:'<img src="../resource/images/logo.png" style="height:24px;width:27px;margin-left:8px;vertical-align: middle;margin-top: -10px;"/><span style="font-size: 1rem;font-weight: 200;padding-left:10px">消息</span>',
					
				},{
					text:'发现',
					id:3,
					href:'#/index/tab3',
					left:'<img src="../resource/images/logo.png" style="height:24px;width:27px;margin-left:8px;vertical-align: middle;margin-top: -10px;"/><span style="font-size: 1rem;font-weight: 200;padding-left:10px">发现</span>',
					
				},{
					text:'我',
					id:4,
					href:'#/index/tab4',
					left:'<img src="../resource/images/logo.png" style="height:24px;width:27px;margin-left:8px;vertical-align: middle;margin-top: -10px;"/><span style="font-size: 1rem;font-weight: 200;padding-left:10px">我</span>',
					
				}],
				id:1,
				num:'',
				writeBool:false,
				username:'',
			}
		},
		methods:{
			choose:function(id){
				this.id = id;
				switch(id){
					case 1:
						$(".topRight p").css('display','none');
						$(".topRight p").slice(2).css('display','block');
						break;
					case 2:
						$(".topRight p").css('display','none');
						$(".topRight p").slice(3).css('display','block');//bbb
						$(".bbb").css('display','block');
						break;
					case 3:
						$(".topRight p").css('display','none');
						$(".topRight p").slice(3).css('display','block');
						break;
					case 4:
						$(".topRight p").css('display','none');
						$(".topRight p").slice(3).css('display','block');//bbb
						$(".aaa").css('display','block');
						break;					
				}
			},
			close:function(){
				this.writeBool = !this.writeBool;
			},
			set:function(){
				window.location.href='#/set';
			},
			send:function(){
				var myDate = new Date();
				var mytime = myDate.toLocaleTimeString();
				var self = this;
				$.ajax({
					type:"post",
					url:"http://10.30.152.85:3000/users/send",
					data:{username:self.username,text:self.num,time:mytime},
					success:function(data){
						alert(data);
						location.reload();
						self.writeBool = !self.writeBool;						
					}
				})
			}
		},
		mounted(){
			this.username = this.$store.state.username;
			$(".username").html(this.username);
			var self = this;
			function abc(){
				var url = window.location.href;
				var arr = url.split('/');
				var length = arr.length;
				var tab = arr[length-1];
				console.log(tab);
				switch(tab){
					case "tab1":
						self.id = 1;
						break;
					case "tab2":
						self.id = 2;
						break;
					case "tab3":
						self.id = 3;
						break;
					case "tab4":
						self.id = 4;
						break;					
				}
			};
			abc();
			this.choose(this.id);
/*			function username(){
				this.username = $.cookie('username');
				$('.username').html(this.username);
			};
			username();*/
		},
		components:{
			
		},
		computed:{
			numed:function(){
				return this.num.length
			}
		}
	}
</script>
<style lang="scss" scoped>
	.top{
		font-size: 1.125rem;
		overflow: hidden;
		.topLeft{
			float: left;
			overflow: hidden;
			.index-logo{
				div{
					overflow: hidden;
					height: 44px;
					line-height: 44px;
				}
			}
		}
		.topRight{
			p{
				width: 46px;
				height: 44px;
				line-height: 44px;
				text-align: center;
				float: right;
				font-size: 22px;
			}
				.aaa{
					font-size: 30px;
				}
				.bbb{
					font-size: 30px;
				}
		}
		.tab{
			width: 100%;
			height: 40px;
			font-size: .9275rem;
    		/*color: #ff8200;*/
    		color: #5d5d5d;
    		font-weight: 700;
    		line-height: 40px;
       		text-align: center;
        	z-index: 1;
    		margin-bottom: 10px;
    		width: 100%;
		    background: #f5f5f5;
		    box-shadow: 0 1px 2px rgba(0,0,0,.15);
		    display: flex;
        	p{
        		width: 100%;
        		a{
        			width: 25%;
        			display: block;
    				float: left;
        		}
        		.now{
    				color: #ff8200;
        			border-bottom: 2px solid #ff8200;
    			}
        	}
		}
		.write{
			position: fixed;
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;
			background: white;
			z-index: 999;
			.write-top{
				box-sizing: border-box;
				padding: .65625rem .6rem;
   				text-align: center;
        		margin: 0 auto;
    			width: 100%;
    			display: flex;
    			flex-direction: row;
    			align-items: initial;
    			justify-content: space-between;
    			position:relative;
    			.close{
    				font-size: 30px;
    				line-height: 28px;
    				height: 28px;
    			}
    			.myImg img{
    				height: 1.75rem;
    				border-radius: 50%;
    				-webkit-tap-highlight-color: rgba(255,255,255,0);
    				margin-left: 30px;
    			}
    			.send{
    				color: rgba(120,120,120,.3);
    				border: .5px solid #ccc;
    				font-size: .75rem;
				    padding: 0 .625rem;
				    margin-left: .75rem;
				    margin-right: .001rem;
				    height: 1.6875rem;
				    line-height: 1.6875rem;
				    background: #fff;
				    border-radius: .1875rem;
				    outline: 0;
				    display: inline-block;
    			}
    			.canSend{
    				color: #fff;
   					background: #ff8200;
    			}
    			.num{
    				position: absolute;
    				top:14px;
    				right: 65px;
    				font-size: 1rem;
				    font-weight: 400;
				    line-height: 1.3125;
				    word-wrap: break-word;
    			}
			}
			.mian{
				overflow-y: auto;
   				padding: 0 .6rem;
   				box-sizing: border-box;
			    margin: 0 auto;
			    width: 100%;
			    p{
			    	width: 100%;
				    font-weight: 300;
				    font-size: 1.25rem;
				    line-height: 1.5em;
				    textarea{
				    	height: 59px;
				    	margin-top: .65625rem;
					    background-color: transparent;
					    outline: 0;
					    border: none;
					    font-size: 1rem;
					    resize: none;
					    width: 100%;
				    }
			    }
			}
		}
	}
</style>