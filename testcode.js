var date = '15/02/2019'
var hasil =date.split('');
console.log(hasil);

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function datahandling2 (input) {
    input.splice(1,1, ' Roman Alamsyah Elsharawy');
    input.splice(2,1, 'Provinsi Bandar Lampung');
    input.splice(4,4, 'Pria');
    input.splice(5,5, 'SMA International Metro');

    console.log(input);

    var bulan = input[3].split('');
    
    switch (bulan [1]) {

        case '01':
            console.log('Januari');break;
        
        case '02':
            console.log('Febuari');break;
        
        case '03':
            console.log('Maret');break;
            
        case '04':
            console.log('April');break;    
         
        case '05':
            console.log('Mei');break;
            
        case '06':
            console.log('Juni');break;    

        case '07':
            console.log('Juli');break;      
    
        case '08':
            console.log('Agustus');break;

        case '09':
            console.log('September');break;

        case '10':
            console.log('Oktober');break;

        case '11':
            console.log('November');break;

        case '12':
            console.log('December');break;

        }

        var konversiBulan = bulan.join('')

        var final = final.sort(function(a,b){return b-a})

        console.log(final)

        console.log(konversiBulan);

        hasilSlice= arr[1].slice(0,14)

        console.log(hasilSlice);
    


}

datahandling2(input);
console.log(input) 