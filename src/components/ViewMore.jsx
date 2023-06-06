import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// Components
import Types from "./Types";
import Stats from "./Stats";
import Abilities from "./Abilities";

function ViewMore() {
  const [singlePoke, setSinglePoke] = useState("");
  let { name } = useParams();
  const navigate = useNavigate();

  const fetchSiglePoke = async () => {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setSinglePoke(response.data);
  };

  useEffect(() => {
    fetchSiglePoke();
  }, []);

  const backToHome = () => {
    navigate("/");
  };

  return (
    <div className="max-w-5xl flex items-center mx-auto my-10 bg-white rounded-lg shadow-md p-5">
      <div>
        <h2 className="text-center text-2xl font-semibold mt-3">
          {singlePoke.name}
        </h2>
        <img
          className="w-96 h-96 rounded-full mx-auto"
          src={singlePoke.sprites?.other.home.front_default}
          alt="Profile picture"
        />
        <p className="text-center text-gray-600 mt-1">
          Base experience: {singlePoke.base_experience}
        </p>
        <p className="text-center text-gray-600 mt-1">
          Height: {singlePoke.height}
        </p>
        <p className="text-center text-gray-600 mt-1">
          Weight: {singlePoke.weight}
        </p>
      <button className="mt-3" onClick={backToHome}>Go Back</button>
      </div>
      <div>
        <h3 className="text-xl font-semibold mt-3">Abilities</h3>
        <div className="flex justify-center my-5">
          <Abilities abil={singlePoke} />
        </div>
        <h3 className="text-xl font-semibold">Types</h3>
        <div className="flex justify-center my-5">
          {singlePoke.types?.map((val) => (
            <Types types={val} />
          ))}
        </div>
        <h3 className="text-xl font-semibold">Stats</h3>
        <div className="flex justify-center my-5">
          {singlePoke.stats?.map((val) => (
            <Stats stats={val} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewMore;
