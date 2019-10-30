function angkaPalindrome(num) {
    // you can only write your code here!
    var hasil = ''
    if ( num <= 10) {
        return  num + 1;
    }
    
    while (true) {
        num++
        hasil = num.toString()
        var hasilSementara = ''
        for( var i = hasil.length-1; i >= 0;i--) {
            hasilSementara += hasil[i];
            //console.log(hasilSementara)
        }  
        if ( hasilSementara == hasil) {
            return hasil
        }
    }    
}

  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001