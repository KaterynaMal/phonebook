import React from 'react';
import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <Circles
        height="80"
        width="80"
        color="rgba(9, 9, 66, 0.892)"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export { Loader };