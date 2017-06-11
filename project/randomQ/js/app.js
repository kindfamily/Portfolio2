project.data.header = function(){
         "user1":["name":"william", "subname":"bill", "mainimage":"http://via.placeholder.com/1820x400"]         
}          
                                                       
project.display.header = function(){
    for (project in project.data.header){
        var user1
        
        
        var HTMLheadername ="<div class="row">
                <div class="col-md-6">
                    <img src="image/Logo.jpg" class="img-responsive logo" alt="">
                </div>
                <div class="col-md-6 text-right">
                    <h1 class="supertitle text-uppercase">%data1%willim</h1>"
        var HTMLheadersubname ="<h2 class="supertitle text-uppercase">%data2%bill</h2>
                </div>
            </div>
            <div class="row">
                <hr>
            </div>"
       var HTMLheadermainimage ="<div class="row">
                <div class="col-md-12">
                    <img src="%data3%http://via.placeholder.com/1820x400" class="img-responsive placeholdimg" alt="">
                </div>
            </div> 
    
    var formattedHeaderName = HTMLheadername.replace("%data1%", "project.data.header.user1[project].name");
    var formattedHeaderSubname = HTMLheadersubname.replace("%data2%", "project.data.header.user1[project].subname")
    var formattedHeaderMainImage = HTMLheadermainimage.replace("%data3%", "project.data.header.user1[project].mainimage")
                                    
    $(.header).append(formattedHeaderMainImage);
    $(.header).append(formattedHeaderSubname);
    $(.header).append(formattedHeaderName);
    
    }                     
};

projects.data.header();
project.display.header(); 