// Navigation functions
function showLogin() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('register-form').classList.remove('active');
    document.querySelectorAll('.tab-btn')[0].classList.add('active');
    document.querySelectorAll('.tab-btn')[1].classList.remove('active');
}

function showRegister() {
    document.getElementById('register-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
    document.querySelectorAll('.tab-btn')[1].classList.add('active');
    document.querySelectorAll('.tab-btn')[0].classList.remove('active');
}

function goToDashboard() {
    event.preventDefault();
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('dashboard-screen').classList.add('active');
    showSection('dashboard');
}

function logout() {
    document.getElementById('dashboard-screen').classList.remove('active');
    document.getElementById('login-screen').classList.add('active');
    showLogin();
}

function showSection(sectionName) {
    // Hide all content sections
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName + '-content');
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update page title
    const titles = {
        'dashboard': 'Dashboard',
        'add-property': 'Añadir Propiedad',
        'list-properties': 'Lista de Propiedades',
        'add-tenant': 'Añadir Inquilino',
        'list-tenants': 'Lista de Inquilinos',
        'contracts': 'Gestión de Contratos',
        'payments': 'Gestión de Pagos',
        'reports': 'Reportes y Estadísticas'
    };
    
    const pageTitle = document.getElementById('page-title');
    if (pageTitle && titles[sectionName]) {
        pageTitle.textContent = titles[sectionName];
    }
    
    // Update active nav item
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === sectionName) {
            item.classList.add('active');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    showLogin();
    
    // Add click handlers to nav items
    const navItems = document.querySelectorAll('.nav-item[data-section]');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionName = this.dataset.section;
            showSection(sectionName);
        });
    });
    
    // Add form submit handlers (for prototype purposes)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Formulario enviado - Solo prototipo');
        });
    });
    
    // Add action button handlers
    document.addEventListener('click', function(e) {
        if (e.target.closest('.btn-action')) {
            e.preventDefault();
            alert('Acción simulada - Solo prototipo');
        }
    });
});