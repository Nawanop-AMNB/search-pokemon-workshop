export type RoundImageProps = {
  url: string;
  background: string;
  width: number | string;
  height: number | string;
};

function RoundImage(props: RoundImageProps) {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        background: props.background,
      }}
      className={`motion-safe:animate-bounce relative rounded-full`}
    >
      <img
        src={props.url}
        className={
          'absolute h-2/3 w-2/3 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'
        }
        width={props.width}
        height={props.height}
      />
    </div>
  );
}

export default RoundImage;
