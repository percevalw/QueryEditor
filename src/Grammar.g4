grammar Grammar;

query
    : criteria
    ;

criteria
    : {1==0}? VARIABLE LIT_OPERATOR literal
    | VARIABLE LIT_OPERATOR array
    ;
VARIABLE
    : 'mid'
    | 'trades'
    | 'ask'
    | 'bid';
ENS_VAR
    : 'trades';

LIT_VAR
    : 'mid'
    | 'ask'
    | 'bid';
LIT_OPERATOR
    : '='
    | '>'
    | '<'
    | '>='
    | '>='
    ;
ENS_OPERATOR
    : 'IN'
    | 'NOT IN';
value
    : literal
    | array
    ;
array
    : literal ( ',' literal )*
    ;
literal
    : STRING
    | NUMBER
    ;
STRING
   : '"' (ESC | ~ ["\\])* '"'
   ;
NUMBER
   : '-'? INT '.' [0-9] + EXP? | '-'? INT EXP | '-'? INT
   ;
fragment ESC
   : '\\' (["\\/bfnrt] | UNICODE)
   ;
fragment UNICODE
   : 'u' HEX HEX HEX HEX
   ;
fragment HEX
   : [0-9a-fA-F]
   ;
fragment INT
   : '0' | [1-9] [0-9]*
   ;
fragment EXP
   : [Ee] [+\-]? INT
   ;
WS
   : [ \t\n\r] + -> skip
   ;

// test="stop" AND essai=5 OR essai NOT IN 1,