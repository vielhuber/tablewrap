import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
    if (mode === 'dist') {
        return {
            build: {
                outDir: '_public',
                rollupOptions: {
                    input: './_js/tablewrap.js',
                    output: {
                        format: 'iife',
                        inlineDynamicImports: true,
                        entryFileNames: 'tablewrap.js',
                    },
                },
                sourcemap: false,
                minify: false,
                emptyOutDir: false,
            },
        };
    }
    if (mode === 'demo') {
        return {
            build: {
                outDir: '_public',
                rollupOptions: {
                    input: './_js/demo.js',
                    output: {
                        format: 'iife',
                        inlineDynamicImports: true,
                        entryFileNames: 'demo.js',
                    },
                },
                sourcemap: false,
                minify: false,
                emptyOutDir: false,
            },
        };
    }
});
