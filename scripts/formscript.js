// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const signIn = document.querySelector('.sign-in-container');
    const signUp = document.querySelector('.sign-up-container');
    const overlayBtn = document.getElementById('overlayBtn');

    // Mobile: Switch to Sign Up
    document.querySelector('.mobile--sign-up').addEventListener('click', (e) => {
        e.preventDefault();
        signIn.classList.remove('active');
        signUp.classList.add('active');
    });

    // Mobile: Switch to Sign In
    document.querySelector('.mobile--sign-in').addEventListener('click', (e) => {
        e.preventDefault();
        signUp.classList.remove('active');
        signIn.classList.add('active');
    });

    // Desktop: Overlay Toggle
    if (overlayBtn) {
        overlayBtn.addEventListener('click', () => {
            container.classList.toggle('right-panel-active');
            overlayBtn.classList.remove('btnScaled');
            window.requestAnimationFrame(() => {
                overlayBtn.classList.add('btnScaled');
            });
        });
    }
});
