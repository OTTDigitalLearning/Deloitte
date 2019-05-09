var audioPlayer=new Object();
var player=new Object();
var swapImg;

var structure = [
        {
                id: "index",
                title: "Home",
                hideTitle: true
        },{
                id: "02_introduction",
                title: "Introduction",
                hideTitle: true
        },{
                id: "03_learning-objectives",
                title: "Learning objectives",
                hideTitle: true
        },{                
                id: "04_importance-of-digital-business-models",
                title: "Importance of digital business models",
                hideTitle: true
        },{     
                id: "05_characteristics-of-digital-business-models",
                title: "Characteristics of digital business models",
                hideTitle: true
        },{      
                id: "06_5c-model",
                title: "5C model",
                hideTitle: true
        },{
                id: "07_digital-business-models-at-daimler",
                title: "Digital business models at Daimler",
                hideTitle: true
        },{     
                id: "08_car2go-overview",
                title: "car2go overview",
                hideTitle: true
        },{     
                id: "09_platform-business-model-canvas",
                title: "Platform business model canvas",
                hideTitle: true
        },{      
                id: "10_digital-pricing-models",
                title: "Digital pricing models",
                hideTitle: true
        },{      
                id: "11_quiz",
                title: "Quiz: Fundamentals of Digital Business Models",
                hideTitle: true
        },{       
                id: "12_maturity-model-applied-to-car2go",
                title: "Maturity model",
                hideTitle: true
        },{        
                id: "13_comparison-of-profit-and-loss-statements",
                title: "Comparison of profit and loss statements",
                hideTitle: true
        },{
                id: "13b_financial-statements-balance-sheet",
                title: "Financial statements - Balance sheet",
                hideTitle: true
        },{
                id: "14_impact-on-steering-and-steering-focus",
                title: "Impact on steering and steering focus",
                hideTitle: true
        },{          
                id: "15_simplified-driver-tree",
                title: "Simplified driver tree",
                hideTitle: true
        },{           
                id: "16_dashboards",
                title: "Dashboards",
                hideTitle: true
        },{            
                id: "17_steering-objects",
                title: "Steering objects",
                hideTitle: true
        },{             
                id: "18_transferability",
                title: "Transferability",
                hideTitle: true
        },{              
                id: "19_quiz",
                title: "Quiz: Financials and Steering of Digital Business Models",
                hideTitle: true
        },{                
                id: "20_key-takeaways",
                title: "Key takeaways",
                hideTitle: true
        },{                
                id: "21_exit",
                title: "End",
                hideTitle: true
        }
];





$(function() {


        //get pageid:
        var ids=[
                "index",
                "02_introduction",
                "03_learning-objectives",
                "04_importance-of-digital-business-models",
                "05_characteristics-of-digital-business-models",
                "06_5c-model",
                "07_digital-business-models-at-daimler",
                "08_car2go-overview",
                "09_platform-business-model-canvas",
                "10_digital-pricing-models",
                "11_quiz",
                "12_maturity-model-applied-to-car2go",
                "13_comparison-of-profit-and-loss-statements",
                "13b_financial-statements-balance-sheet",
                "14_impact-on-steering-and-steering-focus",
                "15_simplified-driver-tree",
                "16_dashboards",
                "17_steering-objects",
                "18_transferability",
                "19_quiz",
                "20_key-takeaways",
                "21_exit"
        ];
                 
        var pid=$(location).attr("href").split("/").reverse()[0].split(".")[0];
               
        $("body").addClass("grey lighten-1");
        
        if ($("#vid").length>0) {
                
                $("<div/>", {
                        html: templates.videoTemplate.replace("{FILENAME}", "video/" + pid + ".mp4")   
                }).appendTo($("body"));
                
        }
               
        //Imagemap swap 
        swapImg = function(num){
                $("#img").attr("src", $("#img"+num).attr("src"));            
        };
        
        //add title bar
        /*$("<h5/>", {
                id: "title",
                css: {
                        position: "absolute",
                        top: "10px",
                        left: "80px"
                }
        }).appendTo($("body"));*/
        
        //add menu slider
        $("<section/>", {
                html: templates.sliderMenu,
            id: "menuslider",
            "class": "offcanvas",
            css:{
                "font-family": "Open Sans, sans-serif",
                width: "450px",
                background: "#eaeaea",
                "border-right": "1px solid grey",
                padding: "10px"               
            }
        }).appendTo($("body")); 
        
        //add menu button
        $("<div/>", {
            html: templates.btnMenu,
            css:{
                position: "absolute",
                top: "10px",
                left: "10px",
                width: "32px",
                height: "32px"                
            }
         }).appendTo($("body"));
        
        //add menu close button
        $("<a/>", {
            html: "<i class='material-icons'>close</i>",
            href: "#",
            "data-offcanvas-close": "menuslider",
            css:{
                position: "absolute",
                left: "auto",
                top: "25px",
                right: "10px"             
            }
         }).appendTo($("#menuslider"));
        
        //navBtn
        if($("#vid").length>0){
                
                        switch (pid) {
                                case "index":
                                        $("<div/>", {
                                                html: templates.btnNext,
                                                css:{
                                                    "z-index": 10
                                                }
                                        }).appendTo($("#video"));
                                        $("<div/>", {
                                                html: templates.btnNextIndex
                                                
                                                }).appendTo($("#video"));
                                        break;
                                case "21_exit":
                                        $("<div/>", {
                                                html: templates.btnNextExit
                                                
                                                }).appendTo($("#video"));
                                        break;
                                default:
                                        $("<div/>", {
                                                html: templates.btnNext,
                                                css:{
                                                    "z-index": 10
                                                }
                                        }).appendTo($("#video"));
                                        
                        }
   
                
        }else{
                $("<div/>", {
                        html: templates.btnNext,
                        css:{
                                position: "absolute",
                                top: "560px",
                                width: "970px",
                                padding: "20px"
                           
                        }
                //}).appendTo($(".section")[0]);
                }).appendTo($("#xxx")[0]);
        }
        
        

            
        var ix= $.inArray(pid, ids);
        switch (true){
            case ix==0:
                $("#btnNext").attr("href", ids[ix+1]+".htm")
                $("#btnNext").addClass("pulse");
                break;            
            case ix<(ids.length-1):
                $("#btnNext").attr("href", ids[ix+1]+".htm");
                break;
        case ix==(ids.length-1):
                $("#btnNext").attr("href", "javascript:void(0)");
                $("#btnNext").on("click", function(){
                        putSessionData();
                        exitSession();
                        $("body").html(templates.sessionEnded);
                });
                break;
            default:
                $("#btnNext").remove();
                break;
        }
        
        //Menu slider
        $("#menuslider").iptOffCanvas({
            baseClass: "offcanvas",
            type: "left",
            single: true
        });
        

        
        //toc
        var html="";
        $.each(structure, function(ix,page){
                if (page.id==pid) {
                    $("#title").html("<span style='font-weight:bold;text-transform:uppercase'>"+page.title+"</span>");
                    if (typeof page.hideTitle!= "undefined") {
                        if (page.hideTitle) {
                            $("#title").hide();
                        }
                    };
                    html+="" +
                        "<li class='collection-item active red accent-2'>" +
                                (page.isBlock ? "<h6 style='text-transform:uppercase;'>" + page.title + "</h6>" : page.title) +
                        "</li>";
                }else{
                        html+="" +
                        "<li class='collection-item'>" +
                                "<a href='" + page.id +".htm'>" +
                                        (page.isBlock ? "<h6 style='text-transform:uppercase;'>" + page.title + "</h6>" : page.title) +
                                "</a>" +
                        "</li>";
                };
        });        

        
        $("<div/>", {
            html: "" +
                "<ul class='collection'>" +
                        html +
                "</ul>",
                css: {
                        "overflow-y": "auto",
                        "max-height": $(window).height() - 100 + "px",
                        "max-width": "445px"
                }
         }).appendTo($("#menuslider"));
        
        try {
            $(".active")[0].scrollIntoView();
        } catch(e) {
            
        }
                        
        //Audio
        if ($("#audioPlayer").length>0) {
                
                //plugin https://github.com/sampotts/plyr
                Plyr.setup({
                    debug: false,
                    autoplay: true
                });
                
                audioPlayer=new Plyr("#audioPlayer");
                audioPlayer.play();
        };
        
        $("a").css({
                color: "#000"
        });
        
        /* VIDEO PLAYER */  
    
        if ($("#vidplyr").length>0) {
            

        
                //plugin https://github.com/sampotts/plyr
                var options={
                    debug: false,
                    blankUrl: "lib/blank.mp4",
                    fullscreen: {
                        enabled: false
                    },
                    clickToPlay: false,
                    autoplay: true,
                    invertTime: false
                };
                
                player=new Plyr("#vidplyr", options)
                
                player.halt=false;
                
                player.source = {
                        type: "video",
                        sources: [
                            {
                                src: "video/" + pid + ".mp4",
                                type: "video/mp4",
                                size: 720
                            }
                        ],
                        poster: "lib/poster.jpg",
                        tracks: []
                };
                        
                //add event listeners
                player.on("timeupdate", function(e) {
                    checkTimestamps();
                });
                
                player.on("ended", function(e) {
                        if(player.currentTime>1){ //ie11 fires ended at start WTF
                                $("#btnNext").addClass("pulse");            
                        }
                    
                    //data.session.status="completed";
                    //putSessionData();
                    checkTimestamps();
                });
                
                player.on("seeked", function(e){
                    if (player.halt) {
                        player.halt=false;
                        player.pause();
                    }else{
                        player.play();
                        $("#btnNext").removeClass("pulse");
                    }       
                    
                });
                
                
                //Events
                switch (pid) {
                        case "09_platform-business-model-canvas":
                                
                                $("<a/>", {
                                        id: "link1",
                                        href: "files/pbmc_template.pptx",
                                        target: "_blank",
                                        html: "<i class='material-icons left'>cloud_download</i> Template",
                                        "class": "waves-effect waves-light btn grey darken-3",
                                        css: {
                                             "margin-right": "10px",
                                             "display": "none"
                                        }
                                }).appendTo($("#btns"));
                                
                                $("<a/>", {
                                        id: "link2",
                                        href: "files/pbmc_car2go.pdf",
                                        target: "_blank",
                                        html: "<i class='material-icons left'>cloud_download</i> Example car2Go",
                                        "class": "waves-effect waves-light btn grey darken-3",
                                        css: {
                                                "display": "none"
                                        }
                                }).appendTo($("#btns"));                        
                                
                                $("video").on("ended", function(){
                                        $("#link1").show();
                                        $("#link2").show();
                                });
                                break;
                        default:
                                break;
                }
        };
        
        //listen for timed actions
        var checkTimestamps=function(){
           
            var timeCurrent=player.currentTime;
            
            if (typeof data == "undefined") {
                return;
            }
            
            $.each(data.timestamps, function(i,timestamp) {            
                
                /*
                 * accepted time formats:
                    numeric: 12.5 (seconds)
                    string: "start" || "end"
                    object: { from: sec, to: sec }
                */
                
                var timeFrom=0,
                    timeTo=99999;
                
                if(typeof timestamp.time=="object"){
                    if(typeof timestamp.time.from!="undefined") {
                        timeFrom=timestamp.time.from;
                    };
                    
                    if(typeof timestamp.time.to!="undefined") {
                        timeTo=timestamp.time.to;
                    };
                };
                
                if(typeof timestamp.time=="string"){
                    switch (timestamp.time) {
                        case "start":
                            timeFrom=0;
                            break;
                        case "end":
                            timeFrom=Math.floor(player.getDuration());
                            break;
                    }
                };
                
                if(typeof timestamp.time=="number"){
                    timeFrom=timestamp.time;
                }
    
                if (timeCurrent < timeFrom || timeCurrent > timeTo) {
                    timestamp.status="pending";
                    $("#hotspot"+i).hide();
                }else{
                    
                    switch (timestamp.status){
                        case "pending":
                            if (typeof timestamp.action=="function") { //perform function
                                timestamp.action();                            
                            }else{                            
                                switch (timestamp.action) { //perform named action
                                    case "pause":
                                        player.pause();
                                        break;
                                    case "restart":
                                        player.restart();
                                        break;
                                    case "hotspot":
                                        var hotspotId="hotspot"+i;
                                        if ($("#"+hotspotId).length==0) { //create hotspot if needed
                                            $("<div/>", {
                                                id: hotspotId,
                                                css: Object.assign(
                                                    {
                                                        position: "absolute",
                                                        background: "transparent",
                                                        cursor: "pointer",
                                                        "z-index": 9999
                                                    },
                                                    timestamp.hotspot.area
                                                ),
                                                data: {
                                                    area: timestamp.hotspot.area //store initial size and pos
                                                }, 
                                                "class": "hotspot"                                            
                                            })
                                            .appendTo($(".plyr__video-wrapper")[0])
                                            .on("click", function(){
                                                timestamp.hotspot.action();
                                            });                                       
                                            
                                            scaleHotspots();
                                            
                                        }else{
                                            $("#"+hotspotId).show();
                                        };
                                        break;
                                    default:
                                        break;
                                }
                            }
                            timestamp.status="done";
                            break;
                        case "active":
                            //check from...to
                            break;
                        case "done":
                            //action already performed, do nothing
                    }
                };
            });
        };
        
        $(window).bind("resize", function() {
                scaleHotspots();
            });
        
        // Moderation
        if ($("#mod").length>0 && $("#videoContainer").length>0) {
            $("<div/>", {
                        html: templates.modTemplate.replace("{MOD}", $("#mod").html())
                }).appendTo($("#videoContainer"));
        }
        
                //Help for first page
        if (pid=="index") {                
            setTimeout(function(){
                $(".tap-target").tapTarget();
                $("#btnNext").removeClass("pulse");
                $(".tap-target").tapTarget("open");
            },7000);
        }
        
        //Exit
        if (pid=="21_exit") {
                setTimeout(function(){
                        $(".tap-target").tapTarget();
                        $(".tap-target-origin").on("click", function(){
                                putSessionData();
                              exitSession();
                              $("body").html(templates.sessionEnded);      
                        })
                        $("#btnNext").removeClass("pulse");
                        $(".tap-target").tapTarget("open");
                    },7000);
        }
        
        if (pid=="index") {
            initSession();
        }

});

var doCommand=function(cmd, args){
    switch (cmd) {
        case "gotoAndStop":
            player.halt=true;
            player.currentTime=args; //triggers player.seeked event
            break;
        case "gotoAndPlay":
            player.currentTime=args; //triggers player.seeked event
            break;
        default:
            player[cmd](args); //all native player commands        
    };    
};

var scaleHotspots = function(){
    if ($(".hotspot").length>0) {
        var scaleBy=($("video").width() / 1280); //data.video.sources[0].width).toFixed(2);
        $(".hotspot").each(function(ix) {
            var area=($(this).data("area"));
            $(this).css({
                width: Math.round(parseInt(area.width) * scaleBy) + "px",
                height: Math.round(parseInt(area.height) * scaleBy) + "px",
                left: Math.round(parseInt(area.left) * scaleBy) + "px",
                top: Math.round(parseInt(area.top) * scaleBy) + "px"                
            });
        });
    };    
}

var templates = {
        
        videoTemplate: "" +
                "<div class='container' id='videoContainer'>" +
                    "<div class='row'>" +
                        "<div id='video'>" +
                            "<video id='vidplyr' controls autoplay class='responsive-video'>" +
                                //"<source src='{FILENAME}' type='video/mp4'>" +
                                "<source src='lib/blank.mp4' type='video/mp4'>" +
                            "</video>" +
                        "</div>" +
                    "</div>" +
                "</div>",
                
        modTemplate: "" +
                "<div class='row'>" +
                        "<div id='modContainer'>" +
                            "{MOD}" +
                        "</div>" +
                "</div>",
    
    btnMenu: "" +
			"<a href='#' data-offcanvas-open='menuslider'>" +
				"<i class='material-icons red-text text-accent-2' style='font-size: 40px'>menu</i>" +
			"</a>",
    
    btnNext: "" +
                "<div class='row' style='padding-top:10px;'>" +
                        "<div id='btns' class='col s8'></div>" +                
                        "<div class='col s4 right-align'>" +
                                "<a id='btnNext' class='btn-floating btn-large red accent-2' title='Continue'>" +
                                        "<i class='large material-icons'>play_arrow</i>" +
                                "</a>" +
                        "</div>" +
                "</div>",
                
        btnNextIndex: "" +
               "<div class='tap-target red accent-2' data-target='btnNext'>" +
                        "<div class='tap-target-content'>" +
                                "<h5>Welcome!</h5>" +
                                "<p>Use the pulsating button to navigate through the contents.</p>" +
                        "</div>" +
                "</div>",
                
        btnNextExit: "" +
                "<div class='tap-target red accent-2' data-target='btnNext'>" +
                        "<div class='tap-target-content'>" +
                                "<p>Click here to exit the training.</p>" +
                        "</div>" +
                "</div>" +
                "<div class='row' style='padding-top:10px;'>" +
                        "<div id='btns' class='col s8'></div>" +                
                        "<div class='col s4 right-align'>" +
                                "<a id='btnNext' class='btn-floating btn-large red accent-2' title='Exit the training'>" +
                                        "<i class='large material-icons'>exit_to_app</i>" +
                                "</a>" +
                        "</div>" +
                "</div>",
            
    sliderMenu: "" +
                "<div style='padding:7px 10px;'>" +
                        "<div style='width:50px;height:50px;'></div>" +
                        //"<object type='image/svg+xml' data='lib/logo.svg' style='width:50px;height:50px;'></object>" +
                "</div>",
                
        sessionEnded: "" +
                "<div class='container'>" +
                        "<h5>You can close this window now.</h5>" +
                "</div>"
    
}

/* SCORM */
var sessionTerminated=false;
function initSession(){
    getAPI();
    if(scoVersion=="none"){
        return false;
    }else{
        if(doScormCommand("lmsInitialize")!="true"){
            switch(doScormCommand("lmsGetLastError")){
                case 103: //SCORM Interface has already been initialized
                    return true;
                default: //lmsInitialize() failed
                    scoVersion="none";
                    return false;
            }
        }else{ //SCORM Interface successfully initialized
            return true;
        }
    }
};

function getSessionData() {
    if(scoVersion=="none" || sessionTerminated) return;    
    var fromLms=doScormCommand("lmsGetValue","lessonStatus");
    if(fromLms!=null && fromLms!="undefined" && fromLms!="" && fromLms!="false"){
        //data.session.status=fromLms;
    };
}

function putSessionData(){
    if(scoVersion=="none" || sessionTerminated) return;
    //doScormCommand("lmsSetScore",data.session.status=="completed" ? 100 : 0);
    //doScormCommand("lmsSetStatus",data.session.status=="completed" ? "completed": "incomplete");
    doScormCommand("lmsSetScore",100);
    doScormCommand("lmsSetStatus","completed");
}    

function exitSession(){
        if(scoVersion=="none" || sessionTerminated) return;
    //doScormCommand("lmsExit",data.session.status=="completed" ? "logout": "suspend");
    //doScormCommand("lmsExitAU");
    doScormCommand("lmsExit","logout");
    doScormCommand("lmsExitAU");
    sessionTerminated=true;
};

//window.addEventListener("unload", function() {
//    putSessionData();
    //exitSession();
//});


//Scorm API
var scormAPI, oFrame = "top", scoVersion="none",
    frX, frY = new Array(),
    frLevel = 0;
    frY[0] = 0;

function parseFrames() {
    for (var i = frY[frLevel]; i < frX.length; i++) {
        try {
            logg(frX.frames[i].name + " API:" + (frX.frames[i].API ? 1 : 0))
        } catch (e) {};
        switch (true) {
            case (typeof (frX.frames[i].API_1484_11) != "undefined"):
                scoVersion = "scorm2004";
                return frX.frames[i].API_1484_11;
            case (typeof (frX.frames[i].API) != "undefined"):
                scoVersion = "scorm12";
                return frX.frames[i].API;
        }

        if (frX.frames[i].length > 0) {
            oFrame = oFrame + ".frames[" + i + "]";
            frY[frLevel] = i + 1;
            frLevel++;
            frY[frLevel] = 0;
            return null;
        }
    }
    oFrame = oFrame.substring(0, oFrame.lastIndexOf("."));
    if (frLevel == 0) oFrame == "";
    frLevel--;
    return null;
}

function findAPI(win) {
    switch (true) {
        case (typeof (win.API) == "object"):
            if (win.API != null) {
                scoVersion = "scorm12";
                return win.API;
            }
        case (typeof (win.API_1484_11) == "object"):
            if (win.API_1484_11 != null) {
                scoVersion = "scorm2004";
                return win.API_1484_11;
            }
        default:
            return null;
    }
}

function getAPI() {
    var theAPI = null;
    if ((window.parent) && (window.parent != window)) theAPI = findAPI(window.parent);
    if ((theAPI == null) && (window.opener != null)) theAPI = findAPI(window.opener);
    if (theAPI == null) {
        while (oFrame != "") {
            frX = eval(oFrame);
            theAPI = parseFrames();
            if (theAPI != null) return theAPI;
        }
    }
    if ((theAPI == null) && (top != null)) theAPI = findAPI(top);
    scormAPI=theAPI;
    return;
}

function doScormCommand(command, args) {
    if (scormAPI == null) return null;
    command = String(command);
    args = String(args);
    args = args.split(";");

    switch (command) {
        case "lmsInitialize":
            switch (scoVersion) {
                case "scorm12":
                    return scormAPI.LMSInitialize("");
                    break;
                case "scorm2004":
                    return scormAPI.Initialize("");
                    break;
            }
            break;

        case "lmsExitAU":
            switch (scoVersion) {
                case "scorm12":
                    return scormAPI.LMSFinish("");
                    break;
                case "scorm2004":
                    return scormAPI.Terminate("");
                    break;
            }
            break;

        case "lmsCommit":
            switch (scoVersion) {
                case "scorm12":
                    return scormAPI.LMSCommit("");
                    break;
                case "scorm2004":
                    return scormAPI.Commit("");
                    break;
            }
            break;

        case "lmsGetValue":
            switch (scoVersion) {
                case "scorm12":
                    switch (args[0]) {
                        case "lessonLocation":
                            return String(scormAPI.LMSGetValue("cmi.core.lesson_location"));
                            break;
                        case "lessonStatus":
                            return String(scormAPI.LMSGetValue("cmi.core.lesson_status"));
                            break;
                        case "score":
                            return String(scormAPI.LMSGetValue("cmi.core.score.raw"));
                            break;
                        case "notepad":
                            return String(scormAPI.LMSGetValue("cmi.comments"));
                            break;
                        case "suspendData":
                            return String(scormAPI.LMSGetValue("cmi.suspend_data"));
                            break;
                        case "studentName":
                            return String(scormAPI.LMSGetValue("cmi.core.student_name"));
                            break;
                        default:
                            return String(scormAPI.LMSGetValue(args[0]));
                    }
                    break;
                case "scorm2004":
                    switch (args[0]) {
                        case "lessonLocation":
                            return String(scormAPI.GetValue("cmi.location"));
                            break;
                        case "lessonStatus":
                            var val = scormAPI.GetValue("cmi.success_status");
                            if ((val == "passed") || (val == "failed")) {
                                var ss = val;
                            } else {
                                var ss = scormAPI.GetValue("cmi.completion_status");
                            }
                            if ((ss == "") || (ss == "unknown")) {
                                ss = "not attempted";
                            }
                            return String(ss);
                            break;
                        case "notepad":
                            return String(scormAPI.GetValue("cmi.comments_from_learner.0.comment"));
                            break;
                        case "score":
                            return String(scormAPI.GetValue("cmi.score.raw"));
                            break;
                        case "suspendData":
                            return String(scormAPI.GetValue("cmi.suspend_data"));
                            break;
                        case "studentName":
                            return String(scormAPI.LMSGetValue("cmi.learner_name"));
                            break;
                        default:
                            return String(scormAPI.GetValue(args[0]));
                    }
                    break;
            }
            break;

        case "lmsSetScore":
            switch (scoVersion) {
                case "scorm12":
                    scormAPI.LMSSetValue("cmi.core.score.raw", args[0] + "");
                    break;
                case "scorm2004":
                    scormAPI.SetValue("cmi.score.raw", args[0] + "");
                    scormAPI.SetValue("cmi.score.scaled", (parseInt(args[0]) / 100) + "");
                    break;
            }
            break;

        case "lmsSetStatus":
            switch (scoVersion) {
                case "scorm12":
                    scormAPI.LMSSetValue("cmi.core.lesson_status", args[0]);
                    break;
                case "scorm2004":
                    switch (args[0]) {
                        case "completed":
                            scormAPI.SetValue("cmi.progress_measure", "1");
                            scormAPI.SetValue("cmi.completion_status", args[0]);
                            break;
                        case "incomplete":
                        case "not attempted":
                            scormAPI.SetValue("cmi.completion_status", args[0]);
                            break;
                        case "passed":
                        case "failed":
                            scormAPI.SetValue("cmi.completion_status", "completed")
                            scormAPI.SetValue("cmi.success_status", args[0]);
                        case "browsed":
                            //ignore
                    }
                    break;
            }
            break;

        case "lmsSetSessionTime":
            switch (scoVersion) {
                case "scorm12":
                    scormAPI.LMSSetValue("cmi.core.session_time", args[0]);
                    break;
                case "scorm2004":
                    scormAPI.SetValue("cmi.session_time", centisecsToISODuration(SCORM12DurationToCs(args[0], true)));
                    break;
            }
            break;

        case "lmsSetSuspendData":
            switch (scoVersion) {
                case "scorm12":
                    scormAPI.LMSSetValue("cmi.suspend_data", args[0]);
                    break;
                case "scorm2004":
                    scormAPI.SetValue("cmi.suspend_data", args[0]);
                    break;
            }
            break;

        case "lmsSetLocation":
            switch (scoVersion) {
                case "scorm12":
                    scormAPI.LMSSetValue("cmi.core.lesson_location", args[0]);
                    break;
                case "scorm2004":
                    scormAPI.SetValue("cmi.location", args[0]);
                    break;
            }
            break;

        case "lmsExit":
            switch (scoVersion) {
                case "scorm12":
                    scormAPI.LMSSetValue("cmi.core.exit", args[0]);
                    break;
                case "scorm2004":
                    scormAPI.SetValue("cmi.exit", args[0]);
                    break;
            }
            break;

        case "lmsGetLastError":
            switch (scoVersion) {
                case "scorm12":
                    return scormAPI.LMSGetLastError();
                    break;
                case "scorm2004":
                    var n = parseInt(scormAPI.GetLastError());
                    if (isNaN(n)) return 101;
                    return n;
                    break;
            }
            break;

        case "lmsGetErrorString":
            switch (scoVersion) {
                case "scorm12":
                    return scormAPI.LMSGetErrorString(args[0]);
                    break;
                case "scorm2004":
                    return scormAPI.GetErrorString(args[0]);
                    break;
            }
            break;
    }
    return null;
}

function centisecsToISODuration(n, bPrecise) {
    var str = "P";
    var nCs = n;
    var nY = 0,
        nM = 0,
        nD = 0,
        nH = 0,
        nMin = 0,
        nS = 0;
    n = Math.max(n, 0); // there is no such thing as a negative duration
    var nCs = n; // Next set of operations uses whole seconds
    with(Math) {
        if (bPrecise == true) {
            nD = floor(nCs / 8640000);
        } else {
            nY = floor(nCs / 3155760000);
            nCs -= nY * 3155760000;
            nM = floor(nCs / 262980000);
            nCs -= nM * 262980000;
            nD = floor(nCs / 8640000);
        }
        nCs -= nD * 8640000;
        nH = floor(nCs / 360000);
        nCs -= nH * 360000;
        var nMin = floor(nCs / 6000);
        nCs -= nMin * 6000;
    }
    // Now we can construct string
    if (nY > 0) {
        str += nY + "Y";
    }
    if (nM > 0) {
        str += nM + "M";
    }
    if (nD > 0) {
        str += nD + "D";
    }
    if ((nH > 0) || (nMin > 0) || (nCs > 0)) {
        str += "T";
        if (nH > 0) {
            str += nH + "H";
        }
        if (nMin > 0) {
            str += nMin + "M";
        }
        if (nCs > 0) {
            str += (nCs / 100) + "S";
        }
    }
    if (str == "P") {
        str = "PT0H0M0S";
    }
    return str;
}

function ISODurationToCentisec(str) {
    var aV = new Array(0, 0, 0, 0, 0, 0);
    var bErr = false;
    var bTFound = false;
    if (str.indexOf("P") != 0) {
        bErr = true;
    }
    if (!bErr) {
        var aT = new Array("Y", "M", "D", "H", "M", "S");
        var p = 0,
            i = 0;
        str = str.substr(1);
        for (i = 0; i < aT.length; i++) {
            if (str.indexOf("T") == 0) {
                str = str.substr(1);
                i = Math.max(i, 3);
                bTFound = true;
            }
            p = str.indexOf(aT[i]);
            if (p > -1) {
                if ((i == 1) && (str.indexOf("T") > -1) && (str.indexOf("T") < p)) {
                    continue;
                }
                if (aT[i] == "S") {
                    aV[i] = parseFloat(str.substr(0, p));
                } else {
                    aV[i] = parseInt(str.substr(0, p));
                }
                if (isNaN(aV[i])) {
                    bErr = true;
                    break;
                } else if ((i > 2) && (!bTFound)) {
                    bErr = true;
                    break;
                }
                str = str.substr(p + 1);
            }
        }
        if ((!bErr) && (str.length != 0)) {
            bErr = true;
        }
    }
    if (bErr) {
        return null;
    }
    return aV[0] * 3155760000 + aV[1] * 262980000 + aV[2] * 8640000 + aV[3] * 360000 + aV[4] * 6000 + Math.round(aV[5] * 100);
}

function SCORM12DurationToCs(str) {
    var a = str.split(":");
    var nS = 0,
        n = 0;
    var nMult = 1;
    var bErr = ((a.length < 2) || (a.length > 3));
    if (!bErr) {
        for (i = a.length - 1; i >= 0; i--) {
            n = parseFloat(a[i]);
            if (isNaN(n)) {
                bErr = true;
                break;
            }
            nS += n * nMult;
            nMult *= 60;
        }
    }
    if (bErr) {
        return NaN;
    }
    return Math.round(nS * 100);
}

function centisecsToSCORM12Duration(n) {
    var bTruncated = false;
    with(Math) {
        var nH = floor(n / 360000);
        var nCs = n - nH * 360000;
        var nM = floor(nCs / 6000);
        nCs = nCs - nM * 6000;
        var nS = floor(nCs / 100);
        nCs = nCs - nS * 100;
    }
    if (nH > 9999) {
        nH = 9999;
        bTruncated = true;
    }
    var str = "0000" + nH + ":";
    str = str.substr(str.length - 5, 5);
    if (nM < 10) {
        str += "0";
    }
    str += nM + ":";
    if (nS < 10) {
        str += "0";
    }
    str += nS;
    if (nCs > 0) {
        str += ".";
        if (nCs < 10) {
            str += "0";
        }
        str += nCs;
    }
    return str;
}

