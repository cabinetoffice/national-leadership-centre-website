# NLC website

[![Netlify Status](https://api.netlify.com/api/v1/badges/85c54ee5-70b1-49a2-8a80-4834309ac629/deploy-status)](https://app.netlify.com/sites/nlc-website/deploys)

## Deployment instructions

This Github repo is connected to Netlify, which builds production off commits to the master branch. Netlify also builds deploy previews for pull requests.

## Local development

### With Docker

The website can be found in the ```_site``` directory.

To actively develop run:

    docker-compose up serve

If you make any changes to ```package.json``` then you can run the following to update your local image:

    docker-compose build serve

### Without Docker

1. Use Node.js v10
2. Run `npm install`
3. Run `npm run serve` to start your local development server 
