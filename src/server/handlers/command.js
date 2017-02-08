import { exec } from 'child_process';

function getCommandResult(message) {
  return new Promise((resolve, reject) => {
    exec(message, (error, stdout, stderr) => {
      if (error) {
        reject({ result: stderr || error });
        return;
      }
      resolve({ result: stdout || error });
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
  });
}

// function getCommandResult2(message) {
//   const child = exec(message);
//   let data = '';
//   const output = child.stdout || child.stderr;
//   output.on('data', (chunks) => {
//     data += chunks;
//     output.emit('data', data);
//   })
// }

export default {
  method: ['POST'],
  path: '/api/name/random',
  config: {
    handler(request, reply) {
      const { message } = JSON.parse(request.payload);
      let a = '';
      let b = 0;
      if (message.startsWith('cp ')) {
        for (const codePoint of message) {
          if (codePoint === ' ') {
            b = b + 1;
          }
          if (b < 2) {
            a += codePoint;
          }
        }
        const d = a.slice(a.indexOf(' ') + 1);
        console.log(d);
      }
      return reply(null, getCommandResult(message));
    },
  },
};
