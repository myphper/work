define(function (require,exports,module) {
	function getData() {
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
