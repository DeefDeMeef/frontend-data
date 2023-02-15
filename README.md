# Frontend Data

https://deefdemeef.github.io/frontend-data/

### Assigment

Maak een datavisualisatie (met behulp van de d3-bibliotheek) op basis van gegeven gegevens waarbij gegevens kunnen worden verkend door interactie met behulp van enter(), update() en exit().

### D3

D3 (afkorting voor Data-Driven Documents) is een JavaScript-bibliotheek waarmee dynamische en interactieve datavisualisaties kunnen worden gemaakt in webbrowsers.

### Gekozen API

De Star Wars API (SWAPI) is een openbare API die toegang biedt tot een grote hoeveelheid gegevens over de personages, films, planeten, voertuigen en andere aspecten van de Star Wars-franchise. Ik maak alleen gebruik van de data over de characters.

SWAPI is gebouwd volgens het RESTful API-architectuurpatroon, wat betekent dat het gebruikmaakt van HTTP-methoden zoals GET, POST, PUT en DELETE om gegevens te versturen en ontvangen. De API retourneert gegevens in het JSON-formaat.

Een voorbeeld hiervan:
```js
http https://swapi.dev/api/people/1/
```

Output:
```json
{
    "birth_year": "19 BBY",
    "eye_color": "Blue",
    "films": [
        "https://swapi.dev/api/films/1/",
        ...
    ],
    "gender": "Male",
    "hair_color": "Blond",
    "height": "172",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "mass": "77",
    "name": "Luke Skywalker",
    "skin_color": "Fair",
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-10T13:52:43.172000Z",
    "species": [
        "https://swapi.dev/api/species/1/"
    ],
    "starships": [
        "https://swapi.dev/api/starships/12/",
        ...
    ],
    "url": "https://swapi.dev/api/people/1/",
    "vehicles": [
        "https://swapi.dev/api/vehicles/14/"
        ...
    ]
}
```

Er zijn verschillende endpoints beschikbaar in de SWAPI, elk voor een ander aspect van de Star Wars-franchise. Bijvoorbeeld, het "/people" endpoint biedt toegang tot informatie over de personages, terwijl het "/planets" endpoint informatie geeft over de planeten van Star Wars.