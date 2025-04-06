  // Menu Mobile
  document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.desktop-menu').classList.toggle('active');
});

// Filtro de Serviços
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active de todos os botões
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        // Adiciona active no botão clicado
        this.classList.add('active');
        
        // Filtra os cards
        const filter = this.dataset.filter;
        document.querySelectorAll('.service-card').forEach(card => {
            if (filter === 'todos' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});