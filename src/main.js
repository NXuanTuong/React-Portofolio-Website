const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

    const navLinks = document.querySelectorAll('.nav-link')

    function linkAction() {
        const navMenu = document.getElementById('nav-menu')

        navMenu.classList.remove('show-menu')
    }

    navLinks.forEach(n => n.addEventListener('click', linkAction))

    function scrollHeader() {
    const header = document.getElementById('header')

    if(this.scrollY >= 80) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
    }

    window.addEventListener('scroll', scrollHeader)
        
    const theme = document.querySelector('#theme-button');
    const themeModal = document.querySelector('.customize-theme');
    const fontSize = document.querySelectorAll('.choose-size span');
    const colorPalette = document.querySelectorAll('.choose-color span');
    const Bg1 = document.querySelector('.bg-1');
    const Bg2 = document.querySelector('.bg-2');
    const Bg3 = document.querySelector('.bg-3');
    var root = document.querySelector(':root');

    if(theme) {
        theme.addEventListener('click', () => {
            themeModal.style.display = 'grid';
        })
    }
    if(themeModal) {
        themeModal.addEventListener('click', (e) => {
            if(e.target.classList.contains('customize-theme')) {
                themeModal.style.display = 'none'
            }
        })
    }
    
    
    // FONTS

    // remove active class from spans or font size selectors
    const removeSizeSelector = () => {
        fontSize.forEach(size => {
            size.classList.remove('active')
        })
    }

    fontSize.forEach(size => {
        size.addEventListener('click', () => {
            removeSizeSelector();
            
            let fontSize;
            size.classList.toggle('active')
            if(size.classList.contains('font-size-1')) {
                fontSize = '12px'
            }
            if(size.classList.contains('font-size-2')) {
                fontSize = '14px'
            }
            if(size.classList.contains('font-size-3')) {
                fontSize = '16px'
            }
            if(size.classList.contains('font-size-4')) {
                fontSize = '18px'
            }

            // change font size of the root html element
            document.querySelector('html').style.fontSize = fontSize;
        })
    })

    //Primary Color

    // remove active class from colors
    const changActiveColorClass = () => {
        colorPalette.forEach(colorPicker => {
            colorPicker.classList.remove('active')
        })
    }
    colorPalette.forEach(color => {
        color.addEventListener('click', () => {
            changActiveColorClass();

            let primaryHue;
            if(color.classList.contains('color-1')) {
                primaryHue = 252
            }
            if(color.classList.contains('color-2')) {
                primaryHue = 52
            }
            if(color.classList.contains('color-3')) {
                primaryHue = 352
            }
            if(color.classList.contains('color-4')) {
                primaryHue = 152
            }
            if(color.classList.contains('color-5')) {
                primaryHue = 202
            }

            color.classList.add('active')
            root.style.setProperty('--primary-color-hue', primaryHue)
        })
    })

    // THEME BACKGROUNDS

    let lightColorLightness;
    let darkColorLightness;
    let whiteColorLightness;


    const changeBG = () => {
        root.style.setProperty('--light-color-lightness', lightColorLightness);
        root.style.setProperty('--white-color-lightness', whiteColorLightness);
        root.style.setProperty('--dark-color-lightness', darkColorLightness);
    }

   if(Bg1) {
    Bg1.addEventListener('click', () => {
        darkColorLightness = '95%'
        whiteColorLightness ='20%'
        lightColorLightness = '15%'

        Bg1.classList.add('active')

        Bg2.classList.remove('active')
        Bg3.classList.remove('active')
        // remove customized change from local storage

        window.location.reload()
        changeBG()
    }) 
   }

    //
    if(Bg2) {
        Bg2.addEventListener('click', () => {
            darkColorLightness = '95%';
            whiteColorLightness ='20%';
            lightColorLightness = '15%';
    
            Bg2.classList.add('active')
    
            Bg1.classList.remove('active')
            Bg3.classList.remove('active')
    
            changeBG()
        }) 
    }

   if(Bg3) {
    Bg3.addEventListener('click', () => {
        darkColorLightness = '95%';
        whiteColorLightness ='10%';
        lightColorLightness = '0%';

        Bg3.classList.add('active')

        Bg1.classList.remove('active')
        Bg2.classList.remove('active')

        changeBG()
    }) 
   }

    // PORTFOLIO ITEM FILTER
    const filterContainer = document.querySelector('.portfolio-filter-inner'),
          filterBtns = filterContainer?.children,
          totalFilterBtn = filterBtns?.length,
          portfolioItems = document.querySelectorAll('.portfolio-item'),
          totalPortfolioItems = portfolioItems?.length;

          for(let i = 0; i< totalFilterBtn; i++) {
            if(filterBtns) {
                filterBtns[i].addEventListener('click', function() {

                    filterContainer.querySelector('.active').classList.remove('active');
                    this.classList.add('active');
    
                    const filterValue = this.getAttribute('data-filter');
    
                    for(let k=0; k<totalPortfolioItems;k++) {
                        if(filterValue === portfolioItems[k].getAttribute('data-category'))
                        {
                            portfolioItems[k].classList.remove('hide');
                            portfolioItems[k].classList.add('show');
                        }
                        else {
                            portfolioItems[k].classList.add('hide');
                            portfolioItems[k].classList.remove('show');
    
                        }
    
                        if(filterValue === 'all') {
                            portfolioItems[k].classList.remove('hide');
                            portfolioItems[k].classList.add('show');
                        }
                    }
                })
            }
          }

        //   
        const sections = document.querySelectorAll('section[id]');

        window.addEventListener('scroll', navHighlighter);

        function navHighlighter() {
            let scrollY = window.pageYOffset;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id');

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
                }
                else {
                    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
                }
            })
        }
