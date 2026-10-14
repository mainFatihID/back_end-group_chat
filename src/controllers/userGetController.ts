import {type Request, type Response} from 'express';
import pool from '../db/index.ts';

export const userGet = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT user_id, username, email, created_at FROM tb_users');
    
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      error     : (error as Error).message
    });
  }
}