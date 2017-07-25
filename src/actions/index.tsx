export interface ITodo {
    type: string;
    id: number;
}

export type TodoAction = ITodo;

export function doneTodo(id: number): ITodo {
    const action: ITodo = {
        type : 'DONE',
        id
    };
    return action;
}

export function toBeDone(id: number): ITodo {
    const action: ITodo = {
        type : 'TOBEDONE',
        id
    };
    return action;
}

export function moveUp(id: number): ITodo {
    const action: ITodo = {
        type: 'MOVEUP',
        id
    };
    return action;
}

export function moveDown(id: number): ITodo {
    const action: ITodo = {
        type: 'MOVEDOWN',
        id
    };
    return action;
}