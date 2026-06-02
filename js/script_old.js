
    /* Animasi Scroll Smoth dan animasi interaktive */
    const header = document.querySelector("header");

    window.addEventListener ("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 120);
    });

    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('active');
    }

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('active');
    }

    /* Scroll Header animasi ke halaman section lain*/
    let sections = document.querySelectorAll('section')
    let navLinks = document.querySelectorAll('header ul li a')

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 200;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id')

            if(top >= offset && top < offset + height ){
                //active navbar links
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header ul li a[href*='+ id + ']').classList.add('active')
             });
        }
    });
    }

    /* Animasi berjalan untuk section Projects */
    const projectTrack = document.querySelector('.project-track');

    if (projectTrack && projectTrack.children.length > 0) {
        const originalProjects = Array.from(projectTrack.children);

        originalProjects.forEach((project) => {
            const clone = project.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            clone.querySelectorAll('a, button').forEach((element) => {
                element.setAttribute('tabindex', '-1');
            });
            projectTrack.appendChild(clone);
        });

        function updateProjectMarquee() {
            const firstClone = projectTrack.children[originalProjects.length];

            if (!firstClone) {
                return;
            }

            const distance = firstClone.offsetLeft;
            const duration = Math.max(24, Math.round(distance / 45));

            projectTrack.style.setProperty('--project-distance', `${distance}px`);
            projectTrack.style.setProperty('--project-duration', `${duration}s`);
        }

        updateProjectMarquee();
        window.addEventListener('resize', updateProjectMarquee);

        if (document.fonts) {
            document.fonts.ready.then(updateProjectMarquee);
        }
    }


