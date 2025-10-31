//for loop
//selecting duplicatekeys (ctrl + D)
for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}
for (let i = 1; i <= 10 ; i++) {
    // console.log(`outer loop is ${i}`)
    for (let j = 1; j <= 10 ; j++) {
        // console.log(i + " * " + j + " = " + (i*j));
        
    }
}
array = ["batman", "superman", "flash", "aquaman"];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
}

//break and continue 
for (let i = 0; i < 5; i++) {
    if (i==5){
        console.log("i is 5");
        break;
    }
    const element = i;
    console.log(element);
    
}