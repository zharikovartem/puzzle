type RewiewDataItemType = {
    text: Array<string>,
    title: string,
    stars: 0|1|2|3|4|5,
    date: string,
    userName: string,
}

const RewiewData: Array<RewiewDataItemType> = [
    {
        text: [
            "1This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of. ",
            "This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of."
        ],
        title: 'Title1',
        stars: 5,
        date: 'Jun 17',
        userName: 'User 1'
    },
    {
        text: [
            "2)This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of. ",
            "This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of."
        ],
        title: 'Title2',
        stars: 4,
        date: 'Jun 15',
        userName: 'User 2'
    },
    {
        text: [
            "1This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of. ",
            "This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of."
        ],
        title: 'Title1',
        stars: 3,
        date: 'Jun 18',
        userName: 'user 1'       
    },
    {
        text: [
            "1This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of. ",
            "This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of."
        ],
        title: 'Title1',
        stars: 2,
        date: 'Jun 17',
        userName: 'user 1'       
    },
    {
        text: [
            "1This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of. ",
            "This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of."
        ],
        title: 'Title1',
        stars: 0,
        date: 'Jun 17',
        userName: 'user 1'        
    },
]

export default RewiewData