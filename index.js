function newPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomBoolean = Math.round(Math.random() * 10) % 2 === 0;
        return resolve(randomBoolean);
      }, 1000);
    });
  };
  
  newPromise();
   
  

   
  function myfunc (value){
      results.response.push(value)
      if (value==true){
          results._true++
      }
      else (value){
          results._false++
      }
      console.log(value )
      console.log(results)
      console.log( "nr true",results)
      console.log( "nr false",results)
  }
 
  var interator=0;
  
  results
  
  
  while (interator<10 ){
    newPromise().then(myfunc ) ;
    interator++


}
var results = {
    response: [],
    _true: 0,
    _false: 0
     }

     JSON.stringify(results);
     localStorage.setItem('viorel', results);