//https://school.programmers.co.kr/learn/courses/30/lessons/42577
// 

function solution(phone_book) {
    let answer = false;
    // 1. 새로운 set 생성 => O(N)
    const set = new Set(phone_book);

    // 번호를 순회하며 => O(N)
    // 번호를 자리수별로 slice함 => 최대 20자리이므로 최대 400 N
    for (const num of phone_book) {
        for (let i = 1; i < num.length; i++) {
          if (set.has(num.slice(0, i))) return false;
     }
    }
    return true;
}