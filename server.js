console.log('May node be with you')

const express = require('express');
const cors = require('cors')
const app = express()
const PORT = 5000;



const players = {
    'lebron james': {
        'name': 'Lebron James',
        'number': 23,
        'position': 'Small Forward',
        'hometown': 'Cleveland, Ohio'
    },
    'anthony davis': {
        'name': 'Anthony Davis',
        'number': 3,
        'position': 'Power Forward',
        'hometown': 'Chicago, Illinois',
    },
    'dennis schroder': {
        'name': 'Dennis Schroder',
        'number': 17,
        'position': 'Point Guard',
        'hometown': 'Braunschweig, Germany',
    },
    'kyle kuzma': {
        'name': 'Kyle Kuzma',
        'number': 0,
        'position': 'Small Forward',
        'hometown': 'Flint, Michigan',
    },
    'Montrezl Harrell': {
        'name': '',
        'number': ,
        'position': '',
        'hometown': '',
    },
    'Magic Johnson': {
        'name': '',
        'number': ,
        'position': '',
        'hometown': '',
    },
    'These are not real': {
        'name': '',
        'number': ,
        'position': '',
        'hometown': '',
    },
    'One more': {
        'name': '',
        'number': ,
        'position': '',
        'hometown': '',
    },
     'unknown': {
         'name': 'unknown',
     }
}



app.use(cors())


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/players/:playerName', (request, response) => {
    const name = request.params.playerName.toLowerCase();
    if(players[name]){
    response.json(players[name])
    } else {
        response.json(players['unknown'])
    }
    // const name = request.params.playerName.toLowerCase();
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Whats up')
})