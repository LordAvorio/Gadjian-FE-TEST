function inputData(num) {
	$('.calc-display').val($('.calc-display').val() + num);
}
function hasil() {
	$('.calc-display').val(eval($('.calc-display').val()));
}
function clearData() {
	$('.calc-display').val('');
}
function deleteData() {
	value = $('.calc-display').val();
	$('.calc-display').val(value.substring(0, value.length - 1));
}