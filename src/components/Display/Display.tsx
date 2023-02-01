interface DisplayProps {
  url: string;
}

export const Display = ({ url }: DisplayProps) => {
  return (
    <img src={`img/${url}`} className="gif" alt="" height="200" width="250" />
  );
};

export default Display;
