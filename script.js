// Load products from admin panel or use default data
function getProducts() {
    const adminProducts = localStorage.getItem('freshmart_products');
    if (adminProducts) {
        return JSON.parse(adminProducts);
    }
    
    // Default products data (fallback)
    return [
    {
        id: 1,
        name: "Fresh Tomatoes",
        price: "₹89/kg",
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1546470427-e5ac89cd0b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "in-stock",
        stock: 25,
        description: "Fresh, juicy tomatoes sourced directly from local farms. Perfect for cooking, salads, and daily meals. Rich in vitamins and antioxidants.",
        features: ["Farm fresh quality", "Rich in Vitamin C", "Perfect for cooking", "Locally sourced"]
    },
    {
        id: 2,
        name: "Fresh Milk",
        price: "₹65/L",
        category: "dairy",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "in-stock",
        stock: 15,
        description: "Pure, fresh milk from local dairy farms. Pasteurized and packed with essential nutrients for the whole family.",
        features: ["100% pure milk", "Rich in calcium", "Daily fresh supply", "Pasteurized for safety"]
    },
    {
        id: 3,
        name: "Dish Soap",
        price: "₹120",
        category: "household",
        image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "in-stock",
        stock: 30,
        description: "Effective dish washing liquid that cuts through grease and leaves dishes sparkling clean. Gentle on hands.",
        features: ["Cuts through grease", "Gentle on hands", "Long lasting", "Pleasant fragrance"]
    },
    {
        id: 4,
        name: "Chocolate Cookies",
        price: "₹150",
        category: "snacks",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "in-stock",
        stock: 20,
        description: "Delicious chocolate cookies made with premium ingredients. Perfect for tea time and family gatherings.",
        features: ["Premium chocolate", "Crispy texture", "Family pack", "No artificial colors"]
    },
    {
        id: 5,
        name: "Basmati Rice",
        price: "₹450/5kg",
        category: "grains",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "in-stock",
        stock: 12,
        description: "Premium quality Basmati rice with long grains and aromatic fragrance. Perfect for biryanis and daily meals.",
        features: ["Long grain variety", "Aromatic fragrance", "Premium quality", "5kg family pack"]
    },
    {
        id: 6,
        name: "Fresh Apples",
        price: "₹180/kg",
        category: "fruits",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "in-stock",
        stock: 18,
        description: "Crisp and sweet apples packed with nutrients. Great for snacking and maintaining a healthy diet.",
        features: ["Crisp and sweet", "Rich in fiber", "Healthy snacking", "Fresh from orchards"]
    },
    {
        id: 7,
        name: "Carrots",
        price: "₹45/kg",
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "in-stock",
        stock: 22,
        description: "Fresh orange carrots rich in beta-carotene and vitamins. Perfect for cooking, salads, and juices.",
        features: ["Rich in beta-carotene", "Fresh and crunchy", "Versatile cooking", "Good for eyesight"]
    },
    {
        id: 8,
        name: "Greek Yogurt",
        price: "₹220",
        category: "dairy",
        image: "https://images.unsplash.com/photo-1571212515416-fca88c6b7d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "out-stock",
        stock: 0,
        description: "Thick and creamy Greek yogurt packed with probiotics and protein. Great for breakfast and healthy snacking.",
        features: ["High in protein", "Contains probiotics", "Thick and creamy", "Healthy breakfast option"]
    },
    {
        id: 9,
        name: "Laundry Detergent",
        price: "₹350",
        category: "household",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "in-stock",
        stock: 8,
        description: "Powerful laundry detergent that removes tough stains and keeps clothes fresh and clean.",
        features: ["Removes tough stains", "Fresh fragrance", "Color protection", "Suitable for all fabrics"]
    },
    {
        id: 10,
        name: "Potato Chips",
        price: "₹95",
        category: "snacks",
        image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "in-stock",
        stock: 35,
        description: "Crispy and flavorful potato chips made from quality potatoes. Perfect for snacking and parties.",
        features: ["Crispy texture", "Quality potatoes", "Perfect for parties", "Multiple flavors available"]
    },
    {
        id: 11,
        name: "Wheat Flour",
        price: "₹180/2kg",
        category: "grains",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "in-stock",
        stock: 16,
        description: "Fine quality wheat flour perfect for making rotis, bread, and other baked goods. Finely ground and pure.",
        features: ["Finely ground", "100% wheat", "Perfect for rotis", "2kg convenient pack"]
    },
    {
        id: 12,
        name: "Bananas",
        price: "₹60/kg",
        category: "fruits",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "in-stock",
        stock: 28,
        description: "Sweet and nutritious bananas rich in potassium and natural energy. Great for breakfast and snacking.",
        features: ["Rich in potassium", "Natural energy source", "Sweet and nutritious", "Perfect ripeness"]
    },
    {
        id: 13,
        name: "Bell Peppers",
        price: "₹120/kg",
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "in-stock",
        stock: 14,
        description: "Colorful bell peppers rich in vitamins and antioxidants. Perfect for stir-fries, salads, and cooking.",
        features: ["Rich in vitamins", "Colorful varieties", "Crunchy texture", "Great for cooking"]
    },
    {
        id: 14,
        name: "Cheddar Cheese",
        price: "₹280",
        category: "dairy",
        image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "in-stock",
        stock: 10,
        description: "Premium cheddar cheese with rich flavor and smooth texture. Perfect for sandwiches, pasta, and snacking.",
        features: ["Premium quality", "Rich flavor", "Smooth texture", "Versatile use"]
    },
    {
        id: 15,
        name: "Paper Towels",
        price: "₹250",
        category: "household",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "out-stock",
        stock: 0,
        description: "Absorbent paper towels for kitchen and household cleaning. Strong and durable for all cleaning needs.",
        features: ["Highly absorbent", "Strong and durable", "Multi-purpose use", "Convenient roll pack"]
    },
    {
        id: 16,
        name: "Granola Bars",
        price: "₹180",
        category: "snacks",
        image: "https://images.unsplash.com/photo-1571212515416-fca88c6b7d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "in-stock",
        stock: 24,
        description: "Healthy granola bars packed with nuts, oats, and dried fruits. Perfect for on-the-go snacking.",
        features: ["Healthy ingredients", "Nuts and oats", "On-the-go snacking", "Energy boosting"]
    },
    {
        id: 17,
        name: "Brown Sugar",
        price: "₹85",
        category: "grains",
        image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "in-stock",
        stock: 19,
        description: "Natural brown sugar with rich molasses flavor. Perfect for baking, cooking, and beverages.",
        features: ["Natural molasses", "Rich flavor", "Perfect for baking", "Unrefined sugar"]
    },
    {
        id: 18,
        name: "Oranges",
        price: "₹110/kg",
        category: "fruits",
        image: "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        status: "in-stock",
        stock: 21,
        description: "Juicy and sweet oranges packed with Vitamin C. Perfect for fresh juice and healthy snacking.",
        features: ["High in Vitamin C", "Juicy and sweet", "Perfect for juice", "Boosts immunity"]
    }
    ];
}

// Initialize products
let products = getProducts();

// Listen for product updates from admin panel
window.addEventListener('storage', function(e) {
    if (e.key === 'freshmart_products') {
        products = getProducts();
        if (typeof displayProducts === 'function') {
            displayProducts(products);
        }
    }
});

// Check for updates periodically
setInterval(() => {
    const lastUpdate = localStorage.getItem('freshmart_products_updated');
    const currentUpdate = window.lastProductUpdate || 0;
    
    if (lastUpdate && parseInt(lastUpdate) > currentUpdate) {
        products = getProducts();
        if (typeof displayProducts === 'function') {
            displayProducts(products);
        }
        window.lastProductUpdate = parseInt(lastUpdate);
    }
}, 2000);

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize all website functionality
function initializeWebsite() {
    setupNavigation();
    setupScrollAnimations();
    setupProductFiltering();
    setupContactForm();
    loadAndDisplayProducts();
    setupScrollIndicator();
    setupProductModal();
}

// Navigation functionality
function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling and active link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect and active link highlighting
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        // Add scrolled class to navbar
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active navigation link
        updateActiveNavLink();
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-up class
    const animatedElements = document.querySelectorAll('.fade-up');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Product filtering and search
function setupProductFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('searchInput');

    // Filter button functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterProducts(category, searchInput.value);
        });
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-category');
        filterProducts(activeFilter, this.value);
    });
}

// Filter products based on category and search term
function filterProducts(category, searchTerm) {
    let filteredProducts = products;

    // Filter by category
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    // Filter by search term
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    displayProducts(filteredProducts);
}

// Load and display products
function loadAndDisplayProducts() {
    displayProducts(products);
}

// Display products in the grid
function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = '<div class="no-products"><p>No products found matching your criteria.</p></div>';
        return;
    }

    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card" data-category="${product.category}" data-product-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <span class="product-status ${product.status === 'in-stock' ? 'status-in-stock' : 'status-out-stock'}">
                    ${product.status === 'in-stock' ? 'In Stock' : 'Out of Stock'}
                </span>
            </div>
        </div>
    `).join('');

    // Add animation to newly loaded products
    const productCards = productsGrid.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
        
        // Add click event listener for modal
        card.addEventListener('click', () => {
            const productId = parseInt(card.getAttribute('data-product-id'));
            openProductModal(productId);
        });
    });
}

// Product Modal functionality
function setupProductModal() {
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.modal-close');
    
    // Close modal when clicking close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProductModal);
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeProductModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeProductModal();
        }
    });
}

// Open product modal with product details
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalName = document.getElementById('modalName');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    const modalStock = document.getElementById('modalStock');
    const modalStatus = document.getElementById('modalStatus');
    const modalFeatures = document.getElementById('modalFeatures');
    const whatsappBtn = document.getElementById('modalWhatsapp');
    const contactBtn = document.getElementById('modalContact');
    
    // Populate modal with product data
    if (modalImage) modalImage.src = product.image;
    if (modalImage) modalImage.alt = product.name;
    if (modalName) modalName.textContent = product.name;
    if (modalPrice) modalPrice.textContent = product.price;
    if (modalDescription) modalDescription.textContent = product.description;
    if (modalStock) modalStock.textContent = `Stock: ${product.stock} units`;
    
    // Set status badge
    if (modalStatus) {
        modalStatus.textContent = product.status === 'in-stock' ? 'In Stock' : 'Out of Stock';
        modalStatus.className = `status-badge ${product.status === 'in-stock' ? 'status-in-stock' : 'status-out-stock'}`;
    }
    
    // Populate features list
    if (modalFeatures && product.features) {
        modalFeatures.innerHTML = product.features.map(feature => 
            `<li><i class="fas fa-check"></i> ${feature}</li>`
        ).join('');
    }
    
    // Setup action buttons
    const productMessage = `Hi! I'm interested in ${product.name} (${product.price}). Is it available?`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(productMessage)}`;
    
    if (whatsappBtn) {
        whatsappBtn.onclick = () => window.open(whatsappUrl, '_blank');
    }
    
    if (contactBtn) {
        contactBtn.onclick = () => {
            closeProductModal();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            // Pre-fill contact form with product inquiry
            const messageField = document.getElementById('message');
            if (messageField) {
                messageField.value = `I'm interested in ${product.name} (${product.price}). Please provide more details about availability and delivery.`;
            }
        };
    }
    
    // Show modal with animation
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

// Close product modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Contact form handling
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const message = formData.get('message');

        // Basic validation
        if (!name || !phone || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }

        // Simulate form submission
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }, 1500);
    });
}

// Show notification
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 350px;
    `;

    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.5rem;
    `;

    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: auto;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Scroll indicator functionality
function setupScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const introSection = document.querySelector('.intro-section');
            if (introSection) {
                introSection.scrollIntoView({ behavior: 'smooth' });
            }
        });

        // Hide scroll indicator when user scrolls
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }
}

// Add ripple effect to buttons
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn, .filter-btn, .action-btn')) {
        const button = e.target;
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        // Add ripple animation keyframes if not already added
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        const rate = scrolled * -0.5;
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover sound effect (optional - can be enabled)
function addHoverSounds() {
    const hoverElements = document.querySelectorAll('.btn, .product-card, .highlight-card');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            // You can add audio feedback here if desired
            // const audio = new Audio('path/to/hover-sound.mp3');
            // audio.volume = 0.1;
            // audio.play();
        });
    });
}

// Performance optimization - lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if needed
// setupLazyLoading();

// Add custom cursor effect (optional)
function setupCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: var(--accent-orange);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        opacity: 0;
    `;
    
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        cursor.style.opacity = '0.7';
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });
}

// Uncomment to enable custom cursor
// setupCustomCursor();
