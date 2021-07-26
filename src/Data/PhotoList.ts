export type PhotoType = {
    title?: string,
    img: string
}

export type PhotoListType = Array<PhotoType>

const photoList: PhotoListType = [
    {
        title: 'Заголовок 1',
        img: '1_screen.png'
    },
    {
        title: 'Заголовок 2',
        img: '2_screen.png'
    },
    {
        title: 'Заголовок 3',
        img: '3_screen.png'
    },
    {
        title: 'Заголовок 4',
        img: '4_screen.png'
    },
    {
        title: 'Заголовок 5',
        img: '5_screen.png'
    },
]

export const bigPhotoList: PhotoListType = [
    {
        img: '1_screen_big.png'
    },
    {
        img: '2_screen_big.png'
    },
    {
        img: '3_screen_big.png'
    },
    {
        img: '4_screen_big.png'
    },
    {
        img: '5_screen_big.png'
    },
]

export default photoList