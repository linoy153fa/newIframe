export const utilService = {
    makeId,
   
}

function makeId(length = 4) {
    var txt = '';
    var possible = '0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function getRandomColor() {
    var colors = ['#eca1a6', '#b1cbbb', '#92a8d1', '#f7786b', '#ADD8E6'];
    var num = getRandomIntInclusive(0, 4);
    return colors[num];
}

function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1)
}

function addActivity(user, txt, task, group, board, app) {
    return {
        id: makeId(),
        txt,
        createdAt: Date.now(),
        byMember: {
            _id: user._id,
            imgUrl: user.imgUrl,
            fullname: user.fullname,
        },
        task: task ? { id: task.id, title: task.title } : null,
        group: group ? { id: group.id, title: group.title } : null,
        board: board ? { _id: board._id, title: board.title } : null,
        app: app ? { _id: Date.now(), app } : null,
    }
}

