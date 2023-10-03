import { Panel } from "components";
import s from "./Aside.module.css";

const Aside = ({ name }) => {
    return (
        <aside className={s.asideActive}>
            <div className={s.container}>
                <p>Selected Object:</p>
                <p className={s.name}>{name}</p>
            </div>
            <Panel />
        </aside>
    );
};

export default Aside;
