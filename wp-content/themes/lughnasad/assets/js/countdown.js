/**
 * Lughnasad — Countdown Timer
 * Uses lughnasadData.countdownDate from wp_localize_script.
 */
(function () {
    function updateCountdown() {
        var dateStr = (typeof lughnasadData !== 'undefined' && lughnasadData.countdownDate)
            ? lughnasadData.countdownDate
            : '2026-07-31T14:00:00';

        var festivalDate = new Date(dateStr).getTime();
        var now = new Date().getTime();
        var distance = festivalDate - now;

        var countdownEl = document.getElementById('countdown');
        if (!countdownEl) return;

        if (distance < 0) {
            countdownEl.innerHTML = '<p class="text-gold font-heading text-2xl">Festival právě probíhá!</p>';
            return;
        }

        var days    = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var daysEl = document.getElementById('countdown-days');
        var hoursEl = document.getElementById('countdown-hours');
        var minutesEl = document.getElementById('countdown-minutes');
        var secondsEl = document.getElementById('countdown-seconds');

        if (daysEl)    daysEl.textContent    = String(days).padStart(3, '0');
        if (hoursEl)   hoursEl.textContent   = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    document.addEventListener('DOMContentLoaded', function () {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    });
})();
