import{fuggvenyem} from "./main.js"

export function tesztFuggvenyemhez(){
    {/* 1. teszteset */
    let a= 25;
    let b= 15;
    let vart= 5;
    /* console.log(
        `a: ${a}, b: ${b}, várt: ${vart}, eredmény: ${vart === fuggvenyem(a,b)}`
    ); */
    console.assert(
        vart=== fuggvenyem (a,b), "%o", `a=${a}, ${b}, lnko=${vart}`, "A várt eredmény nem stimmel!"
        )
    }
    {/* 2. teszteset */
    let a= 15;
    let b= 5;
    let vart= 1;
    console.assert(
        vart=== fuggvenyem (a,b), "%o", `a=${a}, ${b}, lnko=${vart}`, "A várt eredmény nem stimmel!"
    )
    }

    
    {/* 3. teszteset */
    let a= 0;
    let b= 0;
    let vart= "Egyik szám sem lehet nulla!";
    console.assert(
        vart=== fuggvenyem (a,b), "%o", `a=${a}, ${b}, lnko=${vart}`, "A várt eredmény nem stimmel!"
    )
    }
    {/* 4. teszteset */
    //relatív prímek
    let a= 11;
    let b= 51;
    let vart= 1;
    console.assert(
        vart=== fuggvenyem (a,b), "%o", `a=${a}, ${b}, lnko=${vart}`, "A várt eredmény nem stimmel!"
    )
    }
    {/* 5. teszteset */
    let a= 22;
    let b= 1;
    let vart= 1;
    console.assert(
        vart=== fuggvenyem (a,b), "%o", `a=${a}, ${b}, lnko=${vart}`, "A várt eredmény nem stimmel!"
    )
    }
    {/* 6. teszteset */
    let a= 35;
    let b= 1;
    let vart= 1;
    console.assert(
        vart=== fuggvenyem (a,b), "%o", `a=${a}, ${b}, lnko=${vart}`, "A várt eredmény nem stimmel!"
    )
    }
    {/* 7. teszteset */
    let a= -15;
    let b= 5;
    let vart= "Mindkét számnak pozitívak kell lennie!";
    console.assert(
        vart=== fuggvenyem (a,b), "%o", `a=${a}, ${b}, lnko=${vart}`, "A várt eredmény nem stimmel!"
    )
    }
    {/* 8. teszteset */
    let a= 2.5;
    let b= 5.6;
    let vart= ;
    console.assert(
        vart=== fuggvenyem (a,b), "%o", `a=${a}, ${b}, lnko=${vart}`, "A várt eredmény nem stimmel!"
    )
    }
    {/* 9. teszteset */
    let a= 0;
    let b= 6;
    let vart= "Egyik szám sem lehet nulla!";
    console.assert(
        vart=== fuggvenyem (a,b), "%o", `a=${a}, ${b}, lnko=${vart}`, "A várt eredmény nem stimmel!"
    )
    }

    {/* 10. teszteset */
    let a= 24;
    let b= 15;
    let vart= 1;
    console.assert(
        vart=== fuggvenyem (a,b), "%o", `a=${a}, ${b}, lnko=${vart}`, "A várt eredmény nem stimmel!"
    )
    }
}