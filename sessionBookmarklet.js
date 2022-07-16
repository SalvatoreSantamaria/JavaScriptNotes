// Resouces:
// https://gist.github.com/caseywatts/c0cec1f89ccdb8b469b1
// http://subsimple.com/bookmarklets/writeyourown.php


// javascript:(function() { 
//     window.open(http://www.gopuff.com/session); 
// })();

javascript:(function(){ 
    // const str = document.body.innerHTML; 
    // const y = str.search('mixcart_session_v1'); 
    // console.log(y); 
    // const letter =  document.body.innerHTML[242] ; 
    // console.log(letter); 
    window.open("http://www.gopuff.com/session") 
    
    const doc = document.body.innerText;
    console.log(doc);  
    let obj = JSON.parse(doc); 
    console.log(obj);   
    console.log(obj.mixcart_session_v1); 

})();

//

javascript:(function(){ 
    window.open 
    
    const doc = document.body.innerText;
    console.log(doc);  
    let obj = JSON.parse(doc); 
    console.log(obj);   
    console.log(obj.mixcart_session_v1);
    window.open("http://www.gopuff.com/session")
})();

javascript:( function(){ window.open("http://www.gopuff.com/session", self); const doc = document.body.innerText;  console.log(doc); let obj = JSON.parse(doc); console.log(obj);  console.log(obj.mixcart_session_v1); window.open(`http://localhost:3000?mixcart_session_v1=${obj.mixcart_session_v1}`, self)})();


// How do I get JavaScript code in a bookmarklet to execute after I open a new webpage in a new tab?
