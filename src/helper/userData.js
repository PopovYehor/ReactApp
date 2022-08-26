
let usersData = [
    {id: 0 ,name: 'Егор', task: ['Встать','Пойти','Прийти','Лечь',], check: [false, false, true, true]},
    {id: 1, name: 'Федя', task: ['Почистить зубы','Попить воды'], check: [true, true]},
    {id: 2, name: 'Вася', task: ['Быть Васей', 'Сходить на работу', 'Получить зарплату', 'Выпить пиво'], check: [true, false, false, true]},
]


const newUser = {
    id: '',
    name: '',
    task: [],
    check: []
}

export {usersData, newUser}