import { Rover } from "./Rover";
import { Camera } from "./Camera";

export interface Photo {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}
