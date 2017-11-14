<template>
	<div class="find">
		<!--搜索框-->
		<div class="weui-search-bar" :class="{'weui-search-bar_focusing' : bool}" id="searchBar">
			<form class="weui-search-bar__form">
				<div class="weui-search-bar__box">
					<i class="weui-icon-search"></i>
					<input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
					<a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
				</div>
				<label @click="searchShow" class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                <i class="weui-icon-search"></i>
                <span>搜索</span>
            </label>
			</form>
			<a @click="searchHide" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
		</div>
		<!--cardd11部分-->
		<div class="card11 card-combine" data-node="group" id="boxId_1510134298173_25">
			<div data-node="cardList" class="card-list">
				<div class="card card17 line-around col-2" id="boxId_1510134298173_26">
					<a class="item-box line-separate" href="/p/index?containerid=1008085ed40fa7e64409bcc57b9562bfe11764">
						<div class="layout-box">
							<div class="mct-a box-col txt-m txt-cut">#东哥皇太极姐弟恋#</div>
						</div>
					</a>
					<a class="item-box line-separate" href="/p/index?containerid=100808e9a1f9e411b3a52cff48e92de04389c7">
						<div class="layout-box">
							<div class="mct-a box-col txt-m txt-cut">#王源1108十七岁生日快乐#</div>
						</div>
					</a>
					<a class="item-box line-separate" href="/p/index?containerid=100808a9835f11b49496c0dd2626393f066c8c">
						<div class="layout-box">
							<div class="mct-a box-col txt-m txt-cut">#携程幼儿园老师虐童#</div>
						</div>
					</a>
					<a class="item-box line-separate" href="/p/index?containerid=100803">
						<div class="layout-box">
							<div class="mct-a box-col txt-m txt-cut">热门话题</div>
						</div>
					</a>
				</div>
			</div>
		</div>

		<div class="card11 card-combine" data-node="group" id="boxId_1510141796646_27">
			<div data-node="cardList" class="card-list">
				<div class="card card4 line-around" id="boxId_1510141796646_28">
					<a href="/p/index?containerid=102803" class="layout-box"><i class="iconimg iconimg-s"><img width="23" height="23" src="https://h5.sinaimg.cn/upload/2016/12/12/319/92710.png" alt=""></i>
						<div class="box-col txt-cut"><span class="mct-a ">热门微博</span></div>
					</a>
				</div>
				<div class="card card4 line-around" id="boxId_1510141796646_29">
					<a href="/p/index?containerid=1087030002_817" class="layout-box"><i class="iconimg iconimg-s"><img width="23" height="23" src="https://h5.sinaimg.cn/upload/2016/12/12/319/92692.png" alt=""></i>
						<div class="box-col txt-cut"><span class="mct-a ">名人</span></div>
					</a>
				</div>
			</div>
		</div>

		<div class="card11 card-combine" data-node="group" id="boxId_1510141796646_30">
			<div data-node="cardList" class="card-list">
				<div class="card card4 line-around" id="boxId_1510141796646_31">
					<a href="http://toutiao.weibo.cn?from=weibofaxian" class="layout-box"><i class="iconimg iconimg-s"><img width="23" height="23" src="https://h5.sinaimg.cn/upload/2016/12/12/319/92706.png" alt=""></i>
						<div class="box-col txt-cut"><span class="mct-a ">微博头条</span></div>
					</a>
				</div>
				<div class="card card4 line-around" id="boxId_1510141796646_32">
					<a href="/p/index?containerid=10100310001" class="layout-box"><i class="iconimg iconimg-s"><img width="23" height="23" src="https://h5.sinaimg.cn/upload/2016/12/12/319/92730.png" alt=""></i>
						<div class="box-col txt-cut"><span class="mct-a ">电影</span></div>
					</a>
				</div>
				<div class="card card4 line-around" id="boxId_1510141796646_33">
					<a href="/p/index?containerid=10140310001" class="layout-box"><i class="iconimg iconimg-s"><img width="23" height="23" src="https://h5.sinaimg.cn/upload/2016/12/12/319/92700.png" alt=""></i>
						<div class="box-col txt-cut"><span class="mct-a ">音乐</span></div>
					</a>
				</div>
				<div class="card card4 line-around" id="boxId_1510141796646_34">
					<a href="/p/index?containerid=1084030002_523" class="layout-box"><i class="iconimg iconimg-s"><img width="23" height="23" src="https://h5.sinaimg.cn/upload/2016/12/12/319/92722.png" alt=""></i>
						<div class="box-col txt-cut"><span class="mct-a ">微公益</span></div>
					</a>
				</div>
			</div>
		</div>

		<div class="card11 card-combine" data-node="group" id="boxId_1510141796646_35">
			<div data-node="cardList" class="card-list">
				<div class="card card4 line-around" id="boxId_1510141796646_36">
					<a href="http://new.vip.weibo.cn" class="layout-box"><i class="iconimg iconimg-s"><img width="23" height="23" src="https://h5.sinaimg.cn/upload/2016/12/12/319/crown_2x.png" alt=""></i>
						<div class="box-col txt-cut"><span class="mct-a ">会员</span></div>
					</a>
				</div>
				<div class="card card4 line-around" id="boxId_1510141796646_37">
					<a href="/album" class="layout-box"><i class="iconimg iconimg-s"><img width="23" height="23" src="https://h5.sinaimg.cn/upload/2016/12/12/319/60988.png" alt=""></i>
						<div class="box-col txt-cut"><span class="mct-a ">相册</span></div>
					</a>
				</div>
				<div class="card card4 line-around" id="boxId_1510141796646_38">
					<a href="http://m.weibo.cn/client/game" class="layout-box"><i class="iconimg iconimg-s"><img width="23" height="23" src="https://h5.sinaimg.cn/upload/2016/12/12/319/94046.png" alt=""></i>
						<div class="box-col txt-cut"><span class="mct-a ">找 Doge</span></div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				bool: false
			}
		},
		methods: {
			searchShow: function() {
				this.bool = !this.bool
			},
			searchHide: function() {
				this.bool = !this.bool
			}
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
	/*findCSS*/
	
	.find {
		background: #f2f2f2;
		overflow: hidden;
	}
	/*.weui-search-barCSS*/
	
	.weui-search-bar {
		margin: 0 0 .5625rem 0;
	}
	/*cardd11部分CSS*/
	
	.card11 {
		margin: 0 0 .5625rem 0;
		background: #fff;
		overflow: hidden;
		.cardList {
			.card {
				margin-top: 0;
				margin-bottom: 0;
				border: none;
				background-image: linear-gradient(to bottom, transparent 50%, #dadada 50%, #dadada 100%);
				background-size: 100% 1px;
				background-repeat: no-repeat;
				background-position: bottom;
			}
		}
	}
	
	.card17.col-2 .item-box:nth-of-type(2n+1),
	.card17.col-3 .item-box:nth-of-type(3n+1),
	.card17.col-4 .item-box:nth-of-type(4n+1),
	.card17.col-5 .item-box:nth-of-type(5n+1) {
		padding-left: .75rem;
	}
	
	.card .col-2 .item-box {
		width: 50%;
	}
	
	.card17 .item-box {
		position: relative;
		display: inline-block;
		padding: .5rem;
		box-sizing: border-box;
	}
	
	.card17 .layout-box {
		height: 1.9375rem;
		line-height: 1.9375rem;
	}
	
	.layout-box {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
	}
	
	.layout-box .box-col {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		float: left;
	}
	
	a .mct-a,
	.mct-a {
		color: #333;
	}
	
	.txt-cut {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.txt-m {
		font-size: .875rem;
	}
	
	.card4 .layout-box {
		height: 2rem;
		-webkit-box-align: center;
		-moz-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		padding: .375rem 0 .375rem .75rem;
	}
	
	.card4 .iconimg {
		margin: 0 .625rem 0 0;
	}
	
	.iconimg-s {
		width: 1.4375rem;
		height: 1.4375rem;
	}
	
	.iconimg {
		display: inline-block;
		vertical-align: middle;
	}
	
	.iconimg-s img {
		width: 1.4375rem;
		height: 1.4375rem;
	}
	
	.iconimg img {
		vertical-align: top!important;
	}
	
	a,
	img {
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}
	
	.card4 .mct-a {
		vertical-align: middle;
		line-height: 1.5em;
	}
</style>