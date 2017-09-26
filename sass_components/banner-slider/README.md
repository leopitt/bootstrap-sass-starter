# banner-slider
Add to your bootstrap sass files to produce a banner with text and bg image.

Include aligner scss prior to this for vertical copy centering.

Typical banner HTML:

```html
<ul class="banner">
  <li class="banner-item" style="background-image: url(images/banner-blue-cat-eyes.jpg);">
    <div class="banner-copy">
      <div class="aligner-wrapper">
        <div class="aligner-inner">
          <h2 class="title">Helping Animals Enjoy a Better Life</h2>
          <h3 class="subtitle sep-before">Thanks to animal welfare practices based on veterinary knowledge</h3>
          <div class="footer">
            <a class="btn btn-white" href="#">Find out more</a>
          </div>
        </div>
      </div>
    </div>
  </li>
</ul>
```