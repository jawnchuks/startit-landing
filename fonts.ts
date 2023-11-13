import { Inter, Cormorant_Garamond, Vina_Sans, Rubik } from "next/font/google"
export const inter = Inter({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '700', '800']
})
export const rubik = Rubik({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '700']
})
export const vina = Vina_Sans({
    subsets: ['latin'],
    weight: '400',
    fallback: ['Inter']
})
export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '700']
})