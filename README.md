![Logo](https://knowledge.liveperson.com/images/logo.svg)

# LivePerson Knowledge Center

**This site is run by the Product Strategy and Experience team, and maintained by the Developer Experience team. Please contact dx-lp@liveperson.com for issues.**

The repository generates LivePerson’s Knowledge Center, which can be found at [knowledge.liveperson.com](https://knowledge.liveperson.com/). The site is generated using Gatsby, while the content is managed using Kontent.ai. Please open an issue if you find an issue with the documentation, site structure, meta, or anything else.

(For developer documentation, visit the [LivePerson Developer Center](https://developers.liveperson.com/).)

## Notes on content and code

When contributing to this repository, please observe the following:

### Special formatting

- In Kontent you can precede a paragraph with the following to highlight the content.

- Insert a new component - Content box - Widget:

- `Note (blue)` — important info to pay attention to

- `Alert (red)` — warnings or alerts (anything that indicates a problem)

- `Deprecation (black)` — info on features that are discouraged or no longer supported

- `Tip (green)` — useful suggestions or ideas

- `Info (gray)` — complementary or auxiliary info

## 🚀 Installation

Install with yarn:

```bash

  yarn

  yarn start



  yarn clean

  yarn format

```

## Tooling

- Gatsby

- Kontent.ai for CMS

- Gatsby Cloud

## 🧐 What’s inside?

A quick look at the top-level files and directories you’ll see in a Gatsby project like this one.

.
/
|-- /public
|-- /src
|-- /assets
|-- capabilities.json
|-- reportbuilder.json
|-- /components
|-- /pages
|-- /static
|-- lpchat.js
|-- gatsby-config.js
|-- gatsby-node.js
|-- gatsby-ssr.js
|-- gatsby-browser.js
|-- tailwind.config.js

1. **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9. **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

13. **`/src/components/widgets/LpRichTextElement.jsx`**: This component is a wrapper around the @kentico/gatsby-kontent-components/RichTextElement component. It's purpose is to provide customized components from the Kentico Kontent project. like the Table component, the TableMC component, the FaqWidgetItem component, the video element, the image widget, the iframe widget, etc.

14. **`/pages`**: This directory will contain all of the different types of pages, the homepage, the general template type is called - page-general-type.jsx, archive page for release notes and what's new is call page, and single page template, is called post, for example post whats new, insex is the homepage and search is the search results page.

## Algolia

Algolia is the tool we use for the search bar. It generates a list of searchable items by indexing it in their dashboard which is then pulled into the search bar within the project
To get the latest data to be added into Algolia simply do yarn build on the production branch (master)

## Licensing

All usage of the contents, documentation or code found in this repository is subject to the LivePerson API Terms of Use.
