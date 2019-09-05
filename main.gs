function myFunction() {
  
  //スプレッドシート取得
  var sheet = SpreadsheetApp.getActiveSheet(); 
  
  //最後の行を取得
  var lastRow = sheet.getLastRow();
    
  //時間を配列に
  var num = [];
  
  //色別時間を配列に
  var colorNum    = [];
  
  //色を取得（白）
  var white = sheet.getRange(2, 2).getBackground();
  
  //色を取得（目的別）する配列
  var targetColor = [];
  
  //特定のいろの数を数える
  for(i = 0; i <= 5; i++){
    
    //色を数える配列
    colorNum[i] = 0;
    
    //色を取得する
    targetColor[i] = sheet.getRange(i + 3, 43).getBackground();
  }
  

  
  //dは日にち（列）、tは時間（行）
  for(d = 3; d <= lastRow; d++){
    num[d] = 0;
    
    for(t = 3; t <= 36; t++){
      
      //セルの色を取得する
      var cellColor = sheet.getRange(d, t).getBackground();
      
      //行で空白じゃないセルを数える
      if(cellColor !== white){
        num[d]++;
      }
      
      //行で特定の色のセルを数える
      for(i = 0; i <= 5; i++){
        
        if(cellColor === targetColor[i]){
          colorNum[i]++;
        }
        
      }
    }
    
    sheet.getRange(d, 37).setValue(num[d]/2);    
    
  }
  
  for(i = 0; i <= 5; i++){
    sheet.getRange(i + 3, 40).setValue(colorNum[i]/2);
  }
  
}
