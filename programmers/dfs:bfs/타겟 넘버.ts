function solution(numbers: number[], target: number) {
  let answer: number = 0;
  const len: number = numbers.length;
  const calc = (acc: number, i: number) => {
    if (i === len) {
      if (acc === target) answer += 1;
      return;
    }
    calc(acc + numbers[i], i + 1);
    calc(acc - numbers[i], i + 1);
  };
  calc(0, 0);
  return answer;
}

solution([1, 1, 1, 1, 1], 3);
solution([4, 1, 2, 1], 4);
