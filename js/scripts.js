var userChoice = prompt("What phone do you like to buy?","Samsung, Apple or One").toLowerCase();

function Phone(brand, price, color, processor, memory, display, battery, availability) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.processor = processor;
	this.memory = memory;
	this.display = display;
	this.battery = battery;
	this.availability = availability;
}

Phone.prototype.printInfo = function () {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
	console.log("Details: " + this.processor + ", " + this.memory + ", " + this.display + ", " + this.battery + ".");
	console.log("Availability: " + this.availability + ".");
	alert("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".\n\n" + "Details:\n\t" + 
		"Processor: " + this.processor + ",\n\t" + "Memory: " + this.memory + ",\n\t" + "Display: " + this.display + ",\n\t" + 
		"Battery: " + this.battery + ".\n\n" + "Availability:\n\t" + this.availability + ".");
};

var samsungGalaxyS6 = new Phone("Samsung", 1799, "gold", "Samsung Exynos 7 Octa 2100 MHz 64bit", "3 GB RAM", "Super AMOLED 5.1 inches", "2550 mAH", "24 hours");
var iPhone6S = new Phone("Apple", 1699, "silver", "Apple A9 Dual-Core 1840 MHz", "2 GB RAM", "IPS LCD 4.7 inches", "1715 mAH", "48 hours");
var onePlusOne = new Phone("One", 1299, "black", "Qualcomm Snapdragon 801 Quad-Core 2500 MHz", "3 GB RAM", "IPS LCD 5.5 inches", "3100 mAH", "72 hours");

switch (userChoice) {
	case 'samsung':
		samsungGalaxyS6.printInfo();
		break;
	case 'apple':
		iPhone6S.printInfo();
		break;
	case 'one':
		onePlusOne.printInfo();
		break;
	default:
		alert("This model is currently unavailable. Try again later.");
}