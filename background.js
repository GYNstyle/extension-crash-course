console.log("hello from the background script!");

chrome.runtime.onMessage.addListener((msg) => {
  console.log(msg.text);
});
