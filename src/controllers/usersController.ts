// Packages
import {type Request, type Response} from 'express';
import { StatusCodes } from 'http-status-codes';

// Files
import pool from '../db/index.ts';

// Create | Post
export const usersPostController = async (req: Request, res: Response) => {
  try {
    const {username, email, password_hash} = req.body;
    const [result]: any = await pool.query (
      'INSERT INTO tb_users (username, email, password_hash) VALUES (?, ?, ?)',
      [username, email, password_hash]
    );

    res.status(StatusCodes.CREATED).json({
      message   : 'User created successfully',
      userId    : result.insertId
    });

  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error     : (error as Error).message
    });
  }
};

// Read | Get
export const usersGetController = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT user_id, username, email, created_at FROM tb_users');
    
    res.json(rows);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error     : (error as Error).message
    });
  }
};

// Update | Put
export const usersPutController = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const {username} = req.body;
    const [result]: any = await pool.query(
      'UPDATE tb_users SET username = ? WHERE user_id = ?',
      [username, id]
    );

    if (result.affectedRows === 0) {
      res.status(StatusCodes.NOT_FOUND).json({error: 'User not found'});
      return;
    } 

    res.json({message: 'User updated successfully'});
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error     : (error as Error).message
    });
  }
};

// Delete | Delete
export const usersDeleteController = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const [result]: any = await pool.query(
      'DELETE FROM tb_users WHERE user_id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      res.status(StatusCodes.NOT_FOUND).json({error: 'User not found'});
      return;
    } 

    res.json({message: 'User deleted successfully'});
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error     : (error as Error).message
    });
  }
};