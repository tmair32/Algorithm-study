function solution(s: string){
    let bracketFrontCount: number = 0;
    let answer: boolean = true;

    for (let bracket of s) {
        if (bracket === '(') {
            bracketFrontCount += 1;
        } else {
            if (bracketFrontCount > 0) {
                bracketFrontCount -= 1;
            } else {
                answer = false;
                break;
            }
        }
    }
    if (bracketFrontCount > 0) answer = false;
    console.log(answer);
    return answer;
}

solution("()()")
solution("(())()")
solution(")()(")
solution("(()(")