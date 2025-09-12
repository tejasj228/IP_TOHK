# Satoshi Font Setup

To complete the Satoshi font setup, you need to add the following font files to this directory:

- `Satoshi-Regular.woff2` (400 weight)
- `Satoshi-Medium.woff2` (500 weight)
- `Satoshi-Bold.woff2` (700 weight)
- `Satoshi-Black.woff2` (900 weight)

You can download Satoshi font from:

- https://www.fontshare.com/fonts/satoshi (free for personal and commercial use)

## Alternative: Using CSS @import

If you prefer not to host the fonts locally, you can use the CSS import method by adding this to your CSS file:

```css
@import url("https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap");
```

Then update the font configuration in `index.css` to use "Satoshi" directly.
