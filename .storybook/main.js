module.exports = {
  stories: [
    "../packages/mars-theme/src/**/*.(story|stories).(js|mdx)",
    "../docs/**/*.(story|stories).(js|mdx)",
  ],
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-jest/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-a11y/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-backgrounds/register",
    "@whitespace/storybook-addon-html/register",
  ],
  webpackFinal: (config) => {
    // Frontity components are not compiled (!) so we have to make sure we compile them ourselves:
    const tsRule = config.module.rules.find((rule) => /ts/.test(rule.test));
    tsRule.exclude = /node_modules\/(?!(@frontity\/components|@frontity\/error|@frontity\/connect)\/).*/;
    return config;
  },
};
