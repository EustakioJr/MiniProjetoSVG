function getGeometryByCity(){
    const city = document.getElementById('cidade').value;
    
    const requestPolygonCity = new Request(`http://localhost:3000/getSvg/${city}`);
    const requestViewBoxCity = new Request(`http://localhost:3000/getViewBox/${city}`);

    fetch(requestPolygonCity)
        .then(response => {
            return response.json();
        }).then(response => {
            document.getElementById('path').setAttribute('d', response[0].st_assvg);
        });

    fetch(requestViewBoxCity)
        .then(response => {
            return response.json();
        }).then(response => {
            document.getElementById('svg').setAttribute('viewBox', response[0].getviewbox);
        });
}