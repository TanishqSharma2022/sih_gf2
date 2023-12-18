// pages/api/recommendation.js

import { execSync } from 'child_process';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { searchWords } = req.body;

    try {
      // Execute the Python script and capture its output
      const output = execSync(`python @/public/job.py ${searchWords}`);

      // Process the output as needed
      const result = JSON.parse(output);
        if(res){
      res.status(200).json(result);
      console.log(result)
    }else{
        console.log(result)
    }
    } catch (error) {
      console.error('Error executing Python script:', error);
      if(res){
      res.status(500).json({ error: 'Error executing Python script' });}
    }
  } else {
    if(res){
    res.status(405).json({ error: 'Method not allowed' });
    }else{
        console.log("No response")
    }
  }
}
