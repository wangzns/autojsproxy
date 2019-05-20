chrome.browserAction.onClicked.addListener(tab=>{
    chrome.tabs.remove(tab.id)
    window.open(`https://zjcqoo.github.io/-----${tab.url}`)
})