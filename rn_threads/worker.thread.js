// import { self } from 'react-native-threads';
 
// // listen for messages
// self.onmessage = (message) => {

//     // send a message, strings only
//     self.postMessage(`this is worker thread repeating - ${message}`);
// }

import { self } from 'react-native-threads';

let count = 0;

self.onmessage = message => {
  count++;

  var sum = 0;
  for (var i=0; i<100000000; i++) {
      sum += Math.random();
  }

  self.postMessage(`Sum: ${sum}`);
}