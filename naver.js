$(".register").click(function () {
  const id = $("#inputId").val();
  const password1 = $("#inputPassword1").val();
  const password2 = $("#inputPassword2").val();
  const username = $("#inputName").val();
  const year = $("#inputYear").val();
  const month = $("#inputMonth").val();
  const day = $("#inputDay").val();
  const gender = $("#gender").val();
  const email = $("#inputEmail3").val();
  const phone = $("#inputPhone").val();
  const tel = $("#inputTel").val();

  if (!id) {
    alert("아이디를 입력해주세요!");
    return;
  }

  if (!password1) {
    alert("비밀번호를 입력해주세요!");
    return;
  } else {
    if (!pwdCheck(password1)) {
      alert("비밀번호는 특수문자/문자/숫자포함 형태의 8~15자리 이내입니다.");
      return;
    }
  }

  if (!password2) {
    alert("비밀번호를 입력해주세요!");
    return;
  } else {
    if (password1 != password2) {
      alert("비밀번호가 일치하지않습니다!");
      return;
    }
  }

  if (!username) {
    alert("이름을 입력해주세요!");
    return;
  }

  if (!year) {
    alert("년도를 입력해주세요!");
    return;
  }

  if (!month) {
    alert("월을 선택해주세요!");
    return;
  }

  if (!day) {
    alert("일을 입력해주세요!");
    return;
  }

  if (!gender) {
    alert("성별을 선택해주세요!");
    return;
  }

  if (!tel) {
    alert("전화번호를 입력해주세요!");
    return;
  } else {
    if (!telCheck(tel)) {
      alert("전화번호 형식에 맞지 않습니다!");
      return;
    }
  }

  alert("회원가입이 완료되었습니다!");
});
// 정규식
function pwdCheck(password1) {
  //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
  const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return reg.test(password1); // 맞으면 true, 틀리면 false를 준다
}

function emailCheck(email) {
  const reg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return reg.test(email); // 맞으면 true, 틀리면 false를 준다
}

//전화번호 정규식
function telCheck(tel) {
  const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
  return reg.test(tel);
}
