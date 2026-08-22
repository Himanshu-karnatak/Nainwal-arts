// --- Mobile Hamburger Navigation Toggle ---
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger lines into X cross icon
    const spans = hamburgerBtn.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu automatically when any nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburgerBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// --- Direct WhatsApp Booking Form Submission Logic ---
document.getElementById('proWhatsAppForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Capturing user inputs
    const clientName = document.getElementById('clientName').value.trim();
    const eventType = document.getElementById('eventType').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventLocation = document.getElementById('eventLocation').value.trim();

    // Studio Owner WhatsApp Phone Number (International format without '+', e.g., 919876543210)
    const ownerWhatsAppNumber = "919876543210";

    // Formatting highly professional enterprise WhatsApp inquiry message
    const message = `*✨ New Elite Booking Inquiry - Nainwal Art's Photography ✨*%0A%0A` +
                    `👤 *Client Name:* ${encodeURIComponent(clientName)}%0A` +
                    `📷 *Package:* ${encodeURIComponent(eventType)}%0A` +
                    `📅 *Event Date:* ${encodeURIComponent(eventDate)}%0A` +
                    `📍 *Location / Venue:* ${encodeURIComponent(eventLocation)}%0A%0A` +
                    `Please verify date availability and confirm booking details.`;

    // Triggering redirect directly to WhatsApp API
    const whatsappURL = `https://wa.me/${ownerWhatsAppNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
});