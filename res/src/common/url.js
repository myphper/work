define(function (require,exports,module) {
	/**
	 * urlGet
	 * @author renmingyang <renmingyang@soufun.com>
	 */
	function urlGet(name) {
		var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");
		if (reg.test(location.href)) return unescape(RegExp.$2.replace(/\+/g, " "));
		return "";
	}
	exports.urlGet=urlGet;
	/**
	 * urlGet
	 * @author renmingyang <renmingyang@soufun.com>
	 */
	function isHTTPS() {
		if(window.location.href.indexOf('https://') > -1){
			return true;
		}else{
			return false;
		}
	}
	exports.isHTTPS=isHTTPS;
	/**
	 * urlLocation
	 * @author renmingyang <renmingyang@soufun.com>
	 */
	function urlLocation(href,isOutUrl) {
		if(typeof(isOutUrl) !='undefined'){
			if(href.indexOf('http') > -1){
				window.location.href = href;
			}
		}else{
			if(href.indexOf('/') == 0){
				window.location.href = href;
			}
		}
	}
	exports.urlLocation=urlLocation;
	/**
	 * reload
	 * @author renmingyang <renmingyang@soufun.com>
	 */
	function reload() {
		window.location.reload();
	}
	exports.reload=reload;
	/**
	 * encodeURI
	 * @author renmingyang <renmingyang@soufun.com>
	 */
	function encodeURI(str) {
	  str = (str + '').toString();
	  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
	  replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
	}
	exports.encodeURI=encodeURI;
});
