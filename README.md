# masonry-css

Responseive Masonry style grid, like masonry plugins, but with css only!

See [demo](https://rawgit.com/darlanmendonca/masonry-css/master/dist/index.html) - Illustrations by [Ken Wong](http://ken-wong.deviantart.com/)

<a href="https://rawgit.com/darlanmendonca/masonry-css/master/dist/index.html"><img src="https://github.com/darlanmendonca/masonry-css/blob/master/dist/imgs/preview.jpg?raw=true" alt="Demo"/></a>

### Install

Install using ```npm``` or ```bower```.

```sh
npm install --save masonry-css
```

```sh
bower install --save masonry-css
```

Refer to css with ```dist/masonry.css```, or ```src/masonry.scss'```. I.e.

```html
<link rel="stylesheet" src="bower_components/dist/masonry.css" />
```

In your .html use class ```.masonry``` as container, and inside of that, each image need has the class ```.masonry-item```, example:

```html
<div class="masonry">
  <img class="masonry-item" src="..." />
  <img class="masonry-item" src="..." />
  <img class="masonry-item" src="..." />
  <img class="masonry-item" src="..." />
</div>
```
