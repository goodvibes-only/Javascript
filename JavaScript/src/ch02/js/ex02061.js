function updateAll() {
	var n1 = document.getElementById("book1").value;
	var n2 = document.getElementById("book2").value;
	var n3 = document.getElementById("book3").value;

	var p1 = 25000 * parseInt(n1);
	var p2 = 27000 * parseInt(n2);
	var p3 = 25000 * parseInt(n3);

	document.getElementById("book1Total").value = p1.toLocaleString();
	document.getElementById("book2Total").value = p2.toLocaleString();
	document.getElementById("book3Total").value = p3.toLocaleString();

	var totalNumber = parseInt(n1) + parseInt(n2) + parseInt(n3);
	document.getElementById("totalNumber").value = totalNumber;

	var totalPrice = p1 + p2 + p3;
	document.getElementById("totalPrice").value = totalPrice.toLocaleString();
}
