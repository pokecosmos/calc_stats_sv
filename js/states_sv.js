//チェックを外す
function unchk1(num){
	for(i=1; i<6; i++) {
		if(i != parseInt(num)){
			if(document.nForm.elements[chup[i]].checked == true){
    			document.nForm.elements[chup[i]].checked = false;
    			if((document.nForm.elements[dn[i]].value)==0){
  					ncalc(i);
  				}else{
  					dcalc(i);
  				}
    		}
    	}
  	}
  	document.nForm.elements[chdw[num]].checked = false;
  	dcalc(num);
}
function unchk2(num){
	for(i=1; i<6; i++) {
		if(i != parseInt(num)){
			if(document.nForm.elements[chdw[i]].checked == true){
    			document.nForm.elements[chdw[i]].checked = false;
    			dcalc(i);
    		}
    	}
  	}
  	document.nForm.elements[chup[num]].checked = false;
  	if((document.nForm.elements[dn[num]].value)==0){
  		ncalc(num);
  	}else{
  		dcalc(num);
  	}
}
//ボタンで数値代入
function setvalue(elm,num){
	//document.nForm.elements[elm].value = parseInt(num);
	if(num =="-1"){
		document.nForm.elements[elm].value ="";
	}else{
		document.nForm.elements[elm].value = parseInt(num);
	}
}

//▼ボタンで能力値の増減
function nchange(num1, num2){
	n = parseInt(document.nForm.elements[nn[num1]].value);
	if(parseInt(num2)==0){
		n +=1;
	}else if(parseInt(num2)==1){
		n -=1;
	}
	if(n > 999){
		n = 999;
	}else if(n < 0){
		n = 0;
	}
	document.nForm.elements[nn[num1]].value = n;
}
//▼ボタンで値の努力値の増減
function dchange(num1, num2){
	n = parseInt(document.nForm.elements[dn[num1]].value);
	if(parseInt(num2)==0){
		n += 4;
	}else if(parseInt(num2)==1){
		n -= 4;
	}
	if(n > 252){
		n = 252;
	}else if(n < 0){
		n = 0;
	}
	document.nForm.elements[dn[num1]].value = n;
}
//能力値を計算する
function ncalc(num){
	n = parseInt(document.nForm.elements[dn[num]].value);
	if(n > 252){
		document.nForm.elements[dn[num]].style.color = "red";
	}else{
		document.nForm.elements[dn[num]].style.color = "black";
	}
	n = Math.floor(n / 4);
	n += parseInt(document.nForm.elements[sn[num]].value) * 2 + parseInt(document.nForm.elements[kn[num]].value);
	n = Math.floor(n * parseInt(document.nForm.elements['L0'].value) / 100);
	if(num == 0){//H能力値の計算
		n += 10 + parseInt(document.nForm.elements['L0'].value);
	}else{//ABCDS能力値の計算
		n += 5;
		if(document.nForm.elements[chup[parseInt(num)]].checked == true){
			n = Math.floor(n*1.1);
		}else if(document.nForm.elements[chdw[parseInt(num)]].checked == true){
			n = Math.floor(n*0.9);
		}
	}
	var p = document.nForm.elements['pokename'].value;
	if(p == "ヌケニン"){
		if(num == 0){
			n = 1;
		}
	}
	document.nForm.elements[nn[num]].value=n;
	k_color(); scalc();moji();
}
//努力値を逆算する
function dcalc(num){
	n = document.nForm.elements[nn[num]].value;
	
	if((n%11==10) && (num!=0)){
		if(document.nForm.elements[chup[num]].checked == true){
			if(parseInt(n) >= parseInt(nnn)){
				n = parseInt(n)+1;
			}else{
				n = parseInt(n)-1;
			}
			document.nForm.elements[nn[num]].value = n;
		}
	}
	nnn = n;
	
	if(num==0){
		n = n - document.nForm.elements['L0'].value - 10;
	}else{
		if(document.nForm.elements[chup[parseInt(num)]].checked == true){
			n = Math.ceil(n/1.1);
		}else if(document.nForm.elements[chdw[parseInt(num)]].checked == true){
			n = Math.ceil(n/0.9);
		}
		n -= 5;
	}
	n = Math.ceil(n * 100 / document.nForm.elements['L0'].value);
	n = (n - parseInt(document.nForm.elements[sn[num]].value) *2 - parseInt(document.nForm.elements[kn[num]].value))*4;
	if(n > 252){
		document.nForm.elements[dn[num]].style.color = "red";
	}else{
		document.nForm.elements[dn[num]].style.color = "black";
	}
	if(n < 0){
		document.nForm.elements[dn[num]].value = 0;
		ncalc(num);
	}else{
		document.nForm.elements[dn[num]].value = n;
	}
	
	dsum();scalc();moji();
}
//残り努力値の合計を計算する
function dsum(){
	n = 510;
	for(i=0; i<6; i++){
		n -= parseInt(document.nForm.elements[dn[i]].value);
	}
	
	document.nForm.elements['d6'].value = n;
	if(n < 0){
		document.nForm.elements['d6'].style.color = "red";
	}else{
		document.nForm.elements['d6'].style.color = "black";
	}
	taikyu_hyoji_2();
}
//ステータスをテキストボックス外に表示する
function moji(){
	var text = document.nForm.elements['target'];
	var text2 = "";//実数値
	var text3 = "";//努力値
	
	text.value =document.nForm.elements['pokename'].value;
	for(i=1; i<6; i++){
		if(document.nForm.elements[chup[i]].checked == true){
			break;
		}
	}
	for(j=1; j<6; j++){
		if(document.nForm.elements[chdw[j]].checked == true){
			break;
		}
	}
	switch(i){
		case 1:
			if(j == 2){
				text3 ="さみしがり";
			}else if(j == 3){
				text3 ="いじっぱり";
			}else if(j == 4){
				text3 ="やんちゃ";
			}else if(j == 5){
				text3 ="ゆうかん";
			}else{
				text3 ="？？？";
			}
			break
		case 2:
			if(j == 1){
				text3 ="ずぶとい";
			}else if(j == 3){
				text3 ="わんぱく";
			}else if(j == 4){
				text3 ="のうてんき";
			}else if(j == 5){
				text3 ="のんき";
			}else{
				text3 ="？？？";
			}
			break
		case 3:
			if(j == 1){
				text3 ="ひかえめ";
			}else if(j == 2){
				text3 ="おっとり";
			}else if(j == 4){
				text3 ="うっかりや";
			}else if(j == 5){
				text3 ="れいせい";
			}else{
				text3 ="？？？";
			}
			break;
		case 4:
			if(j == 1){
				text3 ="おだやか";
			}else if(j == 2){
				text3 ="おとなしい";
			}else if(j == 3){
				text3 ="しんちょう";
			}else if(j == 5){
				text3 ="なまいき";
			}else{
				text3 ="？？？";
			}
			break;
		case 5:
			if(j == 1){
				text3 ="おくびょう";
			}else if(j == 2){
				text3 ="せっかち";
			}else if(j == 3){
				text3 ="ようき";
			}else if(j == 4){
				text3 ="むじゃき";
			}else{
				text3 ="？？？";
			}
			break;
		case 6:
			if(j == 6){
				text3 ="まじめ";
			}else{
				text3 ="？？？";
			}
			break;
	}
	text.value += " "+ text3 + " ";
	
	for(i=0; i<6; i++){
		if(document.nForm.elements[nn[i]].value >= 1){
			text.value += document.nForm.elements[nn[i]].value;
			text2 += document.nForm.elements[nn[i]].value;
			if(document.nForm.elements[dn[i]].value > 0){
				text.value +="(";
				text.value +=document.nForm.elements[dn[i]].value;
				text.value +=")";
				if(i==0){text3 += " H"}
				else if(i==1){text3 += " A"}
				else if(i==2){text3 += " B"}
				else if(i==3){text3 += " C"}
				else if(i==4){text3 += " D"}
				else if(i==5){text3 += " S"}
				text3 += document.nForm.elements[dn[i]].value;
			}
		}else{
			text.value += "×";
			text2 += "×";
		}
		if(i <5){
			text.value += "-";
			text2 += "-";
		}
	}
	text.value += "\n";
	text.value += text2;
	text.value += "\n";
	text.value += text3;
	
	taikyu_hyoji_2();
}


//種族値を代入する
function setpokemon(){
	mega_button();
	for(i=0; i<pokemon.length; i++){
		if(pokemon[i][0]==document.nForm.elements['pokename'].value){
			document.nForm.elements[sn[0]].value = pokemon[i][1];
			document.nForm.elements[sn[1]].value = pokemon[i][2];
			document.nForm.elements[sn[2]].value = pokemon[i][3];
			document.nForm.elements[sn[3]].value = pokemon[i][4];
			document.nForm.elements[sn[4]].value = pokemon[i][5];
			document.nForm.elements[sn[5]].value = pokemon[i][6];
			document.nForm.elements[sn[6]].value = pokemon[i][7];
			break;
		}
	}
	ncalc(0);ncalc(1);ncalc(2);ncalc(3);ncalc(4);ncalc(5);
	taikyu_hyoji_2();
	moji();
}
//努力値をすべて0にする
function dreset(){
	for(i=0; i<6; i++){
		document.nForm.elements[dn[i]].value = 0;
		document.nForm.elements[dn[i]].style.color = "black";
	}
	dsum();
	ncalc(0);ncalc(1);ncalc(2);ncalc(3);ncalc(4);ncalc(5);
	moji();
}
//種族値合計を計算する
function ssum(){
	n=0;
	for(i=0; i<6; i++){
		n += parseInt(document.nForm.elements[sn[i]].value);
	}
	document.nForm.elements[sn[6]].value = n;
}

//個体値が変更されてるとき色を変える
function k_color(){

	for(i=0; i<6; i++){
		if(document.nForm.elements[kn[i]].value == 31){
			document.nForm.elements[kn[i]].style.color = "black";
		}else{
			document.nForm.elements[kn[i]].style.color = "red";
		}
	}
}


//耐久振り計算用
function ncalc2(num, dnum){
	
	n = Math.floor(dnum / 4);
	n += parseInt(document.nForm.elements[sn[num]].value) * 2 + parseInt(document.nForm.elements[kn[num]].value);
	n = Math.floor(n * parseInt(document.nForm.elements['L0'].value) / 100);
	if(num == 0){//H能力値の計算
		n += 10 + parseInt(document.nForm.elements['L0'].value);
	}else{//ABCDS能力値の計算
		n += 5;
		if(document.nForm.elements[chup[parseInt(num)]].checked == true){
			n = Math.floor(n*1.1);
		}else if(document.nForm.elements[chdw[parseInt(num)]].checked == true){
			n = Math.floor(n*0.9);
		}
	}
	return(n);
}

//S実数値計算用
function scalc(){
	n = parseInt(document.nForm.elements['n5'].value);
	s_rank = parseInt(document.nForm.elements['rank'].value);
	
	//--Sランク判定
	if(s_rank >= 1){
		n *= (s_rank+2) / 2;
	}else if(s_rank <= -1){
		s_rank *= -1;
		n *= 2 / (s_rank + 2);
	}
	n = Math.floor(n);
	
	//--麻痺判定
	if(document.nForm.elements['ch_m'].checked == true){
			n = Math.floor(n/2);
	}
	
	//--特性判定
	n *= parseInt(document.nForm.elements['skill'].value)/2;
	n = Math.floor(n);
	
	//--道具判定
	n *= parseInt(document.nForm.elements['sitem'].value)/2;
	n = Math.floor(n);
	
	//--追い風判定
	if(document.nForm.elements['ch_o'].checked == true){
			n = Math.floor(n*2);
	}
	document.nForm.elements['s_result'].value = n;
}

//耐久振りボタン表示・非表示
function taikyu_hyoji_2(){//努力値オーバー排除、性格テキトー・ヌケニン排除
	var p = document.nForm.elements['pokename'].value;
	j=0; up=0; dw=0;
	for(i=0; i<6; i++){
		if((!document.nForm.elements[nn[i]].value)||(document.nForm.elements[dn[i]].value > 252)){
			j++;
		}
	}
	if(document.nForm.elements[dn[6]].value < 0){
		j++;
	}
	for(i=1; i<6; i++){
		if(document.nForm.elements[chup[i]].checked == true){
			up = 1;
		}
		if(document.nForm.elements[chdw[i]].checked == true){
			dw = 1;
		}
	}
	if(p!="ヌケニン"){
		if((j==0)&&(up == dw)){
			document.nForm.elements['taikyu'].style.visibility="visible";
			document.nForm.elements['taikyu2'].style.visibility="visible";
		}else if((j==0)&&(up != dw)){
			document.nForm.elements['taikyu'].style.visibility="visible";
			document.nForm.elements['taikyu2'].style.visibility="hidden";
		}else{
			document.nForm.elements['taikyu'].style.visibility="hidden";
			document.nForm.elements['taikyu2'].style.visibility="hidden";
		}
	}else{
		document.nForm.elements['taikyu'].style.visibility="hidden";
		document.nForm.elements['taikyu2'].style.visibility="hidden";
	}
}


//耐久振りボタン計算
function taikyu_tyosei(){
	
	now_nh = parseInt(document.nForm.elements[nn[0]].value); now_nb = parseInt(document.nForm.elements[nn[2]].value); now_nd = parseInt(document.nForm.elements[nn[4]].value);
	now_dh = parseInt(document.nForm.elements[dn[0]].value); now_db = parseInt(document.nForm.elements[dn[2]].value); now_dd = parseInt(document.nForm.elements[dn[4]].value);
	now_sisu_hb = now_nh * now_nb;
	now_sisu_hd = now_nh * now_nd;
	
	d_max = parseInt(document.nForm.elements['d6'].value) + now_dh + now_db + now_dd;
	
	x_nh = 0; x_nb = 0; x_nd = 0; x_sisu_hbd = 0;
	
	var_dh = d_max;
	if(var_dh > 252){
		var_dh = 252;
	}
	for(var_dh; var_dh >= 0; var_dh--){
		var_nh = ncalc2(0, var_dh);
		var_db = d_max - var_dh;
		if(var_db > 252){
			var_db = 252;
		}
		for(var_db; var_db >= 0; var_db--){
			var_nb = ncalc2(2, var_db);
			var_dd = d_max - var_dh - var_db;
			if(var_dd > 252){
				break;
			}
			var_nd = ncalc2(4, var_dd);
			
			var_sisu_hb = var_nh * var_nb;
			var_sisu_hd = var_nh * var_nd;
			var_sisu_hbd = var_nh * var_nb * var_nd / (var_nb + var_nd);
			
			if((var_sisu_hb >= now_sisu_hb)&&(var_sisu_hd >= now_sisu_hd)){
				if(x_sisu_hbd < var_sisu_hbd){
					x_sisu_hbd = var_sisu_hbd;
					x_nh = var_nh;
					x_nb = var_nb;
					x_nd = var_nd;
				}
			}
		}
	}
	document.nForm.elements[nn[0]].value = x_nh;
	document.nForm.elements[nn[2]].value = x_nb;
	document.nForm.elements[nn[4]].value = x_nd;
	dcalc(0);dcalc(2); dcalc(4);
}

//調整チェック計算用　実数値計算
function ncalc3(num, dnum, seikaku){
	
	n = Math.floor(dnum / 4);
	n += parseInt(document.nForm.elements[sn[num]].value) * 2 + parseInt(document.nForm.elements[kn[num]].value);
	n = Math.floor(n * parseInt(document.nForm.elements['L0'].value) / 100);
	if(num == 0){//H能力値の計算
		n += 10 + parseInt(document.nForm.elements['L0'].value);
	}else{//ABCDS能力値の計算
		n += 5;
		if(seikaku == 1){
			n = Math.floor(n*1.1);
		}else if(seikaku == -1){
			n = Math.floor(n*0.9);
		}
	}
	return(n);
}

//調整チェック計算用　努力値計算
function dcalc3(num, seikaku){
	n = document.nForm.elements[nn[num]].value;
	
	if(num==0){
		n = n - document.nForm.elements['L0'].value - 10;
	}else{
		if(seikaku == 1){
			n = Math.ceil(n/1.1);
		}else if(seikaku == -1){
			n = Math.ceil(n/0.9);
		}
		n -= 5;
	}
	n = Math.ceil(n * 100 / document.nForm.elements['L0'].value);
	n = (n - parseInt(document.nForm.elements[sn[num]].value) *2 - parseInt(document.nForm.elements[kn[num]].value))*4;
	
	return(n);
}

//調整チェックボタン-------------------------
function tyosei_check(){
	//能力値取得
	now_nh = parseInt(document.nForm.elements[nn[0]].value); now_nb = parseInt(document.nForm.elements[nn[2]].value); now_nd = parseInt(document.nForm.elements[nn[4]].value);
	now_na = parseInt(document.nForm.elements[nn[1]].value); now_nc = parseInt(document.nForm.elements[nn[3]].value); now_ns = parseInt(document.nForm.elements[nn[5]].value);
	now_dh = parseInt(document.nForm.elements[dn[0]].value); now_db = parseInt(document.nForm.elements[dn[2]].value); now_dd = parseInt(document.nForm.elements[dn[4]].value);
	now_da = parseInt(document.nForm.elements[dn[1]].value); now_dc = parseInt(document.nForm.elements[dn[3]].value); now_ds = parseInt(document.nForm.elements[dn[5]].value);
	now_sisu_hb = now_nh * now_nb;
	now_sisu_hd = now_nh * now_nd;
	
	//性格取得
	fin_up = 0; fin_dw = 0;
	for(i=1;i<6;i++){
		if(document.nForm.elements[chup[i]].checked == true){
			fin_up = i;
		}else if(document.nForm.elements[chdw[i]].checked == true){
			fin_dw = i;
		}
	}

	//その他
	d_max = now_dh + now_db + now_dd + now_da + now_dc + now_ds;
	d2_max = -1;
	x_nh = now_nh; x_nb = now_nb; x_nd = now_nd; x_na = now_na; x_nc = now_nc; x_ns = now_ns;
	x_dh = now_dh; x_da = now_da; x_db = now_db; x_dc = now_dc; x_dd = now_dd; x_ds = now_ds;
	fin_nh = now_nh; fin_nb = now_nb; fin_nd = now_nd; fin_na = now_na; fin_nc = now_nc; fin_ns = now_ns;
	x_sisu_hbd = 0; fin_sisu_hbd = 0;
	
	for(var_up=0; var_up<6; var_up++){
		for(var_dw=0; var_dw<6; var_dw++){
			//if(((var_up == 0)&&(var_dw == 0))||((var_up >= 1)&&(var_dw >= 1))){//機能してない。n=2、m=2が通ってる。
			if((var_up >= 1)&&(var_dw >= 1)&&(var_up!=var_dw)){
			}else if((var_up == 0)&&(var_dw == 0)){
			}else{
				continue;
			}
			//指定の性格の場合の計算
			//A努力値
			if(var_up == 1){
				seikaku = 1;
			}else if(var_dw == 1){
				seikaku = -1;
			}else{
				seikaku = 0;
			}
			var_da = dcalc3(1, seikaku);
			if(var_da > 252){
				continue;
			}else if(var_da < 0){
				var_da = 0;
			}
			var_na = ncalc3(1, var_da, seikaku);
			
			//C努力値
			if(var_up == 3){
				seikaku = 1;
			}else if(var_dw == 3){
				seikaku = -1;
			}else{
				seikaku = 0;
			}
			var_dc = dcalc3(3, seikaku);
			if(var_dc > 252){
				continue;
			}else if(var_dc < 0){
				var_dc = 0;
			}
			var_nc = ncalc3(3, var_dc, seikaku);
			//S努力値
			if(var_up == 5){
				seikaku = 1;
			}else if(var_dw == 5){
				seikaku = -1;
			}else{
				seikaku = 0;
			}
			var_ds = dcalc3(5, seikaku);
			if(var_ds > 252){
				continue;
			}else if(var_ds < 0){
				var_ds = 0;
			}
			var_ns = ncalc3(5, var_ds, seikaku);
			//HP努力値
			var_dh = d_max - var_da - var_dc - var_ds;
			if(var_dh > 252){
				var_dh = 252;
			}else if(var_dh < 0){
				continue;
			}
			for(var_dh; var_dh >= 0; var_dh--){
				seikaku = 0;
				var_nh = ncalc3(0, var_dh, seikaku);
				
				//B努力値
				var_db = d_max - var_dh - var_da - var_dc - var_ds;
				if(var_db > 252){
					var_db = 252;
				}else if(var_db < 0){
					continue;
				}
				for(var_db; var_db >= 0; var_db--){
					if(var_up == 2){
						seikaku = 1;
					}else if(var_dw == 2){
						seikaku = -1;
					}else{
						seikaku = 0;
					}
					var_nb = ncalc3(2, var_db, seikaku);
					
					//D努力値
					var_dd = d_max - var_dh - var_db - var_da - var_dc - var_ds;
					if(var_dd < 0){
						continue;
					}
					for(var_dd; var_dd >= 0; var_dd--){
						if(var_up == 4){
							seikaku = 1;
						}else if(var_dw == 4){
							seikaku = -1;
						}else{
							seikaku = 0;
						}
						var_nd = ncalc3(4, var_dd, seikaku);
						
						var_sisu_hb = var_nh * var_nb;
						var_sisu_hd = var_nh * var_nd;
						var_sisu_hbd = var_nh * var_nb * var_nd / (var_nb + var_nd);
						x_dsum = var_dh + var_db + var_dd + var_da + var_dc + var_ds;
						
						if((var_sisu_hb >= now_sisu_hb)&&(var_sisu_hd >= now_sisu_hd)){//入力値の物理・特殊耐久確保
							if(x_dsum < d_max){//努力値合計が少ないとき
								fin_sisu_hbd = var_sisu_hbd; x_sisu_hbd = var_sisu_hbd;
								fin_nh = var_nh;
								fin_nb = var_nb;
								fin_nd = var_nd;
								fin_up = var_up; fin_dw = var_dw;
								d_max = x_dsum;
								continue;
							}
							if((x_dsum == d_max)&&(fin_sisu_hbd <= var_sisu_hbd)){//同じ努力値合計で指数があがる時//ACSがあがるときも計算
								if(x_sisu_hbd <= var_sisu_hbd){
									if((var_na > now_na)||(var_nc > now_nc)||(var_ns > now_ns)||(x_sisu_hbd < var_sisu_hbd)){
									x_sisu_hbd = var_sisu_hbd;
									x_nh = var_nh; x_na = var_na;
									x_nb = var_nb; x_nc = var_nc;
									x_nd = var_nd; x_ns = var_ns;
									x_up = var_up; x_dw = var_dw;
									d2_max = d_max;
									}
								}
							}
								
							
						}else{
							break;
						}
					}
				}
			}
		}
	}

	if(d2_max == d_max){
		fin_nh = x_nh; fin_na = x_na;
		fin_nb = x_nb; fin_nc = x_nc;
		fin_nd = x_nd; fin_ns = x_ns;
		fin_up = x_up; fin_dw = x_dw;
	}
	//性格合わせ
	for(i=1;i<6;i++){
		if(i == fin_up){
			document.nForm.elements[chup[i]].checked = true;
		}else{
			document.nForm.elements[chup[i]].checked = false;
		}
		
		if(i == fin_dw){
			document.nForm.elements[chdw[i]].checked = true;
		}else{
			document.nForm.elements[chdw[i]].checked = false;
		}
	}
	//能力値反映
	document.nForm.elements[nn[0]].value = fin_nh;
	document.nForm.elements[nn[1]].value = fin_na;
	document.nForm.elements[nn[2]].value = fin_nb;
	document.nForm.elements[nn[3]].value = fin_nc;
	document.nForm.elements[nn[4]].value = fin_nd;
	document.nForm.elements[nn[5]].value = fin_ns;
	
	dcalc(0);dcalc(1);dcalc(2);dcalc(3);dcalc(4);dcalc(5);
}

//--個体値リセット
function kotaiti_riset(){
  for(i=0; i<6; i++){
    document.nForm.elements[kn[i]].value = 31;
  }
  k_color();
}

//--切り替えボタン

function kirikae(){
  if(document.getElementById("kirikae_1").value == 0){
    document.getElementById("kirikae_1").style.display = 'block';
    document.getElementById("kirikae_2").style.display = 'none';
    document.getElementById("kirikae_1").value = 1;
  }else{
    document.getElementById("kirikae_1").style.display = 'none';
    document.getElementById("kirikae_2").style.display = 'block';
    document.getElementById("kirikae_1").value = 0;
  }
}

function titlechange(){
  document.title=document.getElementById("pokename").value + " | ポケモンステータス計算機 for スカーレット/バイオレット";
}


function get_tyousei(){
	var text = document.nForm.elements['pokename'].value;
	var text2 = "";//実数値
	var text3 = "";//努力値
	
	for(i=1; i<6; i++){
		if(document.nForm.elements[chup[i]].checked == true){
			break;
		}
	}
	for(j=1; j<6; j++){
		if(document.nForm.elements[chdw[j]].checked == true){
			break;
		}
	}
	switch(i){
		case 1:
			if(j == 2){
				text3 ="さみしがり";
			}else if(j == 3){
				text3 ="いじっぱり";
			}else if(j == 4){
				text3 ="やんちゃ";
			}else if(j == 5){
				text3 ="ゆうかん";
			}else{
				text3 ="？？？";
			}
			break
		case 2:
			if(j == 1){
				text3 ="ずぶとい";
			}else if(j == 3){
				text3 ="わんぱく";
			}else if(j == 4){
				text3 ="のうてんき";
			}else if(j == 5){
				text3 ="のんき";
			}else{
				text3 ="？？？";
			}
			break
		case 3:
			if(j == 1){
				text3 ="ひかえめ";
			}else if(j == 2){
				text3 ="おっとり";
			}else if(j == 4){
				text3 ="うっかりや";
			}else if(j == 5){
				text3 ="れいせい";
			}else{
				text3 ="？？？";
			}
			break;
		case 4:
			if(j == 1){
				text3 ="おだやか";
			}else if(j == 2){
				text3 ="おとなしい";
			}else if(j == 3){
				text3 ="しんちょう";
			}else if(j == 5){
				text3 ="なまいき";
			}else{
				text3 ="？？？";
			}
			break;
		case 5:
			if(j == 1){
				text3 ="おくびょう";
			}else if(j == 2){
				text3 ="せっかち";
			}else if(j == 3){
				text3 ="ようき";
			}else if(j == 4){
				text3 ="むじゃき";
			}else{
				text3 ="？？？";
			}
			break;
		case 6:
			if(j == 6){
				text3 ="まじめ";
			}else{
				text3 ="？？？";
			}
			break;
	}
	
	for(i=0; i<6; i++){
		if(document.nForm.elements[nn[i]].value >= 1){
			text2 += document.nForm.elements[nn[i]].value;
			if(document.nForm.elements[dn[i]].value > 0){
				if(i==0){text3 += " H"}
				else if(i==1){text3 += " A"}
				else if(i==2){text3 += " B"}
				else if(i==3){text3 += " C"}
				else if(i==4){text3 += " D"}
				else if(i==5){text3 += " S"}
				text3 += document.nForm.elements[dn[i]].value;
			}
		}else{
			text2 += "×";
		}
		if(i <5){
			text2 += "-";
		}
	}
	text += " (" + text3 + ") [" + text2 + "]";
	return(text);
	
	
}

//---------------------------------------
//キーボード操作用
//-----------------------------------------------
document.addEventListener('keydown', function(event) {
    if (event.key === 's') {
    	event.preventDefault();
        Keydown1();
    }else if (event.key === 'w') {
    	event.preventDefault();
        Keydown2();
    }else if (event.key === 'a') {
    	event.preventDefault();
        Keydown3();
    }else if (event.key === 'd') {
    	event.preventDefault();
        Keydown4();
    }else if (event.key === 'Enter') {
    	Keydown5();
    }else if (event.key === 'r') {
    	Keydown6();
    }else if (event.key === 'f') {
    	Keydown7();
    }
});

//下にフォーカス移動-------------------------------------------------
function Keydown1() {
    const targetElement = document.nForm.elements;
    
    for(let i=0; i<5; i++){
		if (document.activeElement === targetElement[nn[i]]) {
		    document.nForm.elements[nn[i+1]].focus(); return;
		}else if(document.activeElement === targetElement[nnup[i]]) {
        	document.nForm.elements[nnup[i+1]].focus(); return;
    	}else if(document.activeElement === targetElement[nndw[i]]) {
        	document.nForm.elements[nndw[i+1]].focus(); return;
    	}else if(document.activeElement === targetElement[dn[i]]) {
        	document.nForm.elements[dn[i+1]].focus(); return;
    	}else if(document.activeElement === targetElement[dnup[i]]) {
        	document.nForm.elements[dnup[i+1]].focus(); return;
    	}else if(document.activeElement === targetElement[dndw[i]]) {
        	document.nForm.elements[dndw[i+1]].focus(); return;
    	}else if(document.activeElement === targetElement[dnmin[i]]) {
        	document.nForm.elements[dnmin[i+1]].focus(); return;
    	}else if(document.activeElement === targetElement[dnmax[i]]) {
        	document.nForm.elements[dnmax[i+1]].focus(); return;
    	}else if(document.activeElement === targetElement[sn[i]]) {
        	document.nForm.elements[sn[i+1]].focus(); return;
    	}else if(document.activeElement === targetElement[kn[i]]) {
        	document.nForm.elements[kn[i+1]].focus(); return;
    	}else if(document.activeElement === targetElement[knx[i]]) {
        	document.nForm.elements[knx[i+1]].focus(); return;
    	}else if(document.activeElement === targetElement[knmin[i]]) {
        	document.nForm.elements[knmin[i+1]].focus(); return;
    	}else if(document.activeElement === targetElement[knmax[i]]) {
        	document.nForm.elements[knmax[i+1]].focus(); return;
    	}else if(document.activeElement === targetElement[chup[i]]) {
        	document.nForm.elements[chup[i+1]].focus(); return;
    	}else if(document.activeElement === targetElement[chdw[i]]) {
        	document.nForm.elements[chdw[i+1]].focus(); return;
    	}
    }
    if (document.activeElement === targetElement['pokename']) {
        document.nForm.elements['L0'].focus();
    }else if (document.activeElement === targetElement['L0']) {
        document.nForm.elements[nn[0]].focus();
    }else if (document.activeElement === targetElement[nn[5]]) {
        document.nForm.elements['s_result'].focus();
    }else if (document.activeElement === targetElement['s_result']) {
        document.nForm.elements['tyouseinaiyou'].focus();
    }else if (document.activeElement === targetElement['tyouseinaiyou']) {
        document.nForm.elements['tweetbtn'].focus();
    }else if (document.activeElement === targetElement[dn[5]]) {
    	document.nForm.elements[dn[6]].focus();
    }else if (document.activeElement === targetElement[dnup[5]]) {
    	document.nForm.elements['ALL0'].focus();
    }else if (document.activeElement === targetElement[dndw[5]]) {
    	document.nForm.elements['ALL0'].focus();
    }else if (document.activeElement === targetElement[sn[5]]) {
    	document.nForm.elements[sn[6]].focus();
    }else if (document.activeElement === targetElement[kn[5]]) {
    	document.nForm.elements['taikyu'].focus();
    }else if (document.activeElement === targetElement[knx[5]]) {
    	document.nForm.elements['taikyu2'].focus();
    }else if (document.activeElement === targetElement[knmin[5]]) {
    	document.nForm.elements['taikyu2'].focus();
    }else if (document.activeElement === targetElement[knmax[5]]) {
    	document.nForm.elements['taikyu2'].focus();
    }else if (document.activeElement === targetElement['rank']) {
        document.nForm.elements['tyouseinaiyou'].focus();
    }else if (document.activeElement === targetElement['skill']) {
        document.nForm.elements['tyouseinaiyou'].focus();
    }else if (document.activeElement === targetElement['sitem']) {
        document.nForm.elements['tyouseinaiyou'].focus();
    }else if (document.activeElement === targetElement['ch_m']) {
        document.nForm.elements['tyouseinaiyou'].focus();
    }else if (document.activeElement === targetElement['ch_o']) {
        document.nForm.elements['tyouseinaiyou'].focus();
    }else if (document.activeElement === targetElement[dn[6]]) {
        document.nForm.elements['s_result'].focus();
    }else if (document.activeElement === targetElement['ALL0']) {
        document.nForm.elements['s_result'].focus();
    
    }else if (document.activeElement === targetElement['mega0']) {
        document.nForm.elements[dnup[0]].focus();
    }else if (document.activeElement === targetElement['mega1']) {
        document.nForm.elements[sn[0]].focus();
    }else if (document.activeElement === targetElement['mega2']) {
        document.nForm.elements[knx[0]].focus();
    }else if (document.activeElement === targetElement['mega3']) {
        document.nForm.elements[knmax[0]].focus();
        
    //何もしない
    }else if (document.activeElement === targetElement['tweetbtn']) {
    }else if (document.activeElement === targetElement[nnup[5]]) {
    }else if (document.activeElement === targetElement[nndw[5]]) {
    }else if (document.activeElement === targetElement[dnmin[5]]) {
    }else if (document.activeElement === targetElement[dnmax[5]]) {
    }else if (document.activeElement === targetElement[sn[6]]) {
    }else if (document.activeElement === targetElement['taikyu']) {
    }else if (document.activeElement === targetElement['taikyu2']) {
    }else if (document.activeElement === targetElement[chup[5]]) {
    }else if (document.activeElement === targetElement[chdw[5]]) {
    } else {
        document.nForm.elements[nn[0]].focus();
    }
}

//上にフォーカス移動-----------------------------------------------
function Keydown2() {
    const targetElement = document.nForm.elements;
    
    for(let i=0; i<5; i++){
		if (document.activeElement === targetElement[nn[i+1]]) {
		    document.nForm.elements[nn[i]].focus(); return;
		}else if(document.activeElement === targetElement[nnup[i+1]]) {
        	document.nForm.elements[nnup[i]].focus(); return;
    	}else if(document.activeElement === targetElement[nndw[i+1]]) {
        	document.nForm.elements[nndw[i]].focus(); return;
    	}else if(document.activeElement === targetElement[dn[i+1]]) {
        	document.nForm.elements[dn[i]].focus(); return;
    	}else if(document.activeElement === targetElement[dnup[i+1]]) {
        	document.nForm.elements[dnup[i]].focus(); return;
    	}else if(document.activeElement === targetElement[dndw[i+1]]) {
        	document.nForm.elements[dndw[i]].focus(); return;
    	}else if(document.activeElement === targetElement[dnmin[i+1]]) {
        	document.nForm.elements[dnmin[i]].focus(); return;
    	}else if(document.activeElement === targetElement[dnmax[i+1]]) {
        	document.nForm.elements[dnmax[i]].focus(); return;
    	}else if(document.activeElement === targetElement[sn[i+1]]) {
        	document.nForm.elements[sn[i]].focus(); return;
    	}else if(document.activeElement === targetElement[kn[i+1]]) {
        	document.nForm.elements[kn[i]].focus(); return;
    	}else if(document.activeElement === targetElement[knx[i+1]]) {
        	document.nForm.elements[knx[i]].focus(); return;
    	}else if(document.activeElement === targetElement[knmin[i+1]]) {
        	document.nForm.elements[knmin[i]].focus(); return;
    	}else if(document.activeElement === targetElement[knmax[i+1]]) {
        	document.nForm.elements[knmax[i]].focus(); return;
    	}else if(document.activeElement === targetElement[chup[i+1]]) {
        	document.nForm.elements[chup[i]].focus(); return;
    	}else if(document.activeElement === targetElement[chdw[i+1]]) {
        	document.nForm.elements[chdw[i]].focus(); return;
    	}
    }
    
    if (document.activeElement === targetElement['L0']) {
        document.nForm.elements['pokename'].focus();
    }else if (document.activeElement === targetElement['L1']) {
        document.nForm.elements['pokename'].focus();
    }else if (document.activeElement === targetElement['L2']) {
        document.nForm.elements['pokename'].focus();
    }else if (document.activeElement === targetElement[nn[0]]) {
        document.nForm.elements['L0'].focus();
    }else if (document.activeElement === targetElement['tweetbtn']) {
        document.nForm.elements['tyouseinaiyou'].focus();
    }else if (document.activeElement === targetElement['tyouseinaiyou']) {
        document.nForm.elements['s_result'].focus();
    }else if (document.activeElement === targetElement['s_result']) {
        document.nForm.elements[nn[5]].focus();
    }else if (document.activeElement === targetElement[dn[6]]) {
        document.nForm.elements[dn[5]].focus();
    }else if (document.activeElement === targetElement['ALL0']) {
        document.nForm.elements[dnup[5]].focus();
    }else if (document.activeElement === targetElement[sn[6]]) {
        document.nForm.elements[sn[5]].focus();
    }else if (document.activeElement === targetElement['taikyu']) {
        document.nForm.elements[kn[5]].focus();
    }else if (document.activeElement === targetElement['taikyu2']) {
        document.nForm.elements[knmin[5]].focus();
    
    }else if (document.activeElement === targetElement['rank']) {
        document.nForm.elements[nn[5]].focus();
    }else if (document.activeElement === targetElement['skill']) {
        document.nForm.elements[nn[5]].focus();
    }else if (document.activeElement === targetElement['sitem']) {
        document.nForm.elements[nn[5]].focus();
    }else if (document.activeElement === targetElement['ch_m']) {
        document.nForm.elements[nn[5]].focus();
    }else if (document.activeElement === targetElement['ch_o']) {
        document.nForm.elements[nn[5]].focus();
    }else if (document.activeElement === targetElement[nnup[0]]) {
        document.nForm.elements['L0'].focus();
    }else if (document.activeElement === targetElement[nndw[0]]) {
        document.nForm.elements['L0'].focus();
    }else if (document.activeElement === targetElement[dn[0]]) {
        document.nForm.elements['pokename'].focus();
        
    }else if (document.activeElement === targetElement[dnup[0]]) {
        document.nForm.elements['mega0'].focus();
    }else if (document.activeElement === targetElement[dndw[0]]) {
        document.nForm.elements['mega0'].focus();
    }else if (document.activeElement === targetElement[dnmin[0]]) {
        document.nForm.elements['mega0'].focus();
    }else if (document.activeElement === targetElement[dnmax[0]]) {
        document.nForm.elements['mega0'].focus();
    }else if (document.activeElement === targetElement[sn[0]]) {
        document.nForm.elements['mega1'].focus();
    }else if (document.activeElement === targetElement[kn[0]]) {
        document.nForm.elements['mega1'].focus();
    }else if (document.activeElement === targetElement[knx[0]]) {
        document.nForm.elements['mega2'].focus();
    }else if (document.activeElement === targetElement[kmin[0]]) {
        document.nForm.elements['mega2'].focus();
    }else if (document.activeElement === targetElement[kmax[0]]) {
        document.nForm.elements['mega2'].focus();
        
    //何もしない
    }else if (document.activeElement === targetElement['pokename']) {
    }else if (document.activeElement === targetElement[chup[1]]) {
    }else if (document.activeElement === targetElement[chdw[1]]) {
    
    } else {
        document.nForm.elements[nn[0]].focus();
    }
    
}

//左にフォーカス移動
function Keydown3() {
    const targetElement = document.nForm.elements;
    
    for(let i=0; i<6; i++){
		if (document.activeElement === targetElement[nn[i]]) {
			if(i==0){document.nForm.elements[knmax[i]].focus(); return;
    		}else{document.nForm.elements[chdw[i]].focus(); return;}
		}else if(document.activeElement === targetElement[nnup[i]]) {
			document.nForm.elements[nn[i]].focus(); return;
    	}else if(document.activeElement === targetElement[nndw[i]]) {
    	    document.nForm.elements[nnup[i]].focus(); return;
    	}else if(document.activeElement === targetElement[dn[i]]) {
    		document.nForm.elements[nndw[i]].focus(); return;
    	}else if(document.activeElement === targetElement[dnup[i]]) {
    		document.nForm.elements[dn[i]].focus(); return;
    	}else if(document.activeElement === targetElement[dndw[i]]) {
    		document.nForm.elements[dnup[i]].focus(); return;
    	}else if(document.activeElement === targetElement[dnmin[i]]) {
    		document.nForm.elements[dndw[i]].focus(); return;
    	}else if(document.activeElement === targetElement[dnmax[i]]) {
    		document.nForm.elements[dnmin[i]].focus(); return;
    	}else if(document.activeElement === targetElement[sn[i]]) {
    		document.nForm.elements[dnmax[i]].focus(); return;
    	}else if(document.activeElement === targetElement[kn[i]]) {
    		document.nForm.elements[sn[i]].focus(); return;
    	}else if(document.activeElement === targetElement[knx[i]]) {
    		document.nForm.elements[kn[i]].focus(); return;
    	}else if(document.activeElement === targetElement[knmin[i]]) {
    		document.nForm.elements[knx[i]].focus(); return;
    	}else if(document.activeElement === targetElement[knmax[i]]) {
    		document.nForm.elements[knmin[i]].focus(); return;
    	}else if(document.activeElement === targetElement[chup[i]]) {
        	document.nForm.elements[knmax[i]].focus(); return;
    	}else if(document.activeElement === targetElement[chdw[i]]) {
        	document.nForm.elements[chup[i]].focus(); return;
    	}
    }
    if (document.activeElement === targetElement['mega0']) {
        document.nForm.elements['pokename'].focus();
    }else if (document.activeElement === targetElement['mega1']) {
        document.nForm.elements['mega0'].focus();
    }else if (document.activeElement === targetElement['mega2']) {
        document.nForm.elements['mega1'].focus();
    }else if (document.activeElement === targetElement['mega3']) {
        document.nForm.elements['mega2'].focus();
    }else if (document.activeElement === targetElement['L0']) {
        document.nForm.elements['L2'].focus();
    }else if (document.activeElement === targetElement['L1']) {
        document.nForm.elements['L0'].focus();
    }else if (document.activeElement === targetElement['L2']) {
        document.nForm.elements['L1'].focus();
    }else if (document.activeElement === targetElement[dn[6]]) {
        document.nForm.elements['taikyu2'].focus();
    }else if (document.activeElement === targetElement['ALL0']) {
        document.nForm.elements[dn[6]].focus();
    }else if (document.activeElement === targetElement[sn[6]]) {
        document.nForm.elements['ALL0'].focus();
    }else if (document.activeElement === targetElement['taikyu']) {
        document.nForm.elements[sn[6]].focus();
    }else if (document.activeElement === targetElement['taikyu2']) {
        document.nForm.elements['taikyu'].focus();
    }else if (document.activeElement === targetElement['s_result']) {
        document.nForm.elements['ch_o'].focus();
    }else if (document.activeElement === targetElement['rank']) {
        document.nForm.elements['s_result'].focus();
    }else if (document.activeElement === targetElement['skill']) {
        document.nForm.elements['rank'].focus();
    }else if (document.activeElement === targetElement['sitem']) {
        document.nForm.elements['skill'].focus();
    }else if (document.activeElement === targetElement['ch_m']) {
        document.nForm.elements['sitem'].focus();
    }else if (document.activeElement === targetElement['ch_o']) {
        document.nForm.elements['ch_m'].focus();
    //何もしない
    }else if (document.activeElement === targetElement['pokename']) {
    
    } else {
        document.nForm.elements[nn[0]].focus();
    }
}

//右にフォーカス移動
function Keydown4() {
    const targetElement = document.nForm.elements;
    
    for(let i=0; i<6; i++){
		if (document.activeElement === targetElement[nn[i]]) {
		    document.nForm.elements[nnup[i]].focus(); return;
		}else if(document.activeElement === targetElement[nnup[i]]) {
        	document.nForm.elements[nndw[i]].focus(); return;
    	}else if(document.activeElement === targetElement[nndw[i]]) {
        	document.nForm.elements[dn[i]].focus(); return;
    	}else if(document.activeElement === targetElement[dn[i]]) {
        	document.nForm.elements[dnup[i]].focus(); return;
    	}else if(document.activeElement === targetElement[dnup[i]]) {
        	document.nForm.elements[dndw[i]].focus(); return;
    	}else if(document.activeElement === targetElement[dndw[i]]) {
        	document.nForm.elements[dnmin[i]].focus(); return;
    	}else if(document.activeElement === targetElement[dnmin[i]]) {
        	document.nForm.elements[dnmax[i]].focus(); return;
    	}else if(document.activeElement === targetElement[dnmax[i]]) {
        	document.nForm.elements[sn[i]].focus(); return;
    	}else if(document.activeElement === targetElement[sn[i]]) {
        	document.nForm.elements[kn[i]].focus(); return;
    	}else if(document.activeElement === targetElement[kn[i]]) {
        	document.nForm.elements[knx[i]].focus(); return;
    	}else if(document.activeElement === targetElement[knx[i]]) {
        	document.nForm.elements[knmin[i]].focus(); return;
    	}else if(document.activeElement === targetElement[knmin[i]]) {
        	document.nForm.elements[knmax[i]].focus(); return;
    	}else if(document.activeElement === targetElement[knmax[i]]) {
    		if(i==0){document.nForm.elements[nn[i]].focus(); return;
    		}else{document.nForm.elements[chup[i]].focus(); return;}
    	}else if(document.activeElement === targetElement[chup[i]]) {
        	document.nForm.elements[chdw[i]].focus(); return;
    	}else if(document.activeElement === targetElement[chdw[i]]) {
        	document.nForm.elements[nn[i]].focus(); return;
    	}
    }
    
    if (document.activeElement === targetElement['pokename']) {
        document.nForm.elements['mega0'].focus();
    }else if (document.activeElement === targetElement['mega0']) {
        document.nForm.elements['mega1'].focus();
    }else if (document.activeElement === targetElement['mega1']) {
        document.nForm.elements['mega2'].focus();
    }else if (document.activeElement === targetElement['mega2']) {
        document.nForm.elements['mega3'].focus();
    }else if (document.activeElement === targetElement['L0']) {
        document.nForm.elements['L1'].focus();
    }else if (document.activeElement === targetElement['L1']) {
        document.nForm.elements['L2'].focus();
    }else if (document.activeElement === targetElement['L2']) {
        document.nForm.elements['L0'].focus();
    }else if (document.activeElement === targetElement[dn[6]]) {
        document.nForm.elements['ALL0'].focus();
    }else if (document.activeElement === targetElement['ALL0']) {
        document.nForm.elements[sn[6]].focus();
    }else if (document.activeElement === targetElement[sn[6]]) {
        document.nForm.elements['taikyu'].focus();
    }else if (document.activeElement === targetElement['taikyu']) {
        document.nForm.elements['taikyu2'].focus();
    }else if (document.activeElement === targetElement['taikyu2']) {
        document.nForm.elements[dn[6]].focus();
    
    }else if (document.activeElement === targetElement['s_result']) {
        document.nForm.elements['rank'].focus();
    }else if (document.activeElement === targetElement['rank']) {
        document.nForm.elements['skill'].focus();
    }else if (document.activeElement === targetElement['skill']) {
        document.nForm.elements['sitem'].focus();
    }else if (document.activeElement === targetElement['sitem']) {
        document.nForm.elements['ch_m'].focus();
    }else if (document.activeElement === targetElement['ch_m']) {
        document.nForm.elements['ch_o'].focus();
    }else if (document.activeElement === targetElement['ch_o']) {
        document.nForm.elements['s_result'].focus();
        
    //何もしない
    }else if (document.activeElement === targetElement['mega3']) {
    
    } else {
        document.nForm.elements[nn[0]].focus();
    }
}

//Enterキーのイベント
function Keydown5() {
    const targetElement = document.nForm.elements;
	let activeElement = document.activeElement;
        if (activeElement.type === 'checkbox') {
            activeElement.checked = !activeElement.checked;
            
            for(i=1;i<6;i++){
            	if(document.activeElement.getAttribute("name") == chup[i]){
            		unchk1(i);
            	}else if(document.activeElement.getAttribute("name") == chdw[i]){
            		unchk2(i);
            	}
            	
            }
            if(document.activeElement.getAttribute("name") == "ch_o"){
            	scalc();
            }else if(document.activeElement.getAttribute("name") == "ch_m"){
            	scalc();
            }
            
        }
}

//rキーのイベント　数値増
function Keydown6() {
    const targetElement = document.nForm.elements;
    for(i=0; i<6;i++){
    	if (document.activeElement === targetElement[nn[i]]) {
    		nchange(i,0);dcalc(i);return;
    	}else if (document.activeElement === targetElement[nnup[i]]) {
    		nchange(i,0);dcalc(i);return;
    	}else if (document.activeElement === targetElement[nndw[i]]) {
    		nchange(i,0);dcalc(i);return;
    	}else if (document.activeElement === targetElement[dn[i]]) {
    		dchange(i,0);ncalc(i);dsun();return;
    	}else if (document.activeElement === targetElement[dnup[i]]) {
    		dchange(i,0);ncalc(i);dsun();return;
    	}else if (document.activeElement === targetElement[dndw[i]]) {
    		dchange(i,0);ncalc(i);dsun();return;
    	}else if (document.activeElement === targetElement[dnmin[i]]) {
    		dchange(i,0);ncalc(i);dsun();return;
    	}else if (document.activeElement === targetElement[dnmax[i]]) {
    		dchange(i,0);ncalc(i);dsun();return;
    	}else if (document.activeElement === targetElement[sn[i]]) {
    		targetElement[sn[i]].value++;ssun();ncalc(i);return;
    	}else if (document.activeElement === targetElement[kn[i]]) {
    		if(targetElement[kn[i]].value <= 30){targetElement[kn[i]].value++;ncalc(i);return;}
    	}else if (document.activeElement === targetElement[knx[i]]) {
    		if(targetElement[kn[i]].value <= 30){targetElement[kn[i]].value++;ncalc(i);return;}
    	}else if (document.activeElement === targetElement[knmin[i]]) {
    		if(targetElement[kn[i]].value <= 30){targetElement[kn[i]].value++;ncalc(i);return;}
    	}else if (document.activeElement === targetElement[knmax[i]]) {
    		if(targetElement[kn[i]].value <= 30){targetElement[kn[i]].value++;ncalc(i);return;}
    	}
    	
    	
    	//ssum();ncalc('+ i +')
    	//ncalc('+ i +')
    }
}

//ｆキーのイベント　数値減
function Keydown7() {
    const targetElement = document.nForm.elements;
    for(i=0; i<6;i++){
    	if (document.activeElement === targetElement[nn[i]]) {
    		nchange(i,1);dcalc(i);return;
    	}else if (document.activeElement === targetElement[nnup[i]]) {
    		nchange(i,1);dcalc(i);return;
    	}else if (document.activeElement === targetElement[nndw[i]]) {
    		nchange(i,1);dcalc(i);return;
    	}else if (document.activeElement === targetElement[dn[i]]) {
    		dchange(i,1);ncalc(i);dsun();return;
    	}else if (document.activeElement === targetElement[dnup[i]]) {
    		dchange(i,1);ncalc(i);dsun();return;
    	}else if (document.activeElement === targetElement[dndw[i]]) {
    		dchange(i,1);ncalc(i);dsun();return;
    	}else if (document.activeElement === targetElement[dnmin[i]]) {
    		dchange(i,1);ncalc(i);dsun();return;
    	}else if (document.activeElement === targetElement[dnmax[i]]) {
    		dchange(i,1);ncalc(i);dsun();return;
    	}else if (document.activeElement === targetElement[sn[i]]) {
    		targetElement[sn[i]].value--;ssun();ncalc(i);return;
    	}else if (document.activeElement === targetElement[kn[i]]) {
    		if(targetElement[kn[i]].value >= 1){targetElement[kn[i]].value--;ncalc(i);return;}
    	}else if (document.activeElement === targetElement[knx[i]]) {
    		if(targetElement[kn[i]].value >= 1){targetElement[kn[i]].value--;ncalc(i);return;}
    	}else if (document.activeElement === targetElement[knmin[i]]) {
    		if(targetElement[kn[i]].value >= 1){targetElement[kn[i]].value--;ncalc(i);return;}
    	}else if (document.activeElement === targetElement[knmax[i]]) {
    		if(targetElement[kn[i]].value >= 1){targetElement[kn[i]].value--;ncalc(i);return;}
    	}
    }
}


function getTweet() {
    // ツイート内容をセット
    var text = get_tyousei();
    text = encodeURIComponent(text);
    var url = "https://pokecosmos.github.io/calc_stats_sv/";
    var additionalURL = "#"; // ここにURL末尾に追加したい文字列を設定
	additionalURL += makeurl();
	
	
	
    url = url + additionalURL; // URL末尾に任意の文字列を追加
    var tweetText = text; // ツイート内容を設定
    var tweetUrl = "https://twitter.com/share?url=" + encodeURIComponent(url) + "&text=" + tweetText + "&count=none&lang=ja";
    window.open(tweetUrl, '_blank');
}

function makeurl(){
	const targetElement = document.nForm.elements;
	let num = "";
	let output = "";
	
	//ポケモンの図鑑番号＋フォルム番号
	for(i=0; i<pokemon.length; i++){
		if(pokemon[i][0]==document.nForm.elements['pokename'].value){
			num = pokemon[i][8];
			if(num == ""){
				num=0;
			}if(!isNaN(num)){
				num = parseInt(num, 10);
			}
			break;
		}
	}
	output = toBase36_3(num);
	
	//ポケモンの努力値
	for(i=0;i<6;i++){
		num = targetElement[dn[i]].value;
		if(num == ""){
			num=0;
		}if(!isNaN(num)){
			num = parseInt(num, 10);
		}
		output += toBase36_2(num);
	}
	
	//ポケモンの個体値
	for(i=0;i<6;i++){
		num = targetElement[kn[i]].value;
		if(num == ""){
			num=0;
		}if(!isNaN(num)){
			num = parseInt(num, 10);
		}
		
		output += num.toString(36);
	}
	
	//ポケモンの性格値
	num=0;
	for(i=1;i<6;i++){
		if(targetElement[chup[i]].checked === true){
			num += i*6;
		}
	}
	for(i=1;i<6;i++){
		if(targetElement[chdw[i]].checked === true){
			num += i;
		}
	}
	output += num.toString(36);
	
	return output;
}

	
	
//---3桁の36進数に変換する
function toBase36_3(num) {
    // 36進数に変換
    let base36 = num.toString(36);
    // 3桁になるように0で埋める
    while (base36.length < 3) {
        base36 = '0' + base36;
    }
    return base36;
}

//---2桁の36進数に変換する
function toBase36_2(num) {
    // 36進数に変換
    let base36 = num.toString(36);
    // 3桁になるように0で埋める
    while (base36.length < 2) {
        base36 = '0' + base36;
    }
    return base36;
}

//----36進数を10進数に戻す
function fromBase36(base36Str) {
    // 36進数の文字列を10進数に変換
    return parseInt(base36Str, 36);
}
	
	
	
	
	
//ページを開いたときに起動する
window.addEventListener('load', function() {
    // 関数を一度だけ実行する
    readurl();
}, { once: true });
	
//URLを解読する
function readurl(){
	//URLの後ろの部分を取り出す
	let currentURL = window.location.href;
	if(currentURL.length !== 66){
		return;
	}
	const targetElement = document.nForm.elements;
	let baseURL = "https://pokecosmos.github.io/calc_stats_sv/#";
	let text = currentURL.replace(baseURL, "");
	let num;
	let firstPart;
	
	//ポケモン名の判定
	num = 3; // 文字数を指定
	firstPart = text.substring(0, num);
	text = text.substring(num);
	firstPart = parseInt(firstPart, 36);
	
	for(i=0; i<pokemon.length; i++){
		if(pokemon[i][8]==firstPart){
			document.nForm.elements['pokename'].value = pokemon[i][0];
			break;
		}
	}
	
	//ポケモンの努力値
	num = 2; // 文字数を指定
	for(i=0; i<6;i++){
		firstPart = text.substring(0, num);
		text = text.substring(num);
		targetElement[dn[i]].value = parseInt(firstPart, 36);
	}
	
	
	//ポケモンの個体値
	num = 1; // 文字数を指定
	for(i=0; i<6;i++){
		firstPart = text.substring(0, num);
		text = text.substring(num);
		targetElement[kn[i]].value = parseInt(firstPart, 36);
	}
	
	//ポケモンの性格値
	firstPart = parseInt(text, 36);
	let syou = Math.foor(firstPart/6);
	let amari = firstPart % 6;
	for(i=1;i<6;i++){
		if(i == syou){
			targetElement[chup[i]].checked = true
		}
	}
	for(i=1;i<6;i++){
		if(i == amari){
			targetElement[chdw[i]].checked = true
		}
	}
	
	//種族値代入
	setpokemon();
}
	
	
	