import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

const Research = createClass({
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

          <p class="no-margin">
            ${entry.getIn(['data', 'paragraph_two'], null)}
          </p>

          ${this.props.widgetFor('paragraph_three')}
        </div>
      </main>
    `;
  },
});

export default Research;
