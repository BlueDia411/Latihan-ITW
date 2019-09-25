var close = document.getElementsByTagName('span');
for( var i = 0; i < close.length; i++ ) {
	close[i].addEventListener('click', function() {
		if ( confirm('Hapus Gambar?') ) {
			this.parentNode.style.display = 'none';
		}

	});
}