[![Netlify Status](https://api.netlify.com/api/v1/badges/bbf28a84-4bdb-407b-a2fa-32628d27fa3d/deploy-status)](https://app.netlify.com/sites/eleventy-netlify-boilerplate/deploys)

# Eleventy Netlify Boilerplate

## Local environment
1. Use Node.js v10
2. Run `npm install`
3. Run `npm run serve` to start your local development server

## node-sass
This project uses node-sass as the css pre-processor. There are subtle differences between sass and node-sass that are important to note. The syntax is the same, but the terminal commands for the watching and compiling of the css is slightly different if you are used to creating a sass directory without npm.

This for compiling reference - https://stackoverflow.com/questions/31448114/how-to-compile-or-convert-sass-scss-to-css-with-node-sass-no-ruby

## govuk-frontend
There are some instances where helpers are imported from the govuk-frontend framework. For example, in the accessibility scss file, we import the visually-hidden mixin styles.