'use strict';
function sendit(){
    const userid = document.getElementById('userid');
    const userpw = document.getElementById('userpw');
    const userpw_re = document.getElementById('userpw_re');
    const name = document.getElementById('name');
    const hp = document.getElementById('hp');
    const email = document.getElementById('email');
    const hobby = document.getElementsByName('hobby');
    //const hobby = document.querySelectorAll('[name=hobby]');
    const isssn = document.getElementById('isssn')


    //정규식
    const expNameText  = /[가-힣]+$/; //'가' 부터 '힣' 까지, '+'몇글자가 되도 상관없다.
    const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;    //\d{3} 10진수 3자리, \d{3,4} 3자 또는 4자, \d{4}$ 4자적고 끝내라
    const expEmailText = /^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-\.]+\.[A-Za-z0-9]+$/;   // 

    //userid
    if (userid.value  == ''){
        alert('아이디를 입력하세요');
        userid.focus();
        return false;
    }
    if (userid.value.length < 4 || userid.value.length > 20){
        alert('아이디는 4자이상 20자 이하로 설정해주세요');
        userid.focus();
        return false;
    }
    //userpw
    if (userpw.value  == ''){
        alert('비밀번호를 입력하세요');
        userpw.focus();
        return false;
    }
    if (userpw.value.length < 4 || userid.value.length > 20){
        alert('비밀번호는 4자이상 20자 이하로 설정해주세요');
        userpw.focus();
        return false;
    }
    //userpw_re
    if (userpw.value != userpw_re.value) {
        alert('비밀번호와 비밀번호 확인의 값이 다릅니다.');
        userpw.focus();
        return false;
    }
    //name
    if (!expNameText.test(name.value)){
        alert('이름 형식을 확인하세요\n한글만 입력 가능합니다.');
        name.focus();
        return false;
    }
    //ph 
    if (!expHpText.test(hp.value))  {
        alert('휴대폰 번호 형식을 확인하세요\n(-)를 포함해야합니다.');
        hp.focus();
        return false;
    }
    //email
    if (!expEmailText.test(email.value))  {
        alert('이메일 형식을 확인하세요');
        email.focus();
        return false;
    }

    //hobby 를 하나 이상 선택
    let count = 0 ;
    for (let i in hobby){
        if (hobby[i].checked){
            count++;
        }
    }
    if (count == 0){
        alert('취미는 적어도 하나 이상 선택하세요');
        return false;
    }

    if (isssn.value == 'n') {
        alert('주민등록번호 등록을 눌러주세요');
        return false;
    }

    
    return true;
}




//주민등록번호
function moveFocus() {
    const ssn1  = document.getElementById('ssn1');
    if (ssn1.value.length  >= 6 ) {
        document.getElementById('ssn2').focus();
    }
}

function ssnCheck() {
    const ssn1 = document.getElementById('ssn1');
    const ssn2 = document.getElementById('ssn2');
    const isssn = document.getElementById('isssn');


    if (ssn1.value == '' || ssn2.value == '') {
        alert('주민등록 번호를 입력하세요');
        return false;
    }


const ssn = ssn1.value + ssn2.value;  //001011 3068518
const s1 = Number(ssn.substr(0,1)) * 2;
const s2 = Number(ssn.substr(1,1)) * 3;
const s3 = Number(ssn.substr(2,1)) * 4;
const s4 = Number(ssn.substr(3,1)) * 5;
const s5 = Number(ssn.substr(4,1)) * 6;
const s6 = Number(ssn.substr(5,1)) * 7;
const s7 = Number(ssn.substr(6,1)) * 8;
const s8 = Number(ssn.substr(7,1)) * 9;
const s9 = Number(ssn.substr(8,1)) * 2;
const s10 = Number(ssn.substr(9,1)) * 3;
const s11 = Number(ssn.substr(10,1)) * 4;
const s12 = Number(ssn.substr(11,1)) * 5;
const s13 = Number(ssn.substr(12,1));

let result = s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12;
    result = result % 11;
    result = 11 - result;
    if(result >= 10) result = result % 10;

    if(result == s13){
        alert('유효한 주민등록번호입니다');
        birth();
        isssn.value ='y';

    }else{
        alert('유효하지 않은 주민등록번호입니다');
    }

}

function ssnChange() {
    const isssn = document.getElementById('isssn');
    isssn.value  = 'n';
}
function birth(){
    
    let years = 0;
    const ssn = $("#ssn1").val().concat($("#ssn2").val());

    // 출생년 계산 2이상이면 2000년생
    if($('#ssn2'.substring(0, 1) <= 2)){
            years = "19"
    }else if('#ssn2'.substring(0, 1) > 2){
            years = "20"
    }
        
    // 년/월/일 자리수 나눔
    const year = Number(years.concat(ssn.substr(0,2)));
    const month = Number(ssn.substr(2,2));
    const day = Number(ssn.substr(4,2));
        
    $("[name='year']").val(year);
    $("[name='month']").val(month);
    $("[name='day']").val(day);

    //제대로 연산됐는지 확인
    console.log(year);
    console.log(month);
    console.log(day);

}