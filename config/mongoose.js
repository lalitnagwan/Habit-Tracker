const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lalitnagwan0:qwerty12@cluster0.bpb3miy.mongodb.net/habitTrackerdb');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to db'));
db.once('open', function(){
    console.log('Successfully connected to database');
});
