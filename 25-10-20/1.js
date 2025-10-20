// https://school.programmers.co.kr/learn/courses/30/lessons/86491?language=javascript

function solution(sizes) {
    // let max = {w: 0, h:0}
    let max = { w: 0, h:0}
    // 새로운 배열 = [];
    let newArray = [];
    // sizes 배열을 순회하면서 항상 가로가 길도록 회전시킨다 => O(N)
    // max.w < w, max.h < h가 생기면 max에 넣는다
    for(let i = 0; i < sizes.length; i++){
        const w = sizes[i][0];
        const h = sizes[i][1];
        console.log(Math.max(w,h), Math.min(w,h))
        if(max.w < Math.max(w,h)){
            max.w = Math.max(w,h);
        }
        if(max.h < Math.min(w,h)){
            max.h = Math.min(w,h);
        }
    }

     console.log(max)

    return max.h * max.w
    // max.w * max.h를 리턴
}