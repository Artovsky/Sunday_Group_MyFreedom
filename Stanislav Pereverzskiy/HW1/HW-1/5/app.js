let x=120000;

prostCh = [];



 nprostch: 

    for (let i = 2; i <= x; i++) { 

        for (let y = 2; y < i; y++) { 

          
          if (i % y == 0) 
          continue nprostch ;

//          if (prostCh.length = 10001) 
   //       break nprostch //(эти строчки должны остновить цикл)


        }
        
        prostCh.push(i)   
        console.log(i)

    }
    console.log(prostCh)

