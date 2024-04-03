import { IncomingForm } from 'formidable';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next/types';

export const config = {
  api: {
    bodyParser: false, // 禁用Next.js默认的body解析
  },
};

export default function upload(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') {
    res.status(404).json({ message: "不支持的请求方法" });
    return;
  }

  const form = new IncomingForm({
    uploadDir: "./uploads", // 指定上传文件的保存目录
    keepExtensions: true // 保留文件扩展名
  });

  form.parse(req, async (err, fields, files) => {

    if (err) {
      res.status(500).json({ error: "文件上传过程中出现错误" });
      return;
    }

    if(files && files.file){
        // 假设我们只处理单个文件上传
        const file = files.file[0];
        await fs.rename(file.filepath, `./public/uploads/${file.originalFilename}`);
        res.status(200).json({ message: "文件上传成功" });
        return
    }
    res.status(200).json({ message: "不支持的文件类型" });


  });
}