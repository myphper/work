define(function (require,exports,module) {
	/**
	 * getDate
	 * @author renmingyang <renmingyang@soufun.com>
	 */
	function getDate() {
		//return dateFormat(new Date(), "yyyy-MM-dd HH:mm:ss.fff");
		return dateFormat(new Date(), "yyyy-MM-dd HH:mm:ss");
	}
	exports.getDate=getDate;
	/**
	 * dateFormat
	 * @author renmingyang <renmingyang@soufun.com>
	 */
	function dateFormat(date, format, zone) {
		format = format.replace("yyyy", date.getFullYear());
		format = format.replace("MM", (date.getMonth() + 1) > 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1))
		format = format.replace("dd", date.getDate() > 10 ? date.getDate() : "0" + date.getDate());
		format = format.replace("HH", date.getHours() > 10 ? date.getHours() : "0" + date.getHours());
		format = format.replace("mm", date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes());
		format = format.replace("ss", date.getSeconds() > 10 ? date.getSeconds() : "0" + date.getSeconds());
		format = format.replace("fff", date.getMilliseconds() > 100 ? date.getMilliseconds() : "0" + (date.getMilliseconds() > 10 ? date.getMilliseconds() : "0" + date.getMilliseconds()));
		if (zone) {
			format = format.replace(/\b(\d)\b/g, '0$1 ');
		}
		return format;
	}
	exports.dateFormat=dateFormat;
});
