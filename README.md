PENJELASAN SOAL NOMOR 2:
Kompleksitas:
Waktu: O(n), di mana n adalah panjang string. Setiap karakter diperiksa sekali dan operasi push/pop pada stack memakan waktu O(1).
Ruang: O(n), di mana n adalah panjang string. Dalam kasus terburuk, semua karakter bisa masuk ke dalam stack.
Penjelasan Kode:
Stack untuk Memeriksa Keseimbangan: Stack digunakan untuk melacak tanda kurung buka. Ketika menemukan tanda kurung tutup, stack diperiksa untuk memastikan keseimbangannya.
Matching Brackets: Objek matchingBrackets digunakan untuk mencocokkan tanda kurung buka dan tutup.
Iterasi Melalui String: String diiterasi karakter demi karakter. Jika karakter adalah tanda kurung buka, ia dimasukkan ke dalam stack. Jika karakter adalah tanda kurung tutup, ia dicocokkan dengan tanda kurung buka di puncak stack.
