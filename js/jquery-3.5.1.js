//user interface logic
$(document).ready(function() {
  $("form#toDo").submit(function(event){
    event.preventDefault();
    //let item = $("input#userInput").val();
    //$('#results').append('<li>' + item + '</li>')
    //$("#results").text(item);
    let toDoListOutput = ToDoList(newItem);

    function newItem()
    $('button').click(function(){
      let newItem = $('#userInput').val();
      $('#results').append('<li>' + newItem + '</li>')
    
    });
  });  
});



  //business logic
function ToDoList() {
  this.items = [];
}

ToDoList.prototype.addItem = function(item) {
  item.id= this.assignId();
  this.items.push(item);
}

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

ToDoList.prototype.deleteItem = function(id) {
  for (let i=0; i<this.items.length; i++) {
    if (this.items[i].id == id) {
      delete this.items[i];
      return true;
    }
  };
  return false;
}

