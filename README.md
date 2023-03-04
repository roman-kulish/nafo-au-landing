# NAFO Onboarding Page

## Development Workflow

NPM is used for compilation of scripts as well as live reloading when changes are made.

You will need to run `npm install` before starting to work on with the templates.

Two NPM tasks have been configured to help with your development: -`npm run dev` - This runs the development tasks, compiles and listens to changes in the `assets/styles` folder and lastly, activates a [BrowserSync](https://www.browsersync.io/docs/command-line) server for live reloading.

- `npm run build` - This will be used to build your JavaScript/CSS and make them ready for production. It also activates `PurgeCSS` which is used to remove unused CSS classes from your project, providing a smaller bundle size to ensure that your website loads faster.

As always, we recommend you read the [official TailwindCSS docs](https://tailwindcss.com/), they’re the best way to learn Tailwind at the moment.

## Project Structure

The project uses a mostly flat structure with a key folders and files:

- `assets` folder: This is where all of the projects styles, javascript, fonts (if any) and images live, each on their own folder for better organization. - One thing to keep in mind if that if you want to use the project as is and decide to rename the `styles` folder, be sure to update the `css` NPM script with the new name.
- `browser-sync-config.js`: Pretty self-explanatory, this is the config that BrowserSync uses when we launch our live reload server. Here are the [options docs](https://www.browsersync.io/docs/options) in case you want to customize it.
- `package.json`: Where our dependencies, [browserlist](https://github.com/browserslist/browserslist) config and NPM scripts live. - _Note_: Since we mainly use `yarn` for our local development, you’ll also see a `yarn.lock` file on the project.
- `postcss.config.js`: This is where the styling magic happens, here you can add any postCSS plugin that you fancy, we’re currently only using these at the moment: - TailwindCSS: obviously - [postcss-nested](https://github.com/postcss/postcss-nested): To mimic SCSS nesting - [autoprefixer](https://github.com/postcss/autoprefixer): To support old browsers - [postcss-clean](https://github.com/leodido/postcss-clean): To minify our CSS on production
- `tailwind.config.js`: The project’s tailwind config, here you will find our custom classes and tailwind plugin’s config.

Everything else are the HTML templates.

## The Tailwind Config

Each of our projects make use of `extend` as much as possible for our tailwind config, but we do override some fo the defaults, like the following:

- `fontFamily`: We tend to add our our fonts here and only use those
