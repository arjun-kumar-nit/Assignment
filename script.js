let yestarday = document.querySelector("#yestarday");
let lastWeek = document.querySelector("#lastweek");
let lastMonth = document.querySelector("#lastmonth");
let setData = document.querySelector(".data");
let Input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let str = "Sorry,...Data is Not Available!!!";







btn.addEventListener("click", (e) => {
    e.preventDefault();
    const url = 'https://www.gov.uk/bank-holidays.json';
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const ind = document.querySelector("#inde").selectedIndex;
            var res = [];
            if (ind === 0) {
                res = data['england-and-wales'].events;
            }

            if (ind === 1) {
                res = data['northern-ireland'].events;
            }

            if (ind === 2) {
                res = data['scotland'].events;
            }
            console.log(res);
            let fromDate = document.getElementById("fromdate").value;
            let toDate = document.getElementById("todate").value;
            const fildata = res.filter((obj) => obj.date >= fromDate && obj.date <= toDate);
            console.log(fildata.length);

            if (fromDate === "" && toDate === "") {
                document.getElementById("empty").innerHTML = "Please Select Correct Dates!!!";
            } else if (fildata.length === 0) {
                document.getElementById("empty").innerHTML = str;
                Input.innerHTML = "";
            } else {
                Input.innerHTML = fildata
                    .map((item) =>
                        `<tr>
                <td>${item.title}</td>
                <td>${item.date}</td>
                <td>${item.notes}</td>
                </tr>`

                    ).join("");
                document.getElementById("empty").innerHTML = "";
            }
        })

});


yestarday.addEventListener("click", () => {

    const url = 'https://www.gov.uk/bank-holidays.json';
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);


            const ind = document.querySelector("#inde").selectedIndex;
            var res = [];
            if (ind === 0) {
                res = data['england-and-wales'].events;
            }

            if (ind === 1) {
                res = data['northern-ireland'].events;
            }

            if (ind === 2) {
                res = data['scotland'].events;
            }


            console.log(res);
                  var MyDate = new Date();
            MyDate.setDate(MyDate.getDate() - 1);

            var yestardayDate1 = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth() + 1))
                .slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);

            const fildata = res.filter((obj) => obj.date === yestardayDate1);
            console.log(fildata.length);
            if (fildata.length === 0) {
                document.getElementById("empty").innerHTML = str;
                Input.innerHTML = "";
            } else {

                Input.innerHTML = fildata
                    .map((item) =>
                        `<tr>
                <td>${item.title}</td>
                <td>${item.date}</td>
                <td>${item.notes}</td>
                </tr>`

                    ).join("");

                document.getElementById("empty").innerHTML = "";
            }


        })





})

lastWeek.addEventListener("click", (e) => {
    e.preventDefault();

    const url = 'https://www.gov.uk/bank-holidays.json';
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            const ind = document.querySelector("#inde").selectedIndex;
            var res = [];
            if (ind === 0) {
                res = data['england-and-wales'].events;
            }

            if (ind === 1) {
                res = data['northern-ireland'].events;
            }

            if (ind === 2) {
                res = data['scotland'].events;
            }

            console.log(res);

            var MyDate = new Date();
            var weekDate1;
            MyDate.setDate(MyDate.getDate() - 0);

            var weekDate0 = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth() + 1))
                .slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);


            MyDate.setDate(MyDate.getDate() - 7);

            weekDate1 = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth() + 1))
                .slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);

            const fildata = res.filter((obj) => { return obj.date >= weekDate1 && obj.date <= weekDate0 });
            console.log(fildata.length);
            if (fildata.length === 0) {
                document.getElementById("empty").innerHTML = str;
                Input.innerHTML = "";
            } else {
                Input.innerHTML = fildata
                    .map((item) =>
                        `<tr>
                 <td>${item.title}</td>
                 <td>${item.date}</td>
                 <td>${item.notes}</td>
                 </tr>`

                    ).join("");
                document.getElementById("empty").innerHTML = "";
            }

        })

})

lastMonth.addEventListener("click", (e) => {
    e.preventDefault();
    const url = 'https://www.gov.uk/bank-holidays.json';
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // const res = data['england-and-wales'].events.concat(data['northern-ireland'].events).concat(data['scotland'].events);

            const ind = document.querySelector("#inde").selectedIndex;
            var res = [];
            if (ind === 0) {
                res = data['england-and-wales'].events;
            }

            if (ind === 1) {
                res = data['northern-ireland'].events;
            }

            if (ind === 2) {
                res = data['scotland'].events;
            }
            console.log(res);

            var MyDate = new Date();
            var monthDate1;
            MyDate.setDate(MyDate.getDate() - 0);

            var monthDate0 = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth() + 1))
                .slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);


            MyDate.setDate(MyDate.getDate() - 30);

            monthDate1 = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth() + 1))
                .slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
            const fildata = res.filter((obj) => {
                return obj.date >= monthDate1 && obj.date <= monthDate0;
            });
            console.log(fildata.length);
            if (fildata.length === 0) {
                document.getElementById("empty").innerHTML = str;
                Input.innerHTML = "";
            } else {
                Input.innerHTML = fildata
                    .map((item) =>
                        `<tr>
                 <td>${item.title}</td>
                 <td>${item.date}</td>
                 <td>${item.notes}</td>
                 </tr>`

                    ).join("");
                document.getElementById("empty").innerHTML = "";
            }

        })
})
