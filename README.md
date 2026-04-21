# Smart Care System (React Native)

Smart Care System
พัฒนาโดยใช้ React Native ตาม requirement ที่ได้รับ

---

## 📱 Features

### 1. Login

- รองรับการเข้าสู่ระบบด้วย:

  - เลขบัตรประชาชน (13 หลัก)
  - เบอร์โทรศัพท์ (10 หลัก)

- ปุ่ม Submit จะกดได้เมื่อข้อมูลถูกต้องเท่านั้น
- เมื่อเข้าสู่ระบบสำเร็จ → ไปหน้า Main

---

### 2. Main Page

- แสดงรายการ Smart Care Requests
- แสดง:

  - Smart Care ID
  - Title (1 บรรทัด)

- สามารถ:

  - กดรายการเพื่อดูรายละเอียด
  - ค้นหาด้วย Smart Care ID
  - เพิ่มรายการใหม่

---

### 3. Search

- รองรับการค้นหาด้วย Smart Care ID
- กดปุ่ม Search หรือกด Enter เพื่อค้นหา
- หากพบ → ไปหน้า Request Detail
- หากไม่พบ → แสดง error message
- มี Clear (❌) เพื่อล้างข้อความ
- มี Loading indicator ระหว่างค้นหา

---

### 4. Add Request

- ผู้ใช้สามารถสร้าง Smart Care Request ใหม่โดยกรอก:

  - Title
  - Description

- ต้องกรอกข้อมูลให้ครบทุกช่อง
- ปุ่ม Submit จะกดได้เมื่อข้อมูลถูกต้อง
- เมื่อ Submit สำเร็จ → เพิ่มรายการใหม่

---

### 5. Request Detail

- แสดงรายละเอียดของ Smart Care:

  - Smart Care ID
  - Title
  - Description
  - วันที่สร้าง (Timestamp)

---

## 🧱 Tech Stack

- React Native
- TypeScript
- Redux Toolkit (State Management)
- React Hook Form (Form Handling)
- Zod (Schema Validation)
- React Navigation

---

## 🧠 Key Implementation

- ใช้ Redux Toolkit สำหรับจัดการ state ของ Smart Care
- ใช้ react-hook-form + Zod สำหรับ validation ของ form
- แยก reusable component เช่น `CustomInput`
- จัดการ UX เช่น:

  - Input focus state (border เปลี่ยนสี)
  - Disabled button
  - Loading state
  - Clear input

- ใช้ Navigation แบบ stack

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

---

### 2. Run Android

```bash
npx react-native run-android
```

---

### 3. Start Metro

```bash
npx react-native start
```

---

## 📁 Project Structure

```text
src/
 ├── components/
 │   └── CustomInput.tsx
 │
 ├── navigation/
 │   ├── AppNavigator.tsx
 │   └── types.ts
 │
 ├── screens/
 │   ├── LoginScreen.tsx
 │   ├── MainScreen.tsx
 │   ├── AddRequestScreen.tsx
 │   └── RequestDetailScreen.tsx
 │
 ├── store/
 │   ├── index.ts
 │   └── smartCareSlice.ts
 │
 ├── theme/
 │   └── styles.ts
 │
 └── types/
     └── react-native-vector-icons.d.ts
```

---

## ✨ Notes

- Search ทำงานตาม requirement โดยใช้การกดปุ่มหรือ Enter
- มีการปรับ UX ให้ใช้งานง่ายขึ้น เช่น clear input และ loading indicator
- โครงสร้างถูกออกแบบให้สามารถขยายต่อได้ง่าย (scalable structure)

---

## 📌 Author

Developed by Wijitra Rattanason
