/**
 * Type:
 *
 * primitive type: string, number, boolean, undefined, null, ...
 * reference type: array, object.
 *
 * Chú ý: kiểu dữ liệu có sẵn luôn bắt đầu bằng chữ thường
 * - ép kiểu: bắt đầu bằng chữ in HOA
 */

//-- [number]
let id: number = 10;
let price: number = Number("10");

let __age: number = 20;
// id = "hihi"; ❌ string không thể gắn được cho biến có giá trị là number
id = 20; //✅ chỉ number mới được phép gắn cho number

// -- [string]
let userName: string = "Nguyen Van A";
let _price: string = String(true);
userName = "Nguyen Van B";

// userName = 10;❌
// userName = true;❌

// -- boolean
let isOpen: boolean = true;

// -- undefined -- Ít dùng
let age: undefined;
// -- null
let _age: null = null;

// ------------ Reference Type
// cách 1:
const numbers: number[] = [1, 2, 3, 4, 5, 6];
// const strings: string[] = [1, 2, 3, 4, 5, 6];❌
const strings: string[] = ["abc", "fadsfasd", "fasfas"];

// cách 2: generic
const _numbers: Array<number> = [1, 2, 3, 4, 5, 6];
const _strings: Array<string> = ["abc", "fadsfasd", "fasfas"];

/**
 * user
 * - id: string | number
 * - name: string
 * - age: number
 * - address: string
 */

// Cách tạo ra một kiểu dữ liệu cho riêng mình.
// Kiểu dữ liệu tự tạo luôn bắt đầu bằng chữ in hoa.
type TUser = {
  id: string | number; // union type, kết hợp kiểu dữ liệu.
  name: string;
  age: number;
  address: string;
};

type THocSinh = {
  id: string | number;
  name: string;
};

type Extend = {
  email: string;
  phone: string;
};
type THocSinhExtend = THocSinh & Extend;

type TUserExtend = TUser & Extend;

type TWithEmailOrPhone<T> = T & {
  email: string;
  phone: string;
};

const user: TWithEmailOrPhone<TUser> = {
  address: "",
  age: 1,
  id: 1,
  name: "",
  email: "",
  phone: "",
};
const hocsinh: TWithEmailOrPhone<THocSinh> = {
  email: "",
  id: "",
  name: "",
  phone: "",
};

const user2: TUser = {
  address: "",
  age: 1,
  id: "1",
  name: "",
};
