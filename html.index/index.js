
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('active');
            
            // Update main content margin
            const main = document.getElementById('main');
            if (sidebar.classList.contains('active')) {
                main.style.marginLeft = "250px";
            } else {
                main.style.marginLeft = "0";
            }
        }

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', function(event) {
            const sidebar = document.getElementById('sidebar');
            const openBtn = document.querySelector('.open-btn');
            
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(event.target) && !openBtn.contains(event.target)) {
                    sidebar.classList.remove('active');
                    document.getElementById('main').style.marginLeft = "0";
                }
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            const sidebar = document.getElementById('sidebar');
            const main = document.getElementById('main');
            
            if (window.innerWidth > 768) {
                sidebar.classList.add('active');
                main.style.marginLeft = "250px";
            } else {
                sidebar.classList.remove('active');
                main.style.marginLeft = "0";
            }
        });