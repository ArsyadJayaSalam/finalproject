// =====================================================
// contact.js — validasi form kontak dan submit handler
// =====================================================

const contactForm = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // validasi form Bootstrap
    if (!contactForm.checkValidity()) {
      e.stopPropagation();
      contactForm.classList.add("was-validated");
      return;
    }

    // ambil data form
    const nama = document.getElementById("inputName").value.trim();
    const email = document.getElementById("inputEmail").value.trim();
    const telepon = document.getElementById("inputPhone").value.trim();
    const subjek = document.getElementById("inputSubject").value;
    const pesan = document.getElementById("inputMessage").value.trim();

    // validasi pesan minimal 10 karakter
    if (pesan.length < 10) {
      alert("Pesan harus minimal 10 karakter.");
      return;
    }

    // tampilkan pesan sukses
    contactForm.classList.remove("was-validated");
    successMsg.classList.remove("d-none");

    // simulasi kirim data (tidak ada backend, hanya demo)
    console.log({
      nama: nama,
      email: email,
      telepon: telepon,
      subjek: subjek,
      pesan: pesan,
      tanggal: new Date().toLocaleString("id-ID"),
    });

    // reset form setelah 2 detik
    setTimeout(function () {
      contactForm.reset();
      successMsg.classList.add("d-none");
    }, 2000);
  });

  // hapus validasi styling saat reset
  document.querySelectorAll("button[type='reset']").forEach(function (btn) {
    btn.addEventListener("click", function () {
      contactForm.classList.remove("was-validated");
      successMsg.classList.add("d-none");
    });
  });

  // validasi pesan real-time (minimal 10 karakter)
  const messageInput = document.getElementById("inputMessage");
  messageInput.addEventListener("input", function () {
    if (this.value.length < 10) {
      this.classList.remove("is-valid");
      this.classList.add("is-invalid");
    } else {
      this.classList.remove("is-invalid");
      this.classList.add("is-valid");
    }
  });
}
git 