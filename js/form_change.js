//メガシンカボタンの変更
function mega_button(){
	var p = document.nForm.elements['pokename'].value;
	if((p=="ニャース")||(p=="ニャース(通常)")||(p=="ニャース(ガラル)")){
		visi(2, "通常", "ガラル");
	}else if((p=="ウパー")||(p=="ウパー(通常)")||(p=="ウパー(パルデア)")){
		visi(2, "通常", "パルデア");
	}else if((p=="ケンタロス")||(p=="ケンタロス(パルデア)")){
		visi(1, "パルデア");
	}else if((p=="ロトム")||(p=="ロトム(基本)")||(p=="ロトム(FC)")){
		visi(2, "基本", "FC");
	}else if((p=="ルガルガン")||(p=="ルガルガン(真昼)")||(p=="ルガルガン(真夜中)")){
		visi(2, "真昼", "真夜中");
	}else if((p=="コオリッポ")||(p=="コオリッポ(アイス)")||(p=="コオリッポ(ナイス)")){
		visi(2, "アイス", "ナイス");
	}else if((p=="イエッサン")||(p=="イエッサン♂")||(p=="イエッサン♀")){
		visi(2, "♂", "♀");
	}else if((p=="パフュートン")||(p=="パフュートン♂")||(p=="パフュートン♀")){
		visi(2, "♂", "♀");
	}else if((p=="イルカマン")||(p=="イルカマン(ナイーブ)")||(p=="イルカマン(マイティ)")){
		visi(2, "ナイーブ", "マイティ");
	}else{
		visi(0);
	}
}

function visi(num, var1, var2, var3, var4){
	if(num == 0){
		document.nForm.elements['mega0'].style.visibility="hidden";
	}else{
		document.nForm.elements['mega0'].value = var1;
		document.nForm.elements['mega0'].style.visibility="visible";
	}
	if(num <= 1){
		document.nForm.elements['mega1'].style.visibility="hidden";
	}else{
		document.nForm.elements['mega1'].value = var2;
		document.nForm.elements['mega1'].style.visibility="visible";
	}
	if(num <= 2){
		document.nForm.elements['mega2'].style.visibility="hidden";
	}else{
		document.nForm.elements['mega2'].value = var2;
		document.nForm.elements['mega2'].style.visibility="visible";
	}
	if(num <= 3){
		document.nForm.elements['mega3'].style.visibility="hidden";
	}else{
		document.nForm.elements['mega3'].value = var2;
		document.nForm.elements['mega3'].style.visibility="visible";
	}
}

//メガシンカボタン
function megachange(num){
	var p = document.nForm.elements['pokename'].value;
		if((p=="ニャース")||(p=="ニャース(通常)")||(p=="ニャース(ガラル)")){
		if(parseInt(num)==0){
 			p = p.replace(/\(ガラル\)/g,"");
 			p = p.replace(/\(通常\)/g,"");
 			p= "" + p + "(通常)";
 		}else if(parseInt(num)==1){
 			p = p.replace(/\(ガラル\)/g,"");
 			p = p.replace(/\(通常\)/g,"");
 			p= "" + p + "(ガラル)";
 		}
	}else if((p=="ウパー")||(p=="ウパー(通常)")||(p=="ウパー(パルデア)")){
		if(parseInt(num)==0){
 			p = p.replace(/\(パルデア\)/g,"");
 			p = p.replace(/\(通常\)/g,"");
 			p= "" + p + "(通常)";
 		}else if(parseInt(num)==1){
 			p = p.replace(/\(パルデア\)/g,"");
 			p = p.replace(/\(通常\)/g,"");
 			p= "" + p + "(パルデア)";
 		}
 	}else if((p=="ケンタロス")||(p=="ケンタロス(パルデア)")){
		if(parseInt(num)==0){
 			p = p.replace(/\(パルデア\)/g,"");
 			p = p.replace(/\(通常\)/g,"");
 			p= "" + p + "(パルデア)";
 		}
 	}else if((p=="ロトム")||(p=="ロトム(基本)")||(p=="ロトム(FC)")){
		if(parseInt(num)==0){
 			p="ロトム(基本)";
 		}else if(parseInt(num)==1){
 			p="ロトム(FC)";
 		}
	}else if((p=="ルガルガン")||(p=="ルガルガン(真昼)")||(p=="ルガルガン(真夜中)")){
		if(parseInt(num)==0){
 			p="ルガルガン(真昼)";
 		}else if(parseInt(num)==1){
 			p="ルガルガン(真夜中)";
 		}
	}else if((p=="コオリッポ")||(p=="コオリッポ(アイス)")||(p=="コオリッポ(ナイス)")){
		if(parseInt(num)==0){
 			p="コオリッポ(アイス)";
 		}else if(parseInt(num)==1){
 			p="コオリッポ(ナイス)";
 		}
	}else if((p=="イエッサン")||(p=="イエッサン♂")||(p=="イエッサン♀")){
		if(parseInt(num)==0){
 			p="イエッサン♂";
 		}else if(parseInt(num)==1){
 			p="イエッサン♀";
 		}
 	}else if((p=="パフュートン")||(p=="パフュートン♂")||(p=="パフュートン♀")){
		if(parseInt(num)==0){
 			p="イエッサン♂";
 		}else if(parseInt(num)==1){
 			p="イエッサン♀";
 		}
 	}else if((p=="イルカマン")||(p=="イルカマン(ナイーブ)")||(p=="イルカマン(マイティ)")){
		if(parseInt(num)==0){
 			p="イルカマン(ナイーブ)";
 		}else if(parseInt(num)==1){
 			p="イルカマン(マイティ)";
 		}
	}
	document.nForm.elements['pokename'].value = p;
	setpokemon();
}