// Linh động kiểu dữ liệu truyền vào.

function print<AType, BType>(a: AType, b: BType) {
  console.log(a, b);
}

print<number, string>(1, "á");
print<number, number>(1, 2);
print<string, string>("ấ", "âs");
