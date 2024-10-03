document.addEventListener('wheel', function(event) {
    event.preventDefault();
}, { passive: false });

document.addEventListener('scroll', function(event) {
    event.preventDefault();
}, { passive: false });