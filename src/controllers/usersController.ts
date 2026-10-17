// Packages
import {type Request, type Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

// Files
import pool from '../db/index.ts';

// Create | Post
// Register
export const usersRegisterPostController = async (req: Request, res: Response) => {
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

// Login
export const usersLoginPostController = async (req: Request, res: Response) => {
  try {
    const identifier = req.body?.email || req.body?.username || req.body?.identifier;
    const password_hash = req.body?.password_hash;

    if (!identifier || !password_hash) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Login failed! Email or username and password must be entered'
      });
    }

    const [users] : any = await pool.execute(
      'SELECT * FROM tb_users WHERE email = ? OR username = ?',
      [identifier, identifier]
    );

    if (!users || users.length === 0) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'Incorrect Email or Password'
      });
    }

    const user = users[0];

    if (user.password_hash != password_hash) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'Incorrect password'
      });
    }

    const token = jwt.sign(
      { id: user.id, email: users[0].email, username: users[0].username },
      process.env.JWT_SECRET || 'super-secret',
      { expiresIn: '5m' }
    )

    return res.status(StatusCodes.OK).json({
      message: 'User login successfully',
      token: token
    })
  } catch (error) {
    console.error(error)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Uh, sorry! The internal server is experiencing an issue or error.'
    });
  }
};

// Read | Get
export const usersGetController = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT id, username, email, created_at FROM tb_users');
    
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
      'UPDATE tb_users SET username = ? WHERE id = ?',
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
      'DELETE FROM tb_users WHERE id = ?',
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