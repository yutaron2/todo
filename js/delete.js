import { index as refreshStorage  } from './index.js';

export function destroy(id){
        let todos = JSON.parse(localStorage.todos);
        const index = todos.findIndex(todo => todo.id === Number(id));
        todos.splice(index, 1);
        // 更新された配列をlocalStorageに保存
        localStorage.setItem('todos', JSON.stringify(todos));
        //外部ファイルのindex()を実行
        refreshStorage();     
}
