Tabfy
=====

A simple, lightweight jQuery plugin to handle tabs.

WARNING :
-------

I'am a f*****ing noob in javascript so be nice (even if you see something really dirty)....

I know it's not the ULTIMATE plugin that you waited for but, i just wanted to try to write a jquery plugin (first time be cool :) ).

I do not want to rivalise with bootstrap, i done this for fun and to improve my skill so feel free to comment and improve my code ! 

ps: English is not my first language so I apologize in advance

Information :
-----------

I have take the decision of using URL Hash, maybe not the best way but i like the fact that we can see which tab is open in the URL (and i wanted to try event trigger).

This is GPL v3, so use it modify it, etc ...

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
