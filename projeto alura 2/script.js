// script.js

// Função para ativar a animação de fade-in quando os elementos estão visíveis na tela
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.book-card, .author-card');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        // Se o elemento estiver visível na tela, aplica o fade-in
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Função para animar os cards ao passar o mouse
function addHoverEffect() {
    const bookCards = document.querySelectorAll('.book-card');
    const authorCard = document.querySelector('.author-card');

    // Efeito de hover nos cards de livros
    bookCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05) translateY(-10px)';
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1) translateY(0)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });

    // Efeito de hover no card do autor
    if (authorCard) {
        authorCard.addEventListener('mouseenter', () => {
            authorCard.style.transform = 'scale(1.05) translateY(-10px)';
            authorCard.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            authorCard.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });

        authorCard.addEventListener('mouseleave', () => {
            authorCard.style.transform = 'scale(1) translateY(0)';
            authorCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    }
}

// Função para inicializar as animações
function initAnimations() {
    fadeInOnScroll();  // Ativa a animação de fade-in
    addHoverEffect();   // Ativa o efeito de hover
}

// Chama a função `initAnimations` quando o conteúdo for carregado
document.addEventListener('DOMContentLoaded', initAnimations);

// Chama a função `fadeInOnScroll` sempre que o usuário rolar a página
window.addEventListener('scroll', fadeInOnScroll);
