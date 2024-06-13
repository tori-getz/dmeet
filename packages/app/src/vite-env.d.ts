/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_WSS_PROVIDER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
