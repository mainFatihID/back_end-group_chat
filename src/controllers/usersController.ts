import {type Request, type Response} from 'express';
import pool from '../db/index.ts';

export const usersPostController = async (req: Request, res: Response) => {
  try {
    const {username, email, password_hash} = req.body;
    const [result]: any = await pool.query (
      'INSERT INTO tb_users (username, email, password_hash) VALUES (?, ?, ?)',
      [username, email, password_hash]
    );

    res.status(201).json({
      message   : 'User created successfully',
      userId    : result.insertId
    });

  } catch (error) {
    res.status(500).json({
      error     : (error as Error).message
    });
  }
}

export const usersPostController = async (req: Request, res: Response) => {
  
}