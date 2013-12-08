function addElement(){

	var linkName = prompt("Enter name of new item", "");
	
	if(linkName != null && linkName != ""){
		var denotation = ",-";

		var buttonString = "Button";

		var currentList = document.getElementById("itemlist");
		

		var newLi = document.createElement("li");
		var newName = document.createElement("span");
		var newSum = document.createElement("span");
		
		var newForm = document.createElement("input");
		var newButton = document.createElement("button");

		var buttonText = document.createTextNode("+");

		newButton.appendChild(buttonText);

		var linkText = document.createTextNode(linkName);
		newName.appendChild(linkText);
		newLi.appendChild(newName);

		var textNode = document.createTextNode("0,-");

		newSum.appendChild(textNode);

		newName.className = "itemvalue";
		newSum.className = "itemvalue";
		newForm.className = "itemvalue";
		newButton.className = "itemvalue";

		newSum.id = linkName.concat("Sum");
		newForm.id = linkName.concat("Form");
		newButton.id = linkName.concat("Button");
		
		
		
		
		
		

		newButton.onclick = function(){
			var num1 = document.getElementById(newSum.id).innerHTML;
			var num2 = document.getElementById(newForm.id).value;
			var sum = parseInt(num1, 10) + parseInt(num2, 10);
			
			//localStorage.setItem('sum', JSON.stringify(sum));
			

			document.getElementById(newSum.id).innerHTML = sum;

			var denotationText = document.createTextNode(denotation);
			newSum.appendChild(denotationText);

			var currentTotal = document.getElementById("totalsum").innerHTML;
			var tempTotal = parseInt(currentTotal, 10) + parseInt(num2, 10);
			
			
			
			//var retrievedObject = localStorage.getItem('sum');
			
			//console.log('sum', JSON.parse(retrievedObject));
			
			

			//currentTotal = isNaN(value) ? 0 : value
			//var newTotal = currentTotal + num2;
			//var newnewTotal = '' + newTotal;
			handlers.getSums()
			handlers.saveSums(tempTotal);
			document.getElementById("totalsum").innerHTML = tempTotal;
			//console.log(handlers.getSums());

			//document.getElementById("totalsum").innerHTML = newTotal;

			//printSum();
			
			
		}

		newLi.appendChild(newSum);
		newLi.appendChild(newForm);
		newLi.appendChild(newButton);


		currentList.appendChild(newLi);
		
	}



}

function addMoney(){

}

window.onload = function(){
	var retrievedData = handlers.getSums();
	if ([null, undefined].indexOf(retrievedData) === -1) {

		//alert(retrievedData);
	} else {
		alert("NO DATA");

	}
}

var handlers = {

	saveSums : function(sumToSave){
		localStorage.setItem("ptotal", sumToSave);
	},
	getSums : function(){
		var retrievedSum = localStorage.getItem("ptotal");
		var saved = JSON.parse(retrievedSum);
		return saved;

	},
	clearSums : function() {
		localStorage.clear();
		return false;
	}
};

window.onload = function(){
	var savedSums = handlers.getSums
}

