const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Entrei no servidor')
})


app.get('/', (req, res) => {
    res.send('Olá minha imagem!')
});

