import { useRecoilState } from "recoil";
import axios from "axios";
import { BASE_URL } from "../utils/fetchUrls";
import { globalClassmentAtom } from "../assets/statesManager/classmentAtom";

const useFetchData = () => {
  const [globalClassment, setGlobalClassment] =
    useRecoilState(globalClassmentAtom);

  const getData = async () => {
    try {
      const resp = await axios.get(`${BASE_URL}/classment`);
      setGlobalClassment(resp.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    getData,
    globalClassment,
  };
};

export default useFetchData;
