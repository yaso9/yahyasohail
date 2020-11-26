// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Yahya Sohail",
  siteUrl: "https://yahyasohail.com",
  icon: "./src/my-face.jpg",
  plugins: [
    {
      use: "@gridsome/plugin-sitemap",
    },
  ],
  templates: {},
};
