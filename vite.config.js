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
                        entryFileNames: 'demo.js',
                    },
                },
                sourcemap: false,
                minify: false,
                emptyOutDir: false,
            },
        };
    }
    if (mode === 'package') {
        return {
            build: {
                outDir: '_build/_js',
                lib: {
                    entry: {
                        tablewrap: './_js/tablewrap.js',
                        demo: './_js/demo.js',
                    },
                    formats: ['cjs'],
                    fileName: (format, entryName) => entryName + '.js',
                },
                rollupOptions: {
                    output: {
                        exports: 'named',
                    },
                },
                sourcemap: false,
                minify: false,
                emptyOutDir: false,
            },
        };
    }
});
