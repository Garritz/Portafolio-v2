// Precarga de imágenes
const imagesToPreload = [
    './assets/img/tareas.png',
    './assets/img/fontana.jpg',
    './assets/img/medea1.jpeg',
    './assets/img/medea2.jpeg',
    './assets/img/medea3.jpeg',
    './assets/img/medea4.jpeg',
    './assets/img/medea5.jpeg',
    './assets/img/sospets.jpg'
];

function preloadImages() {
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Ejecutar precarga cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', preloadImages);

// Navegación entre secciones
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.dataset.section;
        
        // Actualizar enlaces activos
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Mostrar sección correspondiente
        sections.forEach(s => s.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
        
        // Si es proyectos, mostrar lista
        if (sectionId === 'proyectos') {
            showProjectList();
        }

        // Scroll al top
        window.scrollTo(0, 0);
    });
});

// Navegación de proyectos
const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.dataset.project;
        showProjectDetail(projectId);
    });
});

function showProjectDetail(projectId) {
    document.getElementById('project-list-view').style.display = 'none';
    document.querySelectorAll('.project-detail').forEach(detail => {
        detail.classList.remove('active');
    });
    document.getElementById(projectId).classList.add('active');
    window.scrollTo(0, 0);
}

function showProjectList() {
    document.getElementById('project-list-view').style.display = 'block';
    document.querySelectorAll('.project-detail').forEach(detail => {
        detail.classList.remove('active');
    });
    window.scrollTo(0, 0);
}

// Carrusel de imágenes
let currentSlide = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-image');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}