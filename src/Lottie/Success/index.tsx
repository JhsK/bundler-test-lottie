import Lottie from "react-lottie";

import config from "./config.json";

interface ISuccessLottieProps {
  width?: number;
  height?: number;
}

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: config,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function SuccessLottie({ width = 54, height = 54 }: ISuccessLottieProps) {
  return <Lottie options={defaultOptions} width={width} height={height} />;
}

export default SuccessLottie;
