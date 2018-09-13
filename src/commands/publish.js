export function publish(channel, message) {
  this.bus.emit(channel, message);
}
