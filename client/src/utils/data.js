export const grands = {
    fields: ["ID", "Наименование конкурса", "Тема работы", "Число участников", "Количество победителей"],
    items: [
        { id: '1', competitionName: 'grand', topic: 'title', participantQuantity: '23', winnersQuantity: '1'},
        { id: '2', competitionName: 'grand', topic: 'title', participantQuantity: '23', winnersQuantity: '1'},
        { id: '3', competitionName: 'grand', topic: 'title', participantQuantity: '23', winnersQuantity: '1'},  
    ]
};

export const championships = {
    fields: ["ID", "ФИО участника", "Подразделение", "Должность", "Победитель"],
    items: [
        { id: '1', participantFullName: 'champ', department: 'title', post: '23', isWinner: 'true'},
        { id: '2', participantFullName: 'champ', department: 'title', post: '23', isWinner: 'false'},
        { id: '3', participantFullName: 'champ', department: 'title', post: '23', isWinner: 'false'},
    ]
};

export const events = {
    fields: ["ID","Наименование мероприятия", "Тип мероприятия", "Уровень мероприятия", "Организатор мероприятия"],
    items:[
        { id: '1', Name: 'наименование', type: 'тип', level: 'всероссийиский', organizator: 'организатор'},
        { id: '2', Name: 'наименование', type: 'тип', level: 'всероссийиский', organizator: 'организатор'},
        { id: '3', Name: 'наименование', type: 'тип', level: 'всероссийиский', organizator: 'организатор'},
    ]
};

export const eventsData = {
    items:[
        {id: '1', eventID: '1', dataName: 'Дополнительно', data:'1'},
        {id: '2', eventID: '1', dataName: 'Дополнительно', data:'1'},
        {id: '3', eventID: '1', dataName: 'Дополнительно', data:'1'},
        {id: '4', eventID: '2', dataName: 'Дополнительно', data:'1'},
        {id: '5', eventID: '2', dataName: 'Дополнительно', data:'1'},
        {id: '6', eventID: '2', dataName: 'Дополнительно', data:'1'},
        {id: '7', eventID: '3', dataName: 'Дополнительно', data:'1'},
        {id: '8', eventID: '3', dataName: 'Дополнительно', data:'1'},
        {id: '9', eventID: '3', dataName: 'Дополнительно', data:'1'}
    ]
};