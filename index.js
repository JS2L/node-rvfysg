// 이중반복문으로 구구단 전체를 출력하는 코드를 구현하세요.
for (i = 2; i <= 9; i++) {
  for (j = 1; j <= 9; j++) {
    console.log(`${i}단 ${i}*${j}=${i * j}`);
  }
}
