(function () {
    // nambahin event "onclick"
    document.getElementById('count').addEventListener('click', count);

    // fungsi buat ngitung berat badan :3
    function count() {
        // notifikasi / peringatan
        var alert = document.getElementById('error');
        alert.style.display = 'none';
        alert.childNodes[0].nodeValue = '';

        // jenis kelamin
        var gender = (document.getElementById('male').checked ?
            document.getElementById('male').value :
            (document.getElementById('female').checked ?
                document.getElementById('female').value : null));

        // tinggi badan
        var height = document.getElementById('height').value;
        // variabel buat nyimpen hasil nya nanti, hihi
        var result = '';

        // kalo jenis kelamin tidak ada yang dipilih
        if (gender === null) {
            alert.style.display = 'block';
            alert.childNodes[0].nodeValue = 'Gender harus dipilih!';

            return;
        }

        // kalo tinggi badan kosong
        if (height === null || height.trim() === '') {
            alert.style.display = 'block';
            alert.childNodes[0].nodeValue = 'Tinggi badan tidak boleh kosong!';

            return;
        }

        // kalo tinggi badan yg dimasukkin tidak valid (bukan berupa angka)
        if (/\D/.test(height)) {
            alert.style.display = 'block';
            alert.childNodes[0].nodeValue = 'Masukkan tinggi badan yang valid!';

            return;
        }

        // kalo tinggi badan kurang dari sama dengan 100 :(
        // di ketentuan: lebih dari 100
        if (Number(height) <= 100) {
            alert.style.display = 'block';
            alert.childNodes[0].nodeValue = 'Tinggi badan harus lebih dari 100 cm!';

            return;
        }

        if (gender === 'male') {
            // rumus cowo
            result = (height - 100) - (height - 100) * (15 / 100);
        } else {
            // rumus cewe
            result = (height - 100) - (height - 100) * (10 / 100);
        }

        document.getElementById('weight').placeholder = 'berat badan kamu: ' + result + ' kg';
    }
})();