import * as tty from 'tty';

export function getConsoleWidth() {
  const stdout: tty.WriteStream = process.stdout as tty.WriteStream;
  if (stdout && stdout.columns) {
    return stdout.columns;
  }
  return 80;
}
