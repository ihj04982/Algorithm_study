// https://school.programmers.co.kr/learn/courses/30/lessons/43165?language=javascript

function solution(numbers, target) {
    // 완전 탐색 - 깊이
    // dfs 재귀 함수
        // 배열의 길이만큼 탐색했고 합이 target과 같다면 1을 반환, 아니라면 0을 반환
        // +1 또는 -1을 곱하는 2개의 노드 탐색
            // numbers의 원소와 지금까지의 합을 전달한다
            // 다음 노드를 반복하여 더한다. (재귀)
    function dfs(i, sum){
     if(i === numbers.length)
        {
            return sum === target ? 1 : 0;
        }
        const left = dfs(i + 1, sum + (1 * numbers[i]));
        const right = dfs(i + 1, sum + (-1 * numbers[i]));
        return left + right;
    }
    
    return dfs(0,0);  
}

