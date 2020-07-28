function updateAll() {

	var book1 = document.getElementById("book1").value;
	var book1Total = document.getElementById("book1Total");
	book1Total.value = 27000 * Number(book1);
	

	var book2 = document.getElementById("book2").value;
	var book2Total = document.getElementById("book2Total");
	book2Total.value = 27000 * Number(book2);

	var book3 = document.getElementById("book3").value;
	var book3Total = document.getElementById("book3Total");
	book3Total.value = 25000 * Number(book3);

	var totalNumber = document.getElementById("totalNumber");
	totalNumber.value = Number(book1) + Number(book2) + Number(book3);
	var totalPrice = document.getElementById("totalPrice");
	totalPrice.value = Number(book1Total.value) + Number(book2Total.value)
			+ Number(book3Total.value);

}