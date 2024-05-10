const todoValue = document.getElementById('js-todo-ttl')
const todoRegister = document.getElementById('js-register-btn')
const todoList = document.getElementById('js-todo-list')
const doneList = document.getElementById('js-done-list')

todoRegister.addEventListener('click',function(){
    const todo = document.createTextNode(todoValue.value);
    const liTag = document.createElement('li');
    const pTag = document.createElement('p');

    pTag.appendChild(todo);
    liTag.appendChild(pTag);
    todoList.appendChild(liTag);

    const btn_box = document.createElement('div');
    btn_box.setAttribute('class','btn-box');
    liTag.appendChild(btn_box);

    const done_btn = document.createElement('button');
    done_btn.setAttribute('id','js-done-btn');
    done_btn.innerHTML = '完了';
    btn_box.appendChild(done_btn);

    const del_btn = document.createElement('button');
    del_btn.setAttribute('id','js-del-btn');
    del_btn.innerHTML = '削除';
    btn_box.appendChild(del_btn);

    //完了機能の追加
    done_btn.addEventListener('click',function(){
        //処理を関数で呼び出す
        doneTodo(done_btn);
    });

    //削除機能の追加
    del_btn.addEventListener('click',function(){
        //処理を関数で呼び出す
        deleteTodo(del_btn);
    });

});

const doneTodo = function(done_btn){
    const doneTodo = done_btn.closest('li'); //クリックされた完了ボタンから１番近いタグを取得する
    doneTodo.setAttribute('class','done-item'); //条件分岐のための準備
    doneList.appendChild(doneTodo); //完了リストの子要素に取得したliタグを挿入
    done_btn.remove(); //完了リストに移動したliタグの完了ボタンを押す
}

const deleteTodo = function(del_btn){
    const del_comfirm = this.confirm('本当に削除しますか？'); //誤って削除しないかの確認
    if(del_comfirm === true){ //上記の確認でOKが押された場合
        const choseTodo = del_btn.closest('li');//クリックされた削除ボタンから一番値回liタグを取得する

        //削除がクリックされたタスクが未完リスト内か完了リスト内かで処理を変える
        if(choseTodo.classList.contains('done-item')){
        doneList.removeChild(choseTodo); //完了リスト内の該当のliタグを削除
    } else {
        todoList.removeChild(choseTodo); //未完リスト内の該当のliタグを削除
    }
    }
}