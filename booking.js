document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show success message
    const formData = new FormData(e.target);
    
    // Create success overlay
    const overlay = document.createElement('div');
    overlay.className = 'success-overlay';
    overlay.innerHTML = `
        <div class="success-modal">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2>Booking Confirmed!</h2>
            <p>Thank you for choosing Glamour Salon</p>
            <p class="success-message">We'll call you shortly to confirm your appointment</p>
            <button onclick="this.parentElement.parentElement.remove()" class="ok-btn">OK</button>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Reset form
    e.target.reset();
});

// Set minimum date to today
const dateInput = document.querySelector('input[type="date"]');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}
