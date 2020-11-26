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
    $scope.code="";
    $scope.input_field_id=-99;
    $scope.input_field_name="";
    $scope.form_name = "";
    $("#Result").html("");
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
    var result_container = $("#Result");
    result_container.html("");

    $scope.code ="\n \
                   <form> \n \
                      <div class='form-group'> \n \
                         <div id='formdiv' style='width: 100%;'>";
      var i;
      for(i=0;i<$scope.form_canvas.length;i++){
          
        $scope.code +='\n \
                        <div class="form-row" style="margin-right:0px;margin-left:0px;padding-top:24px;">\n \
                          <div class="col-md-10 offset-md-1 input-icons">\n \
                              <input type="'+$scope.form_canvas[i].title.toLowerCase()+'"\n \
                              name ="' +$scope.form_canvas[i].name.toLowerCase()+'"\n \
                              class="form-control input-field"\n \
                              style="margin-left:0px;font-family:Roboto, sans-serif;" name="job_title"\n \
                              placeholder="'+$scope.form_canvas[i].name.toLowerCase()+'" />\n \
                          </div>\n \
                        </div>'
      }

                    $scope.code+='\n \
                          <div class="form-row" style="margin-right:0px;margin-left:0px;padding-top:24px;">\n \
                            <div class="offset-md-5">\n \
                              <button class="btn btn-info btn-lg" style="margin-left:16px;"\n \
                                  type="submit">Submit </button>\n \
                            </div>\n \
                          </div>\n \
                       </div>\n \
                      </div>\n \
                    </form>'
      result_container.append($scope.code)
      //alert($scope.code)
      //$scope.html_code= $scope.code.replace("<", "&lt");

      //alert($scope.html_code)
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




$scope.Show = function($page){
      $('#Design').hide();
      $('#Form').hide();
      $('#Code').hide();
      $($page).show();
}

$scope.Show('#Design')











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