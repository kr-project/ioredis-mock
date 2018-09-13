export function unsubscribe(...channels) {
  channels.forEach(channel => {
    const handler = this.channels[channel];
    if (handler) {
      this.bus.removeListener(channel, handler);
    }
  });

  return 'OK';
}
