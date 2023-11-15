import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// --------------------
// custom hook: use + ten_hook
// Ghi Chú: Hooks chỉ được sử dụng trong custom hook + Component
// Chú Ý: Đặc biệt là sử dụng được các hooks bên trong nên được gọi là custom hook
export function useScrollToTop() {
  // Lắng nghe url thay đổi thì sẽ scroll top
  const location = useLocation();

  // Lắng nghe một cái gì đó thay đổi, thì sẽ làm một cái gì đó.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
}
