function solution(progresses: number[], speeds: number[]) {
    let newProgresses: number[] = JSON.parse(JSON.stringify(progresses));

    const answer: number[] = [];

    let i: number = 0;
    while (i < newProgresses.length) {
        let count = 0;
        newProgresses = newProgresses.reduce((arr: number[], cur: number, index: number) => {
            arr.push(cur + speeds[index])
            return arr;
        }, [])

        while (newProgresses[i] >= 100) {
            count++;
            i++;
        }
        if (count !== 0) answer.push(count)
    }
    return answer;
}

solution([93, 30, 55], [1, 30, 5]);
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);