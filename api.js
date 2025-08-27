import express, { request, response } from 'express'

const app = express()

app.use(express.json())
const port = 3000
const host = 'localhost'
let taches = []

app.get('/taches', (request, response) => {
    response.json(taches)
})
app.post("/taches", (request, response) => {
    const { nom, prenom } = request.body
    if (nom === '' || prenom === '') {
        console.log("Les deux champs sont requis !!")
    }
    else {
        let newtache = {
            nom: request.body.nom,
            prenom: request.body.prenom
        }
        taches.push(newtache)
        response.json(taches)
    }
})
app.listen(port, host, () => {
    console.log(`Le serveur est démarré sur http://${host}:${port}`)
})