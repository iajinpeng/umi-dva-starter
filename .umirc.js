export default {
  plugins: [
    ['umi-plugin-routes', {
      exclude: [
        /models/,
        /services/,
      ],
    }],
    ['umi-plugin-dva', { immer: true }],
  ],
  proxy: {
    "/api": {
      "target": "http://localhost:3004",
      "changeOrigin": true,
    }
  },
  pages: {
    // 路由权限控制
    '/hero': {Route: './src/routes/IsShowHero.js'}
  }
}
