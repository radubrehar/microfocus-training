# Styling for React components and apps

Current ecosystem + available options:

- plain old CSS
- CSS has grown up - CSS modules
- styled-components, emotion styled, styled-jsx

CSS variables

What to use when - tradeoffs:

- reusable & publicly available React components
- company-wide reusable components
- user-facing company app - any of the above

Example - https://github.com/imancha/Books/blob/775ec98fb6dddc8862711248fbf6f279316e72ae/css/skin/darkmagenta-rosybrown.css

Can you update the file without breaking anything?

CSS issues:

- cascading
- append-only files
- no component specific

Solution:

- write less CSS
  - https://tachyons.io
  - https://tailwindcss.com
  - https://rebassjs.org/
  - CSS variables
- avoid nesting selectors
