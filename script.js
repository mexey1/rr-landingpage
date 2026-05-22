// Navbar scroll effect
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Feature tabs
const featureTabs = document.querySelectorAll('.feature-tab');
const featureDetails = document.querySelectorAll('.feature-detail');

featureTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and details
    featureTabs.forEach(t => t.classList.remove('active'));
    featureDetails.forEach(d => d.classList.remove('active'));

    // Add active class to clicked tab
    tab.classList.add('active');

    // Add active class to corresponding detail
    const featureId = tab.getAttribute('data-feature');
    const detail = document.getElementById(featureId);
    if (detail) {
      detail.classList.add('active');
    }
  });
});

// Pricing toggle
const pricingToggle = document.getElementById('pricingToggle');
const priceMonthly = document.querySelectorAll('.price-monthly');
const priceYearly = document.querySelectorAll('.price-yearly');

pricingToggle.addEventListener('click', () => {
  pricingToggle.classList.toggle('active');

  priceMonthly.forEach(el => {
    el.style.display = el.style.display === 'none' ? 'inline' : 'none';
  });

  priceYearly.forEach(el => {
    el.style.display = el.style.display === 'none' ? 'inline' : 'none';
  });
});

// FAQ accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const isOpen = faqItem.classList.contains('open');

    // Close all other items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('open');
    });

    // Toggle current item
    if (!isOpen) {
      faqItem.classList.add('open');
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Initialize pricing display
pricingToggle.classList.add('active');
priceMonthly.forEach(el => {
  el.style.display = 'inline';
});
priceYearly.forEach(el => {
  el.style.display = 'none';
});
