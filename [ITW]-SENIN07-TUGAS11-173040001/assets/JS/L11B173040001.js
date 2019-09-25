// ambil emelen pada DOM
var tombol = document.getElementById('tombol1');
var tomboll = document.getElementById('tombol2');
var tombolll = document.getElementById('tombol3');
var tombollll = document.getElementById('tombol4');
var kotak = document.getElementById('kotak');

// tambahkan event pada tombol ketika di tekan
tombol1.addEventListener('click', function() {
// ubah style dari kotak
	kotak.style.backgroundColor =  '#bada55';
	kotak.style.transition = '1s';
});

tomboll.addEventListener('click', function() {
	kotak.style.transform = 'rotate(360deg)';
	kotak.style.transition = '1s';
	kotak.style.opacity = '0';
	kotak.style.width = '20px';
	kotak.style.height = '20px';
});

tombolll.addEventListener('click', function(){
	kotak.style.opacity = '0';
	kotak.style.transition = '0.5s';
	kotak.style.marginTop = '200px';

})

tombollll.addEventListener('click', function(){
	kotak.style.transform = 'scale(1 , 0.01)';
	kotak.style.transition = 'height 1s, transform 1s 1s';
	kotak.style.height = '0';
})