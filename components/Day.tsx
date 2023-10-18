export const Day = ({ date }) => {
  console.log(date);
  return (
    <div className="relative col-span-3 border-r">
      {Array.from({ length: 24 }, (_, index) => (
        <div key={index} className="h-12 border-b" />
      ))}
      {date === "24" ? (
        <div className="bg-teal-500/40 p-1 rounded absolute top-12 w-full h-24 truncate">
          nix machen
        </div>
      ) : null}
    </div>
  );
};
