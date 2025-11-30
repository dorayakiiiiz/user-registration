# User Registration System

**User Registration System** là một ứng dụng web Full-stack hoàn chỉnh cho phép người dùng đăng ký và đăng nhập tài khoản. Dự án được xây dựng dựa trên kiến trúc **MERN** (MongoDB, Express, React, Node.js).

## 🚀 Tính năng chính

*   **Đăng ký (Sign Up):** Tạo tài khoản mới với validation kỹ lưỡng (định dạng email, độ dài mật khẩu).
*   **Đăng nhập (Log In):** Xác thực người dùng và chuyển hướng vào trang Dashboard.
*   **Dashboard:** Trang bảo vệ chỉ dành cho người dùng đã đăng nhập.
*   **Bảo mật:** Mật khẩu được mã hóa (Hash) bằng `bcrypt` trước khi lưu vào database.
*   **Giao diện:** Responsive, hiện đại sử dụng Tailwind CSS.
*   **Quản lý trạng thái:** Sử dụng React Query để xử lý API request mượt mà.

## 🛠️ Công nghệ sử dụng

**Frontend:**
*   React (Vite)
*   Tailwind CSS
*   React Query (@tanstack/react-query)
*   React Router DOM
*   Axios

**Backend:**
*   Node.js
*   Express.js
*   MongoDB (Mongoose)
*   Bcrypt (Mã hóa mật khẩu)
*   Cors & Dotenv

---

## ⚙️ Hướng dẫn cài đặt và chạy Local

Để chạy dự án này trên máy cá nhân, bạn cần cài đặt **Node.js** và có tài khoản **MongoDB** (hoặc MongoDB cài sẵn trên máy).

### 1. Cài đặt Backend (Server)

1.  Mở terminal và di chuyển vào thư mục backend:
    ```bash
    cd user-registration-be
    ```

2.  Cài đặt các thư viện cần thiết:
    ```bash
    npm install
    ```

3.  **Cấu hình biến môi trường:**
    Tạo một file tên là `.env` trong thư mục `user-registration-be` và điền thông tin kết nối MongoDB của bạn vào (tham khảo file `.env` mẫu nếu có):

    ```env
    PORT=5000
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/UserRegistrationDB
    ```
    *(Thay thế `<username>`, `<password>` bằng thông tin MongoDB của bạn)*

4.  Khởi chạy server:
    ```bash
    npm start
    ```
    *Nếu thấy thông báo "App listening on port 5000" và "Connect to database successfully" là thành công.*

### 2. Cài đặt Frontend (Client)

1.  Mở một terminal **mới** (giữ terminal backend đang chạy) và di chuyển vào thư mục frontend:
    ```bash
    cd user-registration-fe
    ```

2.  Cài đặt các thư viện:
    ```bash
    npm install
    ```

3.  **Cấu hình API URL (Quan trọng):**
    Mở file `src/services/api.js`. Để chạy local, bạn cần trỏ API về localhost thay vì server Vercel.
    
    Sửa lại code như sau:
    ```javascript
    // src/services/api.js
    
    // Bỏ comment dòng này để chạy local
    const API_URL = 'http://localhost:5000'; 
    
    // Comment dòng này lại (đây là link deploy)
    // const API_URL = 'https://23120197-user-registration-be.vercel.app';
    ```

4.  Khởi chạy ứng dụng React:
    ```bash
    npm run dev
    ```

5.  Truy cập vào đường dẫn hiển thị trên terminal (thường là `http://localhost:5173`) để trải nghiệm ứng dụng.

---

## 📂 Cấu trúc thư mục

```text
user-registration/
├── README.md                    # Tài liệu hướng dẫn
│
├── user-registration-be/        # BACKEND (Node.js + Express)
│   ├── .env                     # Biến môi trường (DB, Port)
│   └── src/
│       ├── controllers/         # Logic xử lý (Auth, Register...)
│       ├── models/              # Schema MongoDB (User)
│       ├── routes/              # Định tuyến API
│       ├── utils/               # Hàm hỗ trợ (Validator)
│       └── index.mjs            # Entry point server
│
└── user-registration-fe/        # FRONTEND (React + Vite)
    ├── vite.config.js           # Cấu hình Vite
    └── src/
        ├── pages/               # Các trang giao diện (Login, Dashboard...)
        ├── services/            # Cấu hình API (axios)
        ├── utils/               # Hàm validate form
        └── App.jsx              # Entry point React
```
---

## 📝 Lưu ý khi chạy Local
Nếu gặp lỗi **CORS** khi chạy local, hãy đảm bảo:
1. Backend đang chạy ở port 5000.
2. Trong file `user-registration-be/src/index.mjs`, danh sách `allowedOrigins` đã bao gồm port của frontend (ví dụ: `http://localhost:5173`).