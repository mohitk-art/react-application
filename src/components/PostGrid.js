import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiKey from './ApiKey';
import Loader from './Loader';

const PostGrid = () => {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${ApiKey.api1}/customer/read`)
      .then(results => {
        return results.json();
      })
      .then(data1 => {
        if (data1) {
          setLoader(false);
          setData(data1);
        }

        console.log('State1', data, data1);
      });
  }, []);

  const data1 =
    data &&
    data.map((data, index) => {
      return (
        <div className="col-md-4 mb-4">
          <div className="mb-3">
            <Link to={`/details/${data.id}`}>
              <img
                alt=""
                src={data.image}
                className="post-avatar w-100 rounded-circle"
              />
            </Link>
          </div>
          <strong>Name</strong> {data.name}
          <br />
          <strong>Email</strong> {data.email}
        </div>
      );
    });

  return (
    <div className="row">
      {data1}
      {loader ? <Loader /> : ''}
    </div>
  );
};
export default PostGrid;
