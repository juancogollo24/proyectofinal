// Manejar el formulario de login/registro
// Almacenar datos en localStorage
// Redirigir al panel de usuario
// Cargar el chatbot
// Implementar la funcionalidad de pagos (simulada)
// Procesar solicitudes de crédito (simulada)
function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
  }

  const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Almacenar los datos en localStorage
  localStorage.setItem(username, JSON.stringify({
    username: username,
    password: password
  }));

  // Redirigir al panel de usuario
  window.location.href = 'panel.html';
});
function cerrarSesion() {
    // Eliminar los datos del usuario del localStorage
    localStorage.removeItem(username);
  
    // Redirigir a la página de inicio
    window.location.href = 'index.html';
  }