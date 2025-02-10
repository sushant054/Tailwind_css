 # Tailwind CSS Setup with Vite

## 1. Install Tailwind CSS
Install `tailwindcss` and `@tailwindcss/vite` via npm.

### Terminal Command:
```
npm install tailwindcss @tailwindcss/vite
```

### Configure the Vite configuration
```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```
## Import Tailwind CSS in index.css file 
```
@import "tailwindcss";
```

## Start your build process
```
npm run dev
```
### Official Website:

https://tailwindcss.com/docs/installation/using-vite