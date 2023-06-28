$(async function(){
    $(".select2").select2({
        placeholder: '-Seleccione una Ciudad-'
    });

    $.each(Cities, function(key, value){
        $("#cities").append("<option value='"+value.coor+"'>"+value.loc+"</option>")
    });
    
    $(".select2").on("change",function(){
        let Coordenadas = $(this).val();
        console.log(Coordenadas);
        getWeather(Coordenadas)
    });
});


async function getWeather(Coordenadas){
    var URL= 'http://www.7timer.info/bin/api.pl?'+Coordenadas+'&product=civillight&output=json';
    console.log(URL);
    const res = await fetch(URL,{method:'GET'});
    const data = await res.json();
    $("#Clima").empty();
    $.each(data.dataseries,function(key,value){
        let Fecha = moment(value.date).format("dddd MMM DD");
        $("#Clima").append("<div class='col-1' style='width: 13%;'><div class='card'><div class='card-header'><h6 class='Fecha'>"+Fecha+"</h6><img src='./images/"+value.weather+".png' class='imagen'></div><div class='card-body'><p class='Pronostico'>"+value.weather+"</p><p class='Temperatura'>H: "+value.temp2m.max+" C°</p><p class='Temperatura'>L: "+value.temp2m.min+" C°</p></div></div></div>");
    });
}

const Cities = [
    {coor:'lat=52.367&lon=4.904',	loc:'Amsterdam, '},
    {coor:'lat=39.933&lon=32.859',	loc:'Ankara,Turkey'},
    {coor:'lat=56.134&lon=12.945',	loc:'Åstorp,Sweden'},
    {coor:'lat=37.983&lon=23.727',	loc:'Athens,Greece'},
    {coor:'lat=54.597&lon=-5.93',	loc:'Belfast,Northern Ireland'},
    {coor:'lat=41.387&lon=2.168',	loc:'Barcelona,Spain'},
    {coor:'lat=52.52&lon=13.405',	loc:'Berlin,Germany'},
    {coor:'lat=46.948&lon=7.447',	loc:'Bern,Switzerland'},
    {coor:'lat=43.263&lon=-2.935',	loc:'Bilbao,Spain'},
    {coor:'lat=50.847&lon=4.357',	loc:'Brussels,Belgium'},
    {coor:'lat=47.497&lon=19.04',	loc:'Bucharest,Romania'},
    {coor:'lat=59.329&lon=18.068',	loc:'Budapest,Hungary'},
    {coor:'lat=51.483&lon=-3.168',	loc:'Cardiff,Wales'},
    {coor:'lat=50.937&lon=6.96',	    loc:'Cologne,Germany'},
    {coor:'lat=55.676&lon=12.568',	loc:'Copenhagen,Denmark'},
    {coor:'lat=51.898&lon=-8.475',	loc:'Cork,Ireland'},
    {coor:'lat=53.349&lon=-6.26',	loc:'Dublin,Ireland'},
    {coor:'lat=55.953&lon=-3.188',	loc:'Edinburgh,Scotland'},
    {coor:'lat=43.7696&lon=11.255',	loc:'Florence,Italy'},
    {coor:'lat=50.11&lon=8.682',	    loc:'Frankfurt,Germany        '},
    {coor:'lat=43.254&lon=6.637',	loc:'French Riviera,France'},
    {coor:'lat=32.65&lon=-16.908',	loc:'Funchal,Portugual'},
    {coor:'lat=36.14&lon=-5.353',	loc:'Gibraltar,'},
    {coor:'lat=57.708&lon=11.974',	loc:'Gothenburg,Sweden     '},
    {coor:'lat=53.548&lon=9.987',	loc:'Hamburg,Germany'},
    {coor:'lat=60.169&lon=24.938',	loc:'Helsinki,Finland'},
    {coor:'lat=39.02&lon=1.482',	    loc:'Ibiza,Spain'},
    {coor:'lat=50.45&lon=30.523',	loc:'Kyiv,Ukraine'},
    {coor:'lat=61.115&lon=10.466',	loc:'Lillehammer,Norway'},
    {coor:'lat=38.722&lon=-9.139',	loc:'Lisbon,Portugual'},
    {coor:'lat=51.507&lon=-0.127',	loc:'London,England      '},
    {coor:'lat=40.416&lon=-3.703',	loc:'Madrid,Spain'},
    {coor:'lat=39.695&lon=3.017',	loc:'Mallorca,Spain'},
    {coor:'lat=53.48&lon=-2.242',	loc:'Manchester,England       '},
    {coor:'lat=43.296&lon=5.369',	loc:'Marseille,France'},
    {coor:'lat=27.76&lon=-15.586',	loc:'Maspalomas,Spain'},
    {coor:'lat=45.464&lon=9.19',	    loc:'Milan,Italy'},
    {coor:'lat=48.135&lon=11.582',	loc:'Munich,Germany'},
    {coor:'lat=40.851&lon=14.268',	loc:'Naples,Italy'},
    {coor:'lat=43.034&lon=-2.417',	loc:'Oñati,Spain'},
    {coor:'lat=59.913&lon=10.752',	loc:'Oslo,Norway'},
    {coor:'lat=48.856&lon=2.352',	loc:'Paris,France'},
    {coor:'lat=50.075&lon=14.437',	loc:'Prague,Czech Republic'},
    {coor:'lat=64.146&lon=-21.942',	loc:'Reykjavík,Iceland'},
    {coor:'lat=56.879&lon=24.603',	loc:'Riga,Latvia'},
    {coor:'lat=41.902&lon=12.496',	loc:'Rome,Italy'},
    {coor:'lat=39.453&lon=-31.127',	loc:'Santa Cruz das Flores,Portugual'},
    {coor:'lat=28.463&lon=-16.251',	loc:'Santa Cruz de Tenerife,Spain'},
    {coor:'lat=57.273&lon=-6.215',	loc:'Skye,Scotland'},
    {coor:'lat=42.697&lon=23.321',	loc:'Sofia,Bulgaria'},
    {coor:'lat=59.329&lon=18.068',	loc:'Stockholm,Sweden'},
    {coor:'lat=59.437&lon=24.753',	loc:'Tallinn,Estonia'},
    {coor:'lat=18.208&lon=16.373',	loc:'Vienna,Austria'},
    {coor:'lat=52.229&lon=21.012',	loc:'Warsaw,Poland'},
    {coor:'lat=53.961&lon=-1.07',	loc:'York,England'},
    {coor:'lat=47.376&lon=8.541',	loc:'Zurich,Switzerland'},

]