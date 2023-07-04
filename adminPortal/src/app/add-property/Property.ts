export class Property{
    public property_id: string ='';
	
	public property_name:string ='';
	public desc:string ='';
	public category:string ='';
	public bedroom:number =0;
	public bathroom:number =0;
	public parking:boolean=false;
	public area:number =0;
	public year_build:string='';
	public budget:number =0.0;
	public location:string ='';
	public agentName:string ='';
	public buy:boolean =false;
	public rent:boolean =false;
	public buyPrice:number = 0.0;
	public rentPrice:number = 0.0;
	public video:string='';
    public balcony:boolean=false; 
    public deck:boolean=false; 
    public cableTV:boolean=false; 
    public pool:boolean=false;
	public image= {type: 0, data: ''};
}