// pages/api/recommendation.js
import { spawn } from 'child_process';
import { promisify } from 'util';

const asyncSpawn = promisify(spawn);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Extract search words from the request body
    //   const { searchWords } = req.body;
        const searchWords = "petroleum";
      // Execute the Python script
      const process = await asyncSpawn('python', ['/job.py', searchWords]);
      const output = process.stdout.toString();
console.log(output)
      // Parse the output (assuming it's JSON)
      const recommendations = JSON.parse(output);
      console.log(recommendations);

      // Respond with recommendations
    //   res.status(200).json({ recommendations });
    res.json({message: output})
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
