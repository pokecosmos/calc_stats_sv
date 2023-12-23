//メガシンカボタンの変更
function mega_button(){
	var p = document.nForm.elements['pokename'].value;
	if((p=="ニャース")||(p=="ニャース (通常)")||(p=="ニャース (アローラ)")||(p=="ニャース (ガラル)")){
		visi(3, "通常", "アローラ", "ガラル");
		if(p=="ニャース"){
			document.nForm.elements['pokename'].value = "ニャース (通常)";
		}
	}else if((p=="ペルシアン")||(p=="ペルシアン (通常)")||(p=="ペルシアン (アローラ)")){
		visi(2, "通常", "アローラ");
		if(p=="ペルシアン"){
			document.nForm.elements['pokename'].value = "ペルシアン (通常)";
		}
	}else if((p=="ライチュウ")||(p=="ライチュウ (通常)")||(p=="ライチュウ (アローラ)")){
		visi(2, "通常", "アローラ");
		if(p=="ライチュウ"){
			document.nForm.elements['pokename'].value = "ライチュウ (通常)";
		}
	}else if((p=="ナッシー")||(p=="ナッシー (通常)")||(p=="ナッシー (アローラ)")){
		visi(2, "通常", "アローラ");
		if(p=="ナッシー"){
			document.nForm.elements['pokename'].value = "ナッシー (通常)";
		}
	}else if((p=="ディグダ")||(p=="ディグダ (通常)")||(p=="ディグダ (アローラ)")){
		visi(2, "通常", "アローラ");
		if(p=="ディグダ"){
			document.nForm.elements['pokename'].value = "ディグダ (通常)";
		}
	}else if((p=="ダグトリオ")||(p=="ダグトリオ (通常)")||(p=="ダグトリオ (アローラ)")){
		visi(2, "通常", "アローラ");
		if(p=="ダグトリオ"){
			document.nForm.elements['pokename'].value = "ダグトリオ (通常)";
		}
	}else if((p=="ガーディ")||(p=="ガーディ (通常)")||(p=="ガーディ (ヒスイ)")){
		visi(2, "通常", "ヒスイ");
		if(p=="ガーディ"){
			document.nForm.elements['pokename'].value = "ガーディ (通常)";
		}
	}else if((p=="ウインディ")||(p=="ウインディ (通常)")||(p=="ウインディ (ヒスイ)")){
		visi(2, "通常", "ヒスイ");
		if(p=="ウインディ"){
			document.nForm.elements['pokename'].value = "ウインディ (通常)";
		}
	}else if((p=="ロコン")||(p=="ロコン (通常)")||(p=="ロコン (アローラ)")){
		visi(2, "通常", "アローラ");
		if(p=="ロコン"){
			document.nForm.elements['pokename'].value = "ロコン (通常)";
		}
	}else if((p=="キュウコン")||(p=="キュウコン (通常)")||(p=="キュウコン (アローラ)")){
		visi(2, "通常", "アローラ");
		if(p=="キュウコン"){
			document.nForm.elements['pokename'].value = "キュウコン (通常)";
		}
	}else if((p=="イシツブテ")||(p=="イシツブテ (通常)")||(p=="イシツブテ (アローラ)")){
		visi(2, "通常", "アローラ");
		if(p=="イシツブテ"){
			document.nForm.elements['pokename'].value = "イシツブテ (通常)";
		}
	}else if((p=="ゴローン")||(p=="ゴローン (通常)")||(p=="ゴローン (アローラ)")){
		visi(2, "通常", "アローラ");
		if(p=="ゴローン"){
			document.nForm.elements['pokename'].value = "ゴローン (通常)";
		}
	}else if((p=="ゴローニャ")||(p=="ゴローニャ (通常)")||(p=="ゴローニャ (アローラ)")){
		visi(2, "通常", "アローラ");
		if(p=="ゴローニャ"){
			document.nForm.elements['pokename'].value = "ゴローニャ (通常)";
		}
	}else if((p=="サンド")||(p=="サンド (通常)")||(p=="サンド (アローラ)")){
		visi(2, "通常", "アローラ");
		if(p=="サンド"){
			document.nForm.elements['pokename'].value = "サンド (通常)";
		}
	}else if((p=="サンドパン")||(p=="サンドパン (通常)")||(p=="サンドパン (アローラ)")){
		visi(2, "通常", "アローラ");
		if(p=="サンドパン"){
			document.nForm.elements['pokename'].value = "サンドパン (通常)";
		}
	}else if((p=="ビリリダマ")||(p=="ビリリダマ (通常)")||(p=="ビリリダマ (ヒスイ)")){
		visi(2, "通常", "ヒスイ");
		if(p=="ビリリダマ"){
			document.nForm.elements['pokename'].value = "ビリリダマ (通常)";
		}
	}else if((p=="マルマイン")||(p=="マルマイン (通常)")||(p=="マルマイン (ヒスイ)")){
		visi(2, "通常", "ヒスイ");
		if(p=="マルマイン"){
			document.nForm.elements['pokename'].value = "マルマイン (通常)";
		}
	}else if((p=="ベトベター")||(p=="ベトベター (通常)")||(p=="ベトベター (アローラ)")){
		visi(2, "通常", "アローラ");
		if(p=="ベトベター"){
			document.nForm.elements['pokename'].value = "ベトベター (通常)";
		}
	}else if((p=="ベトベトン")||(p=="ベトベトン (通常)")||(p=="ベトベトン (アローラ)")){
		visi(2, "通常", "アローラ");
		if(p=="ベトベトン"){
			document.nForm.elements['pokename'].value = "ベトベトン (通常)";
		}
	}else if((p=="ヤドン")||(p=="ヤドン (通常)")||(p=="ヤドン (ガラル)")){
		visi(2, "通常", "ガラル");
		if(p=="ヤドン"){
			document.nForm.elements['pokename'].value = "ヤドン (通常)";
		}
	}else if((p=="ヤドラン")||(p=="ヤドラン (通常)")||(p=="ヤドラン (ガラル)")){
		visi(2, "通常", "ガラル");
		if(p=="ヤドラン"){
			document.nForm.elements['pokename'].value = "ヤドラン (通常)";
		}
	}else if((p=="ヤドキング")||(p=="ヤドキング (通常)")||(p=="ヤドキング (ガラル)")){
		visi(2, "通常", "ガラル");
		if(p=="ヤドキング"){
			document.nForm.elements['pokename'].value = "ヤドキング (通常)";
		}
	}else if((p=="マタドガス")||(p=="マタドガス (通常)")||(p=="マタドガス (ガラル)")){
		visi(2, "通常", "ガラル");
		if(p=="マタドガス"){
			document.nForm.elements['pokename'].value = "ヤドキング (通常)";
		}
	}else if((p=="ケンタロス")||(p=="ケンタロス (通常)")||(p=="ケンタロス (パルデア)")){
		visi(2, "通常", "パルデア");
		if(p=="ケンタロス"){
			document.nForm.elements['pokename'].value = "ケンタロス (パルデア)";
		}
	}else if((p=="サンダー")||(p=="サンダー (通常)")||(p=="サンダー (ガラル)")){
		visi(2, "通常", "ガラル");
		if(p=="サンダー"){
			document.nForm.elements['pokename'].value = "サンダー (通常)";
		}
	}else if((p=="ファイヤー")||(p=="ファイヤー (通常)")||(p=="ファイヤー (ガラル)")){
		visi(2, "通常", "ガラル");
		if(p=="ファイヤー"){
			document.nForm.elements['pokename'].value = "ファイヤー (通常)";
		}
	}else if((p=="フリーザー")||(p=="フリーザー (通常)")||(p=="フリーザー (ガラル)")){
		visi(2, "通常", "ガラル");
		if(p=="フリーザー"){
			document.nForm.elements['pokename'].value = "フリーザー (通常)";
		}
	}else if((p=="バクフーン")||(p=="バクフーン (通常)")||(p=="バクフーン (ヒスイ)")){
		visi(2, "通常", "ヒスイ");
		if(p=="バクフーン"){
			document.nForm.elements['pokename'].value = "バクフーン (通常)";
		}
	}else if((p=="ウパー")||(p=="ウパー (通常)")||(p=="ウパー (パルデア)")){
		visi(2, "通常", "パルデア");
		if(p=="ウパー"){
			document.nForm.elements['pokename'].value = "ウパー (通常)";
		}
	}else if((p=="ニューラ")||(p=="ニューラ (通常)")||(p=="ニューラ (ヒスイ)")){
		visi(2, "通常", "ヒスイ");
		if(p=="ニューラ"){
			document.nForm.elements['pokename'].value = "ニューラ (通常)";
		}
	}else if((p=="ハリーセン")||(p=="ハリーセン (通常)")||(p=="ハリーセン (ヒスイ)")){
		visi(2, "通常", "ヒスイ");
		if(p=="ハリーセン"){
			document.nForm.elements['pokename'].value = "ハリーセン (通常)";
		}
	}else if((p=="ロトム")||(p=="ロトム (基本)")||(p=="ロトム (FC)")){
		visi(2, "基本", "FC");
		if(p=="ロトム"){
			document.nForm.elements['pokename'].value = "ロトム (FC)";
		}
	}else if((p=="ダイケンキ")||(p=="ダイケンキ (通常)")||(p=="ダイケンキ (ヒスイ)")){
		visi(2, "通常", "ヒスイ");
		if(p=="ダイケンキ"){
			document.nForm.elements['pokename'].value = "ダイケンキ (通常)";
		}
	}else if((p=="ウォーグル")||(p=="ウォーグル (通常)")||(p=="ウォーグル (ヒスイ)")){
		visi(2, "通常", "ヒスイ");
		if(p=="ウォーグル"){
			document.nForm.elements['pokename'].value = "ウォーグル (通常)";
		}
	}else if((p=="ドレディア")||(p=="ドレディア (通常)")||(p=="ドレディア (ヒスイ)")){
		visi(2, "通常", "ヒスイ");
		if(p=="ドレディア"){
			document.nForm.elements['pokename'].value = "ドレディア (通常)";
		}
	}else if((p=="ゾロア")||(p=="ゾロア (通常)")||(p=="ゾロア (ヒスイ)")){
		visi(2, "通常", "ヒスイ");
		if(p=="ゾロア"){
			document.nForm.elements['pokename'].value = "ゾロア (通常)";
		}
	}else if((p=="ゾロアーク")||(p=="ゾロアーク (通常)")||(p=="ゾロアーク (ヒスイ)")){
		visi(2, "通常", "ヒスイ");
		if(p=="ゾロアーク"){
			document.nForm.elements['pokename'].value = "ゾロアーク (通常)";
		}
	}else if((p=="クレベース")||(p=="クレベース (通常)")||(p=="クレベース (ヒスイ)")){
		visi(2, "通常", "ヒスイ");
		if(p=="クレベース"){
			document.nForm.elements['pokename'].value = "クレベース (通常)";
		}
	}else if((p=="トルネロス")||(p=="トルネロス (化身)")||(p=="トルネロス (霊獣)")){
		visi(2, "化身", "霊獣");
		if(p=="トルネロス"){
			document.nForm.elements['pokename'].value = "トルネロス (化身)";
		}
	}else if((p=="ボルトロス")||(p=="ボルトロス (化身)")||(p=="ボルトロス (霊獣)")){
		visi(2, "化身", "霊獣");
		if(p=="ボルトロス"){
			document.nForm.elements['pokename'].value = "ボルトロス (化身)";
		}
	}else if((p=="ランドロス")||(p=="ランドロス (化身)")||(p=="ランドロス (霊獣)")){
		visi(2, "化身", "霊獣");
		if(p=="ランドロス"){
			document.nForm.elements['pokename'].value = "ランドロス (化身)";
		}
	}else if((p=="ラブトロス")||(p=="ラブトロス (化身)")||(p=="ラブトロス (霊獣)")){
		visi(2, "化身", "霊獣");
		if(p=="ラブトロス"){
			document.nForm.elements['pokename'].value = "ラブトロス (化身)";
		}
	}else if((p=="ヌメイル")||(p=="ヌメイル (通常)")||(p=="ヌメイル (ヒスイ)")){
		visi(2, "通常", "ヒスイ");
		if(p=="ヌメイル"){
			document.nForm.elements['pokename'].value = "ヌメイル (通常)";
		}
	}else if((p=="ヌメルゴン")||(p=="ヌメルゴン (通常)")||(p=="ヌメルゴン (ヒスイ)")){
		visi(2, "通常", "ヒスイ");
		if(p=="ヌメルゴン"){
			document.nForm.elements['pokename'].value = "ヌメルゴン (通常)";
		}
	}else if((p=="ジュナイパー")||(p=="ジュナイパー (通常)")||(p=="ジュナイパー (ヒスイ)")){
		visi(2, "通常", "ヒスイ");
		if(p=="ジュナイパー"){
			document.nForm.elements['pokename'].value = "ジュナイパー (通常)";
		}
	}else if((p=="ルガルガン")||(p=="ルガルガン (真昼)")||(p=="ルガルガン (真夜中)")||(p=="ルガルガン (黄昏)")){
		visi(3, "真昼", "真夜中", "黄昏");
		if(p=="ルガルガン"){
			document.nForm.elements['pokename'].value = "ルガルガン (真昼)";
		}
	}else if((p=="コオリッポ")||(p=="コオリッポ (アイス)")||(p=="コオリッポ (ナイス)")){
		visi(2, "アイス", "ナイス");
		if(p=="コオリッポ"){
			document.nForm.elements['pokename'].value = "コオリッポ (アイス)";
		}
	}else if((p=="メテノ")||(p=="メテノ (流星)")||(p=="メテノ (コア)")){
		visi(2, "流星", "コア");
		if(p=="メテノ"){
			document.nForm.elements['pokename'].value = "メテノ (流星)";
		}
	}else if((p=="イエッサン")||(p=="イエッサン ♂")||(p=="イエッサン ♀")){
		visi(2, "♂", "♀");
		if(p=="イエッサン"){
			document.nForm.elements['pokename'].value = "イエッサン ♀";
		}
	}else if((p=="ニャオニクス")||(p=="ニャオニクス ♂")||(p=="ニャオニクス ♀")){
		visi(2, "♂", "♀");
		if(p=="ニャオニクス"){
			document.nForm.elements['pokename'].value = "ニャオニクス ♀";
		}
	}else if((p=="パフュートン")||(p=="パフュートン ♂")||(p=="パフュートン ♀")){
		visi(2, "♂", "♀");
		if(p=="パフュートン"){
			document.nForm.elements['pokename'].value = "パフュートン ♀";
		}
		}else if((p=="イダイトウ")||(p=="イダイトウ ♂")||(p=="イダイトウ ♀")){
		visi(2, "♂", "♀");
		if(p=="イダイトウ"){
			document.nForm.elements['pokename'].value = "イダイトウ ♂";
		}
	}else if((p=="イルカマン")||(p=="イルカマン (ナイーブ)")||(p=="イルカマン (マイティ)")){
		visi(2, "ナイーブ", "マイティ");
		if(p=="イルカマン"){
			document.nForm.elements['pokename'].value = "イルカマン (マイティ)";
		}
	}else if((p=="ガチグマ")||(p=="ガチグマ (通常)")||(p=="ガチグマ (赫月)")){
		visi(2, "通常", "赫月");
		if(p=="ガチグマ"){
			document.nForm.elements['pokename'].value = "ガチグマ (通常)";
		}
	}else if((p=="ディアルガ")||(p=="ディアルガ (通常)")||(p=="ディアルガ (オリジン)")){
		visi(2, "通常", "オリジン");
		if(p=="ディアルガ"){
			document.nForm.elements['pokename'].value = "ディアルガ (通常)";
		}
	}else if((p=="パルキア")||(p=="パルキア (通常)")||(p=="パルキア (オリジン)")){
		visi(2, "通常", "オリジン");
		if(p=="パルキア"){
			document.nForm.elements['pokename'].value = "パルキア (通常)";
		}
	}else if((p=="ギラティナ")||(p=="ギラティナ (アナザー)")||(p=="ギラティナ (オリジン)")){
		visi(2, "アナザー", "オリジン");
		if(p=="ギラティナ"){
			document.nForm.elements['pokename'].value = "ギラティナ (アナザー)";
		}
	}else if((p=="シェイミ")||(p=="シェイミ (ランド)")||(p=="シェイミ (スカイ)")){
		visi(2, "ランド", "スカイ");
		if(p=="シェイミ"){
			document.nForm.elements['pokename'].value = "シェイミ (ランド)";
		}
	}else if((p=="フーパ")||(p=="フーパ (戒め)")||(p=="フーパ (解放)")){
		visi(2, "戒め", "解放");
		if(p=="フーパ"){
			document.nForm.elements['pokename'].value = "フーパ (戒め)";
		}
	}else if((p=="メロエッタ")||(p=="メロエッタ (ボイス)")||(p=="メロエッタ (ステップ)")){
		visi(2, "ボイス", "ステップ");
		if(p=="メロエッタ"){
			document.nForm.elements['pokename'].value = "メロエッタ (ボイス)";
		}
	}else if((p=="ザシアン")||(p=="ザシアン (剣王)")||(p=="ザシアン (歴戦)")){
		visi(2, "歴戦", "剣王");
		if(p=="ザシアン"){
			document.nForm.elements['pokename'].value = "ザシアン (剣王)";
		}
	}else if((p=="ザマゼンタ")||(p=="ザマゼンタ (盾王)")||(p=="ザマゼンタ (歴戦)")){
		visi(2, "歴戦", "盾王");
		if(p=="ザマゼンタ"){
			document.nForm.elements['pokename'].value = "ザマゼンタ (盾王)";
		}
	}else if((p=="バドレックス")||(p=="バドレックス (通常)")||(p=="バドレックス (白馬)")||(p=="バドレックス (黒馬)")){
		visi(3, "通常", "白馬", "黒馬");
		if(p=="バドレックス"){
			document.nForm.elements['pokename'].value = "バドレックス (通常)";
		}
	}else if((p=="テラパゴス")||(p=="テラパゴス (通常)")||(p=="テラパゴス (テラスタル)")||(p=="テラパゴス (ステラ)")){
		visi(3, "通常", "テラスタル", "ステラ");
		if(p=="テラパゴス"){
			document.nForm.elements['pokename'].value = "テラパゴス (通常)";
		}
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
		document.nForm.elements['mega2'].value = var3;
		document.nForm.elements['mega2'].style.visibility="visible";
	}
	if(num <= 3){
		document.nForm.elements['mega3'].style.visibility="hidden";
	}else{
		document.nForm.elements['mega3'].value = var4;
		document.nForm.elements['mega3'].style.visibility="visible";
	}
}

//メガシンカボタン
function megachange(num){
	var p = document.nForm.elements['pokename'].value;
		if((p=="ニャース")||(p=="ニャース (通常)")||(p=="ニャース (アローラ)")||(p=="ニャース (ガラル)")){
		if(parseInt(num)==0){
 			p = p.replace(/\(通常\)/g,"");p = p.replace(/\(アローラ\)/g,"");p = p.replace(/\(ガラル\)/g,"");
 			p= "" + p + "(通常)";
 		}else if(parseInt(num)==1){
 			p = p.replace(/\(通常\)/g,"");p = p.replace(/\(アローラ\)/g,"");p = p.replace(/\(ガラル\)/g,"");
 			p= "" + p + "(アローラ)";
 		}else if(parseInt(num)==2){
 			p = p.replace(/\(通常\)/g,"");p = p.replace(/\(アローラ\)/g,"");p = p.replace(/\(ガラル\)/g,"");
 			p= "" + p + "(ガラル)";
 		}
 	
 	//通常orアローラ
 	}else if((p=="ペルシアン")||(p=="ペルシアン (通常)")||(p=="ペルシアン (アローラ)")
 			||(p=="ライチュウ")||(p=="ライチュウ (通常)")||(p=="ライチュウ (アローラ)")
  			||(p=="ナッシー")||(p=="ナッシー (通常)")||(p=="ナッシー (アローラ)")
 			||(p=="ディグダ")||(p=="ディグダ (通常)")||(p=="ディグダ (アローラ)")
 			||(p=="ダグトリオ")||(p=="ダグトリオ (通常)")||(p=="ダグトリオ (アローラ)")
 			||(p=="ベトベター")||(p=="ベトベター (通常)")||(p=="ベトベター (アローラ)")
 			||(p=="ロコン")||(p=="ロコン (通常)")||(p=="ロコン (アローラ)")
 			||(p=="キュウコン")||(p=="キュウコン (通常)")||(p=="キュウコン (アローラ)")
 			||(p=="イシツブテ")||(p=="イシツブテ (通常)")||(p=="イシツブテ (アローラ)")
 			||(p=="ゴローン")||(p=="ゴローン (通常)")||(p=="ゴローン (アローラ)")
 			||(p=="ゴローニャ")||(p=="ゴローニャ (通常)")||(p=="ゴローニャ (アローラ)")
 			||(p=="サンド")||(p=="サンド (通常)")||(p=="サンド (アローラ)")
 			||(p=="サンドパン")||(p=="サンドパン (通常)")||(p=="サンドパン (アローラ)")
 			){
		if(parseInt(num)==0){
 			p = p.replace(/\(アローラ\)/g,""); p = p.replace(/\(通常\)/g,"");
 			p= "" + p + "(通常)";
 		}else if(parseInt(num)==1){
 			p = p.replace(/\(アローラ\)/g,""); p = p.replace(/\(通常\)/g,"");
 			p= "" + p + "(アローラ)";
 		}
 	
 	//通常orガラル
 	 	 	}else if((p=="ヤドン")||(p=="ヤドン (通常)")||(p=="ヤドン (ガラル)")
 			||(p=="ヤドラン")||(p=="ヤドラン (通常)")||(p=="ヤドラン (ガラル)")
 			||(p=="ヤドキング")||(p=="ヤドキング (通常)")||(p=="ヤドキング (ガラル)")
 			||(p=="マタドガス")||(p=="マタドガス (通常)")||(p=="マタドガス (ガラル)")
 			||(p=="サンダー")||(p=="サンダー (通常)")||(p=="サンダー (ガラル)")
 			||(p=="ファイヤー")||(p=="ファイヤー (通常)")||(p=="ファイヤー (ガラル)")
 			||(p=="フリーザー")||(p=="フリーザー (通常)")||(p=="フリーザー (ガラル)")
 			){
		if(parseInt(num)==0){
 			p = p.replace(/\(ガラル\)/g,""); p = p.replace(/\(通常\)/g,"");
 			p= "" + p + "(通常)";
 		}else if(parseInt(num)==1){
 			p = p.replace(/\(ガラル\)/g,""); p = p.replace(/\(通常\)/g,"");
 			p= "" + p + "(ガラル)";
 		}
 	
 	//パルデア
  	 	 	}else if((p=="ケンタロス")||(p=="ケンタロス (通常)")||(p=="ケンタロス (パルデア)")
  	 	 	||(p=="ウパー")||(p=="ウパー (通常)")||(p=="ウパー (パルデア)")
 			){
		if(parseInt(num)==0){
 			p = p.replace(/\(パルデア\)/g,""); p = p.replace(/\(通常\)/g,"");
 			p= "" + p + "(通常)";
 		}else if(parseInt(num)==1){
 			p = p.replace(/\(パルデア\)/g,""); p = p.replace(/\(通常\)/g,"");
 			p= "" + p + "(パルデア)";
 		}
 	//通常orヒスイ
 	 	}else if((p=="ガーディ")||(p=="ガーディ (通常)")||(p=="ガーディ (ヒスイ)")
 			||(p=="ウインディ")||(p=="ウインディ (通常)")||(p=="ウインディ (ヒスイ)")
 			||(p=="ビリリダマ")||(p=="ビリリダマ (通常)")||(p=="ビリリダマ (ヒスイ)")
 			||(p=="マルマイン")||(p=="マルマイン (通常)")||(p=="マルマイン (ヒスイ)")
  			||(p=="バクフーン")||(p=="バクフーン (通常)")||(p=="バクフーン (ヒスイ)")
  			||(p=="ニューラ")||(p=="ニューラ (通常)")||(p=="ニューラ (ヒスイ)")
  			||(p=="ハリーセン")||(p=="ハリーセン (通常)")||(p=="ハリーセン (ヒスイ)")
  			||(p=="ダイケンキ")||(p=="ダイケンキ (通常)")||(p=="ダイケンキ (ヒスイ)")
  			||(p=="ウォーグル")||(p=="ウォーグル (通常)")||(p=="ウォーグル (ヒスイ)")
  			||(p=="ゾロア")||(p=="ゾロア (通常)")||(p=="ゾロア (ヒスイ)")
  			||(p=="ゾロアーク")||(p=="ゾロアーク (通常)")||(p=="ゾロアーク (ヒスイ)")
  			||(p=="クレベース")||(p=="クレベース (通常)")||(p=="クレベース (ヒスイ)")
  			||(p=="ヌメイル")||(p=="ヌメイル (通常)")||(p=="ヌメイル (ヒスイ)")
  			||(p=="ヌメルゴン")||(p=="ヌメルゴン (通常)")||(p=="ヌメルゴン (ヒスイ)")
  			||(p=="ドレディア")||(p=="ドレディア (通常)")||(p=="ドレディア (ヒスイ)")
  			||(p=="ジュナイパー")||(p=="ジュナイパー (通常)")||(p=="ジュナイパー (ヒスイ)")
 			){
		if(parseInt(num)==0){
 			p = p.replace(/\(ヒスイ\)/g,""); p = p.replace(/\(通常\)/g,"");
 			p= "" + p + "(通常)";
 		}else if(parseInt(num)==1){
 			p = p.replace(/\(ヒスイ\)/g,""); p = p.replace(/\(通常\)/g,"");
 			p= "" + p + "(ヒスイ)";
 		}
 	//♂♀
		 }else if((p=="イエッサン")||(p=="イエッサン ♂")||(p=="イエッサン ♀")
  	 	 	||(p=="ニャオニクス")||(p=="ニャオニクス ♂")||(p=="ニャオニクス ♀")
  	 	 	||(p=="パフュートン")||(p=="パフュートン ♂")||(p=="パフュートン ♀")
  	 	 	||(p=="イダイトウ")||(p=="イダイトウ ♂")||(p=="イダイトウ ♀")
 			){
		if(parseInt(num)==0){
 			p = p.replace(/\♂/g,""); p = p.replace(/\♀/g,"");
 			p= "" + p + "♂";
 		}else if(parseInt(num)==1){
 			p = p.replace(/♂/g,""); p = p.replace(/\♀/g,"");
 			p= "" + p + "♀";
 		}
 	// 化身or霊獣
 	  	 }else if((p=="トルネロス")||(p=="トルネロス (化身)")||(p=="トルネロス (霊獣)")
  	 	 	||(p=="ボルトロス")||(p=="ボルトロス (化身)")||(p=="ボルトロス (霊獣)")
  	 	 	||(p=="ランドロス")||(p=="ランドロス (化身)")||(p=="ランドロス (霊獣)")
  	 	 	||(p=="ラブトロス")||(p=="ラブトロス (化身)")||(p=="ラブトロス (霊獣)")
 			){
		if(parseInt(num)==0){
 			p = p.replace(/\(化身\)/g,""); p = p.replace(/\(霊獣\)/g,"");
 			p= "" + p + "(化身)";
 		}else if(parseInt(num)==1){
 			p = p.replace(/\(化身\)/g,""); p = p.replace(/\(霊獣\)/g,"");
 			p= "" + p + "(霊獣)";
 		}
 	
 	//
 	}else if((p=="ロトム")||(p=="ロトム (基本)")||(p=="ロトム (FC)")){
		if(parseInt(num)==0){
 			p="ロトム (基本)";
 		}else if(parseInt(num)==1){
 			p="ロトム (FC)";
 		}
	}else if((p=="ルガルガン")||(p=="ルガルガン (真昼)")||(p=="ルガルガン (真夜中)")||(p=="ルガルガン (黄昏)")){
		if(parseInt(num)==0){
 			p="ルガルガン (真昼)";
 		}else if(parseInt(num)==1){
 			p="ルガルガン (真夜中)";
 		}else if(parseInt(num)==2){
			p="ルガルガン (黄昏)";
		}
	}else if((p=="コオリッポ")||(p=="コオリッポ (アイス)")||(p=="コオリッポ (ナイス)")){
		if(parseInt(num)==0){
 			p="コオリッポ (アイス)";
 		}else if(parseInt(num)==1){
 			p="コオリッポ (ナイス)";
 		}
 	}else if((p=="メテノ")||(p=="メテノ (流星)")||(p=="メテノ (コア)")){
		if(parseInt(num)==0){
 			p="メテノ (流星)";
 		}else if(parseInt(num)==1){
 			p="メテノ (コア)";
 		}
 	}else if((p=="イルカマン")||(p=="イルカマン (ナイーブ)")||(p=="イルカマン (マイティ)")){
		if(parseInt(num)==0){
 			p="イルカマン (ナイーブ)";
 		}else if(parseInt(num)==1){
 			p="イルカマン (マイティ)";
 		}
 	}else if((p=="ガチグマ")||(p=="ガチグマ (通常)")||(p=="ガチグマ (赫月)")){
		if(parseInt(num)==0){
 			p="ガチグマ (通常)";
 		}else if(parseInt(num)==1){
 			p="ガチグマ (赫月)";
 		}
	}else if((p=="ディアルガ")||(p=="ディアルガ (通常)")||(p=="ディアルガ (オリジン)")){
		if(parseInt(num)==0){
 			p="ディアルガ (通常)";
 		}else if(parseInt(num)==1){
 			p="ディアルガ (オリジン)";
 		}
	}else if((p=="パルキア")||(p=="パルキア (通常)")||(p=="パルキア (オリジン)")){
		if(parseInt(num)==0){
 			p="パルキア (通常)";
 		}else if(parseInt(num)==1){
 			p="パルキア (オリジン)";
 		}
	}else if((p=="ギラティナ")||(p=="ギラティナ (アナザー)")||(p=="ギラティナ (オリジン)")){
		if(parseInt(num)==0){
 			p="ギラティナ (アナザー)";
 		}else if(parseInt(num)==1){
 			p="ギラティナ (オリジン)";
 		}
	}else if((p=="シェイミ")||(p=="シェイミ (ランド)")||(p=="シェイミ (スカイ)")){
		if(parseInt(num)==0){
 			p="シェイミ (ランド)";
 		}else if(parseInt(num)==1){
 			p="シェイミ (スカイ)";
 		}
	}else if((p=="フーパ")||(p=="フーパ (戒め)")||(p=="フーパ (解放)")){
		if(parseInt(num)==0){
 			p="フーパ (戒め)";
 		}else if(parseInt(num)==1){
 			p="フーパ (解放)";
 		}
	}else if((p=="メロエッタ")||(p=="メロエッタ (ボイス)")||(p=="メロエッタ (ステップ)")){
		if(parseInt(num)==0){
 			p="メロエッタ (ボイス)";
 		}else if(parseInt(num)==1){
 			p="メロエッタ (ステップ)";
 		}
	}else if((p=="ザシアン")||(p=="ザシアン (剣王)")||(p=="ザシアン (歴戦)")){
		if(parseInt(num)==0){
 			p="ザシアン (歴戦)";
 		}else if(parseInt(num)==1){
 			p="ザシアン (剣王)";
 		}
	}else if((p=="ザマゼンタ")||(p=="ザマゼンタ (盾王)")||(p=="ザマゼンタ (歴戦)")){
		if(parseInt(num)==0){
 			p="ザマゼンタ (歴戦)";
 		}else if(parseInt(num)==1){
 			p="ザマゼンタ (盾王)";
 		}
 	}else if((p=="バドレックス")||(p=="バドレックス (通常)")||(p=="バドレックス (白馬)")||(p=="バドレックス (黒馬)")){
		if(parseInt(num)==0){
 			p="バドレックス (通常)";
 		}else if(parseInt(num)==1){
 			p="バドレックス (白馬)";
 		}else if(parseInt(num)==2){
 			p="バドレックス (黒馬)";
 		}
 	}else if((p=="テラパゴス")||(p=="テラパゴス (通常)")||(p=="テラパゴス (テラスタル)")||(p=="テラパゴス (ステラ)")){
		if(parseInt(num)==0){
 			p="テラパゴス (通常)";
 		}else if(parseInt(num)==1){
 			p="テラパゴス (テラスタル)";
 		}else if(parseInt(num)==2){
 			p="テラパゴス (ステラ)";
 		}
 	}
	document.nForm.elements['pokename'].value = p;
	setpokemon();
	titlechange();
}