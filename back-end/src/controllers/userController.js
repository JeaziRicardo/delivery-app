const userService = require('../services/userService');

const findByEmail = async (req, res) => {
  const { email } = req.body
  try {
    const result = await userService.findByEmail({ email })
    
  } catch (error) {
    return res.status(500).json({ message: 'Algum erro inesperado' });
  }
}