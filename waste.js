
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