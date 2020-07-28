/**
 * 
 */

// 회원가입 버튼 클릭했을 경우
function check(){
	
	
	//id 공백 유효성 검사
	var id = document.getElementById("id");
	if (id.value == ""){
		alert("ID를 입력 하세요");
		id.focus();
		return false;
	}
	
	//비밀번호 공백 유효성 검사
	var pass = document.getElementById("pass");
	if (pass.value == ""){
		alert ("비밀번호를 입력하세요");
		pass.focus();
		return false;
	}
	
	//주민번호 앞자리 공백 유효성 검사
	var jumin1 = document.getElementById("jumin1");
	if (jumin1.value == ""){
		alert ("주민번호 앞자리를 입력하세요");
		jumin1.value = "";
		jumin1.focus();
		return false;
	}
	
	//주민번호 앞자리 6자리 유효성 검사 - 일부분만 입력한 경우가 있어 체크합니다.
	if (jumin1.value.length != 6){
		alert("주민번호 앞자리 6자리를 입력하세요");
		jumin1.value = "";
		jumin1.focus();
		return false;
	}
	
	//주민번호 뒷자리 공백 유효성 검사
	var jumin2 = document.getElementById("jumin2");
	if (jumin2.value == ""){
		alert ("주민번호 뒷자리를 입력하세요");
		jumin2.value = "";
		jumin2.focus();
		return false;
	}
	
	//주민번호 앞자리 6자리 유효성 검사 - 일부분만 입력한 경우가 있어 체크합니다.
	if (jumin2.value.length != 7){
		alert("주민번호 뒷자리 7자리를 입력하세요");
		jumin2.value = "";
		jumin2.focus();
		return false;
	}
	
	// email 공백 유효성 검사
	var email = document.getElementById("email");
	if (email.value == ""){
		alert ("E-mail 아이디를 입력하세요");
		email.focus();
		return false;
	}
	
	var domain = document.getElementById("domain");
	if (domain.value == ""){
		alert ("E-mail 도메인을 입력하세요");
		domain.focus();
		return false;
	}
	
	// 라디오 버튼 선택 유효성 검사
		var genders = document.querySelectorAll("input[type=radio]:checked");
		if(genders.length = 0){
		alert("남, 여 중에서 1개를 선택하세요");
		return false;
	}
	
	// 취미를 2개 이상 체크하도록 하는 유효성 검사

		
		/*
	var hobby1 = document.getElementById("hobby1");
	var hobby2 = document.getElementById("hobby2");
	var hobby3 = document.getElementById("hobby3");
	var hobby4 = document.getElementById("hobby4");
	var hobby5 = document.getElementById("hobby5");
	
	
		if (hobby1.checked)
		cnt++;
		if (hobby2.checked)
		cnt++;
		if (hobby3.checked)
		cnt++;
		if (hobby4.checked)
		cnt++;
		if (hobby5.checked)
		cnt++;
		
	
		 */
		
		var hobbys = document.querySelectorAll("input[type=checkbox]:checked");
		
		if (hobbys.length < 2){
			alert("2개이상 취미를 선택하세요")
			return false;
		}
		
		//우편번호 공백 유효성 검사
		var post1 = document.getElementById("post1");
		if (post1.value == ""){
			alert ("우편번호를 입력하세요")
			post1.focus();
			return false;
		}
		
		//주소 공백 유효성 검사
		var address = document.getElementById("address");
		if(address.value ==""){
			alert("주소를 입력하세요")
			address.focus();
			return false;
		}
		
		//자기소개 공백 유효성 검사
		var intro = document.getElementById("intro");
		if (intro.value == ""){
			alert("자기소개를 입력하세요.")
			intro.focus();
			return false;
		}
		
		
		
		
	
	
}

function idcheck(){
	var id = document.getElementById("id");
	if (id.value == ''){//ID를 입력하지 않았을 경우
		alert("ID를 입력하세요");
		id.focus();
	}else{//ID를 입력했을 경우
		//첫글자는 대문자이고 두번째부터는 대소문자,숫자,_로 총 4개 이상
		// ^ : 시작
		// $ : 끝					 //3개이상 와라.
		pattern = /^[A-Z][a-zA-Z0-9_]{3,}$/;
		if(pattern.test(id.value)){ //정규식 표현대로 id값이 포함되어있는지 검사
		//사용자가 입력한 방식을 get방식으로 넘깁니다.
		var ref = "idcheck.html?id=" + id.value;
		
		//팝업창을 이용한 자료를 넘김
		window.open(ref,"","width=300, height=250")
	}else{
		alert("첫글자는 대문자이고 두번째부터는 대소문자, 숫자, _로 총 4개 이상이어야 합니다.");
		id.value ='';
		id.focus();
	}
}
}


function move(){
	var jumin1 = document.getElementById("jumin1");
	var jumin2 = document.getElementById("jumin2");
	var gender1 = document.getElementById("gender1");
	var gender2 = document.getElementById("gender2");
	
	var test = jumin2.value.substring(0,1)
	
	if (test == "1" || test == "3"){
		gender1.click();
	}else if (test == "2" || test == "4"){
		gender2.click();
	}
	//var gender = document.querySelectorAll("input[type=radio]");
	//c = jumin2.value.subString(0,1);
	//if (c == "1" || c = "3"){
//		gender[0].checked = true;
	//}else{
	//	gender[1].checked = true;
//	}
	//gender [(c-1)%2].checked=true;
	
	
	//주민번호 앞자리 6자리 인경우
	if (jumin1.value.length == 6){
		if(!isNaN(jumin1.value)){ //6자리가 숫자인 경우
			jumin2.focus();
			
		}else{ //6자리 숫자가 아닌 경우
			alert("숫자로 입력하세요");
			jumin1.value = ''; //앞자리 모두 초기화
			jumin1.focus(); //앞자리에 포커스준다.
		}
	}


//주민번호 뒷자리 7자리인 경우
if(jumin2.value.length == 7){
	if(isNaN(jumin2.value)) //7자리에 문자가 있는 경우
		{
		alert("숫자로 입력하세요");
		jumin2.value = '';
		jumin2.focus();
		}
}
}

//select 태그에서 선택한 도메인 설정하는 부분
function domain1(){
	var sel = document.getElementById("sel");
	var domain = document.getElementById("domain");
	if (sel.value == ""){ //직접입력 선택된 경우
		domain.readOnly = false;
		domain.value = "";
		domain.focus();
	}else {
		domain.readOnly = true; //수정불가
		domain.value = sel.value;
	}
}

//우편 검색
function post(){
	window.open ("post.html", "post", "width=400, height=500")
}


