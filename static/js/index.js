let select_navBar = document.getElementById('select_navBar');
let navBar = document.getElementById('navBar');
let logo_text = document.getElementById('logo_text');
let toggle_select_navBar = 0;
let a = navBar.getElementsByTagName('a');
select_navBar.onclick = function () {
    if (toggle_select_navBar === 0) {
        for (let i = 0; i < a.length; i++) {
            // a[i].getElementsByTagName('span')[0].style.display = 'none';
            a[i].getElementsByTagName('span')[0].classList.add('hidden');
            console.log(i)
        }
        navBar.style.width = '3%';
        logo_text.style.width = '3%';
        toggle_select_navBar++;
    } else {
        for (let i = 0; i < a.length; i++) {
            setInterval(function () {
                // a[i].getElementsByTagName('span')[0].style.display = 'inline-block';
                a[i].getElementsByTagName('span')[0].classList.remove('hidden');
            }, 500);
        }
        navBar.style.width = '15%';
        logo_text.style.width = '15%';
        toggle_select_navBar--;
    }
}