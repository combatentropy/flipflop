# flipflop.js

Example:
```html
<!doctype html>
<title>FlipFlop</title>
<link rel=stylesheet href="flipflop.css">

<form class=flipflop>
    Name:
    <span class=flopside>Bob</span>
    <input name=name value=Bob class=flipside>
    <a class=flipper href="#">edit</a>
    <input type=submit class=flipside>
    <a class=flopper href="#">cancel</a>
</form>

<script src="flipflop.js"></script>

```
At the click of a link, the CSS class of a parent element will change. I made
this mainly to show and hide things, like to go from a read-only view of a
record to its editable form.

Make a link that will change the state, and give it a class of **flipper**.
When clicked, it will look for a parent whose class is **flipflop** and
add a class of **flipped**. Another link whose class is **flopper** will
flop it back.

The metaphor is a two-sided page. A corresponding stylesheet works the magic.
A basic one is included in the repo, but feel free to customize it.
It starts off showing elements whose class is **flopside**.
When clicked, it hides those and shows elements whose class is **flipside**.

