define(function (require,exports,module) {
	function getData() {
		var data = [
		{
			groupName: '工作台',
			links:[
				{
					name : 'OA',
					url : 'http://www.leshiren.com'
				},
				{
					name : 'Wiki',
					url : 'http://wiki.letv.cn/pages/viewpage.action?pageId=19169898'
				},
				{
					name : 'SVN',
					url : 'http://cr.letv.cn/dashboard/'
				},
				{
					name : 'Publish',
					url : 'http://publish.letv.com:28080/index.php'
				},
				{
					name : 'ID规范',
					url : 'http://wiki.letv.cn/pages/viewpage.action?pageId=52863107'
				},
				{
					name : '乐视云',
					url : 'http://lingshu-pre.letv.cn/workflow/index/index'
				},
			]
		},
		{
			groupName: '测试站点',
			links:[
				{
					name : '评论后台',
					url : 'http://admin.my.letv.cn:20130/'
				},
				{
					name : '评论接口',
					url : 'http://wiki.letv.cn/pages/viewpage.action?pageId=22845581'
				},
				{
					name : '测试页面',
					url : 'http://test.myphper.com'
				},
			]
		},
		{
			groupName: '压缩/格式',
			links:[
				{
					name : 'JS',
					url : 'http://tool.oschina.net/codeformat/js'
				},
				{
					name : 'CSS',
					url : 'http://tool.oschina.net/codeformat/css'
				},
				{
					name : 'HTML',
					url : 'http://tool.oschina.net/codeformat/html'
				},
				{
					name : 'SQL',
					url : 'http://tool.oschina.net/codeformat/sql'
				},
				{
					name : 'XML',
					url : 'http://tool.oschina.net/codeformat/xml'
				},
				{
					name : 'JSON',
					url : 'http://tool.oschina.net/codeformat/json'
				}
			]
		},
		{
			groupName: '编码工具',
			links:[
				{
					name : 'URL',
					url : 'http://tool.oschina.net/encode?type=4'
				},
				{
					name : 'ASCII',
					url : 'http://tool.oschina.net/encode?type=3'
				},
				{
					name : 'UTF-8',
					url : 'http://tool.oschina.net/encode?type=2'
				},
				{
					name : 'Unicode',
					url : 'http://tool.oschina.net/encode?type=1'
				},
			]
		},
		{
			groupName: '加密工具',
			links:[
				{
					name : 'Image/BASE64',
					url : 'http://tool.oschina.net/encrypt?type=4'
				},
				{
					name : 'Base64',
					url : 'http://tool.oschina.net/encrypt?type=3'
				},
				{
					name : 'Hash',
					url : 'http://tool.oschina.net/encrypt?type=2'
				},
				{
					name : 'Encrypt',
					url : 'http://tool.oschina.net/encrypt?type=1'
				}
			]
		},
		{
			groupName: '常用网址',
			links:[
				{
					name : 'Baidu',
					url : 'https://www.baidu.com'
				},
				{
					name : 'Google',
					url : 'https://www.google.com/?gws_rd=ssl'
				},
				{
					name : 'AWS',
					url : 'https://us-west-2.console.aws.amazon.com/console/home?region=us-west-2'
				},
				{
					name : 'Github',
					url : 'https://github.com/'
				},
				{
					name : 'BootCDN',
					url : 'http://www.bootcdn.cn/'
				},
				{
					name : '牛客网',
					url : 'http://www.nowcoder.com/667828'
				},
				{
					name : '百度效率云',
					url : 'http://developer.baidu.com/xiaolvyun/myphper/dashboard'
				},
				{
					name : '开源资讯',
					url : 'http://www.oschina.net/news'
				},
				{
					name : '菜鸟教程',
					url : 'http://www.runoob.com/'
				},
				{
					name : '菜鸟工具',
					url : 'http://c.runoob.com/'
				},
				{
					name : 'JQuery插件库',
					url : 'http://www.jq22.com/'
				},
				{
					name : 'JQuery之家',
					url : 'http://www.htmleaf.com/jQuery/'
				},
				{
					name : '百度开放平台',
					url : 'http://developer.baidu.com/map/reference/'
				},
				{
					name : '阮一峰博客',
					url : 'http://www.ruanyifeng.com/blog/'
				},
				{
					name : '鸟哥博客',
					url : 'http://www.laruence.com/'
				}
			]
		}
		];

		var data = [
		{
			groupName: '我的网址导航',
			links:[
				{
					name : '作者主页',
					url : 'http://renmingyang.com'
				}]
		}
		];
		return data;
	}
	exports.getData=getData;
});
