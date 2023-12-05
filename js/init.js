import { create } from './create.js'
import { index } from './index.js';
import { destroy } from './delete.js';

export function init() {
    // domを読み込んだら実行
    document.addEventListener('DOMContentLoaded', function() {
        index();
    });

    // .destroy がクリックされたら実行
    document.addEventListener('click', function(e) {
        if (e.target.className === 'destroy') {
            destroy(e.target.dataset.id);
        }
    });

    // createのセットアップ
    let input = document.getElementById('todo-input');
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter" && !composing) {
            // ここで入力内容を送信する関数を呼び出す
            console.log(input.value)
            create(event.target.value)
            // デフォルトのフォーム送信を防ぐ
            event.preventDefault();
            // formの値を空にする
            event.target.value = "";
        }
    });

    // 変換中かを判定
    let composing = false;
    addEventListener("compositionstart", (event) => {
        console.log('composing')
        composing = true;
    });

    addEventListener("compositionend", (event) => {
        console.log('endComposing')
        composing = false;
    });

    document.addEventListener('DOMContentLoaded', () => {
        // .view の要素にイベントリスナーを追加
        document.querySelectorAll('.view').forEach(view => {
            view.addEventListener('click', function() {
                //クリックされたview要素自体を渡す。thisはコードの実行されるコンテキストの範囲
                createInputBox(this);
            });
        });

        // document.addEventListener('submit', () => {
        //     if (e.target.className === 'destroy') {
        //         //適当なコード。idと編集ように入力したタイトルを入れる。
        //         destroy(e.target.dataset.id, e.target.value.todoTitle);
        //     }
        // })
    });
    
    function createInputBox(viewElement) {
        // 既に入力ボックスがあれば何もしない
        if (viewElement.querySelector('.edit-box')) {
            return;
        }

        // 入力ボックスの作成
        const inputBox = document.createElement('input');
        inputBox.setAttribute('type', 'text');
        inputBox.setAttribute('class', 'edit-box');

        // ボタンから data-id を取得して設定
        const dataId = viewElement.querySelector('.destroy').dataset.id;
        inputBox.setAttribute('data-id', dataId);

        // 入力ボックスを view 要素に追加
        viewElement.appendChild(inputBox);
    }
}

init();
