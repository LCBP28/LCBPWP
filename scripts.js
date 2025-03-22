function openPopup(popupId) {
    // Mostrar el popup
    document.getElementById(popupId).style.display = 'flex';
    // Deshabilitar el scroll del fondo
    document.body.style.overflow = 'hidden';
}

function closePopup(popupId) {
    // Ocultar el popup
    document.getElementById(popupId).style.display = 'none';
    // Restaurar el scroll del fondo
    document.body.style.overflow = 'auto';
    // Cerrar también el visor de imágenes si está abierto
    const imageViewer = document.getElementById(`${popupId.split('-')[0]}-image-viewer`);
    if (imageViewer.classList.contains('active')) {
        closeImageViewer(popupId);
    }
}

// Cerrar popup al hacer clic fuera del contenido
document.querySelectorAll('.popup').forEach(popup => {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
            // Restaurar el scroll del fondo al cerrar
            document.body.style.overflow = 'auto';
            // Cerrar también el visor de imágenes si está abierto
            const popupId = popup.id;
            const imageViewer = document.getElementById(`${popupId.split('-')[0]}-image-viewer`);
            if (imageViewer.classList.contains('active')) {
                closeImageViewer(popupId);
            }
        }
    });
});

// Toggle del menú móvil
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Carrusel de imágenes
function changeSlide(popupId, direction) {
    const popup = document.getElementById(popupId);
    const images = popup.querySelectorAll('.carousel-img');
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    
    // Remover la clase active de la imagen actual
    images[currentIndex].classList.remove('active');
    
    // Calcular el nuevo índice (permite ciclo infinito en ambas direcciones)
    currentIndex = (currentIndex + direction + images.length) % images.length;
    
    // Añadir la clase active a la nueva imagen
    images[currentIndex].classList.add('active');
}

// Mostrar la imagen ampliada
function openImageViewer(popupId, imageSrc) {
    const imageViewer = document.getElementById(`${popupId.split('-')[0]}-image-viewer`);
    const enlargedImg = imageViewer.querySelector('.enlarged-img');
    enlargedImg.src = imageSrc;
    imageViewer.classList.add('active');
}

// Cerrar la vista ampliada
function closeImageViewer(popupId) {
    const imageViewer = document.getElementById(`${popupId.split('-')[0]}-image-viewer`);
    imageViewer.classList.remove('active');
}