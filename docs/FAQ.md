## FAQ

### Why does this exist?

This starter kit implements best practices like testing, minification, bundling, and so on. It codifies a long list of decisions that you no longer have to make to get rolling. It saves you from the long, painful process of wiring it all together into an automated dev environment and build process. It's also useful as inspiration for ideas you might want to integrate into your current development environment or build process.

### What do the scripts in `package.json` do?

Unfortunately, scripts in `package.json` can't be commented inline because the JSON spec doesn't support comments, so I'm providing info on what each script in `package.json` does here. Scripts with asterisk * are intended to be called directly be the developer

| **Script** | **Description** |
|----------|-------|
| preinstall | Runs automatically before install. Check if there is correct version of nodejs |
| start-message | Display welcome message |
| prestart | Runs automatically before start. Calls `start-message` script |
| start | Runs production server that will serve built application |
| predev | Runs automatically before dev. Calls `start-message` and `clean-dist` scripts |
| dev | Run Webpack compilator with HMR and open browser with BrowserSync |
| lint | Runs ESLint on build related JS files |
| lint:fix | Try to fix all errors related to ESLint |
| lint:watch | Runs ESLint on build related JS files in watch mode |
| clean-dist | Removes everything from the dist folder. |
| remove-dist | Deletes the dist folder. |
| prebuild | Runs automatically before build. Calls `clean-dist` script |
| build | Bundles all JavaScript using webpack and writes it to /dist. |
| test | Runs mocha tests |
| test:cucumber | Runs cucumber tests (needs app run in test environment) |
| test:coverage | open tests coverage report |
| test:watch | run tests in watch mode |
| selenium:install | installs selenium dependencies |
| selenium | starts selenium server |

### Can you explain the folder structure?
```
.
├── .babelrc                  # Configures Babel
├── .dockerignore             # Tells docker which files to ignore
├── .editorconfig             # Configures editor rules
├── .eslintrc                 # Configures ESLint
├── .gitignore                # Tells git which files to ignore
├── .istanbul.yml             # Configure istanbul code coverage
├── .npmrc                    # Configures npm to save exact by default
├── .nvmrc                    # Configures nvm to use correct version of node
├── Dockerfile                # Configures development version of docker container
├── Dockerfile.prod           # Configures production version of docker container
├── LICENSE                   # License file
├── README.md                 # Readme
├── docker-compose-prod.yml   # Configures production version of docker container
├── docker-compose.yml        # Configures development version of docker container
├── package-lock.json         # Lock file used in node version 8+
├── package.json              # Package configuration. The list of 3rd party libraries and utilities
├── wdio.conf.js              # Configures webdriver for cucumber tests
├── webpack.config.dev.js     # Configures webpack for development builds
└── webpack.config.prod.js    # Configures webpack for production builds
├── dist                      # Folder where the build script places the built app. Use this in prod.
├── docs
│   ├── FAQ.md                # This file
├── src                       # Source code
│   ├── favicon.ico           # favicon to keep your browser from throwing a 404 during dev. Not actually used in prod build.
│   ├── index.ejs             # Template for homepage
│   ├── index.js              # Entry point for your app
│   ├── routes.js             # Router for React
│   ├── webpack-public-path.js# Set public path for webpack
│   ├── actions               # Flux/Redux actions. List of distinct actions that can occur in the app.
│   ├── components            # React components
│   ├── constants             # Application constants including constants for Redux
│   ├── containers            # React components that may interact with Redux and are rendering their children prop
│   ├── pages                 # Top-level React components that may interact with Redux and are attached to routes
│   ├── reducers              # Redux reducers. Your state is altered here based on actions
│   ├── services              # Services with logic
│   ├── store                 # Redux store configuration
│   ├── styles                # CSS Styles, typically written in Sass
├── test                      # Tests
├── tools                     # Node scripts that run build related tools
│   ├── build.js              # Runs the production build
│   ├── chalkConfig.js        # Centralized configuration for chalk (adds color to console statements)
│   ├── distServer.js         # Starts webserver and opens final built app that's in dist in your default browser
│   ├── nodeVersionCheck.js   # Checks version of node
│   ├── srcServer.js          # Starts dev webserver with hot reloading and opens your app in your default browser
│   ├── startMessage.js       # Display welcome message
│   └── testSetup.js          # Configures mocha
```

### What are the dependencies in package.json used for?

| **Dependency** | **Use** |
|----------|-------|
| express | Serves file on production |


| **Dev Dependency** | **Use** |
|----------|-------|
| autoprefixer | Automatically adds vendor prefixes, using data from Can I Use |
| babel-cli | Babel Command line interface |
| babel-core | Babel Core for transpiling the new JavaScript to old |
| babel-loader | Adds Babel support to Webpack |
| babel-plugin-react-display-name | Adds displayName to React.createClass calls |
| babel-plugin-transform-decorators-legacy | Adds support for decorators |
| babel-plugin-transform-react-constant-elements | Performance optimization: Hoists the creation of elements that are fully static to the top level. reduces calls to React.createElement and the resulting memory allocations. [More info](https://medium.com/doctolib-engineering/improve-react-performance-with-babel-16f1becfaa25#.2wbkg8g4d) |
| babel-plugin-transform-react-remove-prop-types | Removes propTypes in production version of built application |
| babel-polyfill | Adds polyfills |
| babel-preset-latest | Babel preset for ES2015, ES2016 and ES2017 |
| babel-preset-react | Adds JSX support to Babel |
| babel-preset-react-hmre | Hot reloading preset for Babel |
| babel-preset-stage-1 | Include stage 1 feature support in Babel |
| babel-register | Compiles files on the fly |
| browser-sync | Supports synchronized testing on multiple devices and serves local app on public URL |
| chai | Assertion library for use with Mocha |
| chai-as-promised | Plugin to chai for easily testing of Promises |
| chalk | Adds color support to terminal |
| connect-history-api-fallback | Support reloading deep links |
| css-loader | Add CSS support to Webpack |
| cucumber | BDD testing with gherkin syntax |
| enzyme | Simplified JavaScript Testing utilities for React |
| eslint | Lints JavaScript |
| eslint-config-brainhub | Brainhub's set of rules for eslint |
| eslint-watch | Wraps ESLint to provide file watch support and enhanced command line output |
| extract-text-webpack-plugin | Extracts CSS into separate file for production build |
| file-loader | Adds file loading support to Webpack |
| html-webpack-plugin | Generates custom index.html for each environment as part of webpack build |
| isparta | Code coverage tool |
| istanbul | Code coverage tool |
| json-loader | Adds json loading support to Webpack |
| lodash | A modern JavaScript utility library |
| mocha | JavaScript testing library |
| node-sass | Adds SASS support to Webpack |
| postcss-loader | Adds PostCSS support to Webpack |
| prop-types | Adds types checker to React |
| react | React library |
| react-dom | React library for DOM rendering |
| react-fa | FontAwesome components for React |
| react-redux | Redux library for connecting React components to Redux |
| react-router | React library for routing |
| react-router-redux | Integration for react-router to works together with redux |
| react-test-renderer | React renderers that can be used for testing purposes |
| redux | Library for unidirectional data flows |
| redux-immutable-state-invariant | Helper for preventing redux state from mutation |
| sass-loader | Adds Sass support to Webpack |
| selenium-standalone | Installs and runs selenium server via CLI |
| sinon | Standalone test spies, stubs and mocks for JavaScript |
| sinon-chai | Extends Chai with assertions for the Sinon.JS mocking framework |
| style-loader | Add Style support to Webpack |
| superagent | Library for making requests |
| url-loader | Adds file loading support to Webpack |
| wdio-cucumber-framework | Adapater for cucumber testing framework |
| wdio-spec-reporter | Reporter that creates 'spec'-style reports |
| webdriverio | Library for testing in Selenium |
| webpack | Bundler with plugin system and integrated development server |
| webpack-dev-middleware | Used to integrate Webpack with Browser-sync |
| webpack-hot-middleware | Use to integrate Webpack's hot reloading support with Browser-sync |

### Where are the files being served from when I run `npm run dev`?
Webpack serves your app in memory when you run `npm run dev`. No physical files are written. However, the web root is /src, so you can reference files under /src in index.html. When the app is built using `npm run build`, physical files are written to /dist and the app is served from /dist.

### Where is index.html?
It's generated by webpack using htmlWebpackPlugin. This plugin dynamically generates index.html based on the configuration in webpack.config. It also adds references to the JS and CSS bundles using hash-based filenames to bust cache. Separate bundles for vendor and application code are created and referencing within the generated index.html file so that vendor libraries and app code can be cached separately by the browser. The bundle filenames are based on the file's hash, so the filenames only change when the file contents change. For more information on this, read [Long-term caching of static assets with Webpack](https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.4aeatmtfz) and [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)

### How is Sass being converted into CSS and landing in the browser?
Magic! Okay, more specifically, we're handling it differently in dev (`npm run dev`) vs prod (`npm run build`)

When you run `npm run dev`:

 1. The sass-loader compiles Sass into CSS
 2. Webpack bundles the compiled CSS into bundle.js. Sounds odd, but it works!
 3. bundle.js contains code that loads styles into the &lt;head&gt; of index.html via JavaScript. This is why you don't see a stylesheet reference in index.html. In fact, if you disable JavaScript in your browser, you'll see the styles don't load either.

The approach above supports hot reloading, which is great for development. However, it also create a flash of unstyled content on load because you have to wait for the JavaScript to parse and load styles before they're applied. So for the production build, we use a different approach:

When you run `npm run build`:

 1. The sass-loader compiles Sass into CSS
 2. The [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) extracts the compiled Sass into styles.css
 3. buildHtml.js adds a reference to the stylesheet to the head of index.html.

For both of the above methods, a separate sourcemap is generated for debugging Sass in [compatible browsers](http://thesassway.com/intermediate/using-source-maps-with-sass).

### I don't like the magic you just described above. I simply want to use a CSS file.
No problem. Reference your CSS file in index.html, and add a step to the build process to copy your CSS file over to the same relative location /dist as part of the build step. But be forwarned, you lose style hot reloading with this approach.

### How do I deploy this?
`npm run build`. This will build the project for production. It does the following:
* Minifies all JS
* Sets NODE_ENV to prod so that React is built in production mode
* Places the resulting built project files into /dist. (you can expose it to the world via `npm start`).

### How do I debug?
Since browsers don't currently support ES6, we're using Babel to compile our ES6 down to ES5. This means the code that runs in the browser looks different than what we wrote. But good news, a [sourcemap](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) is generated to enable easy debugging. This means your original JS source will be displayed in your browser's dev console.
*Note:* When you run `npm run dev`, no JS is minified. Why? Because minifying slows the build. So JS is only minified when you run the `npm run build` script. See [more on building for production below](https://github.com/coryhouse/react-slingshot#how-do-i-deploy-this).

Also note that no actual physical files are written to the filesystem during the dev build. **For performance, all files exist in memory when served from the webpack server.**. Physical files are only written when you run `npm run build`.

**Tips for debugging via sourcemaps:**

 1. Browsers vary in the way they allow you to view the original source. Chrome automatically shows the original source if a sourcemap is available. Safari, in contrast, will display the minified source and you'll [have to cmd+click on a given line to be taken to the original source](http://stackoverflow.com/questions/19550060/how-do-i-toggle-source-mapping-in-safari-7).
 2. Do **not** enable serving files from your filesystem in Chrome dev tools. If you do, Chrome (and perhaps other browsers) may not show you the latest version of your code after you make a source code change. Instead **you must close the source view tab you were using and reopen it to see the updated source code**. It appears Chrome clings to the old sourcemap until you close and reopen the source view tab. To clarify, you don't have to close the actual tab that is displaying the app, just the tab in the console that's displaying the source file that you just changed.
 3. If the latest source isn't displaying the console, force a refresh. Sometimes Chrome seems to hold onto a previous version of the sourcemap which will cause you to see stale code.

### Why does the build use npm scripts instead of Gulp or Grunt?
In short, Gulp is an unnecessary abstraction that creates more problems than it solves. [Here's why](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n).

### How do I handle images?
Via [Webpack's file loader](https://github.com/webpack/file-loader). Example:

```
<img src={require('./src/images/myImage.jpg')} />
```

Webpack will then intelligently handle your image for you. For the production build, it will copy the physical file to /dist, give it a unique filename, and insert the appropriate path in your image tag.

### I can't access the external URL for Browsersync
To hit the external URL, all devices must be on the same LAN. So this may mean your dev machine needs to be on the same Wifi as the mobile devices you're testing.

### What about the Redux Devtools?
Install the [Redux devtools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) in Chrome Developer Tools. If you're interested in running Redux dev tools cross-browser, Barry Staes created a [branch with the devtools incorporated](https://github.com/coryhouse/react-slingshot/pull/27).

### Hot reloading isn't working!
Hot reloading doesn't always play nicely with stateless functional components at this time. [This is a known limitation that is currently being worked](https://github.com/gaearon/babel-plugin-react-transform/issues/57). To avoid issues with hot reloading for now, use a traditional class-based React component at the top of your component hierarchy.
