import Contact from '../models/Contact.js';

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving message', error: err.message });
  }
};
