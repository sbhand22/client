# Real-Time Code Collaboration Frontend

This is the frontend for the **Real-Time Code Collaboration** web app. It is built using modern web technologies like React and Vite, providing a real-time collaborative code editing experience with a rich set of features for developers to code together seamlessly.

## Introduction

The Real-Time Code Collaboration frontend is designed to offer an intuitive user interface for developers to collaborate on code in real-time. It supports multiple rooms, where users can share code, edit files, execute code, and chat, all in a highly interactive and responsive environment.

## Demo Video

[Click here to watch the demo video](https://youtu.be/ZARH1xeNyQM)

## Screenshots

| Screenshot 1 | Screenshot 2 | Screenshot 3 |
| ------------ | ------------ | ------------ |
| ![Screenshot 1](https://raw.githubusercontent.com/sbhand22/code-colab-client/refs/heads/main/src/assets/demo%20images/Screenshot%20(3).png) | ![Screenshot 2](https://raw.githubusercontent.com/sbhand22/code-colab-client/refs/heads/main/src/assets/demo%20images/Screenshot%20(4).png) | ![Screenshot 3](https://raw.githubusercontent.com/sbhand22/code-colab-client/refs/heads/main/src/assets/demo%20images/Screenshot%20(5).png) |
| Screenshot 4 | Screenshot 5 | Screenshot 6 |
| ![Screenshot 4](https://raw.githubusercontent.com/sbhand22/code-colab-client/refs/heads/main/src/assets/demo%20images/Screenshot%20(6).png) | ![Screenshot 5](https://raw.githubusercontent.com/sbhand22/code-colab-client/refs/heads/main/src/assets/demo%20images/Screenshot%20(7).png) | ![Screenshot 6](https://raw.githubusercontent.com/sbhand22/code-colab-client/refs/heads/main/src/assets/demo%20images/Screenshot%20(8).png) |
| Screenshot 7 | Screenshot 8 | Screenshot 9 |
| ![Screenshot 7](https://raw.githubusercontent.com/sbhand22/code-colab-client/refs/heads/main/src/assets/demo%20images/Screenshot%20(9).png) | ![Screenshot 8](https://raw.githubusercontent.com/sbhand22/code-colab-client/refs/heads/main/src/assets/demo%20images/Screenshot%20(10).png) | ![Screenshot 9](https://raw.githubusercontent.com/sbhand22/code-colab-client/refs/heads/main/src/assets/demo%20images/Screenshot%20(11).png) |

### Key Features

- Collaborative code editing with syntax highlighting and auto-language detection.
- Real-time communication powered by WebSockets.
- File creation, modification, and organization.
- Download the entire project as a zip file.
- User presence tracking with join/leave notifications.
- Real-time chat functionality within collaboration rooms.
- Collaborative drawing support.
- Customizable themes, fonts, and UI elements for a personalized experience.

## Technologies and Libraries Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server for modern web projects.
- **TypeScript**: JavaScript with static types.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **CodeMirror**: A versatile text editor implemented in JavaScript for real-time code editing.
- **Socket.IO Client**: Provides real-time communication between the frontend and backend.
- **React Router**: A library for routing in React applications.
- **Axios**: A promise-based HTTP client for making requests to the backend server.
- **uuid**: A library to generate unique identifiers for users and sessions.
- **react-icons**: A popular icon set for React.
- **jszip**: For generating and downloading the codebase as a zip file.


##Backend Repository
The backend server for this project is hosted separately. You can find the backend repository here:
https://github.com/sbhand22/code-colab-server

## Prerequisites

To run this project, you will need the following installed on your machine:

- **Node.js** (v14.x or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)

## Getting Started

Follow these instructions to set up and run the frontend project locally.

1. Clone the Repository
First, clone the repository to your local machine:
```bash
git clone <repo>
cd <root>
```

2. Install Dependencies
Once inside the project directory, run the following command to install all dependencies:
```bash
npm install
```

3. Create a .env File
Create a .env file in the root directory of the project and add any necessary environment variables. Example:
```bash
VITE_BACKEND_URL=<your backend server link>
```

4. Running the Server
To start the backend server, run the following command:

```bash
npm run dev

```

