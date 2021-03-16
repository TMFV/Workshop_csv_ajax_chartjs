function fetchData() {
    fetch("./csv/Plumetop_heights_timeseries.csv")
        .then((response) => {return response.text();})
            .then((data)=>{console.log(data);})
    
}
fetchData();