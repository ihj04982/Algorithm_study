// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// 해시로 다시 풂

function solution(nums) {
    // nums의 길이는 항상 짝수
    // 최대 종류 (중복이 없는)
    // 모든 수가 달라도 nums/2를 넘을 수 없음
    // 종류의 수와 nums/2 중 최소값을 구한다

    const count = new Map();

    // 1. nums를 순회하면서 포켓몬 수 count를 저장함 => O(N)
     for (const name of nums) {
        count.set(name, (count.get(name) ?? 0) + 1);
    }

    // 2. newnums의 길이와 nums.length/2 중 최소값 반환 
    return count.size >= nums.length / 2 ? nums.length / 2 : count.size; 
}

