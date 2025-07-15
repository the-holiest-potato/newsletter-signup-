  const form = document.querySelector('form');
  const emailInput = document.getElementById('email');
  const successMessage = document.getElementById('success-message');
  const errorMsg = document.getElementById('error-msg');
  const container = document.getElementById('container');
  const userEmailSpan = document.getElementById('user-email');
  const dismissBtn = document.getElementById('subs');

  form.addEventListener('submit', function(e){
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
      emailInput.classList.add('error');
      errorMsg.classList.remove('hidden');
      errorMsg.textContent = 'Valid email required';
      return;
    }

   
    userEmailSpan.textContent = email;
    container.classList.add('hidden');
    successMessage.classList.remove('hidden');
  });

  dismissBtn.addEventListener('click', () => {
        successMessage.classList.add('hidden');
    container.classList.remove('hidden');

      emailInput.value = '';
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
;
