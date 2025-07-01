# AcmeInc – React + TypeScript + Vite

This project is a minimal React application bootstrapped with [Vite](https://vitejs.dev/), using TypeScript and [Tailwind CSS](https://tailwindcss.com/) for styling. It demonstrates a simple data table with editable rows and a detail view, using [react-router-dom](https://reactrouter.com/) for routing.

## Features

- ⚡️ Fast development with Vite and HMR
- 🦄 Type-safe codebase with TypeScript
- 🎨 Utility-first styling with Tailwind CSS
- 🧭 Routing with React Router
- 📝 Editable table rows and detail view
- 🧹 Linting with ESLint and recommended plugins

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```sh
npm run build
```

### Lint

```sh
npm run lint
```

## Project Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── DetailView.tsx
│   │   └── TableView.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── tsconfig*.json
└── ...
```

- [`src/components/TableView.tsx`](src/components/TableView.tsx): Displays a table of data with inline editing.
- [`src/components/DetailView.tsx`](src/components/DetailView.tsx): Shows details for a selected row.
- [`src/App.tsx`](src/App.tsx): Sets up routing between the table and detail views.

## ESLint Configuration

The project uses ESLint with recommended rules for JavaScript, TypeScript, and React. See [`eslint.config.js`](eslint.config.js) for details.

To enable type-aware linting, update your config as shown below:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      // ...other configs
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

## License

This project is licensed under the MIT License.
