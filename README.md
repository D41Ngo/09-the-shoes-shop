npm i react-redux @reduxjs/toolkit react-router-dom sass axios antd formik yup

npm i prettier -D

## --save (khong co): cai nhung thu vien can cho production.
npm i react
## --save-dev: cai nhung thu vien chi can o local, dev.
npm i prettier --save-dev
npm i prettier -D

## prettier: format code
## eslint: rule cua project
## Layout giong nhau, khac content

# React Router Dom
- NavLink: Dung khi muon active the va duy chuyen giua cac trang
- Link: duy chuyen giua cac trang
- useNavigate: kiem tra dieu kien roi moi duy chuyen giua cac trang web
# Cac buoc cai thu vien tailwindcss
1. npm install -D tailwindcss postcss autoprefixer: Cai tailwindcss
2. npx tailwindcss init: tu dong tao file tailwind.config.js
3. tao file postcss.config.cjs: 
4. Import noi dung 
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
/* vao bat ky 1 file css global trong du an */
```
5. Tao css ma tailwind chua co san.
```html
<div class='px-[Noi_Dat_Gia_Tri_CUSTOM]'></div>
```