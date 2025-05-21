document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('[data-component="image-comparison-slider"]');
    const overlay = container.querySelector('.image-comparison__overlay');
    const afterLabelContainer = container.querySelector('.image-comparison__after-label-container');
    const slider = container.querySelector('.image-comparison__slider');
    const range = container.querySelector('.image-comparison__range');

    function updateSlider() {
        const percent = range.value;
        overlay.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
        afterLabelContainer.style.clipPath = `inset(0 0 0 ${percent}%)`;
        slider.style.left = `${percent}%`;
    }

    range.addEventListener('input', updateSlider);
    range.addEventListener('change', updateSlider);
    updateSlider(); // Set initial position
});