import { Dispatch, SetStateAction } from "react";

export const makeApiRequest = (url, setData, setStatus) => {
  setStatus && setStatus(true);

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return { error: true };
        }
      })
      .then((data) => {
        if (!data.error) {
          resolve(setData(data));
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
      .finally(() => {
        setTimeout(() => {
          setStatus && setStatus(false);
        }, 500);
      });
  });
};