// https://school.programmers.co.kr/learn/courses/30/lessons/43162?language=javascript

function solution(n, computers) {
    // 깊이 우선 탐색

    // 방문 visited 배열 (길이는 n, false가 기본값)
    const visited = new Array(n);
    visited.fill(false,0,n);
    // 반환할 네트워크 개수
    let count = 0;

    // computers 순회하며 방문하지 않은 노드를 방문
    for (let i = 0 ; i < computers.length; i++){
        // 방문하지 않았다면
        if (visited[i] !== true){
            // 노드를 방문한다
            dfs(i, visited, computers);
            // 완료시 하나의 네트워크 탐색 완료
            count ++;
        }
    }
    
    return count;
}

function dfs (i, visited, computers){
    // 방문한 노드에 대해 true로 처리한다.
    visited[i] = true;
        
    // computers[i] 배열을 순회하면서
    for (let j = 0; j < computers[i].length; j++){
        if(i !== j && computers[i][j] === 1 && visited[j] === false){
            // 자신이 아니고
            // 연결되어 있는 ([i][j]가 1인)
            // 방문하지 않은 
            // 노드를 방문한다 (재귀)
            dfs(j, visited, computers);
        }
    }
}