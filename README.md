# Block Editor

## Description

This project is a web application built with React and TypeScript using the Next.js framework. It includes a dynamic editor component and allows users to add a cover image from a random image source. The UI is inspired from Notion and is a proof of concept to integrate into a much larger application I am working on.

## Features

- Dynamic import of the Editor component
- Fetch and display a random cover image
- Responsive design with Tailwind CSS
- Editable text area with autosize functionality

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/venu-prasath/block-editor.git
   ```
2. Navigate to the project directory:
   ```sh
   cd block-editor
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Components

### Cover

- A customizable cover image area. This can be randomly generated or uploaded from local device.

### Editor

- Dynamically imported component for text editing.

### TextareaAutosize

- A text area that automatically adjusts its height based on the content.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Technologies

- [React](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Picsum](https://picsum.photos/)
- [Uploadthing](https://uploadthing.com)

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---
