function tekanBtn() {
    alert('eksternal - Selamat sore');
}

// -------------------------------------------------------------------------

// menulis di halaman body
window.document.write("window - Selamat malam");

// -------------------------------------------------------------------------

// menulis di dalam element
var btn = window.document.getElementsByTagName('button');

// karena elemnts bnayak jadi harus pake array
btn[1].innerHTML ='Selamat pagi';

var x = window.document.getElementById('btn');

x.innerHTML = "selamat siang";

window.console.log('Selamat Datang');