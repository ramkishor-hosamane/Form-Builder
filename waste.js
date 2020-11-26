
  $scope.input_fields = [
    { 'title': 'Text','name':'', 'drag': true },
    { 'title': 'Email','name':'', 'drag': true },
    { 'title': 'Number','name':'', 'drag': true },
  ];





  swal("Enter Field Name:", {
    content: "input",
  })
  .then((value) => {
    $scope.form_canvas[item_added_index].name = 'value';
    location.reload(); 

  });







  $scope.GenerateForm = function(){
    var result_container = $("#Result");
    $scope.code ="<form>";
      var i;
      for(i=0;i<$scope.form_canvas.length;i++){
          
        $scope.code += "<input type='"+$scope.form_canvas[i].title.toLowerCase()+"' name='"+$scope.form_canvas[i].name.toLowerCase()+"'/>"
      }

      $scope.code+="</form>"
      result_container.append($scope.code)
      alert($scope.code)
  }