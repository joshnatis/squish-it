function squishIt() {
  document.body.style.width = "50%";
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: squishIt
  });
});
