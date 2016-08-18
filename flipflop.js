/*
 * flipflop.js JavaScript library v0.1
 *
 * https://github.com/combatentropy/flipflop/
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
 * For more information, please refer to <http://unlicense.org/>
 */

function flipflop(area) {
    
    // The area over which to listen for a click
    area = area || document.body;

    area.addEventListener('click', function (ev) {

        let done = ev.target,
            flip = done.classList.contains('flip'),
            flop = done.classList.contains('flop');

        if (! (flip || flop)) {
            return;
        }

        // Find edge
        let edge,
            el = done;
        while ((el = el.parentNode) && el.parentNode) {
            if (el.classList.contains('edge')) {
                edge = el;
                break;
            }
        }
        if (! edge) {
            return;
        }

        ev.preventDefault();

        if (flip) {
            done.classList.add('done');
            edge.classList.add('over');
        } else {
            // flop
            let dones = edge.querySelectorAll('.flip.done');
            Array.prototype.forEach.call(dones, function (el) {
                el.classList.remove('done');
            });
            // Edges can be nested.
            // A flop will revert all within its edge.
            let inner_edges = edge.querySelectorAll('.edge.over');
            Array.prototype.forEach.call(inner_edges, function (el) {
                el.classList.remove('over');
            });
            edge.classList.remove('over');
        }
    });
}
