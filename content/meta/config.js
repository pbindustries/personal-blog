const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Philip Bankier - Personal Blog", // <title>
  shortSiteTitle: "pb blog", // <title> ending for posts and pages
  siteDescription: "This is my personal site",
  siteUrl: "https://philipbankier.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "philip bankier",
  authorTwitterAccount: "philipbankier",
  // info
  infoTitle: "philip bankier",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Philip Bankier - Personal Blog",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "philipbankier@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/pbindustries" },
    { name: "twitter", url: "https://twitter.com/philipbankier" },
    { name: "facebook", url: "http://facebook.com/philipbankier" }
  ]
};
