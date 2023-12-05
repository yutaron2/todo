import { index as refreshStorage  } from './index.js';

export function create() {
    // 入力されたtitleを取得
    let todoTitle = document.getElementById('todo-input').value;

    // localStorage.todosがnullの場合は空の配列を使用
    let todos = localStorage.todos ? JSON.parse(localStorage.todos) : [];
    let beforeLength = todos.length;
    console.log('beforeLength : ' + beforeLength);

    // todoの追加処理
    let id = beforeLength + 1;
    let newTodo = {id: id, title: todoTitle, completed: false, createdAt: new Date()};

    // todosの末尾にnewTodoを結合し、todosに代入。その後todosをJSONに変換し、localStorageに保存
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));

    // todoの追加に成功したかどうかを検証
    let updatedTodos = JSON.parse(localStorage.getItem('todos'));
    if (updatedTodos.length !== beforeLength + 1) {
        throw new Error('todoの追加に失敗しました');
    }

    refreshStorage()
    console.log('success');
}
