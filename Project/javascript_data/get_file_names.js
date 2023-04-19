const fs = require('fs');

const folderPath = './states_avg_temp/';

fs.readdir(folderPath, (err, files) => {
    if (err) throw err;
    const fileNames = files.filter((file) => file.endsWith('.csv'));
    fs.writeFile('file_names.json', JSON.stringify(fileNames), (err) => {
        if (err) throw err;
        console.log('File names saved to file_names.json.');
    });
});
