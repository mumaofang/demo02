import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/demo2",
  build: {
  
    // 基础配置
    outDir: 'dist',           // 输出目录（默认 dist）
    assetsDir: 'assets',       // 静态资源存放目录（相对于 outDir）
    sourcemap: true,           // 是否生成 sourcemap（调试用）
    minify: 'terser',          // 压缩工具（默认 terser，可选 'esbuild'）
    emptyOutDir: true,         // 构建前清空输出目录
    target: 'esnext',          // 构建目标（默认 'modules'，兼容旧浏览器可设为 'es2015'）

    // 分块策略
    rollupOptions: {
      output: {
        manualChunks(id) {    // 自定义代码分块
          if (id.includes('node_modules')) {
            return 'vendor';  // 第三方依赖打包到 vendor 文件
          }
        },
        chunkFileNames: 'js/[name]-[hash].js',  // 分块文件名格式
        assetFileNames: 'assets/[name]-[hash].[ext]', // 静态资源文件名格式
      }
    }
  }
})
