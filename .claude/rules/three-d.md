# 3D INTERFACE RULES

Use 3D only when it improves the experience.

Preferred technologies:

- Three.js
- React Three Fiber
- Drei
- CSS perspective
- CSS 3D transforms

Use 3D for:

- hero scenes
- product visualization
- interactive environments
- spatial data
- floating interface layers
- controlled particle systems
- abstract product storytelling

Avoid adding 3D purely because it looks impressive.

## Interaction

3D scenes may respond to:

- pointer movement
- scrolling
- hover
- drag
- application state

Keep movement controlled.

## Performance

Always consider:

- lazy loading
- geometry complexity
- texture size
- draw calls
- mobile performance
- fallback states
- reduced-motion preferences

Prefer CSS 3D when WebGL is unnecessary.

For lower-powered devices, simplify or disable expensive effects.