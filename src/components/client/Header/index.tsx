import { Input } from "antd";
import Style from "./index.module.scss";
import NavUser from "./NavUser";

const Header = () => {
    return <div className={Style.container}>
        <div className={Style.icon} />
        <Input className={Style.search} placeholder="请输入关键词" />
        <NavUser />
    </div>
}

export default Header