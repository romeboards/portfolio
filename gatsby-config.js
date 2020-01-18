module.exports = {
  siteMetadata: {
    title: `Dan Kass –– Portfolio`,
    url: `https://www.danielkass.site`,
    description: `Hello! This is the portfolio site of Dan Kass, an interdisciplinary coder, designer, and progressive advocate.`,
    author: `@dananalog`,
    image: `images/social.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Dam Kass –– Portfolio",
        short_name: "Dan Kass –– Portfolio",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        icon: "src/images/favicon.png",
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-preload-fonts`,
  ],
}
