Tabfy
=====

A simple, lightweight jQuery plugin to handle tabs.

Tutorial
========

Tab
---

```HTML
<ul>
  <li><a href="#tab1" data-value="#tab1">My first Tab</a></li>
  <li><a href="#tab2" data-value="#tab2">My second Tab</a></li>
</ul>
```

Tab Content
-----------

```HTML
<!-- it could be a section or anything else -->
<section id="tab1" class="grid_stuff....">
  <p>Marvelous content</p>
</section>
<section id="tab2" class="grid_stuff....">
  <p>Marvelous content</p>
</section>
```

IF you uses CSS transition :
```Javascript
$(window).tabfy({
  'useCSS': true
});
```
ELSE use jQuery slide UP/DOWN
```Javascript
$(window).tabfy();
```
