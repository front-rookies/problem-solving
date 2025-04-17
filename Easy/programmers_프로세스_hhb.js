function solution(priorities, location) {
  const queue = [];
  priorities = priorities.map((priority, index) => [priority, index]);
  console.log(priorities);

  while (priorities.length) {
    const [priority, index] = priorities.shift();
    const higherImportance = priorities.findIndex(
      ([value, _]) => value > priority
    );

    if (higherImportance === -1) {
      if (index === location) return queue.length + 1;
      queue.push([priority, index]);
      continue;
    }

    priorities.push([priority, index]);
  }
}

// 28분 실패

/*
    아주 쉬운 문제였다. tc의 n이 100으로 단순하게 2중 for문 n^2으로 푸는 문제인데
    O(n)으로 푸려고 이것저것 시도해보다가 실패했다.
*/
