define(function(require){
  var angular = require('angularjs')
  var common = require('../common/common')
  var alert = require('../common/alert')
  var drop = require('../common/drop')
  var todoService = require('../model/service')

  var todo = angular.module('TodoApp',  [])
  todo.service('todoService', todoService)

  todo.directive('ngBlur', function() {
    return function( scope, elem, attrs ) {
      elem.bind('blur', function() {
        scope.$apply(attrs.ngBlur)
      })
    }
  })
  todo.directive('ngRightClick', function($parse) {
      document.oncontextmenu = function (e) {
         if(e.target.hasAttribute('ng-right-click')) {
             return false;
         }
      };
      return function( scope, elem , attrs) {
          var fn = $parse(attrs.ngRightClick);
          elem.bind('contextmenu', function(event) {
              scope.$apply(function() {
                  event.preventDefault();
                  fn(scope, {$event:event});
              });
          });
      };
  });

  todo.controller('MainCtrl', ['$scope', 'todoService', function($scope, todoService) {
    $scope.todoService = todoService
    $scope.title = ['工作待办','网址导航']
    $scope.allLinkGroups = todoService.getUrls();
    $scope.todos = todoService.getTodos()
    $scope.newTodo = ''
    $scope.activeFilter = {completed: ''}
    $scope.remaining = 0
    $scope.hidden = false

    $scope.toggleAll = function(e) {
      this.hidden = !this.hidden
    }

    $scope.createOnEnter = function(e) {
        if (e.which !== common.ENTER_KEY || !this.newTodo.trim()) {
          return
        }

        this.todoService.addTodo(this.newTodo)
        this.newTodo = ''
    }

    $scope.$watch('todos',
      function(){
        var remaining = 0
        $scope.todos.forEach(function(todo) {
          if (!todo.completed) {
            remaining++
          }
        })
        $scope.remaining = remaining
        $scope.completed = $scope.todos.length - remaining

        $scope.todoService.store()
      }, true)

    $scope.filter = function(val) {
      this.activeFilter.completed = val
    }

    $scope.showAddUrl = function(group) {
        alert.showOrCloseAddUrl(1);
        $scope.newgroup = group.groupName;
      }
    $scope.saveJson = function() {
        //console.log('savaMode');
        todoService.backupUrls();
        alert.closeEditMode();
       }
    $scope.delUrl = function(group,link) {
        //console.log('delUrl-'+group['groupName']+'-'+link.name+'-'+link.url);
        this.todoService.delUrl(group['groupName'],link.name,link.url);
       }
    $scope.closeAddUrl = function() {
        alert.showOrCloseAddUrl();
        $scope.newtitle = '';
        $scope.newurl = '';
        $scope.newgroup = '';
      }
    $scope.addUrl = function() {
    	  //console.log('addUrl-'+$scope.newgroup+'-'+$scope.newtitle+'-'+$scope.newurl);
    	  this.todoService.addUrl($scope.newgroup , $scope.newtitle , $scope.newurl);
    	  alert.showOrCloseAddUrl();
        $scope.newtitle = '';
        $scope.newurl = '';
        $scope.newgroup = '';
      }

    $scope.selected= function(val) {
      return val === $scope.activeFilter.completed
    }

    $scope.getTodos = function() {
      return todoService.getTodos(this.activeFilter)
    }

    $scope.edit = function(todo, event) {
      todo.edit = true
      // TODO ?
      setTimeout(function() {
        angular.element(event.target).parent().next()[0].focus()
      }, 0)
    }

    $scope.close = function(todo) {
      todo.edit= false
    }
  }])

  return {
    init: function() {
      angular.bootstrap(document.body, ['TodoApp'])
    }
  }

})
