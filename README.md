# chrome-plugin-auto-env
# a plugin of chrome broswer which can switch development environment automatically

### while sending request, find your environment variable from localStorage

# eg: 
###   const env = localStorage.getItem('YOUR_APP_CUSTOM_ENV') || 'test';
  
###   YOUR_APP_CUSTOM_ENV is the key that the plugin sets into localStorage.
  
# such as your intact request is 
###   'http://xxxx-dev.com'
###   'http://xxxx-prod.com'
###  'http://xxxx-test.com'
 
### fetch(`http://xxxx-${env}.com`, body).then(...)
