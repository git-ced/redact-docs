/**
 * Copyright (c) 2017-present, Prince Neil Cedrick Castro,  Facebook, Inc.
 */

// List of projects/orgs using your project for the users page.
const users = [];

const siteConfig = {
  title: 'redact',
  tagline: 'Personalized, extensible censorship',
  url: 'https://git-ced.github.io',
  baseUrl: '/redact-docs/',
  projectName: 'redact-docs',
  organizationName: 'git-ced',
  headerLinks: [
    { doc: 'getting-started/installation', label: 'Docs' },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' },
  ],
  users,
  headerIcon: 'img/redact-logo-light.svg',
  footerIcon: 'img/redact-logo-light.svg',
  favicon: 'img/redact-logo-light.svg',
  colors: {
    primaryColor: '#0D0820',
    secondaryColor: '#DBD8E7',
  },
  copyright: `Copyright © ${new Date().getFullYear()} redact`,
  highlight: {
    theme: 'androidstudio',
    defaultLang: 'javascript',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
  docsSideNavCollapsible: true,
  enableUpdateBy: true,
  enableUpdateTime: true,
  repoUrl: 'https://github.com/git-ced/redact',
};

module.exports = siteConfig;
