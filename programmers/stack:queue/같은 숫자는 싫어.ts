function solution(arr: number[])
{   
    const answer = arr.reduce((stack:number[], cur: number) => {
        if (stack[stack.length - 1] !== cur) {
            stack.push(cur);
        }
        return stack;
    }, [])
    console.log(answer);
    return answer;
}

solution([1,1,3,3,0,1,1])
solution([4,4,4,3,3])