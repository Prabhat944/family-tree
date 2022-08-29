const DummyData=[{
        name:'Robert Musk',
        gender:'M',
        birth:'12 july 1833',
        birthLocation:'utah',
        death:'13 oct 1897',
        deathLocation:'san berg,London',
        marriage:'1869',
        spouse:'Kyle Musk',
        mother:'',
        isMother:false,
        imageUrl:'robert.jpg',
        child:[]
     },
     {
        name:'Kyle Musk',
        gender:'F',
        birth:'24 aug 1852',
        birthLocation:'Sao tome and principle',
        death:'23 feb 1912',
        deathLocation:'salt lake,utah',
        marriage:'1869',
        spouse:'Robert Musk',
        mother:'',
        isMother:true,
        imageUrl:'kyle.jpg',
        child:[
         {
            name:'Elon Musk',
            gender:'M',
            birth:'18 sep 1870',
            birthLocation:'salt lake city,utah',
            death:'24 may 1946',
            deathLocation:'American fork,utah',
            marriage:'1899',
            spouse:'Elina Musk',
            mother:'Kyle Musk',
            isMother:false,
            imageUrl:'elon.jpg',
            child:[]
         },
         {
            name:'Elina Musk',
            gender:'F',
            birth:'21 oct 1879',
            birthLocation:'streetmall,usa',
            death:'14 feb 1957',
            deathLocation:'tomegarden,silkroad,usa',
            marriage:'1899',
            spouse:'Elon Musk',
            mother:'',
            isMother:true,
            imageUrl:'elina.jpg',
            child:[
               {
                  name:'Dyna Musk',
                  gender:'F',
                  birth:'28 nov 1903',
                  birthLocation:'mall road,usa',
                  death:'11 apr 1978',
                  deathLocation:'round garden,silkroad,usa',
                  marriage:'_',
                  spouse:'_',
                  mother:'Elina Musk',
                  imageUrl:'dyna.jpg',
               }
            ]
         }
       ]
     }
 ];
 export default DummyData;
