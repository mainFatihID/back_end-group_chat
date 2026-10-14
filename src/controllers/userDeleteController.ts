import { type Request, type Response } from "express";
import pool from "../db/index.ts";

export const userDelete = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const [result]: any = await pool.query(
      'DELETE FROM tb_users WHERE user_id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({error: 'User not faund'});
      return;
    } 

    res.json({message: 'User deleted successfully'});
  } catch (error) {
    res.status(500).json({
      error     : (error as Error).message
    });
  }
}