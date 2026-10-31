document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const token = "8885039807:AAHj5lssGGOtjr6nkPo93MqnF16MMNuCrWo";
  const chat_id = "8958237379";

  const ism = document.getElementById("ism").value;
  const email = document.getElementById("email").value;
  const telefon = document.getElementById("telefon").value;
  const yonalish = document.getElementById("yonalish").value;

  const xabar = `<b>📋 YANGI BUYURTMA</b>\n` +
                `━━━━━━━━━━━━━━━━━━━\n` +
                `<b>👤 Ism:</b>        <code>${ism}</code>\n` +
                `<b>📧 Email:</b>      <code>${email}</code>\n` +
                `<b>📞 Telefon:</b>    <code>${telefon}</code>\n` +
                `<b>✈️ Yo'nalish:</b>  <code>${yonalish}</code>\n` +
                `━━━━━━━━━━━━━━━━━━━\n` +
                `🌐 <i>Turizm Sayohat Agentligi</i>`;

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(xabar)}&parse_mode=HTML`;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        alert("Buyurtma muvaffaqiyatli yuborildi!");
        document.getElementById("orderForm").reset();
      } else {
        alert("Xatolik yuborishda!");
      }
    })
    .catch((error) => {
      alert("Tarmoqda xatolik yuz berdi!");
    });
});