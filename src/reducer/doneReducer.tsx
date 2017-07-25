import { TodoAction } from '../actions';

const data = require('../data/todos.json');

function mark(id: number) {
    let a = data.find(c => c.id === id);
    return a;
}

export function done(state: any = [], action: TodoAction) {

    switch (action.type) {
        
        case 'DONE':
        let list = [...state, mark(action.id)];
        return list;

        case 'TOBEDONE':
        list = state.filter(item => item.id !== action.id);
        return list;

        default: 
        return state;
    }
}