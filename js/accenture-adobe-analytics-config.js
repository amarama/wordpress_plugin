var aaaConfig = aaaConfig || {};

aaaConfig = {    
    careerTrack: "",
    jobTitle: "",
    orgLevel2: "",
    orgLevel3: "",
    sitePath: "",
    userName: "",
    pageType: "",
    streamButton: "",
    city: "",
    state: "",
    zip: "",
    region: "",

    initAnalytics: function () {
        //aaaConfig.userName = enterpriseID;
        aaaConfig.sitePath = aaaServerConfigs.sitePath;
        aaaConfig.pageType = aaaServerConfigs.pageType;
        aaaConfig.userName = aaaServerConfigs.userName;
        
        var omnitureData = aaaConfig.getOmnitureData();
    },

    checkClicks: function(event) {
        var clickTarget, obj, video;
        clickTarget = event.srcElement || event.target;
        obj = jQuery(clickTarget);
        videoPlay = jQuery('button.btn.comp.playPauseBtn.display-high.icon-play');
        videoPlayBig = jQuery('.icon-play');
        // capture comments
        if (obj !== null || obj !== undefined) {
            if (obj.prop('innerText') == "Download") {// event 1
                aaaConfig.setDwnLoadUrl();
            }
            if (videoPlay.type == "play" || videoPlayBig.type == "play") {// event 1
                //aaaConfig.setDwnLoadUrl();
            }
            if (obj.prop('innerText') == "Like" || obj.prop('innerText') == "Unlike") { // event4
                aaaConfig.likeEvent();
            }
            if (obj.prop('innerText') == "Comment") { // event5
                aaaConfig.commentsEvent();
            }
            if (obj.prop('innerText') == "Post" || obj.prop('innerText') == "Share") { // event6
                aaaConfig.shareEvent();
            }
            if (obj.prop('innerText') == "Tags") { // event7
                aaaConfig.addTagsEvent();
            }
            if (obj.prop('innerText') == "Follow" || obj.prop('innerText') == "Stop Following") { // event8
                aaaConfig.followEvent();
            }
            if (obj.prop('innerText') == "External Link") { // event9
                aaaConfig.extLinks();
                alert('Hey where are you going');
            }
        }
    },
    sendAdobeAnalysis: function () {
        // Send info to Adobe
        var s_code = window.s.t();
        if (s_code) document.write(s_code);
        if (navigator.appVersion.indexOf('MSIE') >= 0) document.write(unescape('%3C') + '\!-' + '-' + '<img src="https://accenture.122.2o7.net/b/ss/accpublishing/1/H.26.2--NS/0" height="1" width="1" border="0" alt="" />');
    },
    getURLDomain: function () { // user URL links clicked
        var a = document.createElement('a');
        a.href = url;
        return a.hostname;
    },
    dwnLoadUrls: function () { // user download links clicked
        var filename = url.substr(url.lastIndexOf("/") + 1, url.length);
        var ext = (filename.lastIndexOf(".") == -1) ? " " : filename.substr(filename.lastIndexOf(".") + 1, filename.length);
        if (ext.indexOf("#") > -1) {
            ext = ext.substring(0, ext.lastIndexOf("#"));
        }
        if (ext.indexOf("?") > -1) {
            ext = ext.substring(0, ext.lastIndexOf("?"));
        }
        if (window.s.linkDownloadFileTypes.indexOf(ext) > -1) {
            return true;
        } else {
            return false;
        }
    },
    setDwnLoadUrl: function () { // set user download links clicked
        var filename = url.substr(url.lastIndexOf("/") + 1, url.length);
        if (filename === "") {
            filename = url;
        }
        window.s.eVar5 = filename;
        window.s.events = "event1";
        window.s.prop7 = 'Download';
        window.s.channel = aaaConfig.sitePath;
        window.s.eVar7 = window.s.prop7;
        window.s.linkTrackVars = 'prop1,prop2,prop3,prop4,prop5,prop6,prop7,prop9,eVar1,eVar2,eVar3,eVar4,eVar5,eVar7,eVar9,events,channel';
        window.s.linkTrackEvents = window.s.events;
        window.s.tl(this, 'd', filename);
    },
    likeEvent: function () { // user like links clicked
        window.s.linkTrackVars = 'prop1,prop2,prop3,prop4,prop5,prop6,prop7,eVar1,eVar2,eVar3,eVar4,eVar7,events,channel';
        window.s.linkTrackEvents = 'event4';
        window.s.prop7 = 'Like';
        window.s.eVar7 = window.s.prop7;
        window.s.channel = aaaConfig.sitePath;
        window.s.events = 'event4';
        window.s.tl(this, 'o', 'Like');
    },
    commentsEvent: function () { // user comments links clicked
        window.s.linkTrackVars = 'prop1,prop2,prop3,prop4,prop5,prop6,prop7,eVar1,eVar2,eVar3,eVar4,eVar7,events,channel';
        window.s.linkTrackEvents = 'event5';
        window.s.prop7 = 'Comment';
        window.s.eVar7 = window.s.prop7;
        window.s.channel = aaaConfig.sitePath;
        window.s.events = 'event5';
        window.s.tl(this, 'o', 'Comment');
        //aaaConfig.sendAdobeAnalysis();
    },
    shareEvent: function () { // user share links clicked
        window.s.linkTrackVars = 'prop1,prop2,prop3,prop4,prop5,prop6,prop7,eVar1,eVar2,eVar3,eVar4,eVar7,events,channel';
        window.s.linkTrackEvents = 'event6';
        window.s.prop7 = 'Share';
        window.s.eVar7 = window.s.prop7;
        window.s.channel = aaaConfig.sitePath;
        window.s.events = 'event6';
        window.s.tl(this, 'o', 'Share');
    },
    addTagsEvent: function () { // user Add Tags links clicked
        window.s.linkTrackVars = 'prop1,prop2,prop3,prop4,prop5,prop6,prop7,eVar1,eVar2,eVar3,eVar4,eVar7,events,channel';
        window.s.linkTrackEvents = 'event7';
        window.s.prop7 = 'Add Tags';
        window.s.eVar7 = window.s.prop7;
        window.s.channel = aaaConfig.sitePath;
        window.s.events = 'event7';
        window.s.tl(this, 'o', 'Add Tags');
    },
    followEvent: function () { // user follow links clicked
        window.s.linkTrackVars = 'prop1,prop2,prop3,prop4,prop5,prop6,prop7,eVar1,eVar2,eVar3,eVar4,eVar7,events,channel';
        window.s.linkTrackEvents = 'event8';
        window.s.prop7 = 'Follow';
        window.s.eVar7 = window.s.prop7;
        window.s.channel = aaaConfig.sitePath;
        window.s.events = 'event8';
        window.s.tl(this, 'o', 'Follow');
    },
    extLinks: function () { // user external links clicked
        if (url.indexOf("mailto:") == -1 && url.indexOf("javascript:") == -1) {
            var urldomain = aaaConfig.getURLDomain(url);
            window.s.linkTrackVars = 'prop1,prop5,prop6,prop7,prop8,eVar1,eVar7,events,channel';
            window.s.linkTrackEvents = 'event9';
            window.s.prop7 = 'External Link';
            window.s.eVar7 = window.s.prop7;
            window.s.prop8 = urldomain;
            window.s.channel = aaaConfig.sitePath;
            window.s.events = 'event9';
            window.s.tl(this, 'e', urldomain);
        }
    },
    getOmnitureData: function () {
        var enterpriseID = aaaConfig.userName;
        jQuery.ajax({
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            url: '/handlers/people-profile-handler.php',
            data: JSON.stringify({ EnterpriseIDs: [enterpriseID], PropertyNames: ["OrgLevel2Desc", "OrgLevel3Desc", "SPS-JobTitle", "CareerTrackDesc", "EnterpriseID", "CountryHome",] }),
            success: function (xData, status) {
                if (xData !== undefined && xData.hits !== undefined && xData.hits.hits !== undefined && xData.hits.hits.length > 0) {
                    /* You may give each page an identifying name, server, and channel on the next lines. */
                    window.s.pageName = document.getElementsByTagName('title') !== undefined && document.getElementsByTagName('title').length > 0 ? document.getElementsByTagName('title')[0].innerHTML.trim() : "";
                    window.s.server = window.location.host;
                    window.s.channel = aaaConfig !== undefined ? aaaConfig.sitePath : "";
                    window.s.pageType = aaaConfig !== undefined ? aaaConfig.pageType : "";
                    window.s.linkType = aaaConfig !== undefined ? aaaConfig.checkClicks(this) : "";
                    window.s.region = aaaConfig !== undefined ? aaaConfig.region : "";
                    window.s.city = aaaConfig !== undefined ? aaaConfig.city : "";
                    window.s.state = aaaConfig !== undefined ? aaaConfig.state : "";
                    window.s.zip = aaaConfig !== undefined ? aaaConfig.zip : "";
                    // custom traffic properties
                    //window.s.prop1 = "";// User - p1
                    window.s.prop2 = xData.hits.hits[0].fields !== undefined && xData.hits.hits[0].fields["CountryHome"] !== undefined && xData.hits.hits[0].fields["CountryHome"].length > 0 ? xData.hits.hits[0].fields["CountryHome"][0] : "";// User Country - p2
                    window.s.prop3 = xData.hits.hits[0].fields !== undefined && xData.hits.hits[0].fields["CareerTrackDesc"] !== undefined && xData.hits.hits[0].fields["CareerTrackDesc"].length > 0 ? xData.hits.hits[0].fields["CareerTrackDesc"][0] : "";// User Career Track - p3
                    window.s.prop4 = xData.hits.hits[0].fields !== undefined && xData.hits.hits[0].fields["SPS-JobTitle"] !== undefined && xData.hits.hits[0].fields["SPS-JobTitle"].length > 0 ? xData.hits.hits[0].fields["SPS-JobTitle"][0] : "";// User level - p4
                    window.s.prop5 = window.s !== undefined ? window.s.pageName : "";// Page name
                    window.s.prop6 = window.s !== undefined ? window.s.channel : "";// Internal sites - p6
                    window.s.prop7 = window.s !== undefined ? window.s.linkType : "";// User link type
                    window.s.prop9 = xData.hits.hits[0].fields !== undefined && xData.hits.hits[0].fields["OrgLevel2Desc"] !== undefined && xData.hits.hits[0].fields["OrgLevel2Desc"].length > 0 ? xData.hits.hits[0].fields["OrgLevel2Desc"][0] : "";// User Organizational Level 2 - p9
                    window.s.prop10 = xData.hits.hits[0].fields !== undefined && xData.hits.hits[0].fields["OrgLevel3Desc"] !== undefined && xData.hits.hits[0].fields["OrgLevel3Desc"].length > 0 ? xData.hits.hits[0].fields["OrgLevel3Desc"][0] : "";//User Organizational Level 3 - p10
                    window.s.prop11 = window.location.href; // User URL
                    //s.prop12 = window.location.href; // User URL Subsite
                    window.s.prop13 = window.s.region;
                    /* Conversion Variables */
                    window.s.campaign = "";
                    window.s.state = "";
                    window.s.zip = "";
                    window.s.events = "";
                    window.s.products = "";
                    window.s.purchaseID = "";
                    //window.s.eVar1 = window.s.prop1;
                    window.s.eVar2 = window.s !== undefined ? window.s.prop2 : "";
                    window.s.eVar3 = window.s !== undefined ? window.s.prop3 : "";
                    window.s.eVar4 = window.s !== undefined ? window.s.prop4 : "";
                    window.s.eVar5 = window.s !== undefined ? window.s.prop5 : "";
                    window.s.eVar6 = window.s !== undefined ? window.s.prop6 : "";
                    window.s.eVar7 = window.s !== undefined ? window.s.prop7 : "";
                    window.s.eVar9 = window.s !== undefined ? window.s.prop9 : "";
                    window.s.eVar10 = window.s !== undefined ? window.s.prop10 : "";
                    window.s.eVar11 = window.s !== undefined ? window.s.prop13 : "";
                    /************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
                    aaaConfig.sendAdobeAnalysis();
                    //var s_code = s.t(); if (s_code) document.write(s_code)
                    //if (navigator.appVersion.indexOf('MSIE') >= 0) document.write(unescape('%3C') + '\!-' + '-' + '<img src="https://accenture.122.2o7.net/b/ss/accpublishing/1/H.26.2--NS/0" height="1" width="1" border="0" alt="" />');
                }
            }
        });
    }
}
document.onclick = aaaConfig.checkClicks;

aaaConfig.initAnalytics();
