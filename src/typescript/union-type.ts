// -- union type: kết hợp
let __id: string | number | boolean = "";
__id = 12;
__id = true;
// -----------
let age1 = 10; // tự động ngầm hiểu kiểu dữ liệu.
let show = true;
let numbers1 = [1, 2, 3, 4, 5, 6];
let user3 = {
  id: 10,
  name: "string",
};
// -----------
let id2: string | number = 10;
id2 = "10";
// -----------
type StringOrNumber = string | number;

let id3: StringOrNumber = "1212";
id3 = 1212;

// một mảng có nhiều kiểu dữ liệu, gọi là tuple
const arr1: (number | string | boolean)[] = [1, 2, "fasdfasd", "fasdfds"];
const arr2: Array<number | string | boolean> = [1, 2, "fasdfasd", "fasdfds"];
