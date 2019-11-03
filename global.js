class Global {
    constructor() {
        this.collection = []
    }
    addClient(ws) {
        var obj = {}
        var Id = "" + new Date().getTime() + Math.floor(Math.random() * 100000)
        obj["id"] = Id
        obj["ws"] = ws
        this.collection.push(obj)
        return Id
    }
    getNextWS(currId) {
        var i;
        for (i = 0; i < this.collection.length; i++) {
            if (this.collection[i].id == currId) { break }
        }
        var nextId = i < this.collection.length - 1 ? i + 1 : 0;
        return this.collection[nextId].ws
    }
    deleteWS(currId) {
        var i;
        for (i = 0; i < this.collection.length; i++) {
            if (this.collection[i].id == currId) { break }
        }
        this.collection.splice(i, 1)
    }
}

module.exports = Global