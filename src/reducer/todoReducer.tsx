import { TodoAction } from '../actions';

const data = require('../data/todos.json');

function done(id: number) {
    let todoItem = data.find(c => c.id === id);
    return todoItem;
}

function move(type: string, id: number, state: any) {

    let newList = state.filter(item => item.id !== id);
    let pos = state.findIndex(item => item.id === id);

    if (type === 'MOVEUP') {
    if (pos === 0) {
        return state;
    }
    newList.splice(pos - 1, 0, data[id]);
     
    return newList;

    } else {
        newList.splice(pos + 1, 0, data[id]);
        return newList;
    }
}

export function todo(state: any = data, action: TodoAction) {

    switch (action.type) {
        case 'DONE':
        let list = state.filter(item => item.id !== action.id);
        return list;
        
        case 'TOBEDONE':
        list = [...state, done(action.id)];
        return list;

        case 'MOVEUP':
        list = move(action.type, action.id, state);
        return list;

        case 'MOVEDOWN':
        list = move(action.type, action.id, state);
        return list;

        default: 
        return state;
    }
}