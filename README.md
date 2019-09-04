# NLC website

[![Netlify Status](https://api.netlify.com/api/v1/badges/85c54ee5-70b1-49a2-8a80-4834309ac629/deploy-status)](https://app.netlify.com/sites/nlc-website/deploys)

## Deployment instructions

This Github repo is connected to Netlify, which builds production off commits to the master branch. Netlify also builds deploy previews for pull requests.

## Local development

### With Docker

You can build the site using docker-compose:

    docker-compose up

The website can be found in the ```_site``` directory.

To actively develop run:

    docker-compose up serve

### Without Docker

1. Use Node.js v10
2. Run `npm install`
3. Run `npm run serve` to start your local development server 
