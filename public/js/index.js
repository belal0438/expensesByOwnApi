let MyForm = document.getElementById("my_form");

MyForm.addEventListener("submit", onsubmit);






// funtion for get data and displaye on screen after reffreshing
async function Getdata() {
    try {
        let getdata = await axios.get("http://localhost:4000/getData");
        DisplayOnScreen(getdata.data);
    } catch (error) {
        console.log(error)
    }
}
Getdata()





async function onsubmit(event) {
    event.preventDefault();

    let amount = document.getElementById("amount");
    let TableNumber = document.getElementById("selectTable");
    let Menue = document.getElementById("selectMenue");

    let obj = {
        Amount: amount.value,
        Table: TableNumber.options[TableNumber.selectedIndex].value,
        Menue: Menue.options[Menue.selectedIndex].value
    }

    // console.log(obj)
    // DisplayOnScreen(obj)


    // when any option are empty for then
    let emty1 = document.getElementById("OnEmpty1");
    let emty2 = document.getElementById("OnEmpty2");
    let emty3 = document.getElementById("OnEmpty3");
    L1 = document.createElement("li");



    if (obj.Amount === "") {
        // console.log("writeSomthing");
        L1.textContent = "Pleas Enter the amount";
        emty1.appendChild(L1);
    } else if (obj.Table === "Table") {
        L1.textContent = "Pleas choose table";
        emty2.appendChild(L1);
    } else if (obj.Menue === "Menue") {
        L1.textContent = "Pleas choose Menue option";
        emty3.appendChild(L1);
    } else {
        try {
          const respon =   await axios.post("http://localhost:4000/PostData", obj)
            DisplayOnScreen(respon.data);

        } catch (error) {
            console.log("somthing went wrong")
        }

    }
    window.location.reload();
}





function DisplayOnScreen(obj) {
    obj.forEach((element) => {
        //  console.log(element);

        let Ullist1 = document.getElementById("itemList1");
        let Ullist2 = document.getElementById("itemList2");
        let Ullist3 = document.getElementById("itemList3");
        let Ullist4 = document.getElementById("itemList4");

        //creat li for item
        let Li = document.createElement("li");
        Li.innerHTML = `Amount = ${element.price}   Table Number = ${element.table}   Menue = ${element.menue}`;


        //creat btn for delete
        let btn = document.createElement("button");
        btn.textContent = "Delete";



        // creat funtion for delete
        btn.onclick = async (ev) => {
            try {
                await axios.delete(`http://localhost:4000/delete/${element.id}`)

                if (element.table === "Table-1") {
                    Ullist1.removeChild(Li);

                } else if (element.table === "Table-2") {
                    Ullist2.removeChild(Li);

                } else if (element.table === "Table-3") {
                    Ullist3.removeChild(Li);

                } else if (element.table === "Table-4") {
                    Ullist4.removeChild(Li);

                }

            } catch (error) {
                console.log(error)
            }

        }



        Li.appendChild(btn);
        // console.log(Li);

        if (element.table === "Table-1") {
            Ullist1.appendChild(Li);

        } else if (element.table === "Table-2") {
            Ullist2.appendChild(Li);

        } else if (element.table === "Table-3") {
            Ullist3.appendChild(Li);

        } else if (element.table === "Table-4") {
            Ullist4.appendChild(Li);
        }

    });
}

