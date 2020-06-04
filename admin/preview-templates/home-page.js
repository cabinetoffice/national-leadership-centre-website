import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

const Home = createClass({
  render() {
    const entry = this.props.entry;
    const imageOne = entry.getIn(['data', 'carousel_images', 'image_one']);
    const bgImageOne = {
      backgroundImage: 'url(' + this.props.getAsset(imageOne).toString() + ')',
    };

    return html`
      <section class="carousel-block" aria-label="carousel" id="carousel">
        <div class="carousel-block__home">
          <div class="carousel-block__home__img">
            <img src="${this.props.getAsset(imageOne).toString()}" />
          </div>
        </div>
      </section>
      <main>
        <div class="title-bar title-bar--centered">
          <div class="container">
            <h1>${entry.getIn(['data', 'title'], null)}</h1>
          </div>
        </div>
        <div class="header-block header-block--home">
          <div class="container container--xxs">
            <h2 class="centered gradient no-margin">
              ${entry.getIn(['data', 'paragraph_one'], null)}
            </h2>
          </div>
        </div>

        <div class="tiles-block">
          <div class="container container--wide container--flex">
            <div class="tiles-block__tile">
              <hr />
              <h3 class="h4-style bold">
                ${entry.getIn(['data', 'tiles', 'tile_one', 'title'])}
              </h3>
              <p>
                ${entry.getIn(['data', 'tiles', 'tile_one', 'description'])}
              </p>
              <p>
                <a
                  href="${entry.getIn([
                    'data',
                    'tiles',
                    'tile_one',
                    'link_url',
                  ])}"
                  >${entry.getIn(['data', 'tiles', 'tile_one', 'link_text'])}
                  ></a
                >
              </p>
            </div>

            <div class="tiles-block__tile">
              <hr />
              <h3 class="h4-style bold">
                ${entry.getIn(['data', 'tiles', 'tile_two', 'title'])}
              </h3>
              <p>
                ${entry.getIn(['data', 'tiles', 'tile_two', 'description'])}
              </p>
              <p>
                <a
                  href="${entry.getIn([
                    'data',
                    'tiles',
                    'tile_two',
                    'link_url',
                  ])}"
                  >${entry.getIn(['data', 'tiles', 'tile_two', 'link_text'])}
                  ></a
                >
              </p>
            </div>
            <div class="tiles-block__tile">
              <hr />
              <h3 class="h4-style bold">
                ${entry.getIn(['data', 'tiles', 'tile_three', 'title'])}
              </h3>
              <p>
                ${entry.getIn(['data', 'tiles', 'tile_three', 'description'])}
              </p>
              <p>
                <a
                  href="${entry.getIn([
                    'data',
                    'tiles',
                    'tile_three',
                    'link_url',
                  ])}"
                  >${entry.getIn(['data', 'tiles', 'tile_three', 'link_text'])}
                  ></a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="image-l-text-r-block">
          <div class="container container--flex container--wide">
            <div class="image-l-text-r-block__image">
              <img
                src="/static/img/ui/coil/cropped-coil-min_rzkocc_c_scale,w_564.png"
                alt=""
              />
            </div>
            <div class="image-l-text-r-block__text">
              <h3>${entry.getIn(['data', 'heading_one'], null)}</h3>
              <p>${entry.getIn(['data', 'paragraph_two'], null)}</p>
            </div>
          </div>
        </div>
      </main>
    `;
  },
});

export default Home;
