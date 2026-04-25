document.addEventListener('DOMContentLoaded', function() {
        var menuToggle = document.getElementById('menu-toggle'); // Botón de Barras (Abrir)
        var menuClose = document.getElementById('menu-close');   // Botón de X (Cerrar)
        var sidebar = document.getElementById('sidebar');
        var body = document.body;

        function toggleMenu() {
            body.classList.toggle('is-menu-visible');
        }

        if (menuToggle) {
            menuToggle.addEventListener('click', function(e) {
                e.preventDefault();
                toggleMenu();
            });
        }
        
        if (menuClose) {
             menuClose.addEventListener('click', function(e) {
                e.preventDefault();
                toggleMenu();
            });
        }
        
        //cerrar al clic en enlaces o fuera del menu
        var sidebarLinks = document.querySelectorAll('#sidebar nav a');
        sidebarLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (body.classList.contains('is-menu-visible')) {
                    body.classList.remove('is-menu-visible');
                }
            });
        });

        var wrapper = document.getElementById('wrapper');
        if (wrapper) {
            wrapper.addEventListener('click', function(e) {
                if (body.classList.contains('is-menu-visible') && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                    body.classList.remove('is-menu-visible');
                }
            });
        }
    });
