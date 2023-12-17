let navLi = document.getElementById('navLi');
let openSidebar = document.getElementById('openSidebar');
let closeSidebar = document.getElementById('closeSidebar');
let sidebar = document.getElementById('sidebar');
let sidebarLi = document.getElementById('sidebarLi');

openSidebar.addEventListener('click',() => {
    sidebar.style.display = 'block';
    openSidebar.style.display = 'none';
    closeSidebar.style.display = 'block';
    sidebarLi.style.display = 'block';
});

closeSidebar.addEventListener('click', () =>{
    sidebarLi.style.display = 'none';
    closeSidebar.style.display = 'none';
    openSidebar.style.display = 'block';
})