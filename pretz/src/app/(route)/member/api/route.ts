import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

// Example encryption and decryption functions
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // 32 bytes for AES-256
const iv = crypto.randomBytes(16); // Initialization vector

  function encrypt(text: string) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }
  
  function decrypt(encrypted: string) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
    try {
   
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST']);
      return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }

    const data = req.body;
    const { username, email, password } = data;

    // Add your signup logic here (e.g., save to database)

    return res.status(200).json({ message: 'Signup successful!' });
  } catch (error) {
    console.error('Signup failed', error);
    return res.status(500).json({ message: 'Signup failed', error });
  }
}