let text = localStorage.getItem('YOUR_APP_CUSTOM_ENV') || '';
chrome.browserAction.setBadgeText({text: text});

let nodes = document.body.childNodes;
for (let i = 0; i < nodes.length; i++) {
	nodes[i].addEventListener('click', function(e){
		const env = e.target.innerHTML;
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){  
			chrome.tabs.sendMessage(tabs[0].id, {message: env}, function(response) {
				if(response){
					chrome.browserAction.setBadgeText({text: env});
					chrome.browserAction.setBadgeBackgroundColor({color: [0, 0, 0, 1]});
					window.close();
				}
			}); 
		});
	}, false);
}
