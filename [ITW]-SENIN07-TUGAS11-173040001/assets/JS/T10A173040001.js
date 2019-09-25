var nrp = document.getElementById('nrp');
var jurusan = document.getElementById('jurusan');

nrp.addEventListener('keyup', function()
{
	var nrpku = nrp.value;

	if( nrpku.match(/(301)/)){
		jurusan.selectedIndex = 1;
	}else if(nrpku.match(/(302)/)){
		jurusan.selectedIndex = 2;
	}else if(nrpku.match(/(303)/)){
		jurusan.selectedIndex = 3;
	}else if(nrpku.match(/(304)/)){
		jurusan.selectedIndex = 4;
	}else if(nrpku.match(/(305)/)){
		jurusan.selectedIndex = 5;
	}else if(nrpku.match(/(306)/)){
		jurusan.selectedIndex = 6;
	}
	
});

function tambah(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode >31 && (charCode <48 || charCode > 57))

	return false;
	return true;
}