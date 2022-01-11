'use strict';

// 주민등록번호 입력
const str = prompt(`주민등록번호 13자리를 입력하세요(- 제외)`);
// 인덱스별 대입 값
const al = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];


let tot = 0;
let result1 = 0;

if (str.length == 13) {
    for (let i = 0; i < al.length; i++) {
        tot += al[i] * parseInt(str.substring(i, i + 1));
    }

    result1 = 11 - (tot % 11);
    if (result1 == parseInt(str.substring(12))) {
        document.innerHTML = alert('올바른 주민번호입니다.');
    } else if (result1 != parseInt(str.substring(12))) {
        result1 %= 10;
        if (result1 == parseInt(str.substring(12))) {
            document.innerHTML = alert('올바른 주민번호입니다.');
        } else {
            document.innerHTML = alert('잘못된 주민번호입니다.');
        }
    } else {
        document.innerHTML = alert("올바른 주민번호를 입력해주세요");
    }
} else {
    document.innerHTML = alert("올바른 주민번호를 입력해주세요");
}

function strr() {
    location.reload()
}

