# flipflop

Example:
```html
<!doctype html>
<html>
<head>
    <title>FlipFlop</title>
    <link rel=stylesheet href="flipflop.css">
</head>
<body>

<form class=edge>
    Name:
    <span class=side1>Bob</span>
    <input name=name value=Bob class=side2>
    <a class=flip href="#">edit</a>
    <input type=submit class=side2>
    <a class=flop href="#">cancel</a>
</form>

<script src="flipflop.js"></script>
<script>

onload = function () {
    flipflop();
};

</script>
</body>
</html>
```
At the click of a link, the CSS class of a parent element will change. I made this mainly to show and hide things, like to go from a read-only view of a record to its editable form.

Make a link that will change the state, and give it a class of **flip**. When clicked, it will then look for a parent whose class is **edge** and add a class of **over**. Another link whose class is **flop** will undo it all.

A corresponding stylesheet works the magic. A basic one is included in the repo, but feel free to customize it. It starts off showing elements whose class is **side1**. When clicked, it hides those and shows elements whose class is **side2**.

The metaphor of a two-sided page is used throughout.
