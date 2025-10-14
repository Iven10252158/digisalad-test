/// <reference types="vite/client" />

// Allow importing .vue files in TypeScript
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Allow importing SVG files as URLs
declare module '*.svg' {
  const src: string
  export default src
}

