// faq-item və timeline-point seçimi
const faqItems = document.querySelectorAll('.faq-item');
const timelinePoints = document.querySelectorAll('.timeline-point');

// Click hadisəsi: hər klikdə yalnız bir faq active olur və uyğun timeline point aktivləşir
faqItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // hamısını təmizləyirik
    faqItems.forEach(i => i.classList.remove('active'));
    timelinePoints.forEach(p => p.classList.remove('active'));

    if (!isActive) {
      // əgər kliklənən əvvəlcə bağlı idisə, aç və uyğun timeline point-i aktiv et
      item.classList.add('active');
      if (timelinePoints[index]) timelinePoints[index].classList.add('active');
    }
    // əgər isActive idisə, yuxarıda hamısını təmizləmişik (yəni heç biri açıq qalmır)
  });
});
