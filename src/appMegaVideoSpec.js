describe('megaVideo', function(){
    var scope,
        element,
        compiled,
        html,
        mp42Src,
        oggSrc;

        beforeEach(module("megaVideoDemo"));
        beforeEach(module("mega-video.html"));
        beforeEach(function(){
            oggSrc = 'https://ia600500.us.archive.org/1/items/Duck_and_Cover/1951_duck_and_cover.ogv';
            mp4Src = 'https://archive.org/download/Duck_and_Cover/1951_duck_and_cover_512kb.mp4"';

            html="";
            html += "<mega-video ";
            html += "	width=\"60%\" ";
            html += "	ogg='" + oggSrc + "'" ;
            html += "	mp4='" + mp4Src + "' >" ;
            html += "</mega-video>";
        });
})