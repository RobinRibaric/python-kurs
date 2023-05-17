const fs = require('fs');
const axios = require('axios');

const getTempAvgAnnualStateData = async (url) => {
    try {
        const stop = 50;
        for(let i = 1; i <= stop; i++) {
            const url = `https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/statewide/time-series/${i}/tavg/ann/12/1995-2021.csv`;
            const response = await axios.get(url);
            const data = response.data;
            const name = data.split(",")[0];
            const startIndex = data.indexOf("Date,Value,Anomaly");
            const endIndex = data.lastIndexOf("\n");
            const dataToWrite = data.substring(startIndex, endIndex + 1);
    
            fs.writeFile(`./states_avg_temp/${name}.csv`, dataToWrite, (err) => {
                if (err) throw err;
                console.log('Data saved to file.');
            });
        }
    } catch (error) {
        console.log(error);
    }
}

const getAlaskaTempAvgAnnualStateData = async () => {
    const response = await axios.get(`https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/statewide/time-series/50/tavg/ann/12/1995-2021.csv`);
            console.log(response.data);
            const data = response.data;
            const name = data.split(",")[0];
            const startIndex = data.indexOf("Date,Value,Anomaly");
            const endIndex = data.lastIndexOf("\n");
            const dataToWrite = data.substring(startIndex, endIndex + 1);
    
            fs.writeFile(`./states_avg_temp/${name}.csv`, dataToWrite, (err) => {
                if (err) throw err;
                console.log('Data saved to file.');
            });
}

const getAnnualPrecipitationAvgByState = async () => {
    try {
        const stop = 50;
        for(let i = 1; i <= stop; i++) {
            if(i == 49) continue;
            const response = await axios.get(`https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/statewide/time-series/${i}/pcp/ann/12/1995-2021.csv`);
            console.log(response.data);
            const data = response.data;
            const name = data.split(",")[0];
            const startIndex = data.indexOf("Date,Value,Anomaly");
            const endIndex = data.lastIndexOf("\n");
            const dataToWrite = data.substring(startIndex, endIndex + 1);
    
            fs.writeFile(`./states_avg_precipitation/${name}.csv`, dataToWrite, (err) => {
                if (err) throw err;
                console.log('Data saved to file.');
            });
        }
    } catch (error) {
        console.log(error);
    }
}
//https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/statewide/time-series/1/pcp/ann/12/2010-2021.csv?base_prd=true&begbaseyear=1901&endbaseyear=2000
getAlaskaTempAvgAnnualStateData();
//getTempAvgAnnualStateData();
getAnnualPrecipitationAvgByState();
