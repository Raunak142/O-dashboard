// Initialize Charts
document.addEventListener('DOMContentLoaded', function() {
    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue',
                data: [30000, 45000, 35000, 50000, 49000, 60000],
                borderColor: '#2962ff',
                backgroundColor: 'rgba(41, 98, 255, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Revenue'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });

    // Orders Chart
    const ordersCtx = document.getElementById('ordersChart').getContext('2d');
    const ordersChart = new Chart(ordersCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Orders',
                data: [250, 320, 280, 400, 380, 450],
                backgroundColor: '#82b1ff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Orders'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Add animation to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Time range filter functionality
    document.getElementById('timeRange').addEventListener('change', function(e) {
        updateDashboard(e.target.value);
    });
});

// Function to update dashboard data based on selected time range
function updateDashboard(timeRange) {
    // Sample data for different time ranges
    const data = {
        today: {
            revenue: '$12,456',
            orders: '143',
            customers: '26',
            conversion: '2.1%'
        },
        week: {
            revenue: '$52,789',
            orders: '524',
            customers: '89',
            conversion: '2.3%'
        },
        month: {
            revenue: '$124,563',
            orders: '1,243',
            customers: '156',
            conversion: '2.4%'
        },
        year: {
            revenue: '$1,458,923',
            orders: '15,243',
            customers: '2,156',
            conversion: '2.6%'
        }
    };

    // Update card values with animation
    const updateValue = (element, value) => {
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = 'fadeIn 0.5s ease-out';
        element.textContent = value;
    };

    updateValue(document.querySelector('.revenue .number'), data[timeRange].revenue);
    updateValue(document.querySelector('.orders .number'), data[timeRange].orders);
    updateValue(document.querySelector('.customers .number'), data[timeRange].customers);
    updateValue(document.querySelector('.conversion .number'), data[timeRange].conversion);
}

// Add hover effects to cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});