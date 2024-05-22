/*===============Nav Toggle für Handy Format===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle')
    navClose = document.getElementById('nav-close')

/*Wenn Hamburger geklickt, dann Nav-Menü öffnen*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*Wenn "X" geklickt, dann Nav-Menü schließen*/
if(navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
}

/*Wenn Nav-Item angeklickt, dann Nav-Menü schließen*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*===================================*/


/*===============Kontakt Form===============*/
const kontaktForm = document.getElementById('kontakt-form'),
    kontaktName = document.getElementById('kontakt-name'),
    kontaktEmail = document.getElementById('kontakt-email'),
    kontaktGrund = document.getElementById('kontakt-grund'),
    kontaktMessage = document.getElementById('kontakt-message')


const sendEmail = (e) => {
    e.preventDefault()

    if(kontaktName.value === '' || kontaktEmail.Value === '' || kontaktGrund.Value === '') {
        kontaktMessage.classList.remove('color-blue')
        kontaktMessage.classList.add('color-red')

        kontaktMessage.textContent = 'Bitte füllen Sie alle Felder aus'
    } else {
        kontaktMessage.classList.add('color-blue')
        kontaktMessage.textContent = 'Nachricht versendet!'
    }
}
kontaktForm.addEventListener('submit', sendEmail)
/*===================================*/




/*===============Scroll===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


const scrollHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('bg-header')
                    :   header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)
/*===================================*/


/*
const navItem = document.querySelectorAll('.nav__item')
const linkActive = () => {

    navItem.classList.add('active')
}
navLink.forEach(n => n.addEventListener('click', linkActive))
*/
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav__item');
    let currentSectionId = '';

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSectionId = section.id;
        }
    });

    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    if (currentSectionId && window.location.hash !== `#${currentSectionId}`) {
        history.replaceState(null, null, `#${currentSectionId}`);
    }
});


/* Link mit section ID aktualisieren wenn user in der section angelangt.*/
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    let currentSectionId = '';

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSectionId = section.id;
        }
    });

    if (currentSectionId && window.location.hash !== `#${currentSectionId}`) {
        history.replaceState(null, null, `#${currentSectionId}`);
    }
});




/*===============Dark Theme===============*/
const themeButtom = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//Überprüfen ob user im cache schon eine Präferenz hat
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButtom.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//Wir validieren ob der user ein Theme letztens ausgesucht hat
if (selectedTheme) {
    //Wenn das if true ist, dann fragen wir was das problem war um zu wissen ob wir das Theme aktiviert oder deaktiviert haben
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButtom.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)

}
//Activieren und deactivieren des Themes mithilfe des Buttons
themeButtom.addEventListener('click', () => {
    //Hinzufügen oder entfernen vom Theme
    document.body.classList.toggle(darkTheme)
    themeButtom.classList.toggle(iconTheme)
    //Wir speichern die Theme im Cache vom User um beim nächsten besuch seine Präferenz zu nutzen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*===================================*/


/*===============Scroll Reveal===============*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));

/*===================================*/
