window.calcJs = function(id){
    var numbers = [];
    var operator = ['+','-','*','/','%'];
    var result = document.querySelector('.result');
    var collector = ''
    var calc = document.querySelector(id);
    var result = document.querySelector('.result');
    var buttons = document.getElementsByTagName('button');
    var lastOperation = '';
    var total = 0;
    for (let i = 0; i < buttons.length; i++) {
         buttons[i].addEventListener('click',output);
    };
    function output(e){ 
        var input = e.target.innerHTML;
        result.value += input;
        if (input == 'AC'){
            console.log('you press AC');
            result.value = '';
            numbers = [];
            collector = '';
            lastOperation = '';

        }
        else if(input !='+' && input != '=' && input != '-' && input != '*' && input != '/'){
            if(collector != '+' || collector != '-' || collector != '*' || collector != '/'  ){
                console.log('last operation');
                console.log(lastOperation);
                collector += input;
                console.log(collector);
            }else{
                console.log('last operation')
                console.log(lastOperation);
                collector +=input;
                numbers.push(+collector);
                collector = '';
                console.log(numbers);
            }          
        }
                
        else if(input =='+' || input == '-' || input == '*' || input == '/'){
            //  changeOp = numbers.pop();
            //  console.log(numbers)
            // console.log(changeOp);
            // if(changeOp == '+' || changeOp == '-' || changeOp == '/' || changeOp == '*' || changeOp == '%'){
            //     console.log('two wrong operation after each other');
            // }
            // if(changeOp == input){
            //     numbers.pop();
            //     numbers.push(changeOp);
            // }
           if(collector ==0 ){
               collector += input;
               if(numbers.length>0){
                   numbers.push(collector);
                   console.log(numbers);
                   collector = '';
               }
               console.log(collector)
           }
            else if(collector != 0){ 
                numbers.push(+collector);
                // numbers.push(input);
                // collector += input;
                console.log(collector);
                // numbers.push(+collector);
                if(collector != ''){
                    numbers.push(input);
                }
                
                console.log(numbers);
                collector = '';
            }
            
            if (numbers[3] == input) {
                lastOperation = numbers.pop();
               module.equal();
               numbers.push(lastOperation);
               lastOperation = '';
            }
        }   
        else if (input == '='){
            numbers.push(+collector);
            numbers.push(input);
            collector = '';
            for(var i=0; i<numbers.length; i++){
                module.equal();
            } 
        }
    }

     this.module = {
        add : function (){
            for(var i=0 ; i<numbers.length ; i++){
                if(numbers[i] == '+'){
                    total = numbers[i-1] + numbers[i+1];
                    this.calculate();
                }
            }
        },
        substract : function (){
            for(var i=0 ; i<numbers.length ; i++){
                if(numbers[i] == '-'){
                    total = numbers[i-1] - numbers[i+1];
                    this.calculate();
                }
            }
        },
        multiply : function(){
            for(var i=0 ; i<numbers.length ; i++){
                if(numbers[i] == '*'){
                    total = numbers[i-1] * numbers[i+1];
                    this.calculate();
                }
            }
            return total;
        },
        divide : function(){
            for(var i=0 ; i<numbers.length ; i++){
                if(numbers[i] == '/'){
                    total = numbers[i-1] / numbers[i+1];
                    this.calculate();
                }
            }
        },        
        equal : function (){
            for(var i=0; i<numbers.length;i++){
                switch (numbers[i]){
                    case '*':
                        this.multiply(numbers);
                    case '/':
                        this.divide(numbers);    
                    case '+':
                        this.add();
                        break;
                    case '-':
                        this.substract(numbers);    
                  
                    default:
                        break;    
                }
            }
        },
        calculate:function(){
            for (let i = 0; i < numbers.length; i++) {
               if(numbers[i+2]=='='){
                   numbers.splice(i-1,3);    
               }else{
                   numbers.splice(i-1,2); 
               }
               numbers[i-1] = total;
               
               console.log('after calculate');
               console.log(numbers);
               result.value = total
               if(lastOperation!= ''){
                   result.value += lastOperation;
               }
            }
        }
    }
    return module;
}

var myCalc = calcJs('web-calc');





















// var numbers = [];
// var operator = ['+','-','*','/','%'];
// var result = document.querySelector('.result');
// var collector = ''

// function input(input){
//     result.value += input;
//     if(input !='+' && input != '=' && input != '-' && input != '*' && input != '/'){
//             collector += input;        
//     }
    
//     else if(input =='+' || input == '-' || input == '*' || input == '/'){
//         console.log('here is the numbers array ');
//         console.log(numbers.length);
//         console.log(numbers);

//         // if(numbers.length == 0){
//         //     collector = '-'
//         // }
        
//         if(collector != 0){
//             numbers.push(+collector);
//         }
//         numbers.push(input);
//         collector = '';
//     }   
//     else if (input == '='){
//         numbers.push(+collector);
//         numbers.push(input);
//         collector = '';
//         for(var i=0; i<numbers.length; i++){
//             equal(numbers);
//         } 
//     }
// }



// window.calcJs = function(id){
//     var calc=document.getElementById("calc");
//     var numbers = [];
//     this.operator = ['+','-','*','/','%'];
//     var result = calc.querySelector('.result');
//     var collector = ''

//         this.add = function (numbers){
//             console.log('11111111111');
//             var total = 0;
//             for(var i=0 ; i<numbers.length ; i++){
//                 if(numbers[i] == '+'){
//                     total = numbers[i-1] + numbers[i+1];
//                     if(numbers[i+2]=='='){
//                         numbers.splice(i-1,3);    
//                     }else{
//                         numbers.splice(i-1,2); 
//                     }
//                     numbers[i-1] = total;
//                     i--;
//                     result.value = total
//                 }
//             }
//         }
//         this.substract = function (numbers){
//             var total = 0;
//             for(var i=0 ; i<numbers.length ; i++){
//                 if(numbers[i] == '-'){
//                     total = numbers[i-1] - numbers[i+1];
//                     if(numbers[i+2]=='='){
//                         numbers.splice(i-1,3);    
//                     }else{
//                         numbers.splice(i-1,2); 
//                     }
//                     numbers[i-1] = total;
//                     i--;
//                     result.value = total
//                 }
//             }
//         }
//         this.multiply = function(numbers){
//             var total = 0;
//             for(var i=0 ; i<numbers.length ; i++){
//                 if(numbers[i] == '*'){
//                     total = numbers[i-1] * numbers[i+1];
//                     if(numbers[i+2]=='='){
//                         numbers.splice(i-1,3);    
//                     }else{
//                         numbers.splice(i-1,2); 
//                     }
//                     numbers[i-1] = total;
//                     i--;
//                     result.value = total
//                 }
//             }
//             return total;
//         }
//         this.divide = function(numbers){
//             var total = 0;
//             for(var i=0 ; i<numbers.length ; i++){
//                 if(numbers[i] == '/'){
//                     total = numbers[i-1] / numbers[i+1];
//                     if(numbers[i+2]=='='){
//                         numbers.splice(i-1,3);    
//                     }else{
//                         numbers.splice(i-1,2); 
//                     }
//                     numbers[i-1] = total;
//                     i--;
//                     result.value = total;
//                 }
//             }
//         }
//         this.equal = function (numbers){
//             for(var i=0; i<numbers.length;i++){
//                 switch (numbers[i]){
//                     case '+':
//                         add(numbers);
//                         break;
//                     case '-':
//                         substract(numbers);    
//                     case '*':
//                          multiply(numbers);
//                     case '/':
//                         divide(numbers);    
//                     default:
//                         break;    
//                 }
//             }
            
//             console.log('final array ');
//             console.log(numbers);
            
//         }
//         this.clearCalc = function(){
//             numbers = [];
//             result.value = '';
//             console.log(numbers)
//         }
        
//     }

// var mycalc = calcJs('calcS');

































// //  var buttons = document.getElementsByTagName('button');
// //  for(var i=0; i<buttons.length; i++){
// //      buttons[i].addEventListener('click',setInput);
// //  }
// // function setInput(e){
// //     var input 
// //     console.log('you enter setinput');
// //     console.log(e.target.innerHTML);
// // }

// // function add(numbers){
// //     console.log('enter to the add function');
// //     var total = 0;
// //     for(var i=0 ; i<numbers.length ; i++){
// //         if(numbers[i] == '+'){
// //             total = numbers[i-1] + numbers[i+1];
// //             if(numbers[i+2]=='='){
// //                 numbers.splice(i-1,3);    
// //             }else{
// //                 numbers.splice(i-1,2); 
// //             }
// //             numbers[i-1] = total;
// //             i--;
// //             console.log('the splice array is ');
// //             console.log(numbers);
// //             console.log(total);
// //             result.value = total
// //         }
// //     }
// // }


// // function substract(numbers){
// //     console.log('enter to the add function');
// //     var total = 0;
// //     for(var i=0 ; i<numbers.length ; i++){
// //         if(numbers[i] == '-'){
// //             total = numbers[i-1] - numbers[i+1];
// //             if(numbers[i+2]=='='){
// //                 numbers.splice(i-1,3);    
// //             }else{
// //                 numbers.splice(i-1,2); 
// //             }
// //             numbers[i-1] = total;
// //             i--;
// //             console.log('the splice array is ');
// //             console.log(numbers);
// //             console.log(total);
// //             result.value = total
// //         }
// //     }
// // }

// // function multiply(numbers){
// //     console.log('enter to the add function');
// //     var total = 0;
// //     for(var i=0 ; i<numbers.length ; i++){
// //         if(numbers[i] == '*'){
// //             total = numbers[i-1] * numbers[i+1];
// //             if(numbers[i+2]=='='){
// //                 numbers.splice(i-1,3);    
// //             }else{
// //                 numbers.splice(i-1,2); 
// //             }
// //             numbers[i-1] = total;
// //             i--;
// //             console.log('the splice array is ');
// //             console.log(numbers);
// //             console.log(total);
// //             result.value = total
// //         }
// //     }
// // }

// // function divide(numbers){
// //     console.log('enter to the add function');
// //     var total = 0;
// //     for(var i=0 ; i<numbers.length ; i++){
// //         if(numbers[i] == '/'){
// //             total = numbers[i-1] / numbers[i+1];
// //             if(numbers[i+2]=='='){
// //                 numbers.splice(i-1,3);    
// //             }else{
// //                 numbers.splice(i-1,2); 
// //             }
// //             numbers[i-1] = total;
// //             i--;
// //             console.log('the splice array is ');
// //             console.log(numbers);
// //             console.log(total);
// //             result.value = total
// //         }
// //     }
// // }

// // function equal(numbers){
// //     console.log('equal');
// //     for(var i=0; i<numbers.length;i++){
// //         switch (numbers[i]){
// //             case '+':
// //                 add(numbers);
// //                 break;
// //             case '-':
// //                 substract(numbers);    
// //             case '*':
// //                  multiply(numbers);
// //             case '/':
// //                 divide(numbers);    
// //             default:
// //                 break;    
// //         }
// //     }
// // }

// // function clearCalc(){
// //     numbers = [];
// //     result.value = '';
// // }


