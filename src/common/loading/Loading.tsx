import './Loading.css';
import RobotIcon from '../../assets/loader/bot.svg';
import MapIcon from '../../assets/loader/map.svg';

interface LoadingProps{
    transparentOverlay?: boolean
}
const Loading = (props: LoadingProps) => {
    const {transparentOverlay} = props
  return (
    <div className='LoaderWrapper'>
          <div className={transparentOverlay ? "loaderOverlay" : "loaderOverlay whitebg"}>
            <div className="loader">
                <div className="mapIcon">
                    <MapIcon/>
                </div>
                <div className="botIcon">
                    <RobotIcon/>
                </div>
                <p>Please wait a bit...</p>
                <div className="revolvers">
                    <div className="revolver"></div>
                    <div className="revolver"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loading