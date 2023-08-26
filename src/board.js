
let boardArray = [];
class cell 
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.start = null;
        this.end = null;
        this.possmoves = getPossMoves(x,y);
    }
}


function setBoard ()
{
    for (i=1;i<9;i++)
    {
        for(j=1;j<9;j++)
        {
           let newCell = new cell(i,j)
           boardArray.push(newCell)
        }
    }
}

function setKnightStart(x = null,y = null)
{
    if( x===null || y === null)
    {
        console.log('Must Set x,y');
    }
    else{
        let i=0;
        while(boardArray[i].x !== x || boardArray[i].y !== y)
        {
            i++;
        }
        boardArray[i].start = true;
        console.log(boardArray[i])
    }
}

function setKnightEnd(x,y)
{
    if( x===null || y === null)
    {
        console.log('Must Set x,y');
    }
    else{
        let i=0;
        while(boardArray[i].x !== x || boardArray[i].y !== y)
        {
            i++;
        }
        boardArray[i].end = true;
        console.log(boardArray)
    }
}

function getPossMoves(startx,starty)
{
    let possMoves = [];
    let possx = [-2,-2,-1,-1,1,1,2,2];
    let possy = [1,-1,2,-2,2,-2,1,-1];
    for(let i=0;i<8;i++)
    {
        let newx = startx + possx[i];
        let newy = starty + possy[i];
        if ((newx>=1 && newx<=8) && (newy>=1 && newy<=8))
        {
            let newMove = {newx,newy};
            possMoves.push(newMove);
        }else{
            possMoves.push(null);
        }
    }
    return possMoves;

}


setBoard();
console.log(boardArray)
setKnightStart(8,3);
setKnightEnd(3,4);