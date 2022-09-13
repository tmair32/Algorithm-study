function solution(priorities: number[], location: number) {
  // 주소를 포함한 data로 변경
  const idxPriorArr = priorities.reduce(
    (arr: number[][], cur: number, idx: number) => {
      const idxArr: number[] = [cur, idx];
      arr.push(idxArr);
      return arr;
    },
    []
  );

  let count: number = 0;
  // 반복문 시작
  while (idxPriorArr.length > 0) {
    // 현재 배열에서 priorities만 가진 값 추출
    const priorArr = idxPriorArr.reduce((arr: number[], cur: number[]) => {
      arr.push(cur[0]);
      return arr;
    }, []);

    // 만약 현재 배열의 첫 번째 값의 priorites가 중요도가 가장 높을 경우
    const data: number[] = idxPriorArr.shift() as number[];
    if (data[0] === Math.max.apply(null, priorArr)) {
      count++;
      if (data[1] === location) {
        return count;
      }
    } else {
      idxPriorArr.push(data);
    }
  }
}

solution([2, 1, 3, 2], 2);
solution([1, 1, 9, 1, 1, 1], 0);

