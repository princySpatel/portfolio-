document.addEventListener('DOMContentLoaded', function() {
    const animationItems = document.querySelectorAll('.animation-item');

    animationItems.forEach(item => {
        const video = item.querySelector('.animation-video');

        item.addEventListener('mouseenter', () => {
            video.play();
        });

        item.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });
});