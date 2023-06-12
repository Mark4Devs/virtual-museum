let activateBtn = document.getElementById('activatePanorama'),
    panoramaIntro = document.querySelector('.panorama-intro'),
    panorama = document.getElementById('panorama');  
const awards = {
    "title": "Досягнення університету",
    "image-1": "http://localhost:80/virtual-museum/images/IMG_8139.JPG",
    "image-2": "http://localhost:80/virtual-museum/images/IMG_8140.JPG",
    "desc": "Даний розділ експозиції презентує новітні досягнення науково-педагогічного колективу університету за роки незалежності України." 
} 
const insitute = {
    "titlePerson-1": "П.П. Гулак - Артемовський",
    "imagePerson-1": "http://localhost:80/virtual-museum/images/p-p-artemovsky.jpg",
    "titlePerson-2": "В.О. Рєпніна",
    "imagePerson-2": "http://localhost:80/virtual-museum/images/v-o-repnina.jpg",
    "titlePerson-3": "М.Г. Рєпнін",
    "imagePerson-3": "http://localhost:80/virtual-museum/images/m-g-repnin.jpg",
    "sectionTitle": "Інститут шляхетних дівчат ",
    "sectionImage": "http://localhost:80/virtual-museum/images/section-image.JPG",
    "sectionDesc-1": "Перший розділ експозиції музею присвячено висвітленню діяльності Інституту шляхетних дівчат – середнього навчального закладу для збіднілих дворянок – та історії будівництва центрального корпусу навчального закладу, що є пам’яткою архітектури першої половини ХІХ ст. ",
    "sectionDesc-2": "Полтавський  Інститут шляхетних дівчат засновано 12 грудня 1818 року на кошти дворянства з ініціативи дружини Полтавського та Чернігівського генерал-губернатора князя М. Г. Рєпніна – Варвари Олексіївни. ",   
}
const rectors = {
    "rectorsTitle": "Перші ректори університету", 
    "rectorsImage": "http://localhost:80/virtual-museum/images/rectors.JPG",
    "rectorsDesc-1": "На п’яти кафедрах єдиного будівельного факультету працювало 33 викладачі, навчалися 282 студенти. Серед перших викладачів інституту – випускник київської політехніки, дипломник видатного вченого-інженера Є.О. Патона – М. С. Торяник,  який заснував наукову школу залізобетону в інституті; Є.В. Платонов – випускник інституту інженерів шляхів сполучення в Петрограді, створив наукову школу з основ i фундаментів; колишній губернський архітектор міста Полтави Т.Я.Гардасевич – зачинатель наукової школи архітектурного проектування; суспільні дисципліни в інституті викладали О.К. Касименко, С.Ю. Данішев – у подальшому відомі вітчизняні історики..",
}
 

$('.owl-carousel').owlCarousel({
    loop:true, 
    nav:true, 
    dots: false,
    items: 1
});
lightGallery(document.querySelector('.tabs-images'), { 
    controls: true,
    selector: '.gallery-item'  
}); 
lightGallery(document.querySelector('.tabs-images.two'), { 
    controls: true,
    selector: '.gallery-item.two' 
}); 
lightGallery(document.querySelector('.tabs-images.three'), { 
    controls: true,
    selector: '.gallery-item.three' 
}); 
lightGallery(document.querySelector('.tabs-images.four'), { 
    controls: true,
    selector: '.gallery-item.four' 
}); 
pannellum.viewer('panorama', {
    "default": {
        "firstScene": "scene-1",
        "author": "Віртуальний музей",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },
    "scenes": {
        "scene-1": {
            "title": "Секція 1",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "http://localhost:80/virtual-museum/images/scene-1.JPG",
            "hotSpots": [
                {
                    "pitch": -18,
                    "yaw": 110,
                    "type": "scene",
                    "text": "Секція 2",
                    "sceneId": "scene-2"
                }, 
                {
                    "pitch": -9, 
			        "yaw": 220.5,
			        "cssClass": "custom-hotspot",
			        "createTooltipFunc": hotspotAwards,
			        "createTooltipArgs": "<h3>"+awards.title+"</h3><img src='"+awards["image-1"]+"'><img src='"+awards["image-2"]+"'><p>"+awards.desc+"</p>"
                }
            ]
        },

        "scene-2": {
            "title": "Секція 2",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "http://localhost:80/virtual-museum/images/scene-2.JPG",
            "hotSpots": [
                {
                    "pitch": -14,
                    "yaw": -55, 
                    "type": "scene",
                    "text": "Секція 1",
                    "sceneId": "scene-1", 
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -3,
                    "yaw": 12.5, 
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": hotspotPerson,
			        "createTooltipArgs": "<img src='"+insitute["imagePerson-1"]+"'><h5>"+insitute["titlePerson-1"]+"</h5>"
                },
                {
                    "pitch": 5,
                    "yaw": 12.5, 
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": hotspotPerson,
			        "createTooltipArgs": "<img src='"+insitute["imagePerson-2"]+"'><h5>"+insitute["titlePerson-2"]+"</h5>"
                },
                {
                    "pitch": 14,
                    "yaw": 21, 
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": hotspotPerson,
			        "createTooltipArgs": "<img src='"+insitute["imagePerson-3"]+"'><h5>"+insitute["titlePerson-3"]+"</h5>"
                },
                { 
                    "pitch": -12,
                    "yaw": 6, 
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": hotspotInstitute,
			        "createTooltipArgs": "<h3>"+insitute.sectionTitle+"</h3><img src='"+insitute.sectionImage+"'><p>"+insitute["sectionDesc-1"]+"</p><p>"+insitute["sectionDesc-2"]+"</p>"
                },
                {
                    "pitch": 11,
                    "yaw": 78, 
                    "cssClass": "custom-hotspot", 
                    "createTooltipFunc": hotspotRectors,
			        "createTooltipArgs": "<h3>"+rectors.rectorsTitle+"</h3><img src='"+rectors.rectorsImage+"'> "
                }
            ]
        }
    }
    /*"type": "equirectangular",
    "panorama": "http://localhost:80/virtual-museum/images/scene-1.JPG",
    "autoLoad": true,
    "hotSpots": [ 
		{
			"pitch": -9, 
			"yaw": 220.5,
			"cssClass": "custom-hotspot",
			"createTooltipFunc": hotspotAwards,
			"createTooltipArgs": "<h3>"+awards.title+"</h3><img src='"+awards["image-1"]+"'><img src='"+awards["image-2"]+"'><p>"+awards.desc+"</p>"
		}, 
    ] */ 
}); 
function hotspotAwards(hotSpotDiv, args) {
	hotSpotDiv.classList.add('custom-tooltip');
	var infoDiv = document.createElement('article');
	infoDiv.innerHTML = args;
	hotSpotDiv.appendChild(infoDiv);  
} 
function hotspotPerson(hotSpotDiv, args) { 
	hotSpotDiv.classList.add('custom-tooltip-person');
	var infoDiv = document.createElement('article'); 
	infoDiv.innerHTML = args;
	hotSpotDiv.appendChild(infoDiv);  
}
function hotspotInstitute(hotSpotDiv, args) { 
	hotSpotDiv.classList.add('custom-tooltip-institute');
	var infoDiv = document.createElement('article');
	infoDiv.innerHTML = args;
	hotSpotDiv.appendChild(infoDiv);  
}    
function hotspotRectors(hotSpotDiv, args) {  
	hotSpotDiv.classList.add('custom-tooltip-rectors');
	var infoDiv = document.createElement('article');
	infoDiv.innerHTML = args;
	hotSpotDiv.appendChild(infoDiv);  
}    
 
activateBtn.onclick = () =>{ 
    panoramaIntro.style.animationName = "hiddenBackdrop"; 
    panoramaIntro.onanimationend = (event) => {
        panoramaIntro.style.display = "none"; 
        panorama.style.zIndex = "900";
    };
}
