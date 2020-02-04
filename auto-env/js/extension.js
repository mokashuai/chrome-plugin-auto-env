chrome.runtime.onInstalled.addListener(function(){
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'https://juejin.im/user/59bf965b5188257e7a4285fb/posts'}})
                ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
});