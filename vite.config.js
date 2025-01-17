import { resolve } from "path";
// eslint-disable-next-line import/namespace
import { defineConfig } from "vite";
// import * as fs from "fs";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    outFile: "index.html",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html")
        // cart: resolve(__dirname, "src/cart/index.html"),
        // product: resolve(__dirname, "src/product_pages/index.html"),
        // listing: resolve(__dirname, "src/product-listing/index.html"),
        // checkout: resolve(__dirname, "src/checkout/index.html")
      },
    },
  },
});