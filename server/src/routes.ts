import express from 'express';

const routes = express.Router();

routes.get("/users", (request, response) => {
    return response.json({ message: "Hello World" });
});

export default routes;

// const users = [
//     'Diego',
//     'Rodrigo',
//     'Carla',
//     'Emanuel',
//     "Mayk"
// ];
// app.get("/users", (request, response) => {
//     const search = String(request.query.search);

//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

//     return response.json(filteredUsers);
// });
// app.get("/users/:id", (request, response) => {
//     const id = Number(request.params.id);

//     const user = users[id];

//     return response.json(user);
// });

// app.post("/users", (request, response) => {
//     const data = request.body;
//     console.log(data);
    
//     const user = {
//         name: data.name,
//         email: data.email
//     }
//     return response.json(user);
// });