// Packages
import {type Request, type Response} from 'express';
import { StatusCodes } from 'http-status-codes';

// Files
import pool from '../db/index.ts';

// Create | Post
export const groupMembersPostController = async (req: Request, res: Response) => {
  try {
    const { user_id, group_id, role } = req.body;
    const [result]: any = await pool.query(
      'INSERT INTO tb_group_members (user_id, group_id, role) VALUES (?, ?, ?)',
      [user_id, group_id, role]
    );

    res.status(StatusCodes.CREATED).json({
      message   : 'Member added successfully',
      memberId   : result.insertId
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error     : (error as Error).message
    });
  }
};

// Read | Get
export const groupMembersGetController = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, user_id, group_id, role FROM tb_group_members'
    );
    res.status(StatusCodes.OK).json(rows);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: (error as Error).message
    });
  }
};

// Update | Put
export const groupMembersPutController = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.body;
    const { role } = req.body;
    const [result]: any = await pool.query(
      'UPDATE tb_group_members SET role = ? WHERE user_id = ?',
      [role, user_id]
    );

    if (result.affectedRows === 0) {
      res.status(StatusCodes.NOT_FOUND).json({error: 'Role not found'});
      return;
    }

    res.status(StatusCodes.OK).json({message: 'Role changed successfully'});
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: (error as Error).message
    });
  }
};

// Delete | Delete
export const groupMembersDeleteController = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const [result]: any = await pool.query(
      'DELETE FROM tb_group_members WHERE user_id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      res.status(StatusCodes.NOT_FOUND).json({error: 'Member not found'});
      return;
    } 

    res.json({message: 'Member kicked successfully'});
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error     : (error as Error).message
    });
  }
};