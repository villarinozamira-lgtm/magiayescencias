window.addEventListener('scroll', () => {
    const productos = document.querySelectorAll('.producto');
    productos.forEach(prod => {
        const pos = prod.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            prod.style.opacity = '1';
            prod.style.transform = 'translateY(0)';
        }
    });
});
