export class Stage {
    public id: number;
    public imageBk;
    public imageLs;
    public imageRs;
    public imageDn;
    public imageFt;
    public imageUp;

constructor(id: number, imageBk, imageLs, imageRs, imageDn, imageFt, imageUp){

    this.id = id;
    this.imageBk = imageBk;
    this.imageLs = imageLs;
    this.imageRs = imageRs;
    this.imageDn = imageDn;
    this.imageFt = imageFt;
    this.imageUp = imageUp;

}


}