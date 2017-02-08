import * as at from 'constants/actionTypes';
import * as io from 'socket.io-client';
const socket = io.connect('http://localhost:8000');

export function changeName(name) {
  return {
    type: at.CHANGE_NAME,
    name,
  };
}

export function changeMessage(result) {
  return {
    type: at.CHANGE_MESSAGE,
    result,
  };
}

// export function handleCommand(message) {
//   return (dispatch) => (
//     fetch('/api/name/random', {
//       method: 'post',
//       body: JSON.stringify({
//         message,
//       }),
//     })
//     .then((response) => { console.log(response); })
//     .then(json => dispatch(changeMessage(json.result)))
//   );
// }

export function handleCommand(message) {
  return (dispatch) => {
    socket.emit('sendCMD', message);
    socket.on('returnDT', (result) => {
      dispatch(changeMessage(result));
    });
  };
}
