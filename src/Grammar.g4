grammar Grammar;

main:
    | query EOF
    ;

query
    : '(' query ')'
    |  query ('AND' query | 'OR' query)
    | criteria
    ;

criteria
    : (LIT_VAR LIT_OPERATOR (literal | LIT_VAR))
    | (ENS_VAR ENS_OPERATOR array)
    ;

ENS_VAR
    : 'traders'
    | 'trades'
    ;

LIT_VAR
    : 'mid'
    | 'ask'
    | 'bid'
    ;

LIT_OPERATOR
    : ('=' | '>' | '<') '=';
ENS_OPERATOR
    : (|'NOT ') 'IN';
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

ENTITY:
    ([a-zA-Z0-9])+;

CHAR:
    ~[ \t\n\r]
    ;

WS
   : [ \t\n\r] + -> skip
   ;

// test="stop" AND essai=5 OR essai NOT IN 1,