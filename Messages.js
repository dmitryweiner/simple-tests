class Messages {
    constructor(messages = []) {
        this.messages = messages;
    }

    addMessage(message) {
        this.messages.push(message);
    }

    getMessages() {
        return this.messages;
    }

    getMessageByIndex(index) {
        return this.messages[0];
    }

    deleteMessageByIndex(index) {
        return this.messages.splice(index, 1);
    }

    deleteMessages() {
        this.messages = [];
    }
}

module.exports = Messages;
