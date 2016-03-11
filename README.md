# masonry-css

Responseive Masonry style grid, like masonry plugins, but with css only!

See [demo](https://rawgit.com/darlanmendonca/masonry-css/master/dist/index.html) - Illustrations by [Ken Wong](http://ken-wong.deviantart.com/)

<a href="https://rawgit.com/darlanmendonca/masonry-css/master/dist/index.html"><img src="https://github.com/darlanmendonca/masonry-css/blob/master/dist/imgs/preview.jpg?raw=true" alt="Demo"/></a>

### Install

Install using ```npm```.

```sh
npm install --save masonry-css
```

and refer to css with ```/dist/masonry.css```, or sass ```@import '../path/src/masonry.scss'```

then, in your .html use class ```.masonry``` and inside of that, each image with class ```.masonry-item```, example:
```html
<div class="masonry">
  <img class="masonry-item" src="..." />
  <img class="masonry-item" src="..." />
  <img class="masonry-item" src="..." />
  <img class="masonry-item" src="..." />
</div>
```
