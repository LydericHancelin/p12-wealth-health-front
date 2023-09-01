import "../assets/css/table.scss";

const Table = ({ data }) => {
  const headers = Object.keys(data[0]);
  const nbCols = headers.length;

  return (
    <div className='awesomeTable' style={{ "--nbCols": nbCols }}>
      {headers.map((header) => (
        <span key={`header-${header}`}>{header}</span>
      ))}
      {data.map(
        (entry) =>
          Object.values(entry).map((cell) => (
            <span key={`cell-${cell}`}>{cell}</span>
          )) // TODO improve key
      )}
    </div>
  );
};

export default Table;
