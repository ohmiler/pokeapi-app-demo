import React from "react";
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
  GiPunchBlast
} from "react-icons/gi";
import { RiEmotionNormalLine } from "react-icons/ri";
import { FaRegHandRock } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { BsPatchQuestionFill } from "react-icons/bs";

function Types({ types }) {
  return (
    <>
      {types.type.name == "normal" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <RiEmotionNormalLine fontSize="30px" color="gray" />
                  Normal
                </div>
              ) : (
                ""
              )}
              {types.type.name == "fighting" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <GiPunchBlast fontSize="30px" color="crimson" />
                  Fighting
                </div>
              ) : (
                ""
              )}
              {types.type.name == "flying" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <GiLibertyWing fontSize="30px" color="steelblue" />
                  Flying
                </div>
              ) : (
                ""
              )}
              {types.type.name == "poison" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <GiPoisonBottle fontSize="30px" color="red" />
                  Poison
                </div>
              ) : (
                ""
              )}
              {types.type.name == "ground" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <GiGroundSprout fontSize="30px" color="brown" />
                  Ground
                </div>
              ) : (
                ""
              )}
              {types.type.name == "rock" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <GiStoneBlock fontSize="30px" color="brown" />
                  Rock
                </div>
              ) : (
                ""
              )}
              {types.type.name == "bug" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <GiSpottedBug fontSize="30px" color="forestgreen" />
                  Bug
                </div>
              ) : (
                ""
              )}
              {types.type.name == "ghost" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <GiGhost fontSize="30px" color="purple" />
                  Ghost
                </div>
              ) : (
                ""
              )}
              {types.type.name == "steel" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <GiSteelClaws fontSize="30px" color="dimgrey" />
                  Steel
                </div>
              ) : (
                ""
              )}
              {types.type.name == "fire" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <GiCelebrationFire fontSize="30px" color="orange" />
                  Fire
                </div>
              ) : (
                ""
              )}
              {types.type.name == "water" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <GiWaterSplash fontSize="30px" color="deepskyblue" />
                  Water
                </div>
              ) : (
                ""
              )}
              {types.type.name == "grass" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <MdGrass fontSize="30px" color="green" />
                  Grass
                </div>
              ) : (
                ""
              )}
              {types.type.name == "electric" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <GiElectricalCrescent fontSize="30px" color="gold" />
                  Electric
                </div>
              ) : (
                ""
              )}
              {types.type.name == "psychic" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <GiPsychicWaves fontSize="30px" color="blueviolet" />
                  Psychic
                </div>
              ) : (
                ""
              )}
              {types.type.name == "ice" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <GiIceBolt fontSize="30px" color="skyblue" />
                  Ice
                </div>
              ) : (
                ""
              )}
              {types.type.name == "dragon" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <GiSpikedDragonHead fontSize="30px" color="red" />
                  Dragon
                </div>
              ) : (
                ""
              )}
              {types.type.name == "dark" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <MdDarkMode fontSize="30px" color="blueviolet" />
                  Dark
                </div>
              ) : (
                ""
              )}
              {types.type.name == "unknown" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <BsPatchQuestionFill fontSize="30px" />
                  Unknown
                </div>
              ) : (
                ""
              )}
              {types.type.name == "shadow" ? (
                <div className="shadow-md p-3 text-center rounded-lg">
                  <GiShadowFollower fontSize="30px" />
                  Shadow
                </div>
              ) : (
                ""
              )}
    </>
  );
}

export default Types;
