"use strict";
console.log("On op.gg");
$(".GameItemWrap").each((_, gameDiv) => {
  gameDiv = $(gameDiv);
  const yourStatsDiv = gameDiv.find(".Stats");
  yourStatsDiv.append('<div>Hello Test</div>');
  console.log("adding test");
  const ownStats = getOwnStats(gameDiv);
  console.log("own stats", ownStats);
  return false;
});

function getOwnStats(gameDiv) {
  const ownChampion = getOwnChampion(gameDiv);
  console.log("own Champion", ownChampion);
  const stats = {};

  return stats;
}

function getOwnChampion(gameDiv) {
  const championImage = gameDiv.find(".GameSettingInfo .ChampionImage img");
  const splitPath = new URL("http:" + championImage.attr("src")).pathname.replace(/\.[^/.]+$/, "").split("/");
  return splitPath.pop() || splitPath.pop();
}

