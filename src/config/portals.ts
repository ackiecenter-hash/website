// URLs ของระบบภายนอกที่เมนูย่อยของเว็บหลักลิงก์ออกไป
// เมื่อระบบจริงถูกสร้างเสร็จ ให้แก้ค่าตรงนี้ที่เดียว
export const portals = {
  dealer: import.meta.env.VITE_DEALER_PORTAL_URL ?? "https://portal.ackieplus.com",
  staff: import.meta.env.VITE_STAFF_PORTAL_URL ?? "https://staff.ackieplus.com",
}
