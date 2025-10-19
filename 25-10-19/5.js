// 시간초과로 다시 풀기!!!!!!!!
// https://school.programmers.co.kr/learn/courses/30/lessons/181187

function solution(r1, r2) {
    // 절대 겹칠 수 없음, 정수임
    
    // x 값과 y값은  (-1 * r2) ~ (-1 * r1) , (1 * r1) ~ (1 * r2)
    // r1^2 <= 사이 값 <= r2^2 
    // 4 <= 사이값 <= 9
    // 최솟값과 최댓값 사이의 x좌표 y좌표 배열
    // 4< =  x좌표^2 + y좌표^2가 <= 9 라면 count++
    let innerDot = 0;
    
    // x
    for (let i = 1; i < r2; i++){
        for (let j = 1; j <= Math.sqrt(Math.pow(r2,2)- Math.pow(i,2)); j++){
            if (Math.pow(i,2) + Math.pow(j,2) <= Math.pow(r2,2) && Math.pow(r1,2) <= Math.pow(i,2) + Math.pow(j,2) ) {
                innerDot++;
                }
            }
       }

    return (innerDot + (r2 - r1 + 1)) * 4 
}