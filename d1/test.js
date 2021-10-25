console.log(
    ((n) =>{
        return(n === 0) ? 
         1:n * (arguments.callee(n - 1));
    })(5)
);