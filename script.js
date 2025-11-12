// 詳細を見るボタンが押されたときに実行される関数
function toggleMenu() {
    // ID 'dropdown-menu' の要素を取得
    const menu = document.getElementById('dropdown-menu');
    
    // メニューの表示/非表示を切り替える (is-closed クラスを付け外しする)
    menu.classList.toggle('is-closed'); 

    // ★オプション: メニューが開いたとき、ボタンのアイコンをXに変えたい場合は
    //              この中で detail-button にも is-closed クラスを付け外ししてください
    // const button = document.querySelector('.detail-button');
    // button.classList.toggle('is-closed'); 
}
