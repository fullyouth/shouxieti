const ghpages = require('gh-pages');
const path = require('path');
const fs = require('fs');

const githubToken = process.env.GH_PAGES_TOKEN;

ghpages.publish(path.join(__dirname, 'reports'), {
  branch: 'gh-pages',
  repo: `https://${githubToken}@github.com/fullyouth/shouxieti.git`,
}, (err) => {
  if (err) {
    console.error('Error deploying to gh-pages:', err);
  } else {
    console.log('Successfully deployed to gh-pages!');
  }
});