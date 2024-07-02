
import '../css/ShimmerLines.css'

const ShimmerLine = () => {
  return (
    <div className="shimmer">
      {Array(6)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-lines">
            {Array(4)
              .fill("")
              .map((e, index) => (
                <div
                  key={index}
                  className="shimmer-cards-line loading-animation"
                ></div>
              ))}
          </div>
        ))}
    </div>
  );
};

const ShimmerLines = ()=>{
    const obj = [{}, {}, {}, {}, {}, {}];
    return(
        <div>
           {obj.map((item)=>{
            return(
                <div className="lines_container">
                    <p className="lines"></p>
                    <p className="lines"></p>
                    <p className="lines"></p>
                    <p className="lines"></p>
                </div>
            )
           })}
        </div>
    )
}


export default ShimmerLines
