function pasanganTerbesar(num) {
    // you can only write your code here!
    var str = ''
    str = num.toString()
    var rubahStr = ''
    rubahStr = str.split('')

    var arrTemp = []
    for ( var i = 0; i < rubahStr.length; i= i +2 ){
    
         arrTemp.push(parseInt(rubahStr[i] + rubahStr[i + 1]))
        //  console.log(arrTemp);

    }
    for ( var i = 0; i < rubahStr.length; i++){
        if (i == rubahStr.length-1){
            break;
        }
        arrTemp.push(parseInt (rubahStr[i] + rubahStr[i + 1]))
    }
    var hasil = arrTemp.sort(function(a, b){return b-a});
       
    
    return hasil[0];
  }
  
 
 
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99