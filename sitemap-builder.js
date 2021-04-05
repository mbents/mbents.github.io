const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
require("babel-register")({
  presets: [es2015, presetReact]
});

const routes = require("./src/Routes").default;
const Sitemap = require("react-router-sitemap").default;

const years = Array.from({length: (2020 - 1998 + 1)},(v,k)=>k + 1998)

const franchiseParams ={
  franchiseId: ['ANA','ARI','ATL','BAL','BOS','CHA','CHN','CIN','CLE','COL','DET','HOU','KCA','LAN','MIA',
  'MIL','MIN','NYA','NYN','OAK','PHI','PIT','SDN','SEA','SFN','SLN','TBA','TEX','TOR','WAS']
}

const params = {
	franchiseId: franchiseParams.franchiseId,
	year: years
};

const paramsConfig = {
	'/franchises/:franchiseId': [
		franchiseParams
	],
	'/franchises/:franchiseId/schedule/:year': [
		params
	]
};

function generateSitemap() {
  return (
    new Sitemap(routes)
      .applyParams(paramsConfig)
      .build("https://www.mikebents.com", { limitCountPaths: 5000 })
      .save("./sitemap.xml")
  );
}

generateSitemap();
