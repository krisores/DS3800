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
			
			localStorage.setItem('sum', JSON.stringify(sum));
			

			document.getElementById(newSum.id).innerHTML = sum;

			var denotationText = document.createTextNode(denotation);
			newSum.appendChild(denotationText);

			var currentTotal = document.getElementById("totalsum").innerHTML;
			var tempTotal = parseInt(currentTotal, 10) + parseInt(num2, 10);
			
			
			
			var retrievedObject = localStorage.getItem('sum');
			
			console.log('sum', JSON.parse(retrievedObject));
			
			

			//currentTotal = isNaN(value) ? 0 : value
			var newTotal = currentTotal + num2;
			var newnewTotal = '' + newTotal;

			document.getElementById("totalsum").innerHTML = tempTotal;

			//document.getElementById("totalsum").innerHTML = newTotal;
			
			
		}

		newLi.appendChild(newSum);
		newLi.appendChild(newForm);
		newLi.appendChild(newButton);


		currentList.appendChild(newLi);
		
	}



}

function addMoney(){

}