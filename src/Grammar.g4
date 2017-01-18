grammar Grammar;

main:
    | query EOF
    ;

query
    : '(' query ')'
    | criteria ('and' query|'or' query|)
    ;

criteria
    : (LIT_VAR LIT_OPERATOR (literal | LIT_VAR))
    | ('one' ENS_VAR_SINGULAR |'all' ENS_VAR_PLURAL) part_criteria
    ;

part_criteria
    : must_have_criteria | normal_criteria;

must_have_criteria
    : {0 == 1}? (MUST_HAVE criteria);

normal_criteria
    : LIT_OPERATOR array;

MUST_HAVE: 'must have';

ENS_VAR_SINGULAR
    : ENS_VAR
    ;

ENS_VAR_PLURAL
    : ENS_VAR's'
    ;

fragment ENS_VAR
    : 'friend'
    | 'part'
    ;




LIT_VAR
    : 'name'
    | 'size'
    | 'color'
    | 'price'
    ;

LIT_OPERATOR
    : ('==' | '>=' | '<=' | 'in' | 'not in');
//ENS_OPERATOR
//    : (|'NOT ') 'IN';
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
    ([a-zA-Z0-9\.])+;

CHAR:
    ~[ \t\n\r]
    ;

WS
   : [ \t\n\r] + -> skip
   ;

// test="stop" AND essai=5 OR essai NOT IN 1,