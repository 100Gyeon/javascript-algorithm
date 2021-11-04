class MaxHeap {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    // 구조 분해 할당 문법으로 swap 가능
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  size() {
    return this.heap.length;
  }

  print() {
    console.log(this.heap);
  }

  // 새로운 노드의 삽입
  push(value) {
    // 1. value를 맨 뒤에 추가
    this.heap.push(value);

    let childIndex = this.heap.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);

    // 2. 부모 노드보다 자식 노드의 값이 클 경우, swap 작업 반복해서 재구조화(heapify)
    while (this.heap[parentIndex] < value) {
      // 값을 swap
      this.swap(parentIndex, childIndex);
      // index를 swap
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }

    this.print();
  }

  // 루트 노드 제거
  pop() {
    const lastIndex = this.heap.length - 1;
    // 0번 인덱스인 루트 노드의 값과, lastIndex인 노드의 값을 swap
    this.swap(0, lastIndex);

    let idx = 0;
    while (idx < lastIndex) {
      let leftChildIndex = idx * 2 + 1;
      let rightChildIndex = idx * 2 + 2;

      // (1) left child가 없는 경우 -> 해당 노드는 자식 노드가 없다.
      if (leftChildIndex >= lastIndex) {
        break;
      } // (2) left child만 가지고 있는 경우 
      else if (rightChildIndex >= lastIndex) {
        // 자식 노드의 값이 더 크다면 swap
        if (this.heap[idx] < this.heap[leftChildIndex]) {
          this.swap(idx, leftChildIndex);
          idx = leftChildIndex;
        } else {
          break;
        }
      } // (3) left, right child 둘 다 있는 경우
      else {
        // (3-1) 둘 다 루트 노드보다 큰 값을 가진 경우
        if (this.heap[leftChildIndex] > this.heap[idx] && this.heap[rightChildIndex] > this.heap[idx]) {
          // 둘 중 큰 값이랑 swap
          if (this.heap[leftChildIndex] > this.heap[rightChildIndex]) {
            this.swap(idx, leftChildIndex);
            idx = leftChildIndex;
          } else {
            this.swap(idx, rightChildIndex);
            idx = rightChildIndex;
          }
        } // (3-2) 왼쪽 child 노드가 루트 노드보다 클 경우 swap
        else if (this.heap[leftChildIndex] > this.heap[idx]) {
          this.swap(leftChildIndex, idx);
          idx = leftChildIndex;
        } // (3-3) 오른쪽 child 노드가 루트 노드보다 클 경우 swap
        else if (this.heap[rightChildIndex] > this.heap[idx]) {
          this.swap(rightChildIndex, idx);
          idx = rightChildIndex;
        } // (3-4) 둘 다 루트 노드보다 작을 경우 바꾸지 않음
        else {
          break;
        }
      }
    }

    const value = this.heap.pop();
    this.print();
    return value;
  }
}

const example = new MaxHeap();

// 새로운 노드 삽입
example.push(15);
example.push(8);
example.push(10);
example.push(5);
example.push(4);
example.push(20);

// 루트 노드 제거
example.pop();