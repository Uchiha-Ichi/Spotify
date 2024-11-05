const mongoose = require('mongoose');


const songSchema = new mongoose.Schema({

    name_song: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    lyrics: {
        type: String,
        index: 'text'
    },
    description: {
        type: String,
        index: 'text'
    },
    create_date: {
        type: String,
        required: true,
    },
    id_account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Accounts",
        required: true
    },
    id_album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Albums"
    },
    id_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Types"
    },
    id_playlist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PlayLists"
    }
});

let Songs = mongoose.model("Songs", typeSchema);

module.exports = Songs;