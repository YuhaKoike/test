function selectmode()
{
    var id = document.getElementById("selectmode");
    var table = document.getElementById("table");
    var rows=[];
    var data = [[11, 12, 13],
            [21, 22, 23],
            [31, 32, 33],
            [41, 42, 43]];
    
    for(i = 0; i < data.length; i++){
        rows.push(table.insertRow(-1));  // 行の追加
        for(j = 0; j < data[0].length; j++){
            cell=rows[i].insertCell(-1);
            cell.appendChild(document.createTextNode(data[i][j]));
            // 背景色の設定
            if(i==0){
                cell.style.backgroundColor = "#bbb"; // ヘッダ行
            }else{
                cell.style.backgroundColor = "#ddd"; // ヘッダ行以外
            }
        }
    }
}
