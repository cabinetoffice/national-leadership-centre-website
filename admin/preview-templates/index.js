import Team from '/admin/preview-templates/team.js';
import Page from '/admin/preview-templates/basic-page.js';
import Network from '/admin/preview-templates/network-page.js';
import Research from '/admin/preview-templates/research-page.js';
import Programme from '/admin/preview-templates/programme-page.js';
import Home from '/admin/preview-templates/home-page.js';

CMS.registerPreviewTemplate('team', Team);
CMS.registerPreviewTemplate('page', Page);
CMS.registerPreviewTemplate('network-page', Network);
CMS.registerPreviewTemplate('research-page', Research);
CMS.registerPreviewTemplate('programme-page', Programme);
CMS.registerPreviewTemplate('home-page', Home);

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
