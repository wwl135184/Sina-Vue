<template>
	<div>
		<div data-node="cardList" class="card-list">
			<!--@我的-->
			<div class="card card25 line-around module-message-item at" data-act-type="hover" id="boxId_1510140607757_53">
				<div class="layout-box media-graphic">
					<a href="/msg/atme?subtype=allWB" class="mod-media">
						<div class="media-main">
							<div class="at"><i class="iconf iconfont icon-at"></i></div>
						</div>
					</a>
					<a href="/msg/atme?subtype=allWB" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">@我的</div>
					</a><span class="plus plus-m"> <i class="icon-font iconfont icon-arrow-right"></i></span></div>
			</div>
			<!--评论-->
			<div class="card card25 line-around module-message-item comments" data-act-type="hover" id="boxId_1510140607757_54">
				<div class="layout-box media-graphic">
					<a href="/msg/cmts?subtype=allPL" class="mod-media">
						<div class="media-main">
							<div class="comments"><i class="iconf iconfont icon-pinglun"></i></div>
						</div>
					</a>
					<a href="/msg/cmts?subtype=allPL" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">评论</div>
					</a><span class="plus plus-m"> <i class="icon-font iconfont icon-arrow-right txt-m"></i></span></div>
			</div>
			<!--点赞-->
			<div class="card card25 line-around module-message-item good" data-act-type="hover" id="boxId_1510140607757_55">
				<div class="layout-box media-graphic">
					<a href="/msg/like" class="mod-media">
						<div class="media-main">
							<div class="good"><i class="iconf iconfont icon-down"></i></div>
						</div>
					</a>
					<a href="/msg/like" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">赞</div>
					</a><span class="plus plus-m"> <i class="icon-font iconfont icon-arrow-right txt-m"></i></span></div>
			</div>
			<!--未关注人私信-->
			<div class="card card25 line-around module-message-item box" data-act-type="hover" id="boxId_1510140607757_56">
				<div class="layout-box media-graphic">
					<a href="/msg/notes" class="mod-media">
						<div class="media-main">
							<div class="box"><i class="iconf iconfont icon-laba"></i></div>
						</div>
					</a>
					<a href="/msg/notes" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">未关注人私信</div>
					</a><span class="plus plus-m"> <i class="icon-font iconfont icon-arrow-right txt-m"></i></span></div>
			</div>
			<!--关注人聊天-->
			<div v-for="a in arr" class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_57">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=2715025067" class="mod-media">
						<div class="media-main"><img :src="a.userimg" height="48" width="48"><i class="icon icon-bluev"></i> </div>
					</a>
					<a href="/msg/chat?uid=2715025067" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">{{a.title}}</div>
						<div class="item-minor txt-m mct-d txt-cut">{{a.txt}}</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">11-07 20:00</span> <i v-if="a.bool" class="bubble bubble-dot-red">{{a.num}}</i></span>
				</div>
			</div>
			<!--<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_58">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=5743923782" class="mod-media">
						<div class="media-main"><img src="http://tvax4.sinaimg.cn/crop.17.0.1208.1208.180/006gIUXYly8fhr88xqivcj30yi0xkwgf.jpg" height="48" width="48"><i class="icon icon-bluev"></i> </div>
					</a>
					<a href="/msg/chat?uid=5743923782" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">微博会员小秘书</div>
						<div class="item-minor txt-m mct-d txt-cut">胡歌示范：职场升职记</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">11-06 23:15</span> <i class="bubble bubble-dot-red">1</i></span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_59">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=1904769205" class="mod-media">
						<div class="media-main"><img src="http://tva2.sinaimg.cn/crop.0.0.1024.1024.180/718878b5jw8esr2geokzkj20sg0sg0ts.jpg" height="48" width="48"><i class="icon icon-bluev"></i> </div>
					</a>
					<a href="/msg/chat?uid=1904769205" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">知乎</div>
						<div class="item-minor txt-m mct-d txt-cut">#不知道诊所# 11 月 10 日 - 11 月 15 日，上午 10 点到晚上 22 点，知乎创意体验馆「不知道诊所」在北京三里屯太古里南区橙色大厅营业开诊，凭好奇心入场，彻底治愈你的「不懂」~ http://weibo.com/1904769205/Ft6vrwAQV</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">11-01 20:12</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_60">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=1681056555" class="mod-media">
						<div class="media-main"><img src="http://tvax1.sinaimg.cn/crop.0.0.1772.1772.180/6432e32bly8fl2wdbdxtnj21d81d8hdt.jpg" height="48" width="48"><i class="icon icon-bluev"></i> </div>
					</a>
					<a href="/msg/chat?uid=1681056555" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">苏荷酒吧官方微博</div>
						<div class="item-minor txt-m mct-d txt-cut">强“词”夺理，说出嘻哈力量，2017《苏荷嘻引力》嘻哈说唱大赛，首届娱乐行业大型HIP-HOP赛事，何以热血？在青春殆尽的时光中享受无尽止的PK乐趣，11月8日，烽烟再起，热血开战用嘻哈把对手diss到哇哇乱叫，用实力让对手跪地求饶！优胜者签约合纵AMG音乐与匠星娱乐！搜索话题#苏荷嘻引力#了解更多信息喔</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">11-01 18:03</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_61">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=6047199468" class="mod-media">
						<div class="media-main"><img src="http://tvax2.sinaimg.cn/crop.0.0.750.750.180/006BfqPily8fdanx419fzj30ku0kugme.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=6047199468" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">表情包搞笑无水印</div>
						<div class="item-minor txt-m mct-d txt-cut">福利派送:http://t.cn/RWW0Xd6</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">10-27 16:45</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_62">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=1759328987" class="mod-media">
						<div class="media-main"><img src="http://tva4.sinaimg.cn/crop.88.88.222.222.180/68dd3adbjw8ez1en88u77j20b40b4aaa.jpg" height="48" width="48"><i class="icon icon-bluev"></i> </div>
					</a>
					<a href="/msg/chat?uid=1759328987" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">adidasOrig...</div>
						<div class="item-minor txt-m mct-d txt-cut">分享图片</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">10-23 14:58</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_63">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=1910672761" class="mod-media">
						<div class="media-main"><img src="http://tvax4.sinaimg.cn/crop.6.0.1230.1230.180/71e28d79ly8ffy243oomjj20yi0y6n0r.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=1910672761" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">二珂Chloe</div>
						<div class="item-minor txt-m mct-d txt-cut">分享语音</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">10-04 19:54</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_64">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=1371731565" class="mod-media">
						<div class="media-main"><img src="http://tvax3.sinaimg.cn/crop.0.0.1242.1242.180/51c2f66dly8fe1dmoqnahj20yi0yidin.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=1371731565" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">Miss</div>
						<div class="item-minor txt-m mct-d txt-cut">手上少一把98K，谁帮我P一个？ &#8203;&#8203;&#8203;&#8203;</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">10-02 07:24</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_65">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=1672384324" class="mod-media">
						<div class="media-main"><img src="http://tvax2.sinaimg.cn/crop.9.0.493.493.180/63ae8f44ly8fkdcotab8uj20e80dpweq.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=1672384324" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">冯提莫</div>
						<div class="item-minor txt-m mct-d txt-cut">http://t.cn/R0AUtBw刚刚传了这首歌《远走高飞》到网易云音乐哦~大家等会不要忘了去我的网易云音乐主播电台（冯提莫）收听+评论+点赞+转发哟~么么哒。（你觉得好听咩？）</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">09-21 22:40</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_66">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=2714280233" class="mod-media">
						<div class="media-main"><img src="http://tva2.sinaimg.cn/crop.0.0.750.750.180/a1c8a129jw8fb3gmsrylyj20ku0kuaaw.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=2714280233" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">papi酱</div>
						<div class="item-minor txt-m mct-d txt-cut">更新啦！！ papi酱不定期更新的日常——很久没拍日常了！！ 今天我是美食测评博主徐汇小辣椒（a.k.a 山城小炮仗）！ 今天为大家带来一期超火辣零食测评，以及超甜美的月饼测评。 （祝大家半个月后中秋愉快辣！（片尾有福利嗷！ http://weibo.com/2714280233/FmHMraMce
						</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">09-20 18:32</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_67">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=1642909335" class="mod-media">
						<div class="media-main"><img src="http://tva2.sinaimg.cn/crop.0.0.179.179.180/61ecce97tw1ednir6uqxxj2050052mx7.jpg" height="48" width="48"><i class="icon icon-bluev"></i> </div>
					</a>
					<a href="/msg/chat?uid=1642909335" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">微博小秘书</div>
						<div class="item-minor txt-m mct-d txt-cut">天哪！这种愿望都能实现！#521个愿望#火热进行中，看哪家粉丝最会玩！http://t.cn/Ra80C5Q</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">06-08 18:24</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_68">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=5490326028" class="mod-media">
						<div class="media-main"><img src="http://tvax4.sinaimg.cn/crop.9.0.493.493.180/005ZyQBCly8fl51w0n74bj30e80dpwf8.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=5490326028" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">骚男丶注意马叉虫</div>
						<div class="item-minor txt-m mct-d txt-cut">谢谢你对骚的支持！ 骚每天下午5点到晚上10点在虎牙90077频道直播！ 等着你哦！和骚一起抠脚！(☆_☆)
						</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">05-21 13:40</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_69">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=1282871591" class="mod-media">
						<div class="media-main"><img src="http://tva3.sinaimg.cn/crop.24.240.360.360.180/4c771127jw1eacpnff2vsj20bp0goacx.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=1282871591" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">花荣</div>
						<div class="item-minor txt-m mct-d txt-cut">谢谢您的关注！花荣只有这一个加橙V认证微博，没有任何其他微博，不收钱，不推荐股票，不回答个股问题，请防止仿冒的骗子行骗。</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">05-18 19:42</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_70">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=2749401781" class="mod-media">
						<div class="media-main"><img src="http://tvax1.sinaimg.cn/crop.0.15.750.750.180/a3e08ab5ly8fgw87c0isqj20ku0lpabl.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=2749401781" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">Rita小雨桑</div>
						<div class="item-minor txt-m mct-d txt-cut">hello～本宝掐指一算，想必你一定是被我的才华所吸引！</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">05-06 13:48</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_71">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=3861642911" class="mod-media">
						<div class="media-main"><img src="http://tvax2.sinaimg.cn/crop.0.0.750.750.180/e62bfe9fly8fl7q7d9ci1j20ku0kugmu.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=3861642911" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">韦吹</div>
						<div class="item-minor txt-m mct-d txt-cut"> 1997.07.16 GodV 1994.03.22农历 Koro1 1995.06.07 Imp 1994.11.06 Pyl 1994.08.18 Intruder 1996.01.08 Eimy 1991.2.12 MaRin 1998.02.03 Peanut 1996.05.22 Icon 1998.10.16 World6 1995.01.18 Mystic 1997.08.06 xiye</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">05-02 15:31</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_72">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=2905098090" class="mod-media">
						<div class="media-main"><img src="http://tva4.sinaimg.cn/crop.0.0.180.180.180/ad28476ajw8exmekiagjaj2050050q3b.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=2905098090" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">男士搭配攻略</div>
						<div class="item-minor txt-m mct-d txt-cut">亲推荐您去下载一款手机APP：男衣库。这款APP会根据你自身的条件找出合适的搭配哦[抱抱]</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">03-31 02:04</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_73">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=2663453951" class="mod-media">
						<div class="media-main"><img src="http://tvax2.sinaimg.cn/crop.0.10.492.492.180/9ec114ffly8fjgumhadinj20do0e8q3l.jpg" height="48" width="48"> </div>
					</a>
					<a href="/msg/chat?uid=2663453951" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">赵雅芝ace</div>
						<div class="item-minor txt-m mct-d txt-cut">不会是小号吧什么都没有……</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">03-13 23:19</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_74">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=2377156730" class="mod-media">
						<div class="media-main"><img src="http://tvax1.sinaimg.cn/crop.0.24.1242.1242.180/8db0887aly8fk57ywdduaj20yi0zv41b.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=2377156730" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">卢本伟_55开</div>
						<div class="item-minor txt-m mct-d txt-cut">谢谢你的关注，如果你是男粉丝，我就给你一个香吻。如果你是女粉丝，我就给你十个香吻。</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">02-16 18:05</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_75">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=5793213789" class="mod-media">
						<div class="media-main"><img src="http://tva3.sinaimg.cn/crop.15.17.266.266.180/006k3Jy5jw8f9blje6y33j308c08c74i.jpg" height="48" width="48"><i class="icon icon-bluev"></i> </div>
					</a>
					<a href="/msg/chat?uid=5793213789" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">众筹吧</div>
						<div class="item-minor txt-m mct-d txt-cut">众筹项目退款通知</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">02-15 11:06</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_76">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=2850809427" class="mod-media">
						<div class="media-main"><img src="http://tva3.sinaimg.cn/crop.0.0.300.300.180/a9ebe653jw8fa3by368ojj208c08cmxf.jpg" height="48" width="48"><i class="icon icon-bluev"></i> </div>
					</a>
					<a href="/msg/chat?uid=2850809427" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">微博钱包</div>
						<div class="item-minor txt-m mct-d txt-cut">退款凭证</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">02-15 11:05</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_77">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=1470809487" class="mod-media">
						<div class="media-main"><img src="http://tva1.sinaimg.cn/crop.0.244.238.238.180/57aac58fjw8f4413fq3d3j20j60r4ju1.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=1470809487" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">山新</div>
						<div class="item-minor txt-m mct-d txt-cut">欢迎关注=W=+配音演员一枚～ACG深度中毒者【@北斗企鹅工作室 】配音团队所属～希望各位同学关注的同时遵守网络礼仪～互相尊重～这边人比较多～如果发表过激言论～可能会吵起来～这样会对我还有大家造成很大困扰～所以我会删除留言…严重者拉黑呦～另外～我比较不善言辞～还比较害羞（？）有时候真不知道如何回复～加上工作很忙～没有精力一一回复～请谅解～( • ̀ω•́ )✧总之希望大家在欢乐祥和的气氛中开开心心的逛微博呦～_(:3」∠)_【忘性极大…商业合作等请一定联系@北斗企鹅工作室 经纪人详谈～具体详见置顶微博～】</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">02-09 21:53</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_78">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=1705180884" class="mod-media">
						<div class="media-main"><img src="http://tva2.sinaimg.cn/crop.0.0.1242.1242.180/65a2fed4jw8fcetpt7w0wj20yi0yidhm.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=1705180884" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">陈欧</div>
						<div class="item-minor txt-m mct-d txt-cut">优惠券过期提醒</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">02-07 14:09</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_79">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=2870449302" class="mod-media">
						<div class="media-main"><img src="http://tva1.sinaimg.cn/crop.1.0.638.638.180/ab179496jw8eh69cemwjdj20hs0hq3yq.jpg" height="48" width="48"> </div>
					</a>
					<a href="/msg/chat?uid=2870449302" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">PD鹰士</div>
						<div class="item-minor txt-m mct-d txt-cut">熊猫TV18533欢迎你呀！谢谢关注！</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">02-06 19:16</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_80">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=6085660235" class="mod-media">
						<div class="media-main"><img src="http://tvax1.sinaimg.cn/crop.0.0.996.996.180/006DQOefly8ffg73lo2c5j30ro0ro443.jpg" height="48" width="48"> </div>
					</a>
					<a href="/msg/chat?uid=6085660235" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">林大大的围脖世界</div>
						<div class="item-minor txt-m mct-d txt-cut">[太开心][太开心][太开心]</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">2016-12-12 21:54</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_81">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=2143579695" class="mod-media">
						<div class="media-main"><img src="http://tva1.sinaimg.cn/crop.0.0.180.180.180/7fc46e2fjw1e8qgp5bmzyj2050050aa8.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=2143579695" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">全球顶尖摄影</div>
						<div class="item-minor txt-m mct-d txt-cut">欢迎来到全球顶尖摄影，点击有惊喜!</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">2016-12-09 08:12</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_82">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=2141347175" class="mod-media">
						<div class="media-main"><img src="http://tva1.sinaimg.cn/crop.0.0.180.180.180/7fa25d67jw1e8qgp5bmzyj2050050aa8.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=2141347175" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">拍照小技巧</div>
						<div class="item-minor txt-m mct-d txt-cut">欢迎来到拍照小技巧，点开有惊喜！</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">2016-11-30 20:34</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_83">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=1251000504" class="mod-media">
						<div class="media-main"><img src="http://tva4.sinaimg.cn/crop.0.0.750.750.180/4a90c0b8jw8esm9nii607j20ku0ku0tq.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=1251000504" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">许嵩</div>
						<div class="item-minor txt-m mct-d txt-cut">Hi，感谢关注。</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">2016-11-05 11:05</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_84">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=2453204297" class="mod-media">
						<div class="media-main"><img src="http://tva2.sinaimg.cn/crop.0.0.640.640.180/9238ed49jw8euhps3cbhyj20hs0htaav.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=2453204297" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">热门笑话集中营</div>
						<div class="item-minor txt-m mct-d txt-cut">哟····欢迎您关注热门笑话集中营，发送下面关键字，得到您想要的笑话，预祝您开心，快乐！！！！ 夫妻笑话 糗事百科 幽默笑话 两性笑话 愚人笑话 校园笑话 家庭笑话 动物笑话

						</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">2016-10-28 08:26</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_85">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=1191044977" class="mod-media">
						<div class="media-main"><img src="http://tva2.sinaimg.cn/crop.0.0.512.512.180/46fde771jw8efc13mb40rj20e80e8myb.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=1191044977" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">李小璐Super璐</div>
						<div class="item-minor txt-m mct-d txt-cut">吃饭了吗？今天好心情哦</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">2016-10-21 21:58</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_86">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=1659041705" class="mod-media">
						<div class="media-main"><img src="http://tva2.sinaimg.cn/crop.0.0.1242.1242.180/62e2f7a9jw8f0sjkl1cwtj20yi0yijy0.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=1659041705" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">穆雅斓</div>
						<div class="item-minor txt-m mct-d txt-cut">横跨7大洲8大洋的随缘漂流瓶</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">2016-09-29 23:37</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_87">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=3900215081" class="mod-media">
						<div class="media-main"><img src="http://tva2.sinaimg.cn/crop.9.0.502.502.180/e8788f29jw8f53stq3pzuj20e80e8753.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=3900215081" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">不二大叔说</div>
						<div class="item-minor txt-m mct-d txt-cut">谢谢关注大叔[爱你] weeechaaaaat：dashu259 做科普，并与你分享人生。</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">2016-09-02 17:22</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_88">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=2071119061" class="mod-media">
						<div class="media-main"><img src="http://tva2.sinaimg.cn/crop.0.0.180.180.180/7b72c4d5jw8fb3yrxwendj20500500so.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=2071119061" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">全球美体健身</div>
						<div class="item-minor txt-m mct-d txt-cut">感谢亲的关注，喜欢健身的朋友可以加我们的健身 韦...信：okjianshen 里面有健身视频，每天都会发布更多的健身内容，全球美体健身，做您身边的健身教练[爱你]</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">2016-09-02 17:01</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_89">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=2219064012" class="mod-media">
						<div class="media-main"><img src="http://tva4.sinaimg.cn/crop.0.0.180.180.180/84443accjw1e8qgp5bmzyj2050050aa8.jpg" height="48" width="48"> </div>
					</a>
					<a href="/msg/chat?uid=2219064012" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">生活百宝书</div>
						<div class="item-minor txt-m mct-d txt-cut">Hi 欢迎关注生活百宝书，你一定是位勤劳的小蜜蜂！[玫瑰] 欢迎加wei：design886 天天换壁纸哦[心]</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">2016-09-02 17:00</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_90">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=1875622891" class="mod-media">
						<div class="media-main"><img src="http://tvax2.sinaimg.cn/crop.0.5.750.750.180/6fcbbbebly8fe87oa157gj20ku0l5t9n.jpg" height="48" width="48"><i class="icon icon-club"></i> </div>
					</a>
					<a href="/msg/chat?uid=1875622891" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">张兜兜不许偷懒</div>
						<div class="item-minor txt-m mct-d txt-cut">感谢你的关注，一万个么么哒(づ｡◕‿‿◕｡)づ</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">2016-09-02 16:59</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_91">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=2787572474" class="mod-media">
						<div class="media-main"><img src="http://tvax1.sinaimg.cn/crop.11.0.728.728.180/a626fafaly8fky8oza4iej20ku0k8t9w.jpg" height="48" width="48"><i class="icon icon-bluev"></i> </div>
					</a>
					<a href="/msg/chat?uid=2787572474" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">凯利欧文吧</div>
						<div class="item-minor txt-m mct-d txt-cut">欢迎关注凯利欧文吧官方微博，（也希望您能关注我们的V信公众号：”lovekyrie52“或者搜”凯利欧文吧“即可，欧文的相关资源也会在公众号放出。）这里是最大的欧文粉丝聚集地，我们将为您发布凯利欧文最新资讯及周边消息，感谢您的关注！【做厄蜜，真好~】</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">2016-06-25 13:20</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_92">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=1895327843" class="mod-media">
						<div class="media-main"><img src="http://tva1.sinaimg.cn/crop.0.0.1181.1181.180/70f86863jw8f5616kh3uuj20wt0wtdqk.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=1895327843" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">奔波儿灞与灞波儿奔</div>
						<div class="item-minor txt-m mct-d txt-cut">这是一档解放天性的街拍，你想了解的男女那些事儿都在这里 [阴险]尤其是是3分45秒，太突然....http://weibo.com/5909185172/DxXckzb44</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">2016-06-25 13:19</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_93">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=1239246050" class="mod-media">
						<div class="media-main"><img src="http://tva3.sinaimg.cn/crop.0.1.750.750.180/49dd64e2jw8f0ebj1wrlpj20ku0kw74z.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=1239246050" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">薛之谦</div>
						<div class="item-minor txt-m mct-d txt-cut">世界和平…………什么鬼啦</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">2016-06-08 19:49</span> </span>
				</div>
			</div>
			<div class="card card25 line-around module-message-item" data-act-type="hover" id="boxId_1510140607757_94">
				<div class="layout-box media-graphic">
					<a href="/msg/chat?uid=3751469395" class="mod-media">
						<div class="media-main"><img src="http://tva3.sinaimg.cn/crop.0.0.1440.1440.180/df9ae153jw8ergy7yadw4j2140140ae4.jpg" height="48" width="48"><i class="icon icon-yellowv"></i> </div>
					</a>
					<a href="/msg/chat?uid=3751469395" class="box-col item-list">
						<div class="item-main txt-xl mct-a txt-cut">ixm解说小漠</div>
						<div class="item-minor txt-m mct-d txt-cut">么么哒~你终于来啦我是电竞加藤鹰小漠，想第一时间知道关于国服第一、小漠集锦、小漠明星双排计的最新消息吗？，访问ixm.tv就可以跳转到我的优酷空间哦，想知道我的更多消息吗？就免费订阅我吧，回复“DY”即可。</div>
					</a><span class="plus plus-m"><span class="txt-s mct-d time">2016-06-05 21:13</span> </span>
				</div>
			</div>-->
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				arr:[]
			}
		},
		methods:{
			message(){
				var self = this;
				$.ajax({
					type:"get",
					url:"http://127.0.0.1:8020/sjr_third_class/VUE/XinLangMicroblog/resource/json/message.json",
					async:true,
					success:function(data){
						console.log(data)
						self.arr = self.arr.concat(data)
					}
				})
			}
		},
		mounted(){
			this.message()
		}
	}
</script>

<style scoped>
	.card{
		border-bottom:1px solid #dadada;
	}
	.cardList .card {
		border-bottom: 1px solid #dadada;
		margin-top: 0;
	}
	
	.card .layout-box {
		display: flex;
	}
	
	.card .mod-media {
		margin: .5rem 0 .5rem .5rem;
		position: relative;
		display: block;
		text-align: center;
	}
	
	.card .mod-media .media-main {
		position: relative;
	}
	
	.card .mod-media .media-main .at {
		background-color: #5bb4da;
		width: 48px;
		height: 48px;
	}
	.module-message-item .comments {
		background-color: #35b87f;
		width: 48px;
		height: 48px;
	}
	
	.module-message-item .good {
		background-color: #ffa200;
		width: 48px;
		height: 48px;
	}
	
	.module-message-item .box {
		background-color: #5b99ee;
		width: 48px;
		height: 48px;
	}	
	.card .iconf {
		display: inline-block;
		color: #fff;
		font-size: 35px;
    	line-height: 48px;
	}
	.icon-font{
		font-size: 30px;
	}
	.media-graphic .item-list {
		flex: 1;
		width: 100%;
		padding: .5rem .6875rem;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-direction: normal;
		-webkit-box-orient: vertical;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		overflow: hidden;
	}
	
	.module-message-item .item-main {
		line-height: 1em;
		padding-top: 3px;
		font-weight: 400;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 1rem;
		color: #333333;
	}
	
	.module-message-item .plus {
		width: auto;
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-box-pack: end;
		-ms-flex-pack: end;
		-webkit-justify-content: flex-end;
		justify-content: flex-end;
	}
	
	.layout-box .plus-m {
		width: 1.875rem;
		margin-right: .75rem;
	}
	
	.mod-media img {
		display: block;
		vertical-align: top;
	}
	
	.module-message-item .item-minor,
	.module-message-item .item-other {
		padding: 5px 20px 0 0;
		line-height: 1.5em;
	}
	
	a .mct-d,
	.mct-d {
		color: #929292;
	}
	
	.txt-cut {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.module-message-item .plus .time {
		position: absolute;
		width: 5rem;
		right: 7px;
		top: 15px;
		text-align: right;
	}
	
	.txt-s {
		font-size: .8125rem;
	}
	
	.module-message-item .plus .bubble-dot-red {
		margin-top: 20px;
		margin-right: 7px;
		font-size: 9px;
		display: inline-block;
	}
	
	.bubble-dot-red {
		min-width: 1rem;
		padding: 0 .3125rem;
		height: 1rem;
		line-height: 1rem;
		border-radius: .5rem;
		background-color: #fe6431;
		color: #fff;
		box-sizing: border-box;
		text-align: center;
	}
</style>