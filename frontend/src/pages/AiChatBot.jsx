import React from 'react';
import "../styles/aiChatBot.css";
const OpenBotChatButton = () => {
  const openBotChat = () => {
    window.open('https://mediafiles.botpress.cloud/9b2d12e9-3885-4dcd-91c9-d7fd3fb9c2e9/webchat/bot.html', '_blank');
  };

  return (
    <button className="btn1" onClick={openBotChat}>
      Open Chat Bot
    </button>
  );
};

export default OpenBotChatButton;
