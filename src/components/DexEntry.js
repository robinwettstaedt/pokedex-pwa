import React from 'react';
import { useParams } from 'react-router-dom';

function DexEntry() {
  const { id } = useParams();
  return (
    <div>
      <p>This will be pokemon number: {id}</p>
    </div>
  );
}

export default DexEntry;
