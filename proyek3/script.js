(function () {
    // nambahin event "onclick"
    document.getElementById('count').addEventListener('click', getResult);

    // fungsi buat nampilin hasil, intinya mah wkwk
    function getResult() {
        // notifikasi / peringatan
        var alert = document.getElementById('error');
        alert.style.display = 'none';
        alert.childNodes[0].nodeValue = '';

        // value dari textarea
        var textarea = document.getElementById('letters');
        // element result
        var result = document.getElementById('result');

        // kalo isi dari textarea kosong
        if (textarea.value === null || textarea.value.trim() === '') {
            alert.style.display = 'block';
            alert.childNodes[0].nodeValue = 'Masukkin dulu kalimatnya!';

            textarea.value = '';
            result.placeholder = 'jumlah huruf kapital: 0';

            return;
        }

        // nyari hasil
        var hasil = searchUpperCase(textarea.value);
        // keluarin hasilnya
        result.placeholder = 'jumlah huruf kapital: ' + hasil + ' huruf';
    }

    // fungsi buat ngitung huruf kapital
    function searchUpperCase(string) {
        return (string.match(/[A-Z]/g) || []).length;
    }
})();