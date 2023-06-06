import React from "react";
import { Link } from "react-router-dom";
import { MdGrass } from "react-icons/md";
import {
  GiPoisonBottle,
  GiLibertyWing,
  GiGroundSprout,
  GiStoneBlock,
  GiSpottedBug,
  GiGhost,
  GiSteelClaws,
  GiCelebrationFire,
  GiWaterSplash,
  GiElectricalCrescent,
  GiPsychicWaves,
  GiIceBolt,
  GiSpikedDragonHead,
  GiFairyWand,
  GiShadowFollower,
  GiPunchBlast,
} from "react-icons/gi";
import { RiEmotionNormalLine } from "react-icons/ri";
import { FaRegHandRock } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { BsPatchQuestionFill } from "react-icons/bs";

import Types from "./Types";

function PokeInfo({ poke, prevPoke, nextPoke }) {
  return (
    <>
      <img src={poke?.sprites?.other?.home?.front_default} alt={poke?.name} />

      <div className="flex justify-center my-5">
        {poke.types?.map((val) => (
          <Types types={val} />
        ))}
      </div>
      <Link to={`more/${poke.name}`} style={{ color: "black" }}>
        <button>View more</button>
      </Link>
      <button onClick={prevPoke}>Previous</button>
      <button onClick={nextPoke}>Next</button>
    </>
  );
}

export default PokeInfo;
