import React from 'react';

const SpreadData = () => {
    let arr1 = [1,2,3,4]
    let arr2 = [5,6,7,8]
    const arr = arr1.concat(arr2)
  return (
    <div>
        <ul>
         {
           arr.map((arr,index)=>(
            <li key={index}>{arr}</li>
           ))
         }
        </ul>
    </div>
  );
};

export default SpreadData;
