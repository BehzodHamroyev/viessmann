import Fade from 'react-reveal/Fade';
 const ShadowCard = (props) => {
    console.log("salom");
  return (
    <Fade right>
      <div className="shadow p-3">
        <div className="topTitle">{props.data.topTitle}</div>
        <div className="title fw-bold fs-4 my-2">{props.data.title}</div>
        <div className="subTitle text-danger">
          {props.data.icon}
          <a href={`${props.data.link}`} className="ms-2">
            {`${props.data.linkTitle}`}
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default ShadowCard;
