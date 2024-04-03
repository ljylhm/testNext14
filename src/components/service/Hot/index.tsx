"use server"
import { NextApiRequest } from "next";
import Style from "./index.module.css";
import { Suspense } from "react";

interface INewsItem {
    title: string
    id: number
}

interface IPostData {
    data: {
        news_list: INewsItem[]
    }
}

const Hot = async () => {    

    let postData: INewsItem[] = [] 
    try {
        const response = await fetch('https://testplatform.smm.cn/newsprocenter/v1/get_top_news_list?page=1&page_size=10');
        if (!response.ok) {
            throw new Error('网络请求错误');
        }
        postData = (await response.json() as IPostData).data.news_list;
    } catch (error) {
        console.error("获取新闻列表失败:", error);
    }

    return <div className={Style.container}>
        {
            postData.map(item => {
                return <div key={item.id} className={Style.item}>{item.title}123</div>
            })
        }
    </div>
}

export default Hot
