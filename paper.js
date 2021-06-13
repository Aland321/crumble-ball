class Paper
{
	constructor(x,y)

	{

        var options={
            restitution: 0.3,
            friction:0,
            density: 1.2


			}
		this.x=x;
		this.y=y;
		
		
		this.image=loadImage("paper.png")
		this.paper=Bodies.rectangle(x, y,50,50,options)
				
		

		World.add(world, this.paper);
	}
	display()
	{
		imageMode(CENTER)
		image(this.image,this.paper.position.x,this.paper.position.y,50,50)	
					

			
	}

}