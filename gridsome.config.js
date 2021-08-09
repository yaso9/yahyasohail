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
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
    },
  ],
  templates: {
    Post: [
      {
        path: "/blog/:title",
      },
    ],
  },
};
