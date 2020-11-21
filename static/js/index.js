let select_navBar = document.getElementById('select_navBar');
let navBar = document.getElementById('navBar')
let navBar_span = document.querySelectorAll('#navBar span')
let logo_text = document.getElementById('logo_text');

let toggle_select_navBar = 0;
select_navBar.addEventListener('click', () => {
    if (toggle_select_navBar === 0) {
        for (let i = 0; i < navBar_span.length; i++) {
            navBar_span[i].classList.toggle('hidden');
        }
        navBar.style.width = '3%';
        toggle_select_navBar++;
    } else if (toggle_select_navBar === 1) {
        for (let i = 0; i < navBar_span.length; i++) {
            setTimeout(()=> {
                navBar_span[i].classList.toggle('hidden');
            },500)
        }
        navBar.style.width = '15%';
        toggle_select_navBar--;
    } else {
        console.log('error')
    }
});
