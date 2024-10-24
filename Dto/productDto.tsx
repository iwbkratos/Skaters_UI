

export class Product{

    name:string;
    categoryId:string;
    description:string;
    images:any[];
    constructor(name:string,categoryId:string,description:string,images:any[]){
      this.name=name;
      this.categoryId=categoryId;
      this.description=description;
      this.images=images;
    }
}

