🚀 YIP IN TSOI LAB
ยินดีต้อนรับสู่โปรเจกต์ YIP IN TSOI LAB พื้นที่จำลองการสร้างสรรค์นวัตกรรม AI ภายในองค์กร (Internal AI Innovation Playground) ที่ออกแบบมาเพื่อให้ทุกทีมภายในบริษัทสามารถนำเสนอ ตรวจสอบ และผลักดันโซลูชัน AI จากระดับแนวคิดทดลองไปสู่ผลิตภัณฑ์ที่พร้อมออกสู่ตลาดจริง

1. ข้อมูลภาพรวมของระบบ (System Overview)
ฟังก์ชันหลักของระบบ (Core Features)
Interactive Dashboard: แสดงสถิติจำนวนไอเดีย (Total, Sandbox, Internal, Commercial) พร้อมกราฟแสดงผลแบบ Dynamic ด้วย Chart.js

Enterprise Portfolio: ระบบตารางแสดงรายละเอียดโครงการแบบ Real-time พร้อมคัดกรองข้อมูลได้ง่าย

Filter & Search Asset System: ค้นหาและคัดกรองเครื่องมือ AI ตามสถานะ (Stage) หรือชื่อโครงการ

Project Submission & Edit: ระบบกรอกแบบฟอร์มเพื่อเสนอแนวคิดนวัตกรรม AI ใหม่ และสามารถแก้ไข (Edit) หรือลบ (Delete) โครงการได้โดยตรง

Upvote & Persistence Mechanism: สมาชิกในองค์กรสามารถกดโหวต (Upvote) ให้กับไอเดียที่ชื่นชอบ โดยระบบจะบันทึกสถานะไว้ใน localStorage เพื่อป้องกันการกดซ้ำ

Discussion Hub: พื้นที่พูดคุยและแลกเปลี่ยนความเห็นภายในหน้ารายละเอียดของแต่ละไอเดีย

Responsive & Modern Design: รองรับการแสดงผลทุกขนาดหน้าจอด้วย Enterprise Design System และมีระบบ Scroll Progress Bar เพื่อติดตามความคืบหน้าการอ่าน

2. โครงสร้างไฟล์ของโปรเจกต์ (Project Structure)
Plaintext
├── .vscode/             # การตั้งค่าโปรเจกต์
├── scripts/             # สคริปต์สำหรับอัปเดตและบำรุงรักษาข้อมูลโครงการ (update_project.js)
├── dashboard.html       # หน้า Dashboard สำหรับวิเคราะห์ Metrics และตารางสรุปผลงาน
├── index.html           # หน้า Home หลักสำหรับการเรียกดูไอเดีย (Browse Tools) และ Pipeline
├── login.html           # หน้าสำหรับเข้าสู่ระบบจัดการ Chatbot
├── main.js              # Logic หลัก: ระบบจัดการโครงการ (CRUD), การโหวต, กราฟ, และข้อมูลจำลอง
├── style.css            # ระบบดีไซน์ (Enterprise Design System) และแอนิเมชันต่างๆ
└── logo.png             # โลโก้โปรเจกต์
3. การอัปเดตข้อมูลโครงการ
หากคุณต้องการอัปเดตข้อมูลโครงการ (Projects Data) หรือแก้ไขส่วนประกอบต่างๆ คุณสามารถใช้งานสคริปต์ที่เตรียมไว้ได้:

รันสคริปต์ node scripts/update_project.js เพื่อดำเนินการอัปเดตโครงสร้าง CSS และข้อมูลโครงการอัตโนมัติ
