const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname)); // serves chat.html and logo.png

// Chatbot logic
app.post("/message", (req, res) => {
  const userMessage = req.body.message.trim().toLowerCase();
  let reply = "";

  switch (userMessage) {
    case "1":
      reply = "💇‍♀️ Our Services:\n- Hair Treatments\n- Facials & Skin Care\n- Manicure & Pedicure\n- Makeup & Styling\n- Nail Art";
      break;
    case "2":
      reply = "🕒 Our Timings:\nWe are open daily from 10:00 AM to 8:00 PM.";
      break;
    case "3":
      reply = "💖 Current Deals:\n✨ Bridal Makeup Package — 25% OFF\n✨ Hair Protein Treatment + Cut — Rs. 8,500\n✨ Whitening Facial + Pedicure — Rs. 6,000";
      break;
    case "4":
      reply = "📍 Our Location:\nBlush & Blow Salon, Bahria Town Karachi, Precinct 1 (near main gate).";
      break;
    case "5":
      reply = "📞 Contact Us:\nCall: 0300-1234567\nInstagram: @blushandblow\nFacebook: Blush & Blow Salon";
      break;
    case "6":
      reply = "👋 Thank you for visiting Blush & Blow! Type 'menu' anytime to see options again.";
      break;
    case "menu":
      reply = "📋 Menu:\n1. Our Services\n2. Our Timings\n3. Current Deals\n4. Our Location\n5. Contact Us\n6. Exit\n\nPress any number to get details about it.";
      break;
    default:
      reply = "💅 Hello Beautiful! Please choose an option:\n1. Our Services\n2. Our Timings\n3. Current Deals\n4. Our Location\n5. Contact Us\n6. Exit";
  }

  res.json({ reply });
});

// Start the server
app.listen(3000, () => {
  console.log("💅 Blush & Blow Chatbot Server is running successfully!");
});
