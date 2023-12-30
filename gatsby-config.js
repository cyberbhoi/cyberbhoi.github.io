module.exports = {
  plugins: [

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-NVQ2QGVWSE", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },

  ],
}
