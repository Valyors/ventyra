// app/components/ChatbotWidget.tsx
import { useState, useEffect, FormEvent } from 'react';
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion

type ChatMessage = {
  text: string;
  sender: 'user' | 'bot';
};

interface ChatWidgetConfig {
  webhook: {
    url: string;
    route: string;
  };
  branding: {
    logo: string;
    name: string;
    welcomeText: string;
    responseTimeText: string;
  };
  style: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    fontColor: string;
  };
}

const chatWidgetConfig: ChatWidgetConfig = {
  webhook: {
    url: 'https://theopremartin.app.n8n.cloud/webhook/7548a268-396c-450f-9e76-2bb914a43eff/chat',
    route: 'general',
  },
  branding: {
    logo: '/ventyra-logo.png',
    name: 'Ventyra',
    welcomeText: 'Bonjour 👋, comment pouvons-nous vous aider ?',
    responseTimeText: 'Réponse rapide',
  },
  style: {
    primaryColor: 'bg-[#47CC88]',
    secondaryColor: 'bg-[#032720]',
    backgroundColor: 'bg-white',
    fontColor: 'text-[#9EA3BF]',
  },
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    setMessages([{ text: chatWidgetConfig.branding.welcomeText, sender: 'bot' }]);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = { text: input.trim(), sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const response = await fetch(chatWidgetConfig.webhook.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text, route: chatWidgetConfig.webhook.route }),
      });
      const data = await response.json();
      const reply = data.reply ? data.reply : "Désolé, je n'ai pas de réponse.";
      setMessages(prev => [...prev, { text: reply, sender: 'bot' }]);
    } catch (error) {
      console.error('Erreur:', error);
      setMessages(prev => [...prev, { text: "Une erreur est survenue.", sender: 'bot' }]);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-5 right-5 flex flex-col rounded-2xl shadow-lg w-72 bg-white text-[#9EA3BF]">
          {/* En-tête */}
          <div className="flex justify-between items-center p-3 rounded-t-2xl bg-white border-b border-gray-300">
            <div className="flex items-center space-x-2">
              <img src={chatWidgetConfig.branding.logo} alt="Logo Ventyra" className="w-6 h-6" />
              <span className="font-semibold text-[#47CC88]">{chatWidgetConfig.branding.name}</span>
            </div>
            <button onClick={handleToggle} className="text-gray-600 text-2xl">
              <FaTimes />
            </button>
          </div>

          {/* Zone des messages */}
          <div className="p-3 overflow-y-auto bg-gray-50" style={{ height: '400px' }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${msg.sender === 'user' ? 'bg-gray-200 text-right' : 'bg-[#47CC88] text-white text-left'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Formulaire de saisie */}
          <form onSubmit={handleSubmit} className="flex border-t border-gray-300 rounded-b-2xl">
            <input
              type="text"
              className="flex-1 p-2 outline-none rounded-bl-2xl"
              placeholder="Votre message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
            <button type="submit" className="p-2 text-white bg-[#032720] rounded-br-2xl">
              Envoyer
            </button>
          </form>
        </div>
      )}

      {!isOpen && (
        <motion.button
          onClick={handleToggle}
          className="fixed bottom-5 right-5 rounded-full w-12 h-12 flex items-center justify-center bg-white shadow-lg"
          animate={{ y: [0, -10, 0] }} // Animation de rebond
          transition={{ repeat: Infinity, repeatType: "loop", duration: 1.5, ease: "easeInOut" }} // Répétition infinie
        >
          <img src="chatbot.svg" alt="Chatbot" className="w-6 h-6" />
        </motion.button>
      )}
    </>
  );
};

export default ChatbotWidget;
