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
var id = 10;
var price = Number("10");
var __age = 20;
// id = "hihi"; ❌ string không thể gắn được cho biến có giá trị là number
id = 20; //✅ chỉ number mới được phép gắn cho number
// -- [string]
var userName = "Nguyen Van A";
var _price = String(true);
userName = "Nguyen Van B";
// userName = 10;❌
// userName = true;❌
// -- boolean
var isOpen = true;
// -- undefined -- Ít dùng
var age;
// -- null
var _age = null;
// ------------ Reference Type
// cách 1:
var numbers = [1, 2, 3, 4, 5, 6];
// const strings: string[] = [1, 2, 3, 4, 5, 6];❌
var strings = ["abc", "fadsfasd", "fasfas"];
// cách 2: generic
var _numbers = [1, 2, 3, 4, 5, 6];
var _strings = ["abc", "fadsfasd", "fasfas"];
var user = {
    address: "",
    age: 1,
    id: 1,
    name: "",
};
var user2 = {
    address: "",
    age: 1,
    id: "1",
    name: "",
};
