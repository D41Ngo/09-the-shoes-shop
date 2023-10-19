// @ts-nocheck: không check lỗi typescript trong file này

/**
 * animal:
 * - numOfLegs: 2, 4
 * - name: string
 * - type: "Chim" , "BoSat"
 * - noiSinhSong: không bắt buộc, nhưng nếu có phải là string
 * - id: string hoặc number
 */

// literal type: lấy giá trị làm kiểu dữ liệu
type Bon = 4;
// const num: Bon = 3; ❌
const num1: Bon = 4;
// -----------------

type TAnimal = {
  numOfLegs: 2 | 4;
  name: string;
  type: "Chim" | "BoSat";
  noiSinhSong?: string;
  id: string | number;
};

const daiBang: TAnimal = {
  numOfLegs: 2,
  name: "dai bang",
  type: "Chim",
  id: 1,
};

/**
 * idle
 * play
 * pause
 * stop
 */

// @ts-ignore: không check lỗi dòng này
const _status: "idle" | "play" | "pause" | "stop" = "hihi";

// any: chấp nhận tất cả kiểu dữ liệu.
let abc: any = 10;
abc = "fasdfdas";
abc = true;
abc = [121, 2121];
