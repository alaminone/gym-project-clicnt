

// eslint-disable-next-line react/prop-types
const Sectiontitle = ({subtitle , mainTitle}) => {
    return (
        <div>
              <div className="text-center mb-8">
      <h4 className="text-xs text-indigo-500 uppercase tracking-widest ">{subtitle}</h4>
      <h2 className="text-2xl font-bold text-gray-500">{mainTitle}</h2>
      <div className="w-3/12 h-1 bg-indigo-500 mx-auto mt-4"></div>
      <div className="w-3/12 h-1 bg-indigo-500 mx-auto mt-1"></div>
    </div>
        </div>
    );
};

export default Sectiontitle;