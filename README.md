# Path-Finder

An interactive sandbox for exploring pathfinding concepts—using weighted randomness to simulate algorithm-like behavior, filling the grid while favoring certain directions.

## Project Overview

Path-Finder is a React-based web application that provides a visual sandbox for experimenting with pathfinding concepts. Instead of implementing exact algorithms, it uses weighted randomness to simulate algorithm-like behavior, allowing users to explore how paths can be discovered across a grid.

## Why I Built This

I've always been fascinated by interactive, sandbox-style tools that explore concepts in a playful, visual way. Long ago, I even made a similar tool in C++ on the command line, and later recreated it using just HTML, CSS, and JavaScript. That project was fun, but it stayed fairly simple. ([GitHub Repo](https://github.com/Ali-Sdg90/Spread-Color) | [Live Version](https://ali-sdg90.github.io/Spread-Color/))

Now, about 2 years later, my skills have grown a lot, and I wanted to revisit the idea with React—building it dynamically, component by component. It felt like the perfect challenge and a chance to make something even more engaging.  

What really excites me about these sandbox tools is watching them "try" to do something on their own, while giving users the power to tweak settings and see how behavior changes in real-time. I love creating that kind of playful, interactive experience, and this project was my chance to do it all over again—better, faster, and more fun.


## Features

-   Visualization of pathfinding
-   Step-by-step animation of pathfinding
-   Responsive design for desktop and mobile
-   Customizable settings (see below)
-   Real-time updates and instant feedback

## Technologies Used

-   **React** (Front-end framework)
-   **Ant Design (antd)** (UI components)
-   **Sass** (SCSS for styling)
-   **Crypto-JS** (Utility library)
-   **React Scripts** (Project scaffolding)
-   **gh-pages** (Deployment to GitHub Pages)

## Installation Instructions

### Prerequisites

-   [Node.js](https://nodejs.org/) (v14 or higher recommended)
-   [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps

1. **Clone the repository**
    ```sh
    git clone https://github.com/Ali-Sdg90/Path-Finder.git
    cd Path-Finder/path-finder
    ```
2. **Install dependencies**
    ```sh
    npm install
    ```
3. **Run the application**
    ```sh
    npm start
    ```
    The app will open at [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command             | Description                       |
| ------------------- | --------------------------------- |
| `npm start`         | Runs the app in development mode  |
| `npm run build`     | Builds the app for production     |
| `npm run predeploy` | Prepares the build for deployment |
| `npm run deploy`    | Deploys the app to GitHub Pages   |

## Folder/File Structure

```
Path-Finder/
│
├── LICENSE                # Project license
├── README.md              # Main project documentation
└── path-finder/           # React app root
    ├── package.json       # Project metadata and dependencies
    ├── package-lock.json  # Dependency lock file
    ├── README.md          # React app-specific documentation
    ├── public/            # Static public assets (HTML, manifest, icons)
    │   ├── index.html     # Main HTML file
    │   ├── manifest.json  # PWA manifest
    │   └── ...            # Icons, robots.txt, etc.
    └── src/               # Source code
        ├── App.jsx                        # Root React component, wraps the app with a state provider
        ├── index.jsx                      # Entry point, renders the app to the DOM
        ├── assets/                        # Static assets (fonts, images, SCSS)
        │   ├── fonts/                     # Custom fonts and styles (currently empty)
        │   ├── images/                    # Image assets (currently empty)
        │   └── scss/                      # SCSS styles (global, components, pages)
        ├── components/                    # Project components
        │   ├── Base.jsx                   # Main grid and logic for pathfinding visualization
        │   ├── Cell.jsx                   # Represents a single cell in the grid (start, end, wall, path)
        │   ├── Footer.jsx                 # Footer with author info and GitHub link
        │   ├── Header.jsx                 # Header bar
        │   └── SiteSettings.jsx           # Settings modal for customizing grid and app behavior
        ├── store/                         # Global state management (React Context)
        │   ├── BaseContextProvider.jsx    # Provides grid and settings state to components
        │   └── StoreProvider.jsx          # Wraps app with context providers
        └── utils/                         # Utility functions
```

## Settings

The settings modal (⚙️ icon) allows you to customize your experience:

| Setting      | Description                | Effect on App                                      |
| ------------ | -------------------------- | -------------------------------------------------- |
| Grid Size    | Number of rows and columns | Adjusts the dimensions of the grid                 |
| Wall Count   | Percentage of obstacles    | Adds or removes walls on the grid                  |
| Cell Borders | Show or hide cell borders  | Toggles the visibility of cell borders             |
| Line Color   | Color of the filling line  | Changes the color of the path/fill line in the app |

## Contribution Guidelines

1. Fork the repository and create your branch from `main`.
2. Make your changes with clear, descriptive commits.
3. Ensure code follows project style and passes tests.
4. Submit a pull request with a detailed description.

## License

This project is licensed under the terms of the [MIT License](./LICENSE).

## Contact / Author Info

-   **Author:** [Ali Sadeghi](https://github.com/AliSdg90)
