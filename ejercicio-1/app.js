const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');
let dni = "";

/** Leer README */
async function jsondata(dni){
    const response = await fs.promises.readFile('./hacienda.json','utf-8');
    const data = JSON.parse(response);
    //console.log(data);
    let content;
    data.forEach(element => {
        if (element.dni==dni)
            {
                content =  (`el/la contribuyente tiene deudas ${element.nombre} tiene notificaciones pendientes, se enviara un email a ${element.email}`);    
                if (fs.existsSync('./notificaciones.txt')) {
                    const leer = fs.readFileSync("./notificaciones.txt", 'utf8');
                    const modificar = leer  +'\n' +content;
                    fs.writeFileSync('./notificaciones.txt', modificar, 'utf8');

                }
                else{
                    
                    fs.writeFile("notificaciones.txt", content, (err) => {
                        if (err) {
                            console.log("Ha ocurrido un error: ", err);
                        } else {
                            console.log("Fichero guardado con éxito.")
                        }
                    }
                );
                 
                }
            }
    });
}

jsondata('65432109E');
//jsondata('76543210D');