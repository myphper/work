define(function (require,exports,module) {
	var $ = require('$')
	var smartmenu = require('smartmenu')($)
	var jqueryui = require('jqueryui')($)
	var todoService = require('../model/service')($)
	var store = require('store')
	var diyalert = '<div class="coverDiv alertcoverdiv"></div><div class="window diyalert alertpopup"><p class="relative"></p><p class="f24 c333 msg">{diyalertmsg}</p><p class="mt20"><input type="button" value="{diyalertknow}" class="dh-btn close" /></p></div>';
	var diyconfirm = '<div class="coverDiv confirmcoverdiv"></div><div class="window diyconfirm alertpopup"><p class="relative"></p><p class="f24 c333 msg">{diyconfirmmsg}</p><p class="mt20"><input type="button" value="{diyconfirmyes}" class="dh-btn yes" /><input type="button" value="{diyconfirmno}" class="dh-btn no" /></p></div>';
	//diyalertknow
	function know(){
		$('.alertpopup .close').unbind('click').bind('click',function(){
			$('.alertcoverdiv,.diyalert').remove();
		})
		//setTimeout(function(){$('.alertcoverdiv,.diyalert').remove();},1000);
	}
	//diyalert
	function alert( tips_msg , know_msg ,no_cover){
		console.log(tips_msg);
		if(typeof(know_msg) == 'undefined') know_msg = '知道了~';
		if(typeof(tips_msg) == 'undefined') tips_msg = '有卡余额不足请提醒他充值~';
        $('body').append(diyalert.replace(/{diyalertmsg}/g, tips_msg).replace(/{diyalertknow}/g, know_msg));
        if(typeof(no_cover) == 'undefined'){
        	$('.alertcoverdiv,.diyalert').show();
        }else{
        	$('.diyalert').addClass('nocover').show();
        }
        know();
	}
	exports.alert=alert;
	//diyconfirm yesorno
	function yesorno( yes_call_back_function ,  no_call_back_function ){
		$('.alertpopup').find('.yes').unbind('click').bind('click',function(){
			$('.confirmcoverdiv,.diyconfirm').remove();
			yes_call_back_function();
		}).parent().find('.no').unbind('click').bind('click',function(){
			$('.confirmcoverdiv,.diyconfirm').remove();
			no_call_back_function();
		})
	}
	//diyconfirm
	function confirm( tips_msg , yes_call_back_function ,  no_call_back_function  , yes_msg , no_msg ){
		if(typeof(tips_msg) == 'undefined' || tips_msg == null) tips_msg = '您确定一定以及肯定要这样做吗?';
		if(typeof(yes_msg) == 'undefined' || yes_msg == null) yes_msg = '确定';
		if(typeof(no_msg) == 'undefined' || no_msg == null) no_msg = '取消';
		if(typeof(yes_call_back_function) == 'undefined' || yes_call_back_function == null) yes_call_back_function = function(){ console.log('选择了'+yes_msg); };
		if(typeof(no_call_back_function) == 'undefined' || no_call_back_function == null) no_call_back_function = function(){ console.log('选择了'+no_msg); };
		$('body').append(diyconfirm.replace(/{diyconfirmmsg}/g, tips_msg).replace(/{diyconfirmyes}/g, yes_msg).replace(/{diyconfirmno}/g, no_msg));
		$('.confirmcoverdiv,.diyconfirm').show();
		yesorno( yes_call_back_function ,  no_call_back_function );
	}
	exports.confirm=confirm;
	//confirm();
	//diyalert
	function showOrCloseAddUrl(opt){
		if (opt) {
			$('#newdia').show();
		}else{
			$('#newdia').hide();
		}
	}
	exports.showOrCloseAddUrl=showOrCloseAddUrl;
	function editMode(opt){
		if (opt) {
			$('.closeEditMode').removeClass('closeEditMode').addClass('favurl');
		}else{
			$('.favurl').removeClass('favurl').addClass('closeEditMode');
		}
	}
	exports.editMode=editMode;
	function bindContentMenu(){
		$("#header2").bind("mousedown", (function(e){
			 if(e.which == 3){
				var opertionn = {
					name: "",
					offsetX: 2,
					offsetY: 2,
					textLimit: 10,
					beforeShow: $.noop,
					afterShow: $.noop
				};
				var imageMenuData = [
					[{
						text: "开启删除模式",
						func: function () {
							editMode(1);
							//alert(e.target.innerHTML);
						}
					}, {
						text: "关闭删除模式",
						func: function () {
							editMode();
						}
					}],[{
						text: "开启排序模式",
						func: function () {
							linksortable();
						}
					}, {
						text: "关闭排序模式",
						func: function () {
							linksortable(1);
						}
					}, {
						text: "保存并关闭排序模式",
						func: function () {
							saveUrlsFromPage();
							linksortable(1);
						}
					}],
					[{
						text: "添加地址到新分组",
						func: function () {
							showOrCloseAddUrl(1);
						}
					}]
					,
					[{
						text: "备份数据",
						func: function () {
							todoService.backupUrls();
						}
					}]
				];
				$('#header2').smartMenu(imageMenuData, opertionn);
			}
		}));
	}
	function linksortable(opt){
		if(opt){
			$("ul.linksortable").sortable( "disable" );
		}else{
			if($('.ui-sortable').length > 0){
				$("ul.linksortable").sortable( "enable" );
			}else{
				$("ul.linksortable").sortable({cursor: "move",connectWith: "ul"}).disableSelection();
			}
		}
	}
	function saveUrlsFromPage(){
		var newData = [];
		$("ul.linksortable").each(function(index){
			newData.push({
						groupName: $(".groupName").eq(index).html(),
						links:[]
					});
			$(this).find('li>a').each(function(){
				newData[index].links.push({
					name :$(this).html(),
					url : $(this).attr('href')
				});
				//console.log(index+"-"+$(this).attr('href')+"-"+$(this).html());
			});
		});
		store.set('urls',newData);
		//window.location.reload();
		//console.log(newData);
	}
	bindContentMenu();
});
