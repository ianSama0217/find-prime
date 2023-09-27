const rangeNum = document.getElementById("rangeNum"); //input
const btn = document.getElementById("btn"); //button
const result = document.getElementById("result"); //p
const answer = document.getElementById("answer"); //h3

//判斷是否為質數
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

//範圍內有多少質數
function howManyPrime(n) {
  let count = 0; //計算範圍內有多少質數
  let primeStr = ""; //顯示範圍內所有質數的字串
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      count++;
      primeStr += i + ", ";
    }
  }

  primeStr = primeStr.substring(0, primeStr.length - 2); //刪除最後一數的，
  return { primeStr, count };
}

btn.addEventListener("click", () => {
  let resNum = parseInt(rangeNum.value);
  if (resNum < 2) {
    answer.innerHTML = "請輸入大於2的數字";
  } else if (resNum >= 2) {
    let prime = howManyPrime(resNum);
    result.innerHTML = `總共有 ${prime.count} 個`;
    answer.innerHTML = prime.primeStr;
  }
});
