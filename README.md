# Forkify - Recipe Application

A modern recipe search and management app built with vanilla JavaScript.

## Features
- 🔍 Search over 1,000,000 recipes via API
- 📖 View detailed recipe info with ingredients & directions
- 🔖 Bookmark favorite recipes
- ➕ Upload custom recipes
- 📱 Responsive design with MVC architecture

## Tech Stack
- **Vanilla JavaScript** (ES6+)
- **Parcel** - Build tool & bundler
- **SASS** - Styling
- **Core.js** - Polyfills

## Project Structure
```
├── index.html              # Main HTML entry point
├── package.json            # Dependencies & scripts
├── src/
│   ├── img/                # Images & SVG icons
│   ├── js/
│   │   ├── controller.js   # App entry point & event handling
│   │   ├── model.js        # Data layer (API calls, state)
│   │   ├── helpers.js      # Utility functions
│   │   ├── config.js       # Configuration constants
│   │   └── views/          # UI rendering modules
│   └── sass/
│       ├── main.scss       # Main stylesheet
│       ├── _base.scss      # Base styles & resets
│       ├── _components.scss# Reusable components
│       ├── _header.scss    # Header styles
│       ├── _preview.scss   # Recipe preview
│       ├── _recipe.scss    # Recipe detail view
│       ├── _searchResults.scss # Search results & pagination
│       └── _upload.scss    # Recipe upload form
└── dist/                   # Production build output
```
