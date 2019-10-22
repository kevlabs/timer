const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (keyStr) => {
  const keyCode = +keyStr.charCodeAt();

  if (keyCode === 3) {
    process.exit();
    return;
  }

  const delay = keyCode === 98 ? 0 : keyCode >= 49 && keyCode <= 57 ? keyCode - 48 : null;
  if (delay !== null) {
    process.stdin.write(`setting timer for ${delay} seconds.\n`);
    setTimeout(() => process.stdout.write('beep\n'), delay * 1000);
  }

});