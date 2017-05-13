export class MapHighlight {
  // The coordinates in percentage distance from the top/left border where the highlight should be on the map
  public location : { top : number, left : number };
  public size : { x : number, y : number, rotation? : number };
  public name : string;
  public description : string;
}
