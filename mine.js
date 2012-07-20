//Mine field board
var runMineField = function(arr) {
  var cols = arr[0];
  var rows = arr[1];
  var difficulty = arr[2];
  var mines = [];
  
  //mine layout creation
  for (var i = 0 ; i < cols ; ++i){
    mines[i] = [];
    for(var j = 0 ; j < rows ; ++j){
      mines[i][j] = Math.random() > difficulty;
    }
  }
  
  check_above = function(rows, cols){
    if((mines[rows-1] !== undefined) && mines[rows][cols] == mines[rows-1][cols]){
        document.writeln ("<div class='below'>there is a MINE to the ABOVE</div>");
        count = count+1;
    }
  };
  
  check_right = function(rows, cols){
    if((mines[rows][cols+1] !== null) && mines[rows][cols] == mines[rows][cols+1]){
        document.writeln ("<div class='right'>there is a MINE to the RIGHT</div>");
        count = count+1;
    }
  };
  
  check_below = function(rows, cols){
    if((mines[rows+1] !== undefined) && mines[rows][cols] == mines[rows+1][cols]){
        document.writeln ("<div class='above'>there is a MINE to the BELOW</div>");
        count = count+1;
    }
  };
  
  check_left = function(rows, cols){
    if((mines[rows][cols-1] !== null) && mines[rows][cols] == mines[rows][cols-1]){
        document.writeln ("<div class='left'>there is a MINE to the LEFT</div>");
        count = count+1;
    }
  };
  
  display_minefield = function (r,c)
  {
  	document.writeln ("<table border>");
  	for (rows = 0; rows< mines.length; rows+=1)
  	{
  		document.writeln ("<tr>");
  		
  		for (cols = 0; cols < mines[rows].length; cols+=1)
  		  if (mines[rows][cols]) {
  		    count = 0;
  		    
  		    document.writeln ("<td class='true'>" + "<span class='id'>["+rows+"]" + "["+cols+"]</span>" + "<p/>");
  		    
  		    check_above(rows,cols);
  		    
  		    check_right(rows, cols);
    	    
    	    check_below(rows, cols);
  		    
  		    check_left(rows, cols);
  		    
  		    switch(count)
  		    {
            case 0:
              document.writeln ("<div class='count'>there are no surrounding mines</div></td>");
              break;
          
            default:
              document.writeln ("<div class='count'>there is a mine on " + count + ( (count > 1) ? " sides":" side" ) + "</div></td>");
          }
  		  } else {
  		    document.writeln ("  <td>" + "<span class='id'>["+rows+"]" + "["+cols+"]</span>" + "<p/><span class='none'>no MINE here, move along...</span></td>");
  		  }
  			
  		document.writeln (" </tr>");
  	}
  	document.writeln ("</table>");
  };
  
  display_minefield(rows,cols);
};

//pass parameter array
runMineField([8, 8, 0.4]);

/*
write a function that takes a row and column as 
parameters and returns the number of adjacent mines.  
How the value of "the input location is a mine" 
is handled is left as an exercise to the reader.
*/
