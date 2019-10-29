var input= ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'];


function dataHandling2(arr) {
    arr.splice(1,4, 'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung','21/05/1989','Pria','SMA International Metro');

    console.log(arr);

    var bulan = arr[3].split('/');

    var gantiBulan = bulan[1];
  switch (gantiBulan) {
    case '01': {console.log('Januari'); break};
    case '02': {console.log('Febuari'); break};
    case '03': {console.log('Maret'); break};
    case '04': {console.log('April'); break};
    case '05': {console.log('Mei'); break };
    case '06': {console.log('Juni'); break};
    case '07': {console.log('Juli'); break};
    case '08': {console.log('Agustus'); break};
    case '09': {console.log('September'); break};
    case '10': {console.log('Oktober'); break};
    case '11': {console.log('November'); break};
    case '12': {console.log('December'); break};
    default : console.log('error');
}
 var reversed = bulan.reverse()
    console.log(reversed);

    console.log(bulan[2] + '-' + bulan[1] + '-' + bulan[0]);

    console.log(arr[1].slice(0,14))
}

dataHandling2(input);