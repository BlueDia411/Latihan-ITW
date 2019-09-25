// ambil emelen pada DOM
var tombol = document.getElementById('tombol1');
var kotak = document.getElementById('kotak');

// tambahkan event pada tombol ketika di tekan
tombol1.addEventListener('click', function() {
	// ubah style dari kotak
	kotak.style.backgroundColor =  '#bada55';
	kotak.style.transition = '1s';
});