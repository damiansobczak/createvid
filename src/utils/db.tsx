import Slider from "../assets/images/slider-1.png";

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
      "Ava (Jessica Chastain) is a deadly assassin who works for a black ops organization, traveling the globe specializing in high profile hits. When a job goes dangerously wrong she is forced to fight for her own survival.",
    year: "(2020)",
    genre: "Sci-Fi",
    duration: 9000,
    image: Slider,
  },
  {
    id: 1,
    title: "Mulan Test",
    desc:
      "Ava (Jessica Chastain) is a deadly assassin who works for a black ops organization, traveling the globe specializing in high profile hits. When a job goes dangerously wrong she is forced to fight for her own survival.",
    year: "(2020)",
    genre: "Sci-Fi",
    duration: 9000,
    image: Slider,
  },
];
