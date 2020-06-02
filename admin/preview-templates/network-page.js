import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

const Network = createClass({
  render() {
    const entry = this.props.entry;
    const image = entry.getIn(['data', 'image']);
    const bgImage = {
      backgroundImage: 'url(' + this.props.getAsset(image).toString() + ')',
    };

    return html`
      <main>
        <div class="landing-block">
          <div class="landing-block__image" style=${bgImage}></div>
          <div class="landing-block__text">
            <div class="container container--wide">
              <div class="landing-block__text__internal">
                <h1>${entry.getIn(['data', 'title'], null)}</h1>
                <p>${entry.getIn(['data', 'leader'], null)}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="container container--sm dbl-vertical-padding">
          <h2>
            ${entry.getIn(['data', 'paragraph_one'], null)}
          </h2>

          <div class="container container--xs">
            <div class="dbl-margin">
              ${this.props.widgetFor('list_one')}
            </div>
          </div>

          ${this.props.widgetFor('paragraph_two')}

          <div class="vertical-padding">
            ${this.props.widgetFor('paragraph_three')}
          </div>

          ${this.props.widgetFor('paragraph_four')}
        </div>

        <div class="container container--wide vertical-padding">
          <div class="section-header section-header--narrow">
            <h2 class="section-header__text">
              <span>${entry.getIn(['data', 'nlf_heading'], null)}</span>
            </h2>
          </div>
        </div>

        <div class="container container-sm container--two-col">
          <div class="column">
            <p class="h3-style">
              ${entry.getIn(['data', 'nlf_text_one'], null)}
            </p>
            <p class="no-margin">
              ${entry.getIn(['data', 'nlf_text_two'], null)}
            </p>
            ${this.props.widgetFor('nlf_list')}
          </div>
          <div class="column">
            <div class="embed-container">
              <iframe
                src="${entry.getIn(['data', 'nlf_video_url'], null)}}"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </div>
            <p class="supporting-text">
              ${this.props.widgetFor('nlf_video_text')}
            </p>
          </div>
        </div>

        <div class="container container--sm dbl-vertical-padding">
          ${this.props.widgetFor('paragraph_five')}
        </div>
      </main>
    `;
  },
});

export default Network;
