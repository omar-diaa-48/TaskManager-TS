# Task Manager App (React Native & TypeScript)

A clean, lightweight, and intuitive mobile application built with **React Native** and **Expo** to manage daily tasks. This project demonstrates core mobile development concepts including state management, TypeScript implementation, and responsive UI design.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Expo Go](https://expo.dev/client) app on your iOS or Android device to preview.

### Installation
1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd TaskManager
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npx expo start
    ```

### Running the App
- **Android:** Scan the QR code using the **Expo Go** app.
- **iOS:** Scan the QR code using your **Camera** app.
- **Web:** Press `w` in the terminal to open in a web browser.

---

## ✨ Features
- **Add Task:** Create new tasks with a brief description using a clean input field.
- **Mark as Complete:** Toggle the status of a task. Completed tasks are visually distinguished by a strike-through effect and dimmed color.
- **Delete Task:** Remove tasks from your list with a single tap.
- **Keyboard Optimization:** Uses `KeyboardAvoidingView` to ensure the input field is never blocked by the system keyboard.

---

## 📁 Folder Structure
The project follows a modular architecture:
- `src/components/`: Reusable UI elements (e.g., Task item, Custom Button).
- `src/interfaces/`: TypeScript definitions and interfaces.
- `App.tsx`: Main entry point and layout container.