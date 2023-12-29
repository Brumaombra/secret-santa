
# Secret Santa App

## Introduction
The Secret Santa App is a Vue.js web application designed for organizing Secret Santa events. It features a user-friendly interface with multi-language support, making it suitable for a wide range of users. The app is styled using the flatifyCss library, providing a sleek and modern aesthetic that enhances the overall user experience. With functionalities like participant management, automated Secret Santa draw steps, and reactive state management using Vue's reactive system, the app streamlines the process of setting up and running a Secret Santa event. Whether for personal gatherings or workplace celebrations, the Secret Santa App is an ideal solution for bringing festive cheer to any group.

## Features
- **Multi-Language Support**: The app is available in English, Spanish, and Italian.
- **FlatifyCss Styling**: Utilizes the flatifyCss library for a sleek and modern UI.
- **Dynamic Navigation**: A responsive Navbar component enhances user navigation.
- **Participant Management**: Users can manage participant lists.
- **Secret Santa Draw Steps**: The app includes multiple steps for the Secret Santa draw process, ensuring a fun and engaging experience.
- **Reactive State Management**: Utilizes Vue's reactive system for efficient state management.

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```sh
   git clone [repository-url]
   ```
2. Navigate to the project directory:
   ```sh
   cd secret-santa
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the App
- To run the app in development mode:
  ```sh
  npm run dev
  ```
- To build the app for production:
  ```sh
  npm run build
  ```

## Project Structure
- `components`: Includes Navbar and Busy components.
- `router`: Manages routing with Vue Router, including routes for the draw steps.
- `stores`: Global store for managing app state, including participant list and language settings.
- `translations`: Localization files for English, Spanish, and Italian.
- `views`: Vue components for different pages, including Home and draw steps.

## Contributing
We welcome contributions to the Secret Santa App! Please read our contributing guidelines for more information on how to get involved.