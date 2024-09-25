export default {
  ci: {
    collect: {
      staticDistDir: './src/index.html',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};