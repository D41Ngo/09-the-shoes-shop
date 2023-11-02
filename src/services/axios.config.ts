import axios from "axios";

const BASE_URL = "https://shop.cyberlearn.vn/api";

/**
 * axios
 * - axiosWithoutAuth: những api public
 * - axiosAuth: những api private - cần xác minh
 */

export const axiosWithoutAuth = axios.create({
  baseURL: BASE_URL,
  // Thời gian đợi một request hoàn thành.
  timeout: 180_000, // 180000
});

/**
 * animal
 * - dog
 * - cat
 */
