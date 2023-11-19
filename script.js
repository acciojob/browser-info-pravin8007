//your JS code here. If required.
  function getBrowserInfo() {
        // Using navigator object to retrieve browser information
        var browserName = navigator.appName;
        var browserVersion = navigator.appVersion;

        // Displaying the information in the specified format
        var browserInfoMessage = "You are using " + browserName + " version " + browserVersion;
        
        // Adding the message to the div with id 'browser-info'
        document.getElementById('browser-info').innerText = browserInfoMessage;
    }

    // Calling the function on page load
    window.onload = getBrowserInfo;
