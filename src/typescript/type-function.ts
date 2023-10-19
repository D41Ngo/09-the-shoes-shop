// void: không trả về bất kỳ giá trị nào. có trả về cũng được không trả về cũng được.
type TFn = (name: string) => void;
const printUser2: TFn = (userName) => {
  //   console.log(userName);
  return userName;
};
// -----------------------------------------------
// định nghĩa kiểu dữ liệu nhập vào
function printUser(name: string): void {
  console.log(`Xin chào: ${name}`);
}

// printUser(1);
// printUser(true)
printUser("Quang");

// định nghĩa kiểu dữ liệu trả về
function exportGetting(name: string): string {
  return `Xin chào: ${name}`;
}

// -------- ? optional----------
// a: bắt buộc truyền vào => number
// b: không bắt buộc truyền vào => nhưng nếu truyền vào thì phải là number
function calc(a: number, b?: number): string {
  if (b) {
    return `${a + b}`;
  }

  return `${a + 10}`;
}

function calc2(a: number, b: number = 10): string {
  return `${a + b}`;
}

// Chú Ý: tham số tùy chọn nên đưa nó ra cuối cùng của tham số truyền vào.
// tham số tùy chọn ở phía trước
// tham số bắt buộc ở phía sau
// không được phép: tham số bắt buộc luôn đứng trước tham số tùy chọn

// function calc3(b?: number, a: number): string { ❌
//   if (b) {
//     return `${a + b}`;
//   }

//   return `${a + 10}`;
// }

/**
 * 1> Kiểu truyền vào
 * 2> Kiểu trả về
 * 3> Optional, không bắt buộc, ==> chú ý: tùy chọn luôn đưa ra cuối cùng của tham số.
 */
