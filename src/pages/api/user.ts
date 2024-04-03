import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next/types';

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const users = await prisma.users.findMany()
        res.status(200).json(users)
    } catch (error) {
        console.error("查询用户数据失败:", error)
        res.status(500).json({ error: "查询用户数据失败" })
    }
}