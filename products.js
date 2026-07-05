// =====================================================
// products.js — filter produk berdasarkan daerah asal
// =====================================================

const filterButtons = document.querySelectorAll(".filter-btn");
const productItems = document.querySelectorAll(".product-item");
const emptyMsg = document.getElementById("emptyMsg");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // ganti tombol aktif
    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    const selected = button.getAttribute("data-filter");
    let jumlahTampil = 0;

    // tampilkan/sembunyikan produk sesuai kategori
    productItems.forEach(function (item) {
      const kategori = item.getAttribute("data-category");
      if (selected === "semua" || kategori === selected) {
        item.style.display = "block";
        jumlahTampil++;
      } else {
        item.style.display = "none";
      }
    });

    // tampilkan pesan jika tidak ada produk yang cocok
    emptyMsg.style.display = jumlahTampil === 0 ? "block" : "none";
  });
});
