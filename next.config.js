/** @type {import('next').NextConfig} */
const withPreact = require("next-plugin-preact");

module.exports = withPreact({
  output: "standalone",
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/",
      destination: "/dmu",
      permanent: false,
    },
    {
      source: "/:setCode/:deck(all|wu|ub|br|rg|wg|wb|ur|bg|wr|ug)",
      destination: "/:setCode?deck=:deck",
      permanent: false,
    },
  ],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.tsx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // #444 is the color Keyrune and Mana use for path fill in SVGs
            replaceAttrValues: { "#444": "currentColor" },
            svgoConfig: {
              plugins: [
                // Prevent SVGO from stripping the viewBox from SVGs
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
});
