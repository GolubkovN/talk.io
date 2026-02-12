import type { NextFunction, Request, Response } from "express";
import type { AuthRequest } from "../middlewares/auth";
import { User } from "../models/User";

export const getUsersController = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const q = String(req.query.q ?? '').trim();
    const myClerkId = String(req.userId ?? '').trim();
    if (q.length < 1) return res.json([]);
    const users = await User.aggregate([
      {
        $search: {
          index: 'default',
          compound: {
            should: [
              { autocomplete: { query: q, path: 'name', fuzzy: { maxEdits: 1, prefixLength: 2 }, tokenOrder: 'any' } },
              { autocomplete: { query: q, path: 'username', fuzzy: { maxEdits: 1, prefixLength: 2 }, tokenOrder: 'any' } },
            ],
            minimumShouldMatch: 1,
            ...(myClerkId ? { mustNot: [{ equals: { path: 'clerkId', value: myClerkId } }] } : {})
          }
        }
      },
      { $limit: 20 },
      // { $project: { _id: 0, clerkId: 1, name: 1, username: 1, avatar: 1, email: 1 } }
    ]);
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error in getUserController", error);
    res.status(500);
    next(error);
  }
}