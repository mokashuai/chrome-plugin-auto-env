chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	localStorage.setItem('YOUR_APP_CUSTOM_ENV', request.message);
    sendResponse(true);
})