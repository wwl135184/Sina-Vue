<template>
	<!--转发-->
					<div data-v-36bb2c08="" >
						<!---->
						<div data-v-60ad2e50="" data-v-36bb2c08="" class="comment-item" v-for="b in news[userid].transpond">
							<div data-v-60ad2e50="" class="m-box comment-con-top">
								<div data-v-60ad2e50="" class="comment-user-img m-avatar-box">
									<a data-v-60ad2e50="" class="m-img-box"><img data-v-60ad2e50="" :src="b.userimg" alt="">
										<!---->
									</a>
								</div>
								<div data-v-60ad2e50="" class="m-box-col">
									<p data-v-60ad2e50="" class="comment-user-name"><span data-v-60ad2e50="">{{b.username}}</span></p>
									<p data-v-60ad2e50="" class="comment-time"><span data-v-60ad2e50="">{{b.time}}</span></p>
								</div>
							</div>
							<div data-v-60ad2e50="" class="comment-con-bot">
								<p data-v-60ad2e50="" class="comment-con"><span data-v-60ad2e50="">{{b.content}}</span></p>
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