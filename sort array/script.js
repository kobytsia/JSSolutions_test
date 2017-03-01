var mas = [3, 13, 6. - 13, 8, 32, 25, 12, 325, 45, -7, 13, 65, 98];
for (var i = 0; i < mas.length; i++) {
	var min = mas[i];
	for (var j = i + 1; j < mas.length + 1; j++) {
		if (mas[j] < min) {
			var k = mas[i];
			min = mas[j];
			mas[i] = min;
			mas[j] = k;
		}
	}
}
document.write(mas);