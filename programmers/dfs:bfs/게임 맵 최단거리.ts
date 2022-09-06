function solution(maps: number[][]) {
    const n: number = maps.length - 1;
    const m: number = maps[0].length - 1;
    let answer: number = -1;

    const queue: number[][] = [[0, 0, 1]];

    const dx: number[] = [-1, 0, 1, 0];
    const dy: number[] = [0, 1, 0, -1];

    while (queue.length) {
        const [x, y, count]: number[] = queue.shift() as number[];
        if (y === m && x === n) {
            answer = count;
            return answer;
        }
        for (let i = 0; i < 4; i++) {
            const x1 = x + dx[i];
            const y1 = y + dy[i];
            
            if (y1 < 0 || x1 < 0 || y1 > m || x1 > n) continue;
            if (maps[x1][y1] === 1) {
                maps[x1][y1] = 0;
                queue.push([x1, y1, count + 1])
            }
        }
    }
    return answer;
}

solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
]);
solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
]);
