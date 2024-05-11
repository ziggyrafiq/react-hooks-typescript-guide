// Example: useEffect Hook with TypeScript
import React, { useState, useEffect } from 'react';

interface DataDisplayProps {
  fetchData: () => Promise<string>;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ fetchData }) => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchDataAsync();
  }, [fetchData]);

  return (
    <div>
      <p>{`Data: ${data}`}</p>
    </div>
  );
};

export default DataDisplay;
