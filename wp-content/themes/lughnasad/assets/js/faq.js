/**
 * Lughnasad — FAQ Accordion
 */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.faq-question').forEach(function (question) {
        question.addEventListener('click', function () {
            var item = this.closest('.faq-item');
            var isOpen = item.classList.contains('open');

            // Close all
            document.querySelectorAll('.faq-item').forEach(function (i) {
                i.classList.remove('open');
            });

            // Open clicked (if it wasn't already open)
            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });
});
