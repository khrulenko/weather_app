interface WeatherIcon {
  iconId: string;
}

const WeatherIcon = ({ iconId }: WeatherIcon) => (
  <img
    src={`https://openweathermap.org/img/wn/${iconId}.png`}
    width="32px"
    height="32px"
  />
);
export default WeatherIcon;
