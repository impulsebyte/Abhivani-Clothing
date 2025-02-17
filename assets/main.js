window.addEventListener('load', function() {
    setTimeout(() => {
        const loaderWrapper = document.getElementById('loader-wrapper');
        loaderWrapper.style.display = 'none';
    }, 0);
});

// loader end
//lucide.createIcons();
var toggleButton = document.getElementById("toogle-menu");
var responsiveSidebar = document.getElementById("responsive-sidebar");
var menuOverlay = document.getElementById("menu-overlay");
var closeButton = document.querySelectorAll("#close-button");
function MenuToggle() {
    toggleButton.addEventListener('click', () => {
        menuOverlay.classList.remove('hidden')
        responsiveSidebar.classList.toggle('hidden');
        document.body.classList.toggle('overflow-y-hidden')
        // If opening the menu, reset all dropdowns/submenus
        if (!responsiveSidebar.classList.contains('hidden')) {
            resetMenus();
        }
    });
    menuOverlay.addEventListener('click', () => {
        responsiveSidebar.classList.toggle('hidden');
        document.body.classList.toggle('overflow-y-hidden')

        menuOverlay.classList.toggle('hidden');
        
    });
}

function closeMenu() {
    closeButton.forEach((btn) => {
        btn.addEventListener('click', () => {
            responsiveSidebar.classList.toggle('hidden');
        document.body.classList.toggle('overflow-y-hidden')

            menuOverlay.classList.toggle('hidden');
        });
        // Reset all dropdowns/submenus when closing the sidebar
        resetMenus();
    })
}
// Function to reset all dropdowns and submenus to their initial hidden state
function resetMenus() {
    const dropdownMenus = responsiveSidebar.querySelectorAll('.dropdown-menu');
    const submenus = responsiveSidebar.querySelectorAll('.submenu-menu');

    dropdownMenus.forEach(menu => {
        menu.classList.add('hidden');
    });

    submenus.forEach(submenu => {
        submenu.classList.add('hidden');
    });
}
const dropdownItems = responsiveSidebar.querySelectorAll('.dropdown > a');
dropdownItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        if (dropdownMenu) {
            dropdownMenu.classList.toggle('hidden');
        }
    });
});
const submenuItems = responsiveSidebar.querySelectorAll('.submenu');
submenuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const submenu = this.nextElementSibling;
        if (submenu) {
            submenu.classList.toggle('hidden');
        }
    });
});
const backArrows = responsiveSidebar.querySelectorAll('.back-arrow');
backArrows.forEach(item => {
    item.addEventListener('click', function (e) {
        console.log('+++ ', e.currentTarget);
        e.currentTarget.parentElement.parentElement.classList.add('hidden')
    });
});
MenuToggle();
closeMenu();

function closeModal() {
    document.getElementById('modal').__x.$data.modalOpen = false;
    document.body.classList.remove('overflow-y-hidden');
    
    // Stop the video by resetting the src
    const iframe = document.getElementById('videoFrame');
    iframe.src = iframe.src;
}