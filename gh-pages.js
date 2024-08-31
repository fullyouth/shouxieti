const ghpages = require('gh-pages');
const path = require('path');
const fs = require('fs');

const githubToken = process.env.GITHUB_TOKEN;

ghpages.publish(path.join(__dirname, 'reports'), {
  branch: 'gh-pages',
  repo: `https://username:${githubToken}@github.com/fullyouth/shouxieti.git`,
  user: {
    name: 'haoqizhang',
    email: 'fullyouth@163.com'
  }
}, (err) => {
  if (err) {
    throw('Error deploying to gh-pages:', err)
  } else {
    console.log('Successfully deployed to gh-pages!');
  }
});