const fs = require('fs');
const csv = require('csv-parser');
/* 
const stream = fs.createReadStream('./states_avg_temp/Alabama.csv');
const writer = fs.createWriteStream('reformatted_data.csv');

writer.write('year,avg_temp,anomaly\n');

stream
  .pipe(csv())
  .on('data', (data) => {
    const year = data.Date.substring(0, 4);
    const avg_temp = data.Value;
    const anomaly = data.Anomaly;
    writer.write(`${year},${avg_temp},${anomaly}\n`);
  })
  .on('end', () => {
    console.log('Data reformatted and saved to file.');
  });
 */

  const removeHeader = async () => {
    const folderPath = './states_avg_precipitation/';
    fs.readdir(folderPath, (err, files) => {
            if (err) throw err;
            files.forEach((file) => {
                const filePath = `${folderPath}/${file}`;
                let data = '';
                fs.createReadStream(filePath)
                    .on('data', (chunk) => {
                        data += chunk;
                    })
                    .on('end', () => {
                        const startIndex = data.indexOf("Date,Value");
                        const dataToWrite = data.substring(startIndex);
                        fs.writeFile(filePath, dataToWrite, (err) => {
                            if (err) throw err;
                            console.log(`Data from ${file} updated.`);
                        });
                    });
            });
        });
  }

  const removeHeaderForTemp = async () => {
    const folderPath = './states_avg_temp/';
    fs.readdir(folderPath, (err, files) => {
            if (err) throw err;
            files.forEach((file) => {
                const filePath = `${folderPath}/${file}`;
                let data = '';
                fs.createReadStream(filePath)
                    .on('data', (chunk) => {
                        data += chunk;
                    })
                    .on('end', () => {
                        const startIndex = data.indexOf("Date,Value");
                        const dataToWrite = data.substring(startIndex);
                        fs.writeFile(filePath, dataToWrite, (err) => {
                            if (err) throw err;
                            console.log(`Data from ${file} updated.`);
                        });
                    });
            });
        });
  }


  const formatAllTempFiles = async () => {
    const fileNames = JSON.parse(fs.readFileSync("./file_names.json"));

    for(let i = 0; i < fileNames.length; i++) {
        const stream = fs.createReadStream(`./states_avg_temp/${fileNames[i]}`);

        const writer = fs.createWriteStream(`./states_avg_temp_formatted/${fileNames[i]}`);

        writer.write('year,avg_temp,anomaly\n');
            stream
            .pipe(csv())
            .on('data', (data) => {
                const year = data.Date.substring(0, 4);
                const avg_temp = data.Value;
                const anomaly = data.Anomaly;
                writer.write(`${year},${avg_temp},${anomaly}\n`);
            })
            .on('end', () => {
                console.log('Data reformatted and saved to file.');
            });
    }
  }

  const formatAllPrecipitationFiles = async () => {
    const fileNames = JSON.parse(fs.readFileSync("./file_names.json"));

    for(let i = 0; i < fileNames.length; i++) {
        const stream = fs.createReadStream(`./states_avg_precipitation/${fileNames[i]}`);

        const writer = fs.createWriteStream(`./states_avg_precipitation_formatted/${fileNames[i]}`);

        writer.write('year,precipitation\n');
            stream
            .pipe(csv())
            .on('data', (data) => {
              console.log(data)
                const year = data.Date.substring(0, 4);
                const precipitation = data.Value;
                writer.write(`${year},${precipitation}\n`);
            })
            .on('end', () => {
                console.log('Data reformatted and saved to file.');
            });
    }
  }
//states_avg_precipitation_formatted
formatAllTempFiles();
//formatAllPrecipitationFiles();
//removeHeader();
//removeHeaderForTemp();