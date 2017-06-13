//var edu = {
//    "school": [
//        {
//            "name": "Nova Southeastern University",
//            "city": "Seoul",
//            "degree": "CS",
//            "dates": 2013,
//            "url": "https://example.com"
//        },
//        {
//            "name": "Eckerd College",
//            "city": "Seoul",
//            "degree": "CS",
//            "dates": 2013,
//            "url": "http://example.com"
//        }
//    ],
//    "onlineCourses": [
//        {
//            "title": "Javascirpt Crash Course",
//            "school": "Udacity",
//            "dates": 2014,
//            "url": "http://example.com"
//        }
//    ]
//};


(function (window) {
	'use strict';
    
    
	// Your starting point. Enjoy the ride!
    var user = {
        "name": "william",
        "subName": "bill",
        "logPic": "image/Logo.jpg",
        "headerImg": "http://via.placeholder.com/1820x400",
        
        "contact": {
            "mobile": "01049055202",
            "email": "tuntunkimpo@naver.com"
        },
        "skills" : [
            "awesomeness", "programming", "teaching", "JS"
        ],
        "welcomeMessage" : "Thanks"
    };

var projects = {};
    
projects.header = function(){
        var HTMLheaderName = '<h1 id="name" class="supertitle text-uppercase"><strong>%data%</strong></h1>';
        var HTMLheaderSubName = '<h2 id="subname" class="supertitle text-uppercase">%data%</h2>';
        var HTMLheaderLogo = '<img src="%data%" class="img-responsive logo" alt="logo image">';
        var HTMLheaderImg = '<img src="%data%" class="img-responsive placeholdimg" alt="header image">';
    
        // var forMattedName = HTMLheaderName.replace("%data%", edu.school[0].name);
        var forMattedName = HTMLheaderName.replace("%data%", user.name);
        var forMattedSubName = HTMLheaderSubName.replace("%data%", user.subName);
        var forMattedLogo = HTMLheaderLogo.replace("%data%", user.logPic);
        var forMattedHeaderImg = HTMLheaderImg.replace("%data%", user.headerImg);

        $('#header').append(forMattedName);
        $('#header').append(forMattedSubName);
        $('#logo').append(forMattedLogo);
        $('#headerimg').append(forMattedHeaderImg);
    };
projects.header();

projects.books = function(){
    
};
projects.header()
})(window);
