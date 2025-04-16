

function sendNotification(alertType) {
    const messageContainer = document.getElementById('notification-message');
    if (!messageContainer) {
        console.error('O elemento com ID "notification-message" não foi encontrado.');
        return;
    }

    // Define o texto da mensagem
    messageContainer.textContent = `Notificação enviada: ${alertType}`;
    messageContainer.style.display = 'block'; // Torna visível
    messageContainer.style.height = 'auto'; // Ajusta dinamicamente a altura, se necessário

    // Oculta a mensagem após 3 segundos
    setTimeout(() => {
        messageContainer.style.display = 'none'; // Volta ao estado inicial
    }, 3000); // 3 segundos
}

async function sendGameAlert(alertType) {
    const response = await fetch('/api/send-game-alert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ alertType }),
    });

    if (response.ok) {
        sendNotification(alertType);
    } else {
        console.error('Erro ao enviar o alerta do jogo:', response.statusText);
    }
} 

document.addEventListener('DOMContentLoaded', () => {
    const riskImages = document.querySelectorAll('.risk-image');

    // Itera por todas as imagens e define o background
    riskImages.forEach((image) => {
        const bgUrl = image.getAttribute('data-bg');
        if (bgUrl) {
            image.style.backgroundImage = `url('${bgUrl}')`;
            image.style.backgroundSize = 'cover';
            image.style.backgroundPosition = 'center';
        }
    });
});
