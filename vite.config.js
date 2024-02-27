import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const serverPort = process.env.SERVER_PORT || 3001; // Default port is 3000

  return {
    plugins: [react()],
    server: {
      port: serverPort,
      host: true
    },
  };
});
