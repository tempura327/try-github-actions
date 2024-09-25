module.exports = {
  ci: {
    collect: {
      staticDistDir: './src',
    },
    upload: {
      // target: 'temporary-public-storage',
      target: 'https://tempura327.github.io/try-github-actions/',
      
    },
    // settings: {
    //   configPath: './lighthouse-config.js',
    // }
  },
};

// Error [ERR_REQUIRE_ESM]: require() of ES Module /home/runner/work/try-github-actions/try-github-actions/lighthouserc.js from /opt/hostedtoolcache/node/18.20.4/x64/lib/node_modules/@lhci/cli/node_modules/@lhci/utils/src/lighthouserc.js not supported.
// 查到把副檔名改.mjs沒用
// https://github.com/GoogleChrome/lighthouse-ci/issues/973

// 實際是過改成export default沒有
// 實際是過把package.json內的 "type": "module" 刪掉有用