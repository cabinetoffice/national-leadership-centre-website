import Team from '/admin/preview-templates/team.js';
// import Page from '/admin/preview-templates/page.js';

// Register the Post component as the preview for entries in the blog collection
CMS.registerPreviewTemplate('team', Team);
// CMS.registerPreviewTemplate('pages', Page);

CMS.registerPreviewStyle('/_includes/assets/css/build/styles.css');
// Register any CSS file on the home page as a preview style
fetch('/')
  .then((response) => response.text())
  .then((html) => {
    const f = document.createElement('html');
    f.innerHTML = html;
    Array.from(f.getElementsByTagName('link')).forEach((tag) => {
      if (tag.rel == 'stylesheet' && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    });
  });