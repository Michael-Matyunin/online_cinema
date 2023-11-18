document.addEventListener('DOMContentLoaded', function() {
    const authBtn = document.querySelector('.auth-btn');
    const registerBtn = document.querySelector('.register-btn');
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');

    authBtn.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.classList.toggle('hidden');
        registerForm.classList.add('hidden');
    });

    registerBtn.addEventListener('click', function(event) {
        event.preventDefault();
        registerForm.classList.toggle('hidden');
        loginForm.classList.add('hidden');
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const animatedHeader = document.querySelector('.animated-header');

  // Анимация заголовка при появлении на экране
  const fadeIn = () => {
    animatedHeader.style.opacity = '1';
    animatedHeader.style.transform = 'translateY(0)';
  };

  setTimeout(fadeIn, 500);
});

