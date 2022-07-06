export const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getAverageTemp = (min: number, max: number) => (max + min) / 2;

export const getIcon = (name: string, className: string): JSX.Element => {
  return (
    <span className={`material-symbols-outlined ${className}`}>{name}</span>
  );
};
