function print(obj) {
    console.log(JSON.stringify(obj, undefined, 2) + '\n');
}

// GET ALL PLATFORMS
function getAllPlatforms(){

    var allplat = [];

    json.data.forEach(e => {
        allplat.push(e.platform);  
    });

    return allplat;
}

// GET ALL IMPRESSIONS
function getTotalImpressions(){
    var allimp = 0;

    json.data.forEach(e => {
        allimp += e.impressions;        
    });

    return allimp;
}


/* GET ALL CLICKS
function getTotalClicks(){
    var allclicks = 0;
    json.data.forEach(e => {
        allclicks += e.clicks;        
    });

    return allclicks;
}
*/ 
/*
// GET MEDIA CLICK
function getClicksMedia(){
    return (getTotalClicks()/json.data.length);
}
*/
function addClicks(arg1, arg2){
    var finalclicks = 0;
    json.data.forEach(e => {
        if(e.date == arg1){
            e.clicks += arg2;
            finalclicks = e.clicks;
        }
        
    });

    return finalclicks;
}


// TOTAL VIEW
function viewStats(){
    var origin = json.data;
    var stats = {
        earned:{
            desktop:0,
            mobile:0
        },
        paid:{
            desktop:0,
            mobile:0
        },
        total_paid:0,
        total_earned:0,
        total:0
    };

    origin.forEach(e => {
        
        stats.earned.desktop += e.earned_views.desktop;
        stats.earned.mobile += e.earned_views.mobile;
        stats.paid.desktop += e.paid_views.desktop; 
        stats.paid.mobile += e.paid_views.mobile;   
        stats.total += (e.earned_views.desktop+e.earned_views.mobile+e.paid_views.desktop+e.paid_views.mobile);
        stats.total_earned += (e.earned_views.desktop+e.earned_views.mobile) ;
        stats.total_paid += (e.paid_views.desktop+e.paid_views.mobile);

        
    });

    return stats;
}



/*
function superPro(){
    var obj = {}; // Oggetto vuoto da riempire
    var x = 0; // Contatore per cambiare nome a elemento array
    var total = [];

    
json.data.forEach(e => { // Primo ciclo per gli elementi dell'array "json.data[]"

    obj[e] = e; // Creazione copia su obj{}

    for (const key in e) {  //Secondo ciclo sulle proprietà di ogni elemento dell'array di prima.. quindi "json.data[e]"
        e.key = key;   // Creazione copia degli elementi, nella copia di prima

        for (const i in key){

            key.i = i;
            
        }

        
    }



    x++;  
});


    return obj;
}

*/
//Execution

print(
    getAllPlatforms()
);

print(
    getTotalImpressions()
);

print(
    json.getTotalClicks()
);

print(
    json.getClicksMedia()
);

print(
    addClicks("2018-03-15T00:00:00.000Z", 3256)
);

print(
    viewStats()    
);
/*
print(
    superPro()
);
*/
