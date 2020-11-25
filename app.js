var App = angular.module('drag-and-drop', ['ngDragDrop']);

App.controller('oneCtrl', function($scope, $timeout) {
  $scope.form_canvas = [];
  
  $scope.input_fields = [
    { 'title': 'Text', 'drag': true },
    { 'title': 'Email', 'drag': true },
    { 'title': 'Number', 'drag': true },
  ];

  $scope.code="";

  $scope.GenerateForm  = function(){
    var result_container = $("#result");
    $scope.code="<form>";
      var i;
      for(i=0;i<$scope.form_canvas.length;i++){
          
        $scope.code += "<input type='"+$scope.form_canvas[i].title+"'/>"
      }

      $scope.code+="</form>"
      result_container.append($scope.code )
  }

 $scope.hello = function(){
  var item_added = $scope.form_canvas[$scope.form_canvas.length-1].title;
  if(item_added=="Text"){
    $scope.input_fields[0] ={ 'title': 'Text', 'drag': true };

  }
  else if(item_added=="Email"){
    $scope.input_fields[1] ={ 'title': 'Email', 'drag': true };

  }
  else{
    $scope.input_fields[2] ={ 'title': 'Number', 'drag': true };

  }
}

















  //Sashidhar no need to look this below code
  // Limit items to be dropped in list1
  $scope.optionsList1 = {
    accept: function(dragEl) {
      //
      if ($scope.form_canvas.length >= 2) {
        return true;      
      } else {       
        return true;
      }
    }
  };
});