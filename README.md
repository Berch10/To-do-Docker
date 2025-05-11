# To-Do App

This is a simple to-do application built with TypeScript and JavaScript.
The app allows users to manage their tasks by creating, editing, deleting, and marking them as done.
It also supports sorting and filtering tasks based on various criteria.

## Team members
- Ivan Dobrodeev
- Markus Berchtenbreiter

## Prerequisites

Before building and running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

Clone the repository:
   ```bash
   git clone git@git.thm.de:pi2-ss25-fr3d1/to-do-app.git
   cd to-do-app
   ```
## Start

This will:

- Install all dependencies

- Build the application

- Create the Docker image

- Start the container using Docker Compose

- Mount a named volume to persist the data

Once started, the app will be available at:
http://localhost:8080
```bash
npm run start:compose
```

## Alternative manual commands (optional)

This will:
- Install all dependencies
- Build the image
- Build the application
```bash
npm run build:docker
```

- Start the container (without Docker Compose). Data will not be persistent with this method:
```bash
npm run start:docker
```


