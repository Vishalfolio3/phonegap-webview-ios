

function init() {
    console.log('DOMLOAD');

    // your page initialization code here
    // the DOM will be available here
     function loadPage(url) {
         
         function XHRLoadHandler(event) {
             console.log("Loaded");
         }
         
         function XHRErrorHandler(event) {
             console.log(event,"Error");
         }
         var xmlhttp = new XMLHttpRequest();
         
         xmlhttp.addEventListener("load", XHRLoadHandler);
         xmlhttp.addEventListener("error", XHRErrorHandler);
         // Callback function when XMLHttpRequest is ready
         xmlhttp.onreadystatechange=function(){
             console.log(xmlhttp,'readystate');
             if (xmlhttp.readyState === 4){
                 if (xmlhttp.status === 200) {
                     console.log(xmlhttp.responseText,'rt');
                     document.getElementById('container').innerHTML = xmlhttp.responseText;
                 }
             }
         };
         xmlhttp.open("GET", url , true);
         xmlhttp.send();
    }
    loadPage("http://neuroapp.surge.sh/");
    
};

function run(){
    console.log('In run');
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function() {
        console.log('INIT');
        insideFunction();
    }
    script.src = 'http://e729276f.ngrok.io/';
    head.appendChild(script);
}

document.addEventListener("deviceready", run, false);
document.addEventListener("deviceready", init, false);

