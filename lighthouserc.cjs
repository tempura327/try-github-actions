module.exports = {
  ci: {
    collect: {
      staticDistDir: './src',
    },
    upload: {
      // Choices of target: "lhci", "temporary-public-storage", "filesystem"

      // https://github.com/GoogleChrome/lighthouse-ci/issues/144
      // 沒有用AWS、GCP之類的Lighthouse CI server的話target 只能用'temporary-public-storage'，serverBaseUrl也要移除
      // https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/getting-started.md#configuration
      // 有用的話除了用'lhci'，記得要提供server的token

      target: 'temporary-public-storage',

      // 使用指令npx lhci wizard，在本地run local server
      // target: 'lhci',
      // local server遇到 ERROR: request to http://localhost:9001/v1/projects/lookup failed LHCI server not reachable
      // serverBaseUrl:'http://localhost:9001',
      // token: '8dd0012c-4703-492b-ab0d-f6dabf2991f4'
      // 先借用別人的server
      // serverBaseUrl:'https://lhci-canary.herokuapp.com/',
      // 註冊heroku帳號，然後下指令npx heroku authorizations:create
      // token: ''
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