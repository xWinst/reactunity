import s from "./ProgressBar.module.css";

const ProgressBar = ({ percent }) => {
    const circumference = 140 * 2 * Math.PI;
    const offset = circumference - (percent / 100) * circumference;

    return (
        <div className={s.progressbar}>
            <svg width={320} height={320}>
                <circle
                    className={s.circle}
                    stroke="#0000ff"
                    strokeWidth={30}
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={offset}
                    cx={160}
                    cy={160}
                    r={140}
                    fill="transparent"
                />

                <circle
                    stroke="#0000ff"
                    strokeWidth={3}
                    cx={160}
                    cy={160}
                    r={155}
                    fill="transparent"
                />

                <circle
                    stroke="#0000ff"
                    strokeWidth={3}
                    cx={160}
                    cy={160}
                    r={125}
                    fill="transparent"
                />
            </svg>
            {/* <p>Loading...</p> */}
            <p className={s.text}>
                Loading...
                <br /> {percent}%
            </p>
        </div>
    );
};

export default ProgressBar;
