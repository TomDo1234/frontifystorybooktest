# frontity-storybook

This project was bootstrapped with [Frontity](https://frontity.org/).

Developed with node v10.20.1 and npm 6.14.4.

## Jest integration

In order for test results to display correctly, you must have run

```
npm run test:generate-output
```

before, so that `.jest-test-results.json` can be read.

💡**Suggestion:** Make sure in npm scripts, that `test:generate-output` always runs before `storybook` or `build-storybook`.

To add Jest results to a story, look at the following example story:

```js
// SomeComponent.stories.js
// ...
export const Default = () => <SomeComponent />;

// This is where we add Jest:
Default.story = {
  parameters: {
    jest: ["SomeComponent.test.js"]
  }
};
```

Or view the working example in `packages/mars-theme/src/components/TailwindSample/TailwindSample.stories.js`.

If you can't see the test results in the rendered story, try toggling addons by hitting `A` in storybook.

## Using frontity components with Storybook and Jest

In order to use frontity components with Storybook or Jest, you need provide the necessary React context.

E.g. in a Jest test, do something like this:

```js
import { Provider, createStore } from "@frontity/connect";

// Create a store:
// Mock store technique taken from frontity test suite: https://github.com/frontity/frontity/blob/83c5eadb4dffc6275fe4d93b8d379c21449a2727/packages/connect/src/__tests__/connect.tests.jsx#L11
const store = createStore({
  state: {
    // Sensible state value taken from https://github.com/frontity/frontity/blob/83c5eadb4dffc6275fe4d93b8d379c21449a2727/packages/components/__tests__/image.jsdom.tests.tsx#L57
    frontity: {
      rendering: "ssr"
    }
  }
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    // Expose the store to child React components via the provider
    <Provider value={store}>
      <TailwindSample title="test" />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
```

In storybook, you shouldn't have to worry about adding the context, because I've added it globally for every story in `.storybook/preview.js`:

```js
import { Provider, createStore } from "@frontity/connect";

const store = createStore({
  // ...
});

addDecorator(storyFn => <Provider value={store}>{storyFn()}</Provider>);
```

## Good to know

- Jest 25 is installed (not Jest 26) because there are incompatibilities of Jest 26 with Storybook (see e.g. this [GitHub issue](https://github.com/storybookjs/storybook/issues/10631))
- If you run `npm audit` you will see that a lot of the storybook addons come with security vulnerabilities
- The frontity packages that are installed from npm (e.g. `@frontity/components`) are not compiled. This is very unusual and makes them pretty annoying to work with. Basically, we have to tell Jest (in `package.json`) and Storybook (in `.storybook/main.js`) that they should compile third-party code from `frontity`. This also makes TypeScript unhappy, so you will see quite a few TypeScript errors in the console. These come from frontity source files and luckily don't cause any tests or stories to break.
