# 🚀 YIP IN TSOI LAB

ยินดีต้อนรับสู่โปรเจกต์ **YIP IN TSOI LAB** พื้นที่จำลองการสร้างสรรค์นวัตกรรม AI ภายในองค์กร (Internal AI Innovation Playground) ที่ออกแบบมาเพื่อให้ทีมงานสามารถเสนอไอเดีย ตรวจสอบ และผลักดันโซลูชัน AI จากระดับแนวคิดทดลองไปสู่ผลิตภัณฑ์ที่ใช้งานได้จริงในธุรกิจ

## ข้อมูลภาพรวมของระบบ (System Overview)
-----------------------------------------------------------------------------------------------------------------------------

## 1. ฟีเจอร์หลักของระบบ (Key Features)

* **Interactive Dashboard:** ติดตามสถานะโปรเจกต์แบบเรียลไทม์ (Sandbox, Internal Use, Commercialized) พร้อมกราฟวิเคราะห์สัดส่วนข้อมูลด้วย Chart.js
* **Asset Management (CRUD):** ระบบจัดการไอเดียเต็มรูปแบบ สามารถเพิ่ม (Submit), แก้ไข (Edit), และลบ (Delete) โปรเจกต์ได้โดยตรงผ่านหน้าเว็บ
* **Upvote & Interaction:** สมาชิกในองค์กรสามารถร่วมโหวต (Upvote) ไอเดียที่ชื่นชอบ และพูดคุยเสนอแนะแนวทางผ่าน **Discussion Hub** ในแต่ละโปรเจกต์
* **Search & Filter System:** ค้นหาไอเดียได้อย่างรวดเร็วและกรองข้อมูลตามสถานะ (Stage) ของโปรเจกต์
* **Modern User Interface:** ดีไซน์ที่ทันสมัย สะอาดตา รองรับการแสดงผลแบบ Responsive เต็มรูปแบบ พร้อมแอนิเมชันที่ลื่นไหล
* **Technical Excellence:**
    * **Data Persistence:** ระบบบันทึกการโหวตลงใน `localStorage`
    * **Form Validation:** ระบบตรวจสอบข้อมูลก่อนการส่งโปรเจกต์
    * **Scalable Architecture:** รองรับการขยายตัวของข้อมูลโปรเจกต์

## 2. ขั้นตอนการใช้งาน (Workflow)

* **Submit:** ส่งไอเดียใหม่ผ่านปุ่ม **"Deploy Project"**
* **Sandbox:** ไอเดียเริ่มต้นจะอยู่ในสถานะ **In Sandbox** เพื่อทดสอบความเป็นไปได้
* **Vetting & Testing:** ทีมงานร่วมโหวตและใช้ระบบ **"Testing for AI Agents"** เพื่อตรวจสอบคุณภาพ
* **Production:** ไอเดียที่ผ่านเกณฑ์จะถูกเปลี่ยนสถานะเป็น **Internal Used** หรือ **Commercialized** เพื่อใช้งานจริงต่อไป

## 3. การปรับแต่งและบำรุงรักษา

สำหรับผู้ดูแลระบบ (Admin) หากต้องการอัปเดตข้อมูลโปรเจกต์หรือโครงสร้างการแสดงผล สามารถใช้สคริปต์อัตโนมัติได้:

**เรียกใช้ผ่าน Node.js: bash node scripts/update_project.j**

## 4. โครงสร้างไฟล์ (Project Structure)

```text
├── .vscode/             # การตั้งค่าโปรเจกต์
├── scripts/             # สคริปต์จัดการอัปเดตข้อมูล (update_project.js)
├── dashboard.html       # หน้า Dashboard สำหรับวิเคราะห์ Metrics
├── index.html           # หน้าหลัก (รวมรายการไอเดียและระบบ Filter)
├── login.html           # หน้าสำหรับเข้าสู่ระบบ
├── main.js              # หัวใจหลักของระบบ (CRUD, State Management, UI Logic)
├── style.css            # ระบบดีไซน์ (Design System, Animations)
└── logo.png             # โลโก้โปรเจกต์
