function fadeInElement(element, duration) {
    element.style.opacity = 1; // Set opacity to 100%
    element.style.transitionTimingFunction = 'ease-in';
    element.style.transitionDuration = duration + 'ms';
}

function showNotification() {
    const notify = document.getElementById('notify');
    fadeInElement(notify, 200);
}

setTimeout(showNotification, 2000);