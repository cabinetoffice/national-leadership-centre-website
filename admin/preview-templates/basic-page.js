import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

// Preview component for a Basic Page
const Page = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <div class="title-bar">
        <div class="container">
          <h1>${entry.getIn(['data', 'title'], null)}</h1>
        </div>
      </div>
      <div class="container vertical-padding">
        ${this.props.widgetFor('body')}
      </div>
    `;
  },
});

export default Page;
