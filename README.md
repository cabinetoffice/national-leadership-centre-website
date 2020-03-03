[![Netlify Status](https://api.netlify.com/api/v1/badges/bbf28a84-4bdb-407b-a2fa-32628d27fa3d/deploy-status)](https://app.netlify.com/sites/eleventy-netlify-boilerplate/deploys)

# National Leadership Centre website

## To Install 11ty theme
Docs: https://www.11ty.io/docs/

Pre-requisite knowledge.

1. 11ty is a static site generator.
2. Using 11ty and Netlify together is a workflow, not a framework - https://github.com/danurbanowicz/eleventy-netlify-boilerplate
3. Built on Nunjucks - https://css-tricks.com/killer-features-of-nunjucks/

## To install and start local environment:
1. Use Node.js v10
2. cd [my project]
3. Run `npm install`
4. Run `npm run serve

** Although npm run serve runs multiple scripts simultaneously, for other build scripts, please refer to the package.json file.

## Technical Approach
#### Building blocks
The site uses a re-useable block based HTML structure, for easy separation of styling and to ensure blocks can be recycled easily. Also, this methodology is used as a way of future-proofing; if the site is moved to another platform, the blocks can be used independently of any third party syntax conventions:

	<div class=“content-area”>
		<div class=“header-block”> <!-- block parent -->
			<div class=“container”> <!— internal container to set content widths -->  
				[child elements eg h1, h2, p, ul, ol} <!-- elements parent -->
			</div>
		</div>
		<div class=“content-block”>[ as above ]</div>
		<div class=“content-block”>[ as above ]</div>
		<div class=“content-block”>[ as above ]</div>
	</div>

Blocks are seperated in the /components/ folder, ready to be referenced in a template or page file. An example of a commonly used block is found in the breadcrumbs.njk file. This handles the breadcrumbs which are found on most pages excluding the home page.

#### Available Blocks
- Carousel block
- Carousel items block
- Media block
- Tiles block
- Tile block
- Banner block
- Breadcrumbs block
- PDF Left block
- Team block
- Team block item
- Primary page header block
- Section header block
- Two column block
- Vimeo embed block
- Media full width block (The addition of a the .media-full-width class to whatever block).
- Footer block
- Social media links block

## Sass implementation
#### node-sass
This project uses node-sass as the css pre-processor. There are subtle differences between sass and node-sass that are important to note. The syntax is the same, but the terminal commands for the watching and compiling of the css is slightly different if you are used to creating a sass directory without npm.

This for compiling reference - https://stackoverflow.com/questions/31448114/how-to-compile-or-convert-sass-scss-to-css-with-node-sass-no-ruby

1. Sass is installed with npm, then compiling is aliased in the package.json file.
2. scss files are split up into a logical structure, then imported into the single sass/styles.scss file.
3. sass/styles.scss file is then compiled into css/styles.css

#### govuk-frontend
There are some instances where helpers are imported from the govuk-frontend framework. For example, in the accessibility scss file, we import the visually-hidden mixin styles.

## Website Media Sizing
#### Imagery

The site uses specifically sized imagery in multiple places. Below is a table for the location of the imagery used, and it's sizing requirements.

When cropping an image for use, the cropping areas need to be taken into account as well. Please see below of where an image has been correctly cropped for use on mobile and desktop screens. The positioning of the image will be handled by css, but its important to note where the optimum crop lines are for optimum rendering on both screen sizes.

| Location                                             | Live URL                                                                                                            | Required Size (px)  |
| -----------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------:| -------------------:|
| Home page carousel	                               | nationalleadership.gov.uk/                                                                                          | 1440 x 552          |
| Primary pages (The Network, Our Programme, Research) | nationalleadership.gov.uk/the-network/ nationalleadership.gov.uk/our-programme/ nationalleadership.gov.uk/research/ | 1440 x 762          |
| Meet the board headshots                             | nationalleadership.gov.uk/who-we-are/board/                                                                         | 224 x 224           |

#### Vimeo Embed
The vimeo embed supports any size embed, although the padding of the embed wrapper, defined in css, may need to be amended.

More informartion on embed paddings here - <a target="_blank" href="https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php">CSS Tricks - Fluid Width Video</a>

## Documents

<a target="_blank" href="https://docs.google.com/document/d/1tJeeV33Q6Vxt8RVTmCUvgRMaFGkGsCHxezalOTrfg-Y/edit?usp=sharing"> Project Launchpad </a>

<a target="_blank" href="https://drive.google.com/file/d/1lKA-CzW9Av9XN6Hk1y7_e8ACbWOuQ049/view"> Accessibility Report </a>

<a target="_blank" href="https://docs.google.com/document/d/1HXATEpLWG0j7z4KHLQYqbGHCGB7lZEW6i8R3RrySoFU/edit"> Style Guide </a>

<a target="_blank" href="https://docs.google.com/spreadsheets/d/1PTgir2Rxk4SDAWBqTZVcrfAJ516UFOj6s2o37qTYOTc/edit#gid=459751473">Content Modelling NLC (Lego Blocks)</a>


## Platforms

<a target="_blank" href="https://www.figma.com/file/xewdA0mJKkZqh3XIBYu8Gx/WIP-1?node-id=672%3A2405">Figma designs</a>

<a target="_blank" href="https://app.clubhouse.io/nationalleadershipcentre/epic/858/website-version-2">Clubhouse</a>

<a target="_blank" href="https://github.com/cabinetoffice">Github - Cabinet Office</a>

## CMS Migration

Although the site uses a static site generator to render markdown as html, the site has very much been built with the expectation that it will be migrated to a more functional platform. With this is mind, the block based approach, as mentioned in the Technical Approach section above, has been used, in order to be in line with modern site architecture, as used by the Wordpress Gutenberg editor and Drupal paragraphs. See below links for more info:

<a href="https://wordpress.org/gutenberg/">Wordpress Gutenberg Editor ></a>

<a href="https://www.drupal.org/project/paragraphs">Drupal Paragraphs ></a>