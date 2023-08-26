
let boardArray = [];
class board 
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.start = null;
        this.end = null;
    }

}

function setBoard ()
{
    for (i=1;i<9;i++)
    {
        for(j=1;j<9;j++)
        {
           let cell = new board(i,j)
           boardArray.push(cell)
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

setBoard();
console.log(boardArray)
setKnightStart(8,3);
setKnightEnd(3,4);