import express from 'express';

const app = express();

app.get("/users", (request, response) => {
    console.log("Listagem de usuários");

    response.json([
        'Diego',
        'Rodrigo',
        'Carla',
        'Emanuel',
        "Mayk"
    ]);
});

app.listen(3333, function() {
    console.log("Servidor rodando.");
});