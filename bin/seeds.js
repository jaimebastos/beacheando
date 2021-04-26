require('dotenv').config()

// DB connection
require('./../config/db.config')

// 1.- require Mongoose
const mongoose = require('mongoose')

// 2. - Model requirement
const Beach = require('./../models/beach.model')

// 3 .- Data to seed
const beach = [
    {
        name: "La concha",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        city: "San Sebastian",
        country: "España",
        caption: "Playa en plena ciudad",
        image: "xxx",
    },
    {
        name: "La Malvarrosa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        city: "Valencia",
        country: "España",
        caption: "Playa en plena ciudad",
        image: "xxx",
    },
    {
        name: "Playa de Cofete",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        city: "Fuerteventura",
        country: "España",
        caption: "Mar y montaña se unen en una kilométrica playa",
        image: "xxx",
    },
    {
        name: "Holbox",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        city: "Quintana Roo",
        country: "México",
        caption: "Bancos de arena blanca",
        image: "xxx",
    },
    {
        name: "Holbox",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        city: "Quintana Roo",
        country: "México",
        caption: "Bancos de arena blanca",
        image: "xxx",
    },
    {
        name: "Sunset Beach",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        city: "Koh Lipe",
        country: "Tailandia",
        caption: "Disfruta de una mágica puesta de sol en el paraíso",
        image: "xxx",
    },

]

// 4.- Seeding time yay!
Beach
    .create(beach)
    .then(response => {
        console.log('Estos son las playas!', response)
        mongoose.connection.close();
    })
    .catch(err => console.log('se produjo un error...', err))