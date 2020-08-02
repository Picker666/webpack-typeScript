let hello : string = 'Hello World11';
document.querySelectorAll('.app')[0].innerHTML = hello;

//=============================================================================
interface Named {
    name: string;
}

let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: 'Alice', location: 'Seattle' };
x = y;


enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let ss:number = 3;
ss = Status.Ready