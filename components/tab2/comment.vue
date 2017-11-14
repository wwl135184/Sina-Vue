<template>
	<!--评论-->
					<div data-v-36bb2c08="" >
						<!---->
						<div data-v-7f5164aa="" data-v-36bb2c08="" class="comment-item" v-for="c in news[userid].commentuser">
							<div data-v-7f5164aa="" class="m-box comment-con-top">
								<div data-v-7f5164aa="" class="comment-user-img m-avatar-box">
									<a data-v-7f5164aa="" class="m-img-box"><img data-v-7f5164aa="" :src="c.userimg" alt="">
										<!---->
									</a>
								</div>
								<div data-v-7f5164aa="" class="m-box-col">
									<p data-v-7f5164aa="" class="comment-user-name"><span data-v-7f5164aa="">{{c.username}}</span></p>
									<p data-v-7f5164aa="" class="comment-time"><span data-v-7f5164aa="">{{c.time}}</span></p>
								</div> <span data-v-7f5164aa="" class="comment-zan"><i data-v-7f5164aa="" class="m-icon m-icon-like"></i> <i data-v-7f5164aa="" class="comment-dz-num"></i></span></div>
							<div data-v-7f5164aa="" class="comment-con-bot">
								<div data-v-7f5164aa="" class="comment-con">
									<div data-v-7f5164aa="">{{c.content}}</div>
									<!---->
								</div>
							</div>
						</div>

					</div>
</template>

<script>
	export default {
		data() {
			return {				
				news: [],				
				userid:"",
			}
		},
		methods:{
			loadMore: function() {
				var self = this;
				$.ajax({
					url: "../resource/json/data-ljh.json",
					type: "GET",
					success: function(data) {
						//	console.log(data.newslist)
						var len = data.length - 1;
						self.news = self.news.concat(data)
						console.log(self.news)
						console.log(self.$store.state.userid);
						self.userid = len - self.$store.state.userid;
					}
				})
			}

		},
		mounted() {
			this.loadMore();		
		}

	}
</script>

<style>
</style>