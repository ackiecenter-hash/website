export interface Product {
  slug: string
  name: string
  tagline: string
  description: string
}

export const products: Product[] = [
  { slug: "vamax", name: "Vamax", tagline: "ปุ๋ยน้ำเร่งการเจริญเติบโต", description: "สูตรเร่งการเจริญเติบโตของพืช เพิ่มผลผลิตอย่างเห็นผล" },
  { slug: "cabmax", name: "Cabmax", tagline: "สารเสริมประสิทธิภาพพืช", description: "ช่วยให้พืชสมบูรณ์แข็งแรง ทนทานต่อสภาพอากาศ" },
  { slug: "zenmax", name: "Zenmax", tagline: "สารจับใบคุณภาพสูง", description: "เพิ่มประสิทธิภาพการดูดซึมสารเคมีทางใบ" },
  { slug: "bionax", name: "Bionax", tagline: "ไคโตซานสำหรับพืช", description: "เสริมภูมิต้านทานโรคและแมลงศัตรูพืชตามธรรมชาติ" },
  { slug: "kingshark", name: "Kingshark", tagline: "สารเสริมประสิทธิภาพพืช", description: "บำรุงพืชให้เจริญเติบโตสมบูรณ์ตลอดฤดูกาล" },
  { slug: "kendos", name: "Kendos", tagline: "สารบำรุงพืชเฉพาะทาง", description: "ดูแลพืชในระยะที่ต้องการการบำรุงเป็นพิเศษ" },
]
