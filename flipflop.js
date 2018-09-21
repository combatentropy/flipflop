document.addEventListener('click', function (ev) {

    // Check set-up
    let clicked = ev.target;
    if (! (clicked.classList.contains('flipper') ||
        clicked.classList.contains('flopper'))) { return; }
    for (var box = clicked.parentNode;
        box.parentNode && ! box.classList.contains('flipflop');
        box = box.parentNode);
    if (! box) { return; }

    if ('A' === clicked.tagName) { ev.preventDefault(); }

    // Determine command
    let flipped;
    if (clicked.classList.contains('flipper')) {
        if ('INPUT' === clicked.tagName && 'checkbox' === clicked.type) {
            flipped = clicked.checked;
        } else {
            flipped = true;
        }
    } else if (clicked.classList.contains('flopper')) {
        flipped = false;
    }

    // Change box's class
    if (flipped) { box.classList.add('flipped'); }
    else { box.classList.remove('flipped'); }

    // Special actions if form
    if ('FORM' === box.tagName) {
        // Enable or disable fields
        for (let i = 0; i < box.elements.length; i++) {
            let el = box.elements[i];
            if (el.classList.contains('flip-on')) {
                el.disabled = ! flipped;
            }
        }
    }
});
