# Responsive Accessibility CSS

## Media Queries in EMs

Most users don't change their browser font sizes, however for many reasons we have users that do.

We've been embracing this in our typography for years, and we're all fairly comfortable with font sizes in REMS/EMS.

However this has meant for many users who have changed their font size, that when they visit our websites, the content
doesnt really fit. Like you can read the text, but it doesnt quite look right.

We can see a great example of this on this bootstrap example page: https://getbootstrap.com/docs/5.1/examples/features/

### So how can we solve this?

The great answer is we kinda already have, for small screens, using media queries.

We know that a media query based in pixels is fixed based on viewport size, as long as the viewport meets that minimum
size then the media query will activate. And we've seen this work exceptionally well when people use the browser zoom
feature.

However changing the browser font size, isnt the same as browser zoom - yet we'd probably want a similar behaviour in
terms of the breakpoint changing.

What if we considered changing our media queries to be based in EMs instead of pixels, meaning we start thinking about
them in relation to both our screen size, and the size of our content.

### Breakpoints

So I'm going to use a few older values here because they compute nicely, but you really can use any you like, lets say
we've got a simple site, with a single column layout on our smaller screens, and when our screen exceeds 768px we want
to swap out to a two column layout, and then at 1024px we want to swap to a three column layout.

We know that most - if not all - browsers, have a default 16px base font size, so we can use that as our basis for
calculating our media queries.

Lets call this our medium breakpoint -- Medium 768px / 16px = 48em
`@media all(min-width: 48em)`

And lets call this our large breakpoint -- Large 1024px / 16px = 64em
`@media all(min-width: 64em)`

And in chrome let's set our font size to large, which computes in Chrome to 20px. This means that our medium breakpoint
now needs a viewport size of 960px before it activates instead of 768px and that our large breakpoint now needs a
viewport size of 1280px before

Giving us a much closer behaviour to browser zoom right?

This also works the other way, so if we set our font size to small, which computes in Chrome to 12px That our medium
breakpoint now activates much earlier at 576px instead of 768px, And that our large breakpoint now activates at 768px
instead of 1024px.

### Chrome Size Values

| Size             | px          | 48em           | 64em            |
|------------------|-------------|----------------|-----------------| 
| Medium (Default) | 16px        | 768px          | 1024px          |
| ---------------- | ----------- | -------------- | --------------- |
| Very Small       | 9px         | 432px          | 576px           |
| Small            | 12px        | 576px          | 768px           |
| Large            | 20px        | 960px          | 1280px          |
| Very Large       | 24px        | 1152px         | 1153px          |

### Gotchas

Now there are a few things we should probably consider at this point,

- Anyone setting the font-size using CSS, so the `:root`, `html` or `body` selectors may cascade into your font styles,
  however it wont be computed by your media queries. So we need to be aware of this.

- Max screen size, we often set our maximum container widths using a pixel value, they'll also need updating to use EM
  values else we'll might still have content trying to squeeze into a space it's not necessarily designed for.

- A few sites have started setting paddings, margins, column/row gaps, gutters etc. using `ems` or `rems` and whilst
  that may still be right for your content, we may want to consider reverting those to pixel values - as usually that's
  more about how we lay out the entire screen rather than individual content items - there's no absolute rule here as
  it's down to your design.
