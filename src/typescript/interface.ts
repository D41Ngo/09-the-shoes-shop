// interface <===> type
interface IUser {
  name: string;
  id: string | number;
}

interface IUser {
  address: string;
}
/*
 * interface:
 * - merge lại 2 interface cùng tên với nhau.
 * - dùng để khai báo đối tượng.
 * - kết hợp với class => danh cho OOP.
 */

/**
 * type:
 * - Không cho phép khai báo trùng tên
 * - rộng hơn:
 *      string | number
 *      2 | 4
 *      'play' | "stop"
 */

// ---------------------
// type TAbc = {
//   name: string;
//   id: string | number;
// };

// type TAbc = {
//   address: string;
// };

const _user: IUser = {
  id: "12",
  name: "Nguyen Van A",
  address: "dn",
};
