
export function ProgressCount({ percentage }) {
    return (
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        >{percentage}%</div>
      </div>
    );
  };
  
