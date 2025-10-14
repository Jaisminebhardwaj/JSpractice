// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const color = 'purple';
switch (color) {
    case 'red':
        console.log('Color is red');
        break; //without break it will execute all the cases below it
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}