var textOfFile1;

const sleep = (time) => new Promise((r) => setTimeout(r, time));//timeはミリ秒

//Form要素を取得する
var form = document.getElementById("myform1");
var file = document.getElementById("myfile1");
//ファイルが読み込まれた時の処理
file.addEventListener('change', function(e) {
  
  //ここにファイル取得処理を書く
  result2 = e.target.files[0];
  
    //FileReaderのインスタンスを作成する
    var reader = new FileReader();
  
    //読み込んだファイルの中身を取得する
    reader.readAsText( result2 );
  
    //ファイルの中身を取得後に処理を行う
    reader.addEventListener( 'load', function() {

        textOfFile1 = reader.result.split('\r\n');    
        endFlg = false;
    })

})

endFlg = true;

async function start(){
	chCount = 0;
	
	pElem1 = document.getElementById("Output1");
	
	title1 = textOfFile1[0];
	title1 = title1.replace('<title>','テーマ:');
	title1 = title1.replace('</title>','');
	pElem1.innerHTML = title1
	await sleep(3000);
	
	str1 = ''
	for(i=2; i<=textOfFile1.length; i++){
		if(endFlg == true){
			break;
		}
		
		chCount = 0;
		line1 = textOfFile1[i];
		str1 = ''
		while(line1 != "---"){
			str1 += line1;
			chCount += line1.length;
			
			str1 += '<br>'
			
			i++
			if(i==textOfFile1.length){
				break
			}
			line1 = textOfFile1[i];
		}
		pElem1.innerHTML = str1
		
		await sleep(chCount * 50);
		
	
	
	}
	
	pElem1.innerHTML = str1
}

async function end(){
	endFlg = true
}