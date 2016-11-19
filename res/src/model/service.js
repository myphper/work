define(function(require, exports, module){
	var $ = require('$')
	var store = require('store')
	var date = require('../common/date')
	var url = require('../common/url')
	var urldata = require('../model/urldata')
	var tableExport = require('tableExport')($)
	var base64 = require('base64')($)


	module.exports = function() {
		var todos = []
		if( store.enabled ) {
			console.log("localStorage本地存储可用");
			todos = store.get('todos') || store.set('todos', todos)
		}
		if(url.urlGet('clear') == 1){
			store.remove('urls')
		}
		return {
			backupUrls: function(){
				$('body').append($('<a/>').attr({id:'downloadjson',style:'display:none;',download:'urlbackup-'+date.getDate()+'.json',href:URL.createObjectURL(new Blob([JSON.stringify(this.getUrls())]))}));
				document.getElementById('downloadjson').click();
				//content = JSON.stringify(this.getUrls());
				//fileName =;
				//var aLink = document.createElement('a');
				//var blob = new Blob([content]);
				//var evt = document.createEvent("HTMLEvents");
				//evt.initEvent("click", false, false);
				//aLink.download = fileName;
				//aLink.href = URL.createObjectURL(blob);
				//aLink.dispatchEvent(evt);
				//save unname
				//window.open('data:application/txt;filename=exportData.txt;'+JSON.stringify(this.getUrls()));
				//table export
				//$('#customers').tableExport({type:'json',escape:'true'});
			},
			getUrls: function() {
				urls = store.get('urls') || store.set('urls', urldata.getData())
				return urls;
			},
			addUrl: function(group , title , url) {
				var isNew = true;
				for(var index in urls){
					if(urls[index].groupName == group){
						urls[index].links.push({
							name :title,
							url : url
						});
						isNew = false;
					}
				}
				if(isNew){
					urls.push({
						groupName: group,
						links:[
							{
								name :title,
								url : url
							}
							]
					})
					console.log(group , title , url);
				}
				store.remove(urls)
				store.set('urls', urls)
			},
			delUrl: function(group , name , url) {
				for(var index in urls){
					if(urls[index].groupName == group){
						for(var i in urls[index].links){
							if(urls[index].links[i].name == name && urls[index].links[i].url == url){
								urls[index].links.splice(i,1);
								if(urls[index].links.length == 0){
									urls.splice(index,1);
								}
								store.remove(urls)
								store.set('urls', urls)
							}
						}
					}
				}
			},
			getTodos: function(filter) {
				if (filter) {
					return todos.filter(function(todo) {
						if (filter.completed === '') return true
						return todo.completed === filter.completed
					})
				} else {
					return todos
				}
			},
			addTodo: function(todo) {
				todos.push({
					title: todo,
					ctime: date.getDate(),
					completed: false
				})
			},
			delTodo: function(index) {
				todos.splice(index, 1)
			},
			clearCompleted: function() {
				for (var i = todos.length - 1; i > -1; i--) {
					if (todos[i].completed) {
					this.delTodo(i)
					}
				}
			},
			store: function() {
				store.set('todos', todos)
			}
		}
	}
})
