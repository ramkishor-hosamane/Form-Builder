var App = angular.module('drag-and-drop', ['ngDragDrop']);
App.controller('oneCtrl', function($scope, $timeout) {
  $scope.form_canvas = [];
  $scope.input_field_id=-99;
  $scope.input_field_name="";
  $scope.input_fields = [
    { "id":'', 'title': 'Text','name':'Text', 'drag': true },
    { "id":'','title': 'Email','name':'Email', 'drag': true },
    { "id":'','title': 'Number','name':'Number', 'drag': true },
  ];
  $scope.code="";

  $('#options').hide()

  $scope.change_field_name = function($key){
    $scope.form_canvas[$scope.input_field_id].name = $scope.input_field_name;
  }
  $scope.delete_all_fields=function(){
    $scope.form_canvas = [];

  }
  $scope.delete_field = function(){
    //$scope.GenerateForm();
    $scope.form_canvas.splice($scope.input_field_id,1);
  }
  $scope.display_options = function($item){
    $('#options').show()
      $scope.input_field_id=$item.id;
      $scope.input_field_name=$item.name;
      }
  



  $scope.GenerateForm = function(){
    //var result_container = $("#result");
    $scope.code="<form>";
      var i;
      for(i=0;i<$scope.form_canvas.length;i++){
          
        $scope.code += "<input type='"+$scope.form_canvas[i].title.toLowerCase()+"' name='"+$scope.form_canvas[i].name.toLowerCase()+"'/>"
      }

      $scope.code+="</form>"
      //result_container.append($scope.code)
      alert($scope.code)
  }

 $scope.after_adding_field = function(){
  var item_added_index = $scope.form_canvas.length-1;
  var item_added = $scope.form_canvas[item_added_index].title;
  $scope.form_canvas[item_added_index].id = item_added_index;





  element = { "id":'', 'title': item_added,'name':item_added, 'drag': true };

  if(item_added=="Text"){
    $scope.input_fields[0] =element;

  }
  else if(item_added=="Email"){
    $scope.input_fields[1] =element;

  }
  else{
    $scope.input_fields[2] =element;

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