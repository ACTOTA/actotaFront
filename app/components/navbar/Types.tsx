'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool, TbChefHat } from 'react-icons/tb';
import { FaSkiing, FaHiking, FaCampground, FaHotTub, FaBiking, FaHatCowboy, FaRandom, } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6"
import { BsBackpack2, BsFillBackpack2Fill, BsSnow } from "react-icons/bs";
import { BiSolidBinoculars } from "react-icons/bi";
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiMineWagon,
  GiWindmill,
  GiHorseHead,
  GiChefToque,
  GiJumpAcross,
  GiWaterSplash,
  GiRiver,

} from 'react-icons/gi';

import { IoDiamond } from 'react-icons/io5';

import { MdOutlineKayaking, MdGolfCourse, MdSnowmobile, MdSnowshoeing } from "react-icons/md";

import TypesBox from '../TypesBox';
import Container from '../Container';
import { FaT } from 'react-icons/fa6';


export const types = [
  {
    label: 'Surprise Me!',
    icon: FaRandom,
    description: 'This property is in a barn!'
  },

]

const Types = () => {
  const params = useSearchParams();
  const activity = params?.get('activity');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          width-full
          h-auto
          m-0
          grid
          gap-1
          gap-y-2
          gap-x-4
          grid-cols-3
        

          max-xl:grid-cols-3
          max-lg:grid-cols-2
          max-sm:grid-cols-1
        "
      >
        {types.map((item) => 
          <TypesBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
          />
        )}
      </div>
    </Container>
  );
}
 
export default Types;

