grammar Numbers;

parse
  :  atom (',' atom)* EOF
  ;

atom
  :  low  {console.log("low  = " + $low.text)}
  |  high {console.log("high = " + $high.text)}
  ;

low
  :  {console.log(this._input.LT(1).text) && parseInt(this._input.LT(1).text) <= 500}? Number
  ;


high
  :  Number
  ;


Number
  :  Digit Digit Digit
  |  Digit Digit
  |  Digit
  ;

fragment Digit
  :  '0'..'9'
  ;

WhiteSpace
  :  (' ' | '\t' | '\r' | '\n') {skip();}
  ;