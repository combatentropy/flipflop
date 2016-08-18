function flipflop(area) {
    
    // The area over which to listen for a click
    area = area || document.body;

    area.addEventListener('click', function (ev) {

        let done = ev.target,
            edge,
            flip = done.classList.contains('flip'),
            flop = done.classList.contains('flop');

        if (! (flip || flop)) {
            return;
        }

        // Find edge
        let el = done;
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
            let inner_edges = edge.querySelectorAll('.edge.over');
            Array.prototype.forEach.call(inner_edges, function (el) {
                el.classList.remove('over');
            });
            edge.classList.remove('over');
        }
    });
}
