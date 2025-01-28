const EventEmitter = require('events');

class Logged extends EventEmitter {
  log = (message) => {
    console.log(message);
    this.emit('some_event', { id: 1, text: 'Event test text!' });
  };
}

module.exports = Logged;
