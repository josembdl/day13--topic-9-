/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
self.onmessage = function(event) {
  // Do some work.
  self.postMessage("recv'd: " + event.data);
};
**/

var i = 1;

setInterval(
    function(){ 
        postMessage( "Mensaje numero " + i + "... ");
        ++i;
    },10000); //60 seg = 60000
