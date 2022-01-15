const Image = ({ image }: { image?: any }) =>
  image ? (
    <div className="w-full lg:h-[512px]">
      <img
        className="object-cover w-full max-h-image"
        src={`${image.file?.url}?fm=jpg&w=1024&h=512`}
        alt={image.title}
      />
    </div>
  ) : null;

export default Image;
