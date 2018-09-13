export function subscribe(...channels) {
  channels.forEach(channel => {
    if (!this.channels[channel]) {
      const handler = message => this.emit('message', [channel, message]);
      this.channels[channel] = handler;
      this.bus.on(channel, handler);
    }
  });
  return channels.length;
}
