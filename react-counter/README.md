# Investor Insights Dashboard

## Description

A responsive React counter app featuring history tracking, localStorage auto-save, keyboard controls, reset, and custom step size. Styled with a retro card aesthetic and tiled star background for a playful UI.

## Table of Contents

- [Technologies Used](#technologiesused)
- [Features](#features)
- [Future Features](#nextsteps)
- [Deployed App](#deployment)
- [About the Authors](#author)

## <a name="technologiesused"></a>Technologies Used

- **JavaScript (ESNext) + React** - Component logic, state, effects
- **Vite** - Bundling, dev server, and build pipeline
- **CSS3** - Custom properties, flex/grid layout, retro styling
- **LocalStorage** - Persisting the counter value between sessions
- **Vercel** - Hosting and continuous deployment

## <a name="features"></a> Features

**Counter Controls** - Increment/decrement with click or ArrowUp/ArrowDown keys  
**History Tracking** - Every count change is appended to a visible history list  
**Auto-Save** - useEffect syncs the current count to localStorage  
**Reset** - One click to reset count and clear history  
**Custom Step** - User-defined step value for increment/decrement  
**Retro Styling** - Tiled star background and bold card/border aesthetic

**In Progress:**

- [ ] Theme toggle (light/dark)
- [ ] Persist custom step value

## <a name="nextsteps"></a>Future Features

- **Toast Save Indicator** - Clarify when writes to storage complete
- **History Controls** - Clear history only, undo last entry
- **Input Validation** - Guard against non-numeric step values
- **Accessibility** - Improved focus styles and ARIA labels
- **Tests** - Component and hook coverage

## <a name="deployment"></a>Deployed Link

**Live Application:**  
[Vercel Deployment](https://react-counter-vert-iota.vercel.app)

**Repository:**  
[GitHub Repository](https://github.com/cfra8189/react-counter)

## <a name="author"></a>About The Authors

**THE TEAM**

- **[Clarence Franklin](https://github.com/cfra8189)** - UI/UX, React implementation, deployment

## Development Process

This project was built with:

- Feature-branch workflow and incremental commits per feature
- Pairing between coding and visual polish iterations
- Rapid local feedback with Vite’s dev server

## Installation & Setup

1. Clone the repository:

	```bash
	git clone https://github.com/cfra8189/react-counter.git
	```

2. Navigate to project directory:

	```bash
	cd react-counter
	```

3. Install dependencies and run dev server:

	```bash
	npm install
	npm run dev
	```

4. Build for production:

	```bash
	npm run build
	```

## Works Cited:

- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/guide/)
- [MDN Web Docs - localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [CSS Tricks - Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
