import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

// Preview component for a Team member
const Team = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <div class="team-block-wrapper">
        <div class="team-block vertical-padding">
          <div class="team-block__item">
            <div class="team-block__item__image">
              <img src="${entry.getIn(['data', 'image'], null)}" />
            </div>
            <div class="team-block__item__name">
              ${entry.getIn(['data', 'name'], null)}
            </div>
            <div class="team-block__item__bio">
              ${this.props.widgetFor('body')}
            </div>
          </div>
        </div>
      </div>
    `;
  },
});

export default Team;
