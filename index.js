import express from 'express';
import path from 'path';

const port = process.env.PORT || 3001;
const app = express();

app.get('/', (req,res) => {
    console.log('Se recibio una solicitud a /index');
    res.sendFile( path.join('index.html'));
});
//    res.sendFile( 'C:\Users\juanj\OneDrive\Escritorio\de nuevp', '/index.html');

   
 app.listen(port,()=> {
    console.log('Servicor corriendo en el puerto 3001');
});