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

            <div className={s.text}>
                <p>
                    Camera rotation: mouse movement while holding down the left mouse button or the
                    “Q”, “E”, “P”, “F” keys.
                </p>
                <p>
                    Camera movement: mouse movement while holding down the right mouse button or the
                    “W”, “A”, “S”, “D” keys.
                </p>
                <p>Zoom: mouse wheel and "Left Ctrl", "Left Shift" keys.</p>
            </div>
        </aside>
    );
};

export default Aside;
