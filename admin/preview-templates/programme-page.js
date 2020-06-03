import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

const Programme = createClass({
  render() {
    const entry = this.props.entry;
    const imageOne = entry.getIn(['data', 'image']);
    const bgImageOne = {
      backgroundImage: 'url(' + this.props.getAsset(imageOne).toString() + ')',
    };
    const imageTwo = entry.getIn(['data', 'image_two']);
    const bgImageTwo = {
      backgroundImage: 'url(' + this.props.getAsset(imageTwo).toString() + ')',
    };

    return html`
      <main>
        <div class="landing-block">
          <div class="landing-block__image" style=${bgImageOne}></div>
          <div class="landing-block__text">
            <div class="container container--wide">
              <div class="landing-block__text__internal">
                <h1>${entry.getIn(['data', 'title'], null)}</h1>
                <p>${entry.getIn(['data', 'leader'], null)}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="leader-bar">
          <div class="container container--sm">
            <h2 class="large-body-text no-margin leader-bar__text">
              ${entry.getIn(['data', 'paragraph_one'], null)}
            </h2>
          </div>
        </div>

        <div class="image-centralised-text-block">
          <div
            class="image-centralised-text-block__image"
            style=${bgImageTwo}
          ></div>
          <div class="image-centralised-text-block__text">
            <div class="image-centralised-text-block__text__internal">
              <h3 class="h4-style bold">
                ${entry.getIn(['data', 'heading_one'], null)}
              </h3>
              <div class="header-highlight">
                <div class="h3-style">
                  ${this.props.widgetFor('list_one')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container container--sm dbl-vertical-padding">
          ${this.props.widgetFor('paragraph_two')}
        </div>

        <div class="image-quote-block">
          <div class="container container--wide container--two-col">
            <div class="column">
              <img
                class="media-full-width"
                src="${entry.getIn(['data', 'image_three'], null)}"
                alt="${entry.getIn(['data', 'image_three_alt'], null)}"
              />
            </div>
            <div class="column column--card">
              <blockquote class="image-quote-block__card">
                <p class="large-body-text image-quote-block__quote">
                  ${entry.getIn(['data', 'quote', 'quote_text'], null)}
                </p>
                <footer>
                  <cite class="h4-style bold no-margin">
                    ${entry.getIn(['data', 'quote', 'quote_name'], null)}</cite
                  >
                  <p class="no-margin">
                    ${entry.getIn(['data', 'quote', 'quote_title'], null)}
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        <div class="container container--sm dbl-vertical-padding">
          ${this.props.widgetFor('paragraph_three')}
        </div>
      </main>
    `;
  },
});

export default Programme;
