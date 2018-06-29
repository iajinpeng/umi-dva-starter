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
  pages: {
    // 路由权限控制
    '/hero': {Route: './src/routes/IsShowHero.js'}
  }
}
