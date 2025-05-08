export const GENRES = {
    all: {
        name: 'Все жанры',
        queryName: ''
    },
    comedy: {
        name: 'Комедии',
        queryName: 'комедия'
    },
    horror: {
        name: 'Ужасы',
        queryName: 'ужасы'
    },
    family: {
        name: 'Семейные',
        queryName: 'семейный'
    },
    science: {
        name: 'Фантастика',
        queryName: 'фантастика'
    },
    newFilms: {
        name: 'Новые',
        queryName: ''
    },
    drama: {
        name: 'Драма',
        queryName: 'драма'
    },
    anime: {
        name: 'Аниме',
        queryName: 'аниме'
    },
    biography: {
        name: 'Биография',
        queryName: 'биография'
    },
    action: {
        name: 'Боевики',
        queryName: 'боевик'
    },
    western: {
        name: 'Вестерн',
        queryName: 'вестерн'
    },
    military: {
        name: 'Военные',
        queryName: 'военный'
    },
    forChildren: {
        name: 'Детские',
        queryName: 'детский'
    },
    documentary: {
        name: 'Документальные',
        queryName: 'документальный'
    },
    game: {
        name: 'Игры',
        queryName: 'игра'
    },
    history: {
        name: 'Исторические',
        queryName: 'история'
    },
    concert: {
        name: 'Концерты',
        queryName: 'концерт'
    },
    short: {
        name: 'Короткометражные',
        queryName: 'короткометражка'
    },
    criminal: {
        name: 'Криминальные',
        queryName: 'криминал'
    },
    melodrama: {
        name: 'Мелодрамы',
        queryName: 'мелодрама'
    },
    music: {
        name: 'Музыка',
        queryName: 'музыка'
    },
    cartoons: {
        name: 'Мультфильмы',
        queryName: 'мультфильм'
    },
    sport: {
        name: 'Спорт',
        queryName: 'спорт'
    },
    thriller: {
        name: 'Триллеры',
        queryName: 'триллер'
    },
    fantasy: {
        name: 'Фэнтези',
        queryName: 'фэнтези'
    },
    adventure: {
        name: 'Приключения',
        queryName: 'приключения'
    }
}

export const YEARS = {
    'Все годы': '',
    '2025 ': '2025',
    '2024-2025': '2024-2025',
    '2022-2023': '2022-2023',
    '2020-2021': '2020-2021',
    '2014-2019': '2014-2019',
    '2010-2014': '2010-2014',
    '2000-2009': '2000-2009',
    '1990-1999': '1990-1999',
    '1980-1989': '1980-1989',
    '1970-1979': '1970-1979',
    '1960-1969': '1960-1969',
    'до 1959': '1900-1959',
}

export const RATING = {
    'Любой рейтинг': '',
    'Больше 9': '9-10',
    'Больше 8': '8-10',
    'Больше 7': '7-10',
    'Больше 6': '6-10',
    'Больше 5': '5-10',
}

export const SORT = {
    'Рекомендуемые': '',
    'По рейтингу': 'rating.kp',
    'По дате выхода': 'year'
}