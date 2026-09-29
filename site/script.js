document.addEventListener('DOMContentLoaded', function() {
    // 1. Lógica do Menu Mobile (Hamburguer)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const icon = mobileMenuBtn ? mobileMenuBtn.querySelector('i') : null;

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            // Alterna a visibilidade do menu
            mobileMenu.classList.toggle('hidden');
            
            // Alterna o ícone entre 'bars' (hamburguer) e 'times' (X)
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Lógica do Formulário de Contato (Simulação de Envio)
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o recarregamento da página

            // Altera o texto do botão para dar feedback visual de carregamento
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;

            // Simula um tempo de resposta de servidor de 1.5 segundos
            setTimeout(() => {
                contactForm.style.display = 'none'; // Esconde o formulário
                successMessage.classList.remove('hidden'); // Exibe a mensagem de sucesso
            }, 1500);
        });
    }
});