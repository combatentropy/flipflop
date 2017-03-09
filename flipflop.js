/*
 * flipflop.js JavaScript library v0.2
 * 8 March 2017
 * https://github.com/combatentropy/flipflop.js
 *
 *
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 * 
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 */

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
        // Reset if hiding
        if (! flipped) { box.reset(); }
    }
});

