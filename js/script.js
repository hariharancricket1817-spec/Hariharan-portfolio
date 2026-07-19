

/*======================================================
        DEVOPS DASHBOARD
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const progressBar = document.getElementById("progress-bar");

    const navLinks = document.querySelectorAll(".nav-item");

    const sections = document.querySelectorAll("section[id]");

    const menu = document.querySelector(".dashboard-menu");

    const toggle = document.querySelector(".menu-toggle");


    /*====================================
            Mobile Menu
    ====================================*/

    if(toggle){

        toggle.addEventListener("click",()=>{

            menu.classList.toggle("show");

        });

    }


    /*====================================
            Smooth Scroll
    ====================================*/

    navLinks.forEach(link=>{

        link.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                window.scrollTo({

                    top:target.offsetTop-120,

                    behavior:"smooth"

                });

            }

            menu.classList.remove("show");

        });

    });


    /*====================================
            Scroll Progress
    ====================================*/

    window.addEventListener("scroll",()=>{

        const winScroll=document.documentElement.scrollTop;

        const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

        const scrolled=(winScroll/height)*100;

        progressBar.style.width=scrolled+"%";

    });


    /*====================================
        Active Navigation
    ====================================*/

    function activateMenu(){

        let current="";

        sections.forEach(section=>{

            const sectionTop=section.offsetTop-180;

            const sectionHeight=section.clientHeight;

            if(pageYOffset>=sectionTop){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    }

    activateMenu();

    window.addEventListener("scroll",activateMenu);

});


