const fs = require('fs');
const { parse } = require('path');

async function leer (){
    let response = await fs.readFileSync('./files/2abril_participants_94849208356.csv','utf-8');
   console.log(response.length);
    // response.forEach(element => {
    //     console.log(element);
    // });
}
leer();