import type { NextApiRequest, NextApiResponse } from "next/types";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ 
        data: 123,
        message: 'Hello from Next.js!',
        code: 200
    });
}