const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    id_account: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    account_name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    create_date: {
        type: Date,
        required: true,
    },
    role: {
        type: String,
        required: true,
    }
});

const albumSchema = new mongoose.Schema({
    id_album: {
        type: String,
        required: true,
    },
    name_album: {
        type: String,
        required: true,
    },
    create_date: {
        type: String,
        required: true,
    },
    id_account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Accounts",
        required: true
    }
});

const typeSchema = new mongoose.Schema({
    id_type: {
        type: String,
        required: true,
    },
    name_type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        index: 'text'
    }
});

const songSchema = new mongoose.Schema({
    id_song: {
        type: String,
        required: true,
    },
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
const loveSchema = new mongoose.Schema({
    id_song: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Songs",
        required: true
    },
    id_account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Accounts",
        required: true
    },
    love_time: {
        type: Date,
        required: true
    }
});
const listenSchema = new mongoose.Schema({
    id_account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Accounts",
        required: true
    },
    id_song: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Songs",
        required: true
    },
    listen_time: {
        type: Date,
        required: true
    }
});
const playlistSchema = new mongoose.Schema({
    id_playlist: {
        type: String,
        required: true
    },
    name_playlist: {
        type: String,
        required: true
    },
    id_account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Accounts",
        required: true
    },

});
let Accounts = mongoose.model("Account", accountSchema);

let Albums = mongoose.model("Albums", albumSchema);

let Songs = mongoose.model("Songs", songSchema);

let Types = mongoose.model("Types", typeSchema);

let Loves = mongoose.model("Loves", loveSchema);

let Listens = mongoose.model("Listens", listenSchema);

let PlayLists = mongoose.model("PlayLists", playlistSchema);


module.exports = { Accounts, Albums, Songs, Types, Loves, Listens, PlayLists };