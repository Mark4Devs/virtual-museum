let activateBtn = document.getElementById('activatePanorama'),
    panoramaIntro = document.querySelector('.panorama-intro'),
    panorama = document.getElementById('panorama');  
const awards = {
    "title": "Досягнення університету",
    "title-2": "Юрій Васильович Кондратюк",
    "image-1": "/images/IMG_8139.JPG",
    "image-2": "/images/IMG_8140.JPG",
    "image-3": "/images/кондратюк.jpg",
    "image-4": "/images/yuri-kondratyuk.jpg",
    "desc": "Окрему сторінку експозиції присвячено  нашому видатному краянинові, ученому-винахідникові, розробнику ракетної техніки і теорії космічних польотів  Юрію Васильовичу Кондратюку(Олександру Гнатовичу Шаргею), ім’я якого з 1997 року носить університет."  
}  
const insitute = { 
    "titlePerson-1": "П.П. Гулак - Артемовський",
    "imagePerson-1": "/images/p-p-artemovsky.jpg",
    "desc-person-1": "Понад тридцять років здійснював нагляд за навчальною частиною видатний український байкар, ректор Харківського університету, професор   П. П. Гулак-Артемовський,  п’ять доньок якого – Аполлінарія, Єфросинія, Марія, Наталія і Клеопатра –   з 1854 по 1865 роки навчалися у  Полтавському Інституті шляхетних дівчат.",
    "titlePerson-2": "В.О. Рєпніна",
    "imagePerson-2": "/images/v-o-repnina.jpg",
    "titlePerson-3": "М.Г. Рєпнін",
    "imagePerson-3": "/images/m-g-repnin.jpg",
    "titlePerson-4": "М.Г. Рєпнін",
    "imagePerson-4": "/images/m-g-repnin.jpg",
    "desc-person-4": "56 років присвятив дівочому інституту як викладач фортепіанної гри та італійського співу видатний чеський музичний педагог і композитор Алоїз Єдлічка, відомий збирач та видавець музичного українського фольклору, автор першої музичної редакції п’єси І.П. Котляревського «Наталка-Полтавка». ",
    "sectionTitle": "Інститут шляхетних дівчат ",
    "sectionImage": "/images/section-image.JPG",
    "sectionDesc-1": "З історичних джерел відомо, що Полтавський інститут шляхетних дівчат було засновано 12 грудня 1818 року на кошти дворян Полтавської та Чернігівської губерній. Зініціювала створення закладу В.О. Рєпніна, дружина Полтавського генерал-губернатора М.Г. Рєпніна, онука останнього гетьмана Лівобережної України К. Розумовського.",
    "sectionDesc-2": "Значну роль у вихованні молодих дівчат відіграв вплив найяскравіших викладачів Інституту шляхетних дівчат –  плеяди видатних представників української та світової культури. Науково-освітні й педагогічні традиції було започатковано такими відомими педагогами, як П. П. Гулак-Артемовський, Л. І. Боровиковський, М. М. Цертелєв, І. К.Зайцев, В. О. Волков, А. В.Єдлічка та багато інших.",   
    "diorama-image": "/images/history-image.jpg",
    "diorama-title": "У великій діорамі мистецьки виконано макет Інституту шляхетних дівчат,  що відтворює вигляд центрального корпусу навчального закладу початку ХIХ ст."
}
const rectors = {
    "rectorsTitle": "Перші ректори університету", 
    "rectorsImage": "/images/rectors.JPG",
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
lightGallery(document.querySelector('.chapter-item'), { 
    controls: true,
    selector: '.chapter-link'  
}); 
lightGallery(document.querySelector('.chapter-item.two'), { 
    controls: true,
    selector: '.chapter-link.two' 
}); 
lightGallery(document.querySelector('.chapter-item.three'), { 
    controls: true,
    selector: '.chapter-link.three' 
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
            "panorama": "/images/scene-1.JPG",
            "hotSpots": [
                {
                    "pitch": -18,
                    "yaw": 110,
                    "type": "scene",
                    "text": "Секція 2",
                    "sceneId": "scene-2"
                }, 
                {
                    "pitch": -10.5, 
			        "yaw": 218,
			        "cssClass": "custom-hotspot",
			        "createTooltipFunc": hotspotAwards,
			        "createTooltipArgs": "<h3>"+awards.title+"</h3><img src='"+awards["image-1"]+"'>" 
                }, 
                {
                    "pitch": -10.5, 
			        "yaw": 227,
			        "cssClass": "custom-hotspot",
			        "createTooltipFunc": hotspotAwards,
			        "createTooltipArgs": "<h3>"+awards.title+"</h3><img src='"+awards["image-2"]+"'>"
                }, 
                {
                    "pitch": 19, 
			        "yaw": 222,
			        "cssClass": "custom-hotspot",
			        "createTooltipFunc": hotspotAwardsPerson,
			        "createTooltipArgs": "<h3>"+awards["title-2"]+"</h3><img src='"+awards["image-3"]+"' class='person-sm'><img src='"+awards["image-4"]+"' class='person-sm'><p class='person-text'>"+awards.desc+"</p>",
                }
            ]
        },

        "scene-2": {
            "title": "Секція 2",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "/images/scene-2.JPG",
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
			        "createTooltipArgs": "<img src='"+insitute["imagePerson-1"]+"'><h5>"+insitute["titlePerson-1"]+"</h5><p>"+insitute["desc-person-1"]+"</p>"
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
                },
                { 
                    "pitch": 0,
                    "yaw": 49, 
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": hotspotInstitute,
			        "createTooltipArgs": "<img src='"+insitute["diorama-image"]+"'><h3 class='diorama-title'>"+insitute["diorama-title"]+"</h3> "
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
function hotspotAwardsPerson(hotSpotDiv, args) {
	hotSpotDiv.classList.add('custom-tooltip-awards-person');
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

