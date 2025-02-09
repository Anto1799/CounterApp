# Counter App

A modern, interactive counter application built with vanilla JavaScript, featuring a sleek user interface, animations, and keyboard controls. This project demonstrates fundamental web development concepts including DOM manipulation, event handling, and responsive design.

## Project Structure

The project is organized in the following directory structure:

counterapp/
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── javascript.js
├── index.html
└── README.md

## Features

The Counter App includes several modern web development features:

- Visual interface with animated buttons
- Multiple control methods (mouse and keyboard)
- Operation history tracking
- Smooth animations and visual feedback
- Fully responsive design
- Dark theme with neon accents
- Keyboard shortcuts support

## Getting Started

### Prerequisites

- A modern web browser
- Visual Studio Code (recommended)
- Live Server extension (recommended)
- Chrome DevTools for debugging

### Installation

1. Clone the repository:

git clone [repository-url]
cd counterapp

2. Launch the application:

Option 1: Using Live Server in VS Code
- Right-click on index.html
- Select "Open with Live Server"

Option 2: Direct browser opening
- Double-click index.html in your file explorer
- Or drag the file into your browser window

## Usage Guide

### Mouse Controls

The interface provides three main buttons:
- "+" button: Increases the counter
- "-" button: Decreases the counter
- "Reset" button: Returns to zero

### Keyboard Controls

For faster interaction, use keyboard shortcuts:
- ↑ or + to increment
- ↓ or - to decrement
- R to reset the counter

### History Feature

The application tracks your last 5 operations with color coding:
- Green: Increments
- Red: Decrements
- Cyan: Reset operations

## Technical Details

### HTML Structure

The application uses dynamic HTML generation through JavaScript, demonstrating modern DOM manipulation techniques. This approach provides better maintainability and programmatic control over the user interface.

### CSS Architecture

Located in assets/css/style.css, the styling implements:
- Modern flexbox layouts
- CSS animations
- Glass-morphism effects
- Media queries
- CSS custom properties

### JavaScript Implementation

Found in assets/js/javascript.js, the logic includes:
- State management
- Event listeners
- Dynamic DOM updates
- History management
- Animation controls

## Development Guide

### Adding New Features

The modular structure supports easy extensions:
- Implement local storage
- Add custom increment steps
- Include sound effects
- Add theme toggling

### Style Customization

To modify the appearance:
1. Navigate to assets/css/style.css
2. Update color schemes
3. Modify animations
4. Adjust responsive breakpoints

### JavaScript Enhancement

To extend functionality:
1. Open assets/js/javascript.js
2. Add new event listeners
3. Implement new animations
4. Extend history management

## Contributing

We welcome:
- Bug reports
- Feature suggestions
- Code improvements
- Documentation updates

## License

Copyright © 2024 Antonio Perrotta. All rights reserved.

## Support

For assistance:
- Open an issue
- Contact the maintainer
- Check documentation