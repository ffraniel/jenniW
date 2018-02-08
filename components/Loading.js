
const Loading = (props) => (
    <div className="spinner">
        <style jsx >{`
            @keyframes spinner {
                to {transform: rotate(360deg);}
              }
            
              .spinner:before {
                content: '';
                box-sizing: border-box;
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100px;
                height: 100px;
                margin-top: -10px;
                margin-left: -10px;
                border-radius: 50%;
                border: 4px solid #ccc;
                border-top-color: #333;
                animation: spinner .6s linear infinite;
              }
                `}  
        </style>
    </div>
)

export default Loading;


  