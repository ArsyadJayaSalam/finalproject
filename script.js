// =====================================================
// script.js — kode JS bersama untuk semua halaman
// 1) Menandai menu navbar yang sedang aktif
// 2) Menampilkan & menjalankan tombol "kembali ke atas"
// =====================================================

// ----- 1. Tandai menu aktif sesuai halaman saat ini -----
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
  }
});

// ----- 2. Tombol kembali ke atas -----
const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
