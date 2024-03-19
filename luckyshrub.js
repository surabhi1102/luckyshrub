document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll(".testimonial-slide");
    let index = 0; // Index to track the current testimonial

    // Show the first testimonial initially
    testimonials[index].classList.add("active");

    function nextTestimonial() {
        // Hide the current testimonial
        testimonials[index].classList.remove("active");

        // Move to the next testimonial
        index = (index + 1) % testimonials.length;

        // Show the next testimonial
        testimonials[index].classList.add("active");
    }

    // Function to cycle through testimonials when the next button is clicked
    document.getElementById("nextBtn").addEventListener("click", nextTestimonial);
});
