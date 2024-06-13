const browser = chrome;

browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed!!");
});
