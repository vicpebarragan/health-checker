const express = require('express');
const app = express();
const port = 3002; // Puedes cambiar el puerto si lo deseas

app.get('/health', () => {
    return {
        success: true,
        code: 200,
        message: 'OK'
    };
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});