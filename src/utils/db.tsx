import Slider from "../assets/images/slider-1.png";
import Slider2 from "../assets/images/slider-2.png";

export interface ISliderItemAPI {
  id: number;
  title: string;
  desc: string;
  year: string;
  genre: string;
  duration: number;
  image: string;
}

export interface ISliderItemsAPI extends Array<ISliderItemAPI> {}

export const SliderAPI: ISliderItemsAPI = [
  {
    id: 0,
    title: "Mulan",
    desc:
      "When the Emperor mobilizes his troops to fight the onslaught of invaders from the North, she masquerades as a man to take the place of her ailing father under the name Hua Jun, setting her on an adventure.",
    year: "(2020)",
    genre: "Sci-Fi",
    duration: 9000,
    image: Slider,
  },
  {
    id: 1,
    title: "Tenet",
    desc:
      "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    year: "(2020)",
    genre: "Action",
    duration: 9000,
    image: Slider2,
  },
];
