# LYF Website CMS

The [LYF Website](https://github.com/SLoh4137/lyf-website) uses [Sanity.io](https://www.sanity.io/) to store content.

# Getting Started

1. Download the repo to your computer: `git clone git@github.com:TACL-LYF/lyf-website-cms.git`
2. Add the Sanity CLI using `npm install -g @sanity/cli` or `yarn global add @sanity/cli`
3. Run `yarn install` in order to download all the required packages
    - See [installing yarn](https://classic.yarnpkg.com/lang/en/docs/install) if you don't yet have yarn on your computer
4. In `lyf-website-cms`, you can run `yarn run dev` to see a locally running version of Sanity Studio
5. Run `sanity login` to get the right push credentials

- Login using the LYF Technology email and password option

5. Use `yarn run deploy` to publish your changes.

- This will run a combination of `sanity deploy` which deploys the changes and `sanity graphql deploy` which deploys the GraphQL changes

Sanity has a more [comprehensive getting started guide](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme) if you want to learn more!

# Basic Structure

Sanity is built around schemas that define the kinds of content we support. Once we define a schema, we agree on what fields we can add and what fields will exist when we pull that content from the server. We define _schemas_ for _documents_ that store content. We can even define some fields to be re-used in multiple _documents_ by creating _objects_.

- [config/](/config/): Stores the configuration files for Sanity. Not super necessary for us to manage
- [plugins/](/plugins/): Managed by Sanity. We can download additional plugins via [Sanity's plugin system](https://www.sanity.io/plugins)
- [schemas/](/schemas/): The all-important folder that stores all of our supported schemas!
- [static/](/static/): Sanity hosts a site for us to add content, and if we want assets in a known file path (for example: favicons) we can store them here
- [deskStructure.ts](deskStructure.ts): Sanity lets us [define how we want to disply and organize documents](https://www.sanity.io/docs/structure-builder-introduction). This file defines what we want that structure to look like
- [package.json](package.json): Found in all npm packages. Defines a bunch of properties of the package including what other packages we depend on.
- [sanity.json](sanity.json): Sanity's configuration file
