import {WeGetRequests, SoulStatoin, MotionsEmotions} from '../assets/images';

const SampleReviews = [
    {
        id:1,
        album:'We Get Requests',
        recorded_year: '1964',
        label: "Verve",
        producer: "Norman Granz",
        artist:'The Oscar Peterson Trio',
        session:[
            {
                id:1,
                name: "Oscar Peterson",
                instrument: "Piano"
            },
            {
                id:2,
                name: "Ray Brown",
                instrument: "Bass"
            },
            {
                id:3,
                name: "Ed Thigpen",
                instrument: "Drum"
            }
        ],
        month: 7,
        year: 2020,
        link:'/reviews/wegetrequests',
        image: WeGetRequests,
        src:[
            {
                id: 1,
                title: 'We Get Requests',
                source:'Discogs',
                url:'https://www.discogs.com/The-Oscar-Peterson-Trio-We-Get-Requests/master/115882'
            },
            {
                id: 2,
                title: 'We Get Requests',
                source:'Wikepedia',
                url:'https://en.wikipedia.org/wiki/We_Get_Requests'
            }
        ],
        tracklist:[
            {
                id:1,
                song:'Corcovado',
                duration:'2:49'
            },
            {
                id:2,
                song:'The Days of Wines and Roses',
                duration:'2:40'
            },
            {
                id:3,
                song:'My One and Only Love',
                duration:'5:08'
            },
            {
                id:4,
                song:'People',
                duration:'3:30'
            },
            {
                id:5,
                song:'Have You Met Miss Jones',
                duration:'4:10'
            },
            {
                id:6,
                song:'You Look Good To Me',
                duration:'4:49'
            },
            {
                id:7,
                song:'The Girl From Ipanema',
                duration:'4:49'
            },
            {
                id:8,
                song:'D&E',
                duration:'5:11'
            },
            {
                id:9,
                song:'Time And Again',
                duration:'4:38'
            },
            {
                id:10,
                song:'Goodbye J.D',
                duration:'2:56'
            }
        ]
    },
    {
        id:2,
        album:'Motions and Emotions',
        recorded_year: '1969',
        label: "MPS",
        producer: "Claus Ogerman",
        artist:'Oscar Peterson',
        session:[
            {
                id:1,
                name: "Oscar Peterson",
                instrument: "Piano"
            },
            {
                id:2,
                name: "Sam Jones",
                instrument: "Bass"
            },
            {
                id:3,
                name: "Bukcey Pizzarelli",
                instrument: "Guitar"
            },
            {
                id:4,
                name: "Bobby Durham",
                instrument: "Drum"
            }
        ],
        month: 6,
        year: 2020,
        link:'/reviews/motionsemotions',
        image: MotionsEmotions,
        src:[
            {
                id: 1,
                title: 'Motions and Emotions',
                source:'Discogs',
                url:'https://www.discogs.com/Oscar-Peterson-Motions-Emotions/master/142697'
            },
            {
                id: 2,
                title: 'Motions and Emotions',
                source:'Wikepedia',
                url:'https://en.wikipedia.org/wiki/Motions_and_Emotions'
            }
        ],
        tracklist:[
            {
                id:1,
                song:"Sally's Tomtato",
                duration:'3:07'
            },
            {
                id:2,
                song:"Sunny",
                duration:'3:29'
            },
            {
                id:3,
                song:"By The Time I Get To Phoenix",
                duration:'4:21'
            },
            {
                id:4,
                song:"Wandering",
                duration:'2:56'
            },
            {
                id:5,
                song:"This Guy's In Love With You",
                duration:'3:44'
            },
            {
                id:6,
                song:"Wave",
                duration:'6:00'
            },
            {
                id:7,
                song:"Dreamsville",
                duration:'3:00'
            },
            {
                id:8,
                song:"Yesterday",
                duration:'3:54'
            },
            {
                id:9,
                song:"Eleanor Rigby",
                duration:'3:05'
            },
            {
                id:10,
                song:"Ode To Billy Joe",
                duration:'2:41'
            }
        ]
    },
    {
        id:3,
        album:'Soul Station',
        recorded_year: '1960',
        label: "Blue Note",
        producer: "Alfed Lion",
        artist:'Hank Mobley',
        session:[
            {
                id:1,
                name: "Hank Mobley",
                instrument: "Tenor Sax"
            },
            {
                id:2,
                name: "Wynton Kelly",
                instrument: "Piano"
            },
            {
                id:3,
                name: "Paul Chambers",
                instrument: "Bass"
            },
            {
                id:4,
                name: "Art Blakey",
                instrument: "Drum"
            }
        ],
        month: 5,
        year: 2020,
        link:'/reviews/soulstations',
        image: SoulStatoin,
        src:[
            {
                id: 1,
                title: 'Soul Station',
                source:'Discogs',
                url:'https://www.discogs.com/Hank-Mobley-Soul-Station/release/5736124'
            },
            {
                id: 2,
                title: 'Soul Station',
                source:'Wikepedia',
                url:'https://en.wikipedia.org/wiki/Soul_Station'
            }
        ],
        tracklist:[
            {
                id:1,
                song:'Remember',
                duration:'5:37'
            },
            {
                id:2,
                song:'This I Dig Of You',
                duration:'6:32'
            },
            {
                id:3,
                song:'Dig This',
                duration:'6:08'
            },
            {
                id:4,
                song:"Split Feelin's",
                duration:'4:52'
            },
            {
                id:5,
                song:'Soul Station',
                duration:'9:03'
            },
            {
                id:6,
                song:'If I Should Lose You',
                duration:'5:06'
            }
        ]
    }
];

export {SampleReviews};
