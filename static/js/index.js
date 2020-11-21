let select_navBar = document.getElementById('select_navBar');
let navBar = document.querySelectorAll('#navBar span')
let logo_text = document.getElementById('logo_text');

console.log(navBar);
select_navBar.addEventListener('click', () => {
    for (const navBarKey in navBar) {
        navBar[navBarKey].classList.toggle('hidden');
        console.log(navBarKey)
    }
});
