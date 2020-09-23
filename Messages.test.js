const Messages = require('./Messages');

describe('Messages', () => {
    test('Creates instance', () => {
        const messages = new Messages();
        expect(messages).not.toBeNull();
    });

    test('Creates instance and saves array', () => {
        const messagesArray = [
            {
                message: "Test",
                nick: "Test"
            }
        ];
        const messages = new Messages(messagesArray);
        expect(messages.getMessages()).toEqual(messagesArray);
    });
});
