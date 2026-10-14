import { type Request, type Response } from "express";
import pool from "../db/index.ts";

export const userPut = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const {username} = req.body;
    const [result]: any = await pool.query(
      'UPDATE tb_users SET username = ? WHERE user_id = ?',
      [username, id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({error: 'User not faund'});
      return;
    } 

    res.json({message: 'User updated successfully'});
  } catch (error) {
    res.status(500).json({
      error     : (error as Error).message
    });
  }
}