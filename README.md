# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```




<!-- 

    "openai": "^3.2.1",
    "react": "18.2.0",
    "react-copy-to-clipboard": "^5.1.0",
    "react-dom": "18.2.0",
    "react-hot-toast": "^2.4.0",
    "react-i18next": "^12.2.0",
    "react-markdown": "^8.0.5",
    "react-query": "^3.39.3",
    "react-select": "^5.7.4",
    "react-syntax-highlighter": "^15.5.0",
    "rehype-mathjax": "^4.0.2",
    "remark-gfm": "^3.0.1",
    "remark-math": "^5.1.1",
    "socket.io-client": "^4.7.1",
    "uuid": "^9.0.0"


   pnpm add react-markdown remark-math rehype-katex katex
   yarn add react-markdown remark-math rehype-katex katex
 
 -->