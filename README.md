# Task 3.1: Angular SPA with Tailwind CSS and Flowbite

This project demonstrates the development of a **Single Page Application (SPA)** using **Angular 19**, **Tailwind CSS**, and **Flowbite** for streamlined styling and component integration.

---

## Project Overview

This repository includes the following key features:

1. **Angular 19**:
   - Modern front-end framework for building dynamic, scalable, and responsive web applications.
   - Utilized for its modular structure, robust tools, and active ecosystem.

2. **Single Page Application (SPA)**:
   - Seamless navigation between views without full-page reloads, ensuring fast and smooth user experiences.

3. **Tailwind CSS**:
   - A utility-first CSS framework used for rapid UI development with predefined classes for styling.
   - Ensures a clean and maintainable design system.

4. **Flowbite**:
   - A collection of pre-designed UI components built on top of Tailwind CSS.
   - Simplifies the process of adding responsive and interactive components like buttons, modals, and more.

---

## Installation and Setup

Follow these steps to run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/karimprime/Task-3.1-AngularTailwindcss.git
   cd Task-3.1-AngularTailwindcss
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   ng serve
   ```
   The application will be available at `http://localhost:4200/`.

---

## File Structure

The project follows Angular's recommended folder structure:

```
src/
├── app/                # Core application files and components
├── Public/             # Static assets such as images and fonts
├── styles/             # Global stylesheets (including Tailwind CSS setup)
├── environments/       # Environment-specific configuration files
├── index.html          # Main HTML file
└── main.ts             # Application entry point
```

---

## Key Features

1. **Dynamic Routing**:
   - Angular Router is used to handle SPA navigation, enabling dynamic view rendering without refreshing the page.

2. **Tailwind CSS Integration**:
   - Fully integrated Tailwind CSS for styling, providing a utility-first approach to CSS development.
   - Customization options allow for seamless adaptation to project-specific requirements.

3. **Flowbite Components**:
   - Enhanced UI components sourced from Flowbite for consistent and interactive designs.
   - Includes ready-made elements like modals, tooltips, and navigation bars.

---

## Scripts

- **Start Development Server**:
  ```bash
  npm start
  ```

- **Build for Production**:
  ```bash
  ng build --prod
  ```

- **Run Tests**:
  ```bash
  ng test
  ```

---

## Dependencies

- **Angular**: ^19.0.0
- **Tailwind CSS**: ^3.x
- **Flowbite**: ^1.x
- **TypeScript**: ^4.x

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and submit a pull request.
