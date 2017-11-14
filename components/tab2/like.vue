<template>
	<!--赞-->
	<div data-v-36bb2c08="" >
						<div data-v-5068b85c="" data-v-36bb2c08="" class="like-item m-box-center-a" v-for="d in news[userid].support">
							<div data-v-5068b85c="" class="comment-user-img m-avatar-box">
								<a data-v-5068b85c="" href="https://m.weibo.cn/u/1936072655?uid=1936072655" class="m-img-box"><img data-v-5068b85c="" :src="d.userimg" alt="">
									<!---->
								</a>
							</div>
							<div data-v-5068b85c="" class="m-box-col">
								<p data-v-5068b85c="" class="comment-user-name">{{d.username}}</p>
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