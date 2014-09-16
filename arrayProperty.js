//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
var StringClass = function(name){
	this.name = name;
}

var zac = new StringClass('Zac')
var zachary = new StringClass('Zachary')

StringClass.prototype.reverse = function(){
	console.log(this.name.split("").reverse().join(""));
}