// Variables globales
let timerInterval;
let secondsRemaining = 600; // 10 minutos

// Función para formatear el tiempo
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Iniciar temporizador
function startTimer() {
    const timerElement = document.getElementById('timer');
    timerInterval = setInterval(() => {
        secondsRemaining--;
        timerElement.textContent = formatTime(secondsRemaining);
        
        if (secondsRemaining <= 0) {
            clearInterval(timerInterval);
            showErrorModal('Tu tiempo de reserva ha expirado. Por favor, vuelve a agregar los productos al carrito.');
        }
    }, 1000);
}

// Funciones para los modales
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function showErrorModal(message) {
    document.getElementById('error-message').textContent = message;
    showModal('error-modal');
}

// Validación de tarjeta de crédito
function validateCreditCardNumber(cardNumber) {
    // Eliminar espacios y guiones
    cardNumber = cardNumber.replace(/\s+/g, '').replace(/-/g, '');
    
    // Verificar que solo contiene dígitos y tiene la longitud correcta
    if (!/^\d{13,19}$/.test(cardNumber)) {
        return false;
    }
    
    // Algoritmo de Luhn (mod 10)
    let sum = 0;
    let doubleUp = false;
    
    // Empezar desde el último dígito y avanzar hacia atrás
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i));
        
        if (doubleUp) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        
        sum += digit;
        doubleUp = !doubleUp;
    }
    
    // Si la suma es múltiplo de 10, la tarjeta es válida según Luhn
    return sum % 10 === 0;
}

// Validación de fecha de expiración
function validateExpiryDate(expiryDate) {
    // Formato esperado: MM/YY
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        return false;
    }
    
    const parts = expiryDate.split('/');
    const month = parseInt(parts[0], 10);
    let year = parseInt(parts[1], 10) + 2000; // Convertir de YY a YYYY
    
    // Verificar que el mes está entre 1 y 12
    if (month < 1 || month > 12) {
        return false;
    }
    
    // Obtener fecha actual
    const now = new Date();
    const currentMonth = now.getMonth() + 1; // getMonth() es 0-indexed
    const currentYear = now.getFullYear();
    
    // Verificar que la fecha no está expirada
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
        return false;
    }
    
    return true;
}

// Validación del CVC
function validateCVC(cvc) {
    // CVC debe ser un número de 3 o 4 dígitos
    return /^\d{3,4}$/.test(cvc);
}

// Validación de correo electrónico
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validación de código postal
function validatePostalCode(postalCode, country) {
    // Diferentes países tienen diferentes formatos de código postal
    switch(country) {
        case 'ES': // España
            return /^\d{5}$/.test(postalCode);
        case 'MX': // México
            return /^\d{5}$/.test(postalCode);
        default:
            // Validación genérica para otros países
            return /^[a-zA-Z0-9\s-]{3,10}$/.test(postalCode);
    }
}

// Función para mostrar mensajes de error
function showError(fieldId, show) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    const inputElement = document.getElementById(fieldId);
    
    if (show) {
        errorElement.style.display = 'block';
        inputElement.classList.add('input-error');
    } else {
        errorElement.style.display = 'none';
        inputElement.classList.remove('input-error');
    }
}

// Formatear número de tarjeta mientras se escribe
function formatCardNumber(input) {
    // Eliminar todos los espacios
    let value = input.value.replace(/\s+/g, '');
    // Agregar un espacio cada 4 caracteres
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    input.value = value;
}

// Formatear fecha de expiración mientras se escribe
function formatExpiryDate(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    
    input.value = value;
}

// Manejar la navegación entre campos de OTP
function setupOTPInputs() {
    const otpInputs = document.querySelectorAll('.otp-input');
    
    otpInputs.forEach((input, index) => {
        // Permitir solo dígitos
        input.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '');
            
            // Avanzar al siguiente campo después de ingresar un dígito
            if (this.value && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        });
        
        // Permitir retroceder con la tecla de borrado
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && !this.value && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
    });
}

// Implementar sistema anti-fraude
function performFraudCheck() {
    // Simulación de verificación de riesgo
    const riskFactors = [
        document.getElementById('card-number').value.startsWith('1234'), // Número sospechoso
        document.getElementById('email').value.includes('tempmail'), // Dominio de correo temporal
        Math.random() < 0.1 // Probabilidad aleatoria para demostración
    ];
    
    const riskScore = riskFactors.filter(Boolean).length;
    
    // Si hay factores de riesgo, solicitar verificación adicional
    return riskScore > 0;
}

// Encriptar datos sensibles (simulación)
function encryptData(data) {
    // En un sistema real, usaríamos una biblioteca de encriptación como CryptoJS
    // Esta es solo una simulación para ilustrar el concepto
    return btoa(JSON.stringify(data)); // Base64 encoding
}

// Función principal para procesar el pago
function processPayment(formData) {
    // Simulamos una petición a un servidor de procesamiento de pagos
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulamos diferentes resultados de la transacción
            const randomResult = Math.random();
            
            if (randomResult < 0.1) {
                // Error de tarjeta rechazada
                reject({
                    code: 'card_declined',
                    message: 'La tarjeta ha sido rechazada. Por favor, contacta con tu banco o usa otro método de pago.'
                });
            } else if (randomResult < 0.2) {
                // Error de fondos insuficientes
                reject({
                    code: 'insufficient_funds',
                    message: 'Fondos insuficientes en la tarjeta. Por favor, usa otro método de pago.'
                });
            } else if (randomResult < 0.3) {
                // Error general de procesamiento
                reject({
                    code: 'processing_error',
                    message: 'Error al procesar el pago. Por favor, inténtalo de nuevo más tarde.'
                });
            } else {
                // Transacción exitosa
                resolve({
                    success: true,
                    transactionId: 'TX' + Math.floor(Math.random() * 1000000000),
                    timestamp: new Date().toISOString()
                });
            }
        }, 2000); // Simular tiempo de procesamiento
    });
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Iniciar temporizador
    startTimer();
    
    // Configurar inputs de OTP
    setupOTPInputs();
    
    // Formatear número de tarjeta mientras se escribe
    const cardNumberInput = document.getElementById('card-number');
    cardNumberInput.addEventListener('input', function() {
        formatCardNumber(this);
    });
    
    // Formatear fecha de expiración mientras se escribe
    const expiryInput = document.getElementById('card-expiry');
    expiryInput.addEventListener('input', function() {
        formatExpiryDate(this);
    });
    
    // Gestionar los métodos de pago
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            // Eliminar clase activa de todos los métodos
            paymentMethods.forEach(m => m.classList.remove('active'));
            // Agregar clase activa al método seleccionado
            this.classList.add('active');
            
            // Si se selecciona un método diferente a tarjeta, mostrar mensaje
            if (this.dataset.method !== 'card') {
                alert('Lo sentimos, actualmente solo está disponible el pago con tarjeta de crédito.');
                // Revertir a tarjeta
                paymentMethods.forEach(m => {
                    m.classList.remove('active');
                    if (m.dataset.method === 'card') {
                        m.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Reenviar código OTP
    document.getElementById('resend-code').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Se ha enviado un nuevo código a tu teléfono.');
    });
    
    // Verificar código OTP
    document.getElementById('verify-otp').addEventListener('click', function() {
        // Recopilar dígitos OTP
        let otpValue = '';
        const otpInputs = document.querySelectorAll('.otp-input');
        otpInputs.forEach(input => {
            otpValue += input.value;
        });
        
        // Verificar que todos los dígitos estén completos
        if (otpValue.length !== 6) {
            alert('Por favor, introduce el código completo de 6 dígitos.');
            return;
        }
        
        // Simular verificación exitosa (en producción haría una llamada al servidor)
        closeModal('otp-modal');
        showModal('success-modal');
    });
    
    // Manejar envío del formulario de pago
    document.getElementById('payment-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar todos los campos antes de enviar
        let isValid = true;
        
        // Validar nombre del titular
        const cardholderName = document.getElementById('cardholder').value.trim();
        if (cardholderName.length < 3) {
            showError('cardholder', true);
            isValid = false;
        } else {
            showError('cardholder', false);
        }
        
        // Validar email
        const email = document.getElementById('email').value.trim();
        if (!validateEmail(email)) {
            showError('email', true);
            isValid = false;
        } else {
            showError('email', false);
        }
        
        // Validar número de tarjeta
        const cardNumber = document.getElementById('card-number').value.replace(/\s+/g, '');
        if (!validateCreditCardNumber(cardNumber)) {
            showError('card-number', true);
            isValid = false;
        } else {
            showError('card-number', false);
        }
        
        // Validar fecha de expiración
        const expiryDate = document.getElementById('card-expiry').value;
        if (!validateExpiryDate(expiryDate)) {
            showError('expiry', true);
            isValid = false;
        } else {
            showError('expiry', false);
        }
        
        // Validar CVC
        const cvc = document.getElementById('card-cvc').value;
        if (!validateCVC(cvc)) {
            showError('cvc', true);
            isValid = false;
        } else {
            showError('cvc', false);
        }
        
        // Validar dirección
        const address = document.getElementById('billing-address').value.trim();
        if (address.length < 5) {
            showError('address', true);
            isValid = false;
        } else {
            showError('address', false);
        }
        
        // Validar ciudad
        const city = document.getElementById('city').value.trim();
        if (city.length < 2) {
            showError('city', true);
            isValid = false;
        } else {
            showError('city', false);
        }
        
        // Validar código postal
        const postalCode = document.getElementById('postal-code').value.trim();
        const country = document.getElementById('country').value;
        if (!country || !validatePostalCode(postalCode, country)) {
            showError('postal-code', true);
            isValid = false;
        } else {
            showError('postal-code', false);
        }
        
        // Validar país
        if (!country) {
            showError('country', true);
            isValid = false;
        } else {
            showError('country', false);
        }
        
        // Validar términos y verificación de edad
        if (!document.getElementById('terms').checked) {
            showError('terms', true);
            isValid = false;
        } else {
            showError('terms', false);
        }
        
        if (!document.getElementById('age-verification').checked) {
            showError('age', true);
            isValid = false;
        } else {
            showError('age', false);
        }
        
        // Si hay errores, detener el proceso
        if (!isValid) {
            return;
        }
        
        // Deshabilitar el botón para evitar múltiples envíos
        const payButton = document.getElementById('pay-button');
        payButton.disabled = true;
        payButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';
        
        // Recopilar datos para procesamiento
        const paymentData = {
            cardholderName,
            email,
            cardNumber,
            expiryDate,
            cvc,
            address,
            city,
            postalCode,
            country,
            amount: 120.98,
            currency: 'EUR',
            items: [
                { id: 'COD-MW3', name: 'Call of Duty: Modern Warfare III', price: 59.99 },
                { id: 'BF-2042', name: 'Battlefield 2042', price: 39.99 }
            ]
        };
        
        // Encriptar datos sensibles
        const encryptedData = encryptData(paymentData);
        
        // Realizar verificación antifraude
        const requiresAdditionalVerification = performFraudCheck();
        
        // Procesar el pago
        processPayment(encryptedData)
            .then(response => {
                console.log('Transacción exitosa:', response);
                
                // Almacenar ID de transacción en localStorage (para demostración)
                localStorage.setItem('lastTransactionId', response.transactionId);
                
                // Si se requiere verificación adicional, mostrar OTP
                if (requiresAdditionalVerification) {
                    showModal('otp-modal');
                } else {
                    // Si no se requiere verificación, mostrar éxito directamente
                    showModal('success-modal');
                }
            })
            .catch(error => {
                console.error('Error en la transacción:', error);
                showErrorModal(error.message);
            })
            .finally(() => {
                // Rehabilitar el botón
                payButton.disabled = false;
                payButton.innerHTML = '<i class="fas fa-lock"></i> Pagar ahora €120.98';
            });
    });
});

// Sistema de detección de actividad sospechosa
(function() {
    let lastTypingTime = Date.now();
    let typingPattern = [];
    
    // Monitorear patrones de escritura
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('keydown', function(e) {
            const now = Date.now();
            const timeSinceLastType = now - lastTypingTime;
            
            // Almacenar intervalo de tiempo entre pulsaciones
            if (timeSinceLastType < 2000) { // Ignorar pausas largas
                typingPattern.push(timeSinceLastType);
            }
            
            lastTypingTime = now;
            
            // Analizar patrones de escritura (ejemplo: demasiado uniforme podría ser bot)
            if (typingPattern.length > 20) {
                const stdDev = calculateStandardDeviation(typingPattern);
                if (stdDev < 20) { // Patrón demasiado uniforme (posible bot)
                    console.warn('Posible comportamiento automatizado detectado');
                    // En una implementación real, se podría enviar esta información al servidor
                }
                // Reiniciar para el próximo análisis
                typingPattern = [];
            }
        });
    });
    
    // Función para calcular desviación estándar
    function calculateStandardDeviation(array) {
        const n = array.length;
        const mean = array.reduce((a, b) => a + b, 0) / n;
        const variance = array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b, 0) / n;
        return Math.sqrt(variance);
    }
    
    // Detectar navegación rápida entre campos (posible indicador de autocompletado malicioso)
    let lastFocusTime = Date.now();
    document.querySelectorAll('input, select').forEach(field => {
        field.addEventListener('focus', function() {
            const now = Date.now();
            const timeSinceLastFocus = now - lastFocusTime;
            
            if (timeSinceLastFocus < 50) { // Demasiado rápido para ser humano
                console.warn('Comportamiento sospechoso: navegación muy rápida entre campos');
                // En una implementación real, aumentar factor de riesgo
            }
            
            lastFocusTime = now;
        });
    });
    
    // Detectar copy/paste en campos sensibles
    document.querySelectorAll('#card-number, #card-cvc').forEach(field => {
        field.addEventListener('paste', function(e) {
            console.warn('Acción de pegado detectada en campo sensible');
            // En algunas implementaciones de seguridad se podría bloquear esta acción
            // e.preventDefault();
        });
    });
})();

// Verificación de integridad del formulario
(function() {
    // Verificar que el formulario no ha sido manipulado
    const formElements = document.getElementById('payment-form').elements;
    const originalFormState = Array.from(formElements).map(element => {
        return {
            id: element.id,
            type: element.type,
            required: element.required
        };
    });
    
    // Comprobar periódicamente que el formulario no ha sido manipulado
    setInterval(() => {
        const currentFormState = Array.from(formElements).map(element => {
            return {
                id: element.id,
                type: element.type,
                required: element.required
            };
        });
        
        // Verificar si ha habido cambios en la estructura
        const formChanged = JSON.stringify(originalFormState) !== JSON.stringify(currentFormState);
        
        if (formChanged) {
            console.error('Advertencia: Se ha detectado manipulación del formulario');
            // En una implementación real, se podría reiniciar el formulario o alertar al usuario
        }
    }, 5000);
})();

// Sistema de protección contra ataques XSS y CSRF
(function() {
    // Esta función simula la generación de un token CSRF que se enviaría con el formulario
    function generateCSRFToken() {
        return 'csrf_' + Math.random().toString(36).substr(2) + Date.now().toString(36);
    }
    
    // Simular verificación de token CSRF (en un sistema real, esto se haría en el servidor)
    const csrfToken = generateCSRFToken();
    
    // Agregar el token al formulario
    const csrfInput = document.createElement('input');
    csrfInput.type = 'hidden';
    csrfInput.name = 'csrf_token';
    csrfInput.value = csrfToken;
    document.getElementById('payment-form').appendChild(csrfInput);
    
    // Almacenar el token en localStorage para simulación
    localStorage.setItem('csrf_token', csrfToken);
    
    // Sanitización básica de entradas para prevenir XSS
    document.querySelectorAll('input[type="text"], input[type="email"]').forEach(input => {
        input.addEventListener('blur', function() {
            // Sanitizar entrada eliminando tags HTML y scripts
            this.value = this.value
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/script/gi, 'scrpt')
                .replace(/onerror/gi, 'on_error');
        });
    });
})();