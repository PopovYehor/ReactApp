import { ADD_TOP_NEWS, ADD_DAY_NEWS } from "./type"

const defaultState = {
    top: [{id : 0, title: "Ukraine wins bronze in women’s high jump at Tokyo Olympics", summary: "19-year-old Yaroslava Mahuchikh has won bronze for Ukraine in the women’s high jump at the 2020 Tokyo Olympic Games with fellow Ukrainian athlete Iryna Herashchenko coming in fourth place.", img: "https://www.kyivpost.com/wp-content/uploads/2021/08/000_9KP839-800x520.jpg", date : "Aug. 7, 2021"},
            {id : 1, title: "English Midlands Ukrainians Enjoy Independence Concert Served with Gusto", summary: "This celebration of Ukrainian Independence Day in the heart of the English Midlands had everything and, at the same time, something for everyone.", img: "https://www.kyivpost.com/wp-content/uploads/2022/08/duet_buczok-3-800x520.jpg", date : "Aug. 26, 2022"},
            {id : 2, title: "Ukrainian Technology that you use but don’t know", summary: "Ukrainian Technology that you use but don’t know Ukraine is one of the largest European names when it comes to technology.", img: "https://www.kyivpost.com/wp-content/uploads/2022/06/ukr_tech_-300x200.png", date : "June 27, 2022"},
            {id : 3, title: "Exhibition of Famous Naive Art Painter Prymachenko Held in Lviv", summary: "An exhibition of works by Maria Prymachenko is being held at The Andrey Sheptytsky National Museum in Lviv.", img: "https://www.kyivpost.com/wp-content/uploads/2022/08/1-300x200.jpg", date : "Aug. 13, 2022"}
        ],
    day: [
        {id: 0, title: 'Ukraine seeks UNESCO cultural protection for Odesa', summary: 'Ukraine’s government will ask the UN’s cultural watchdog to add the historic port of Odesa to its World Heritage List of protected sites as Russia’s invasion continues, the agency said Tuesday.', img: 'https://www.kyivpost.com/wp-content/uploads/2022/08/odessa-sea-port-odessa-ukraine-2013-300x200.webp', date: 'Aug. 31 at 10:50'},
        {id: 1, title: 'Celebrating the Life and Works of Ukrainian Artist Michel Andreenko', summary: 'Artist Mykhailo Andriyenko-Nechytailo, better known in France as Michel Andreenko, was one of the great Ukrainian modernists who lived and worked in Paris between 1923 and 1982.', img: 'https://www.kyivpost.com/wp-content/uploads/2022/08/fdkjdfvjkfdjkf-300x200.jpg', date: 'Aug. 30 at 16:31'},
        {id: 2, title: 'Black Sea Grain Initiative: Re-Opening Ukraine’s Grain for the World', summary: 'On Aug. 27, Amir Abdulla, the United Nations (UN) Coordinator for the Black Sea Grain Initiative, announced that Ukrainian maritime exports of grains and other agricultural products through the Initiative surpassed one million tons since Russia’s blockade ended.', img: 'https://www.kyivpost.com/wp-content/uploads/2022/08/000_32fr93m-1-300x200.jpg', date: ' Aug. 29 at 14:07'},
        {id: 3, title: 'London’s Harrow Borough Flying the Flag for Ukraine ', summary: 'While Ukrainians were being urged by President Zelensky to refrain from celebrating Independence Day en masse in public due to fears of widespread Russian attacks, those now residing in Britain were busy showing their defiance to the enemy.', img: 'https://www.kyivpost.com/wp-content/uploads/2022/08/photo_1-300x200.jpg', date: 'Aug. 29 at 15:50'},
    ]
}

const reducerNews = (state = defaultState, action) => {
    switch (action.type){
        case ADD_TOP_NEWS:
            return {...state, top: [action.payload, ...state.top]}
        case ADD_DAY_NEWS:
            return {...state, day: [action.payload, ...state.top ]}
        
        default:
            return state
    }
}

export {reducerNews}