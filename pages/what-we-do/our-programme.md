---
title: Our Programme
metadesc: The NLC Leadership Programme invites a selection of the UK's most
  senior leaders from across public service to come together for a challenging,
  supportive and stretching twelve-month development programme.
leader: The NLC Leadership Programme empowers senior leaders from across the
  public sector to work together to realise their potential.
image: /static/img/programme-desktop.jpg
permalink: /our-programme/index.html
tags: primary
navtitle: Our Programme
order: 2
paragraph_one: Every year the National Leadership Centre invites a selection of
  the UK's most senior leaders from across the spectrum of public services to
  come together for a challenging, supportive and stretching twelve month
  development programme.
image_two: /static/img/hands.jpg
heading_one: "Key information:"
list_one: |-
  
  * 100 senior public leaders from across all public services
  * Three residential modules over 12 months
  * Be inspired by world leaders in systems and collective leadership
  * In-depth psychometric analysis and coaching support
  * At locations across England and online
paragraph_two: >-
  The most difficult challenges faced by public services are complex and
  cross-cutting. People in charge of organisations are trying to achieve
  strategic outcomes that they can only partly influence. Being accountable for
  the whole organisation means overseeing a wider range of expertise.


  To help people make the best of a move into these roles, the National Leadership Centre is delivering a flagship leadership programme, the first of its kind in bringing together top leaders from across the country.
image_three: /static/img/NLF_hall.jpg
image_three_alt: A conference, with a banner reading National Leadership Centre in the foreground.
quote:
  quote_text: We support leaders to become more adaptive, connected, open,
    informed, focused and ethical. In doing so, we are empowering the next
    generation of leaders to make an even bigger difference to the lives of
    citizens across the country.
paragraph_three: >-
  After a successful first year, we have recently launched the second year of the NLC programme. The programme will seek to transform the leadership of public services by:


  * providing leaders with insights and experience from some of the world’s foremost academics, practitioners and leaders

  * delivering opportunities to learn from real-time simulations

  * facilitating internationally acclaimed analysis, insight and guidance into participants’ leadership styles and how they can develop and progress

  * building a strong network of leaders who have a wide understanding of the work and challenges of their public sector peers


layout: layouts/primary.njk
primary: true
heading_two: "Key information:"
---

<div class="leader-bar">
	<div class="container container--sm">
		<h2 class="large-body-text no-margin leader-bar__text">{{ paragraph_one }}</h2>
	</div>
</div>

<div class="image-centralised-text-block">
<div class="image-centralised-text-block__image" style="background-image: url('{{ image_two }}');"></div>
<div class="image-centralised-text-block__text">
<div class="image-centralised-text-block__text__internal">
	<h3 class="h4-style bold">{{ heading_one }}</h3>
	<div class="header-highlight">
		<div class="h3-style">
		{{ list_one }}
		</div>
	</div>
</div>
</div>
</div>

<div class="container container--sm dbl-vertical-padding">

{{ paragraph_two }}

</div>

<div class="image-quote-block">
	<div class="container container--wide container--two-col">
		<div class="column">
			<img class="media-full-width" src="{{ image_three }}" alt="{{ image_three_alt }}"/>
		</div>
		<div class="column column--card">
			<blockquote class="image-quote-block__card">
				<p class="large-body-text image-quote-block__quote">{{ quote.quote_text }}</p>
				<footer>
					<cite class="h4-style bold no-margin">{{ quote.quote_name }}</cite>
					<p class="no-margin">{{ quote.quote_title }}</p>
				</footer>
			</blockquote>
		</div>
	</div>
</div>

<div class="container container--sm dbl-vertical-padding">

{{ paragraph_three }}

</div>
