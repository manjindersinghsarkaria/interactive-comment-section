import SlIconButton from "@shoelace-style/shoelace/dist/react/icon-button/index.js";
import PropTypes from "prop-types";
function ScoreButton(props) {
  return (
    <div className="col-span-1 flex justify-between items-center sm:flex-col xs:flex-row rounded-lg bg-gray-100 xs:w-32 sm:w-8 max-h-[90px] xs:order-none sm:order-1">
      <SlIconButton name="plus-lg" label="Settings"></SlIconButton>
      <div className="font-medium text-blue-600">{props.score}</div>
      <SlIconButton name="dash-lg" label="Settings"></SlIconButton>
    </div>
  );
}
ScoreButton.propTypes = {
  score: PropTypes.number.isRequired
};
export default ScoreButton;
