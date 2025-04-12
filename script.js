document.addEventListener("DOMContentLoaded", ()=>{

  regenerateBtnEl = document.querySelector("#regenerateBtn");
  generatedQuesEl = document.querySelector("#generatedQues");
  generatedAnswerEl = document.querySelector("#generatedAnswer");
  submitAnswerEl = document.querySelector("#submitAnswer");
  inputAnswerEl = document.querySelector("#inputAnswer");
  answerLabelEl = document.querySelector("#answerLabel");

  let correctAnswer;
  let origIdx;

  const questions = [
    "<\x1B]jjf\x1Bjmdbdi\\ggt\x1B^jnon\x1B€/3+)\x1B?pmdib\x1B\\\x1Bn\\g`'\x1Bdo\x1Bdn\x1Bh\\mf`_\x1B-0 \x1Bjaa)\x1BCjr\x1Bhp^c\x1Bdn\x1Boc`\x1B_dn^jpio`_\x1Bkmd^`:",
    'Rc\\o\x1Bdn\x1Boc`\x1Bq\\gp`\x1Bja5\x1B.*/\x1B&\x1B-*.\x1B:',
    "Rc\\o\x1Bdn\x1Boc`\x1Bi`so\x1Biph]`m\x1Bdi\x1Boc`\x1Bn`md`n5\x1B-'\x1B/'\x1B3'\x1B,1'\x1BZZZ:",
    'Njgq`\x1Bajm\x1Bs5\x1B0s\x1B(\x1B2\x1B8\x1B.s\x1B&\x1B4',
    'Adi_\x1Boc`\x1B\\m`\\\x1Bja\x1B\\\x1Bomd\\ibg`\x1Brdoc\x1B]\\n`\x1B,+\x1B^h\x1B\\i_\x1Bc`dbco\x1B1\x1B^h)',
    'H\\md\\\x1Bbjo\x1B/0\x1Bjpo\x1Bja\x1B1+\x1Blp`nodjin\x1B^jmm`^o)\x1BRc\\o\x1Bk`m^`io\\b`\x1B_d_\x1Bnc`\x1Bb`o:',
    "Da\x1Boj_\\t\x1Bdn\x1BHji_\\t'\x1Brc\\o\x1B_\\t\x1Brdgg\x1Bdo\x1B]`\x1B/0\x1B_\\tn\x1Bamjh\x1Bijr:",
    "Rc\\o\x1Bdn\x1Boc`\x1Bndhkg`\x1Bdio`m`no\x1Bji\x1B€0'+++\x1Bdiq`no`_\x1Bajm\x1B-\x1Bt`\\mn\x1B\\o\x1B1 \x1B\\iip\\g\x1Bdio`m`no:",
    'Rc\\o\x1Bdn\x1Boc`\x1Bg`\\no\x1B^jhhji\x1Bhpgodkg`\x1Bja\x1B1\x1B\\i_\x1B3:',
    '<i\\\x1Bdn\x1Bord^`\x1B\\n\x1Bjg_\x1B\\n\x1B=`i)\x1BOc`\x1Bnph\x1Bja\x1Boc`dm\x1B\\b`n\x1Bdn\x1B.1)\x1BCjr\x1Bjg_\x1Bdn\x1B=`i:',
    'Rc\\o\x1Bdn\x1Boc`\x1Bnlp\\m`\x1Bmjjo\x1Bja\x1B,//:',
    '<\x1Bm`^o\\ibpg\\m\x1Bgjo\x1Bdn\x1B,0\x1Bh`o`mn\x1Bgjib\x1B\\i_\x1B3\x1Bh`o`mn\x1Brd_`)\x1BRc\\o\x1Bdn\x1Bdon\x1B\\m`\\:',
    'Rc\\o\x1Bdn\x1Boc`\x1Bq\\gp`\x1Bja\x1B#.Y-\x1B&\x1B/Y-$:',
    'Njgq`5\x1B-s\x1B&\x1B.\x1B8\x1B0s\x1B(\x1B4',
    '<\x1B^\\m\x1Bom\\q`gn\x1B,3+\x1Bfdgjh`o`mn\x1Bdi\x1B.\x1Bcjpmn)\x1BRc\\o\x1Bdn\x1Bdon\x1B\\q`m\\b`\x1Bnk``_:',
    'Rc\\o\x1Bdn\x1Boc`\x1Bq\\gp`\x1Bja\x1Boc`\x1B`skm`nndji5\x1B1\x1B&\x1B-\x1BÒ\x1B.:',
    'Rc\\o\x1Bdn\x1Boc`\x1Bk`mdh`o`m\x1Bja\x1B\\\x1Bnlp\\m`\x1Brcjn`\x1Bnd_`\x1Bdn\x1B4\x1B^h:',
    "Da\x1B\\\x1B8\x1B.\x1B\\i_\x1B]\x1B8\x1B/'\x1Brc\\o\x1Bdn\x1Boc`\x1Bq\\gp`\x1Bja\x1B\\­\x1B&\x1B]­:",
    'Rc\\o\x1Bdn\x1B-+ \x1Bja\x1B-0+:',
    '<\x1Bom\\di\x1Bg`\\q`n\x1B\\o\x1B-5,0\x1BKH\x1B\\i_\x1B\\mmdq`n\x1B\\o\x1B05++\x1BKH)\x1BCjr\x1Bgjib\x1Br\\n\x1Boc`\x1Bomdk:'
  ];
  const answers = [
    '.1+',
    ',\x1B0*,-',
    '.-',
    '3',
    '.+',
    '20 ',
    'ocpmn_\\t',
    '1++',
    '-/',
    ',-\x1Bt`\\mn\x1Bjg_',
    ',-',
    ',-+\x1Bnlp\\m`\x1Bh`o`mn',
    '-0',
    '/',
    '1+\x1Bfh*c',
    ',-',
    '.1\x1B^h',
    '-0',
    '0+',
    '-\x1Bcjpmn\x1B/0\x1Bhdipo`n'
  ];

  // function encryptMsg(str, shift) {
  //   let encreptedStr = '';
     
  //   for (let i = 0; i < str.length; i++) {
  //      let charCode = str.charCodeAt(i);
  
  
  //      encreptedStr += String.fromCharCode((charCode + Math.pow(shift, 2) - 10  * shift + 25 - (shift - 5) **2)-5);
  //   }
  //   return encreptedStr;
  // }
  
  function decryptMsg(str, shift){
    let decryptedStr = '';
  
    for(let i = 0; i < str.length; i++){
      let charCode = str.charCodeAt(i);
  
      decryptedStr += String.fromCharCode((charCode + Math.pow(shift, 2) - 10  * shift + 25 - (shift - 5) **2)+5);
    }
  
    return decryptedStr;
  }
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
  function generateQuestion(){
    let idx = getRndInteger(0, questions.length);
    origIdx = idx;
    console.log(origIdx);
    generatedQuesEl.innerHTML = decryptMsg(questions[idx], 5);
    correctAnswer = decryptMsg(answers[idx], 5)
    generatedAnswerEl.innerHTML = "";

    // generatedAnswerEl.innerHTML = decipherText = decryptMsg(answers[idx], 5);
  }

  regenerateBtnEl.addEventListener("click", generateQuestion);
  submitAnswerEl.addEventListener("click", () => {
    if(correctAnswer == inputAnswerEl.value){
      // answerLabelEl.innerHTML = "Answer";
      generatedAnswerEl.innerHTML = "CORRECT! Paste the Question in the System Settings to change the password.";
    }
    else{
      generatedAnswerEl.innerHTML = "WRONG ANSWER! TRY AGAIN";
    }
  });

}); 