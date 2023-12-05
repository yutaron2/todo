export function index() {
    /*-- ローカルストレージから、リストを取得 --*/
    let todos = JSON.parse(localStorage.todos);
    // id順にtodoを追加すると、古い要素が一番上になり、下に新しいものが加えられていくので、配列を逆にする
    todos.reverse();

    let todoList = document.getElementById('todo-list');
    
    /*-- todoListの子要素を削除。リフレッシュ --*/
    todoList.innerHTML = ''

    /*-- 要素をtodoListに付け加える --*/
    todos.forEach(todo => {
        let li = document.createElement('li');
        li.innerHTML = `
            <div class="view">
                <input class="toggle" type="checkbox">
                <label class="label">${todo.title}</label>
                <input type="hidden" value="${todo.id}">
                <button class="destroy" data-id="${todo.id}"></button>
            </div>
        `;
        todoList.appendChild(li);
    });
}
