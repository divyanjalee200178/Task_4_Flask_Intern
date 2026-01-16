// document.getElementById("taskForm").addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const data = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         title: document.getElementById("title").value,
//         description: document.getElementById("description").value,
//         dueDate: document.getElementById("dueDate").value
//     };

//     const res = await fetch("/submit", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     });

//     const result = await res.json();
//     document.getElementById("responseMsg").innerText = result.message;
// });

// document.getElementById("taskForm").addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const data = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         title: document.getElementById("title").value,
//         description: document.getElementById("description").value,
//         dueDate: document.getElementById("dueDate").value
//     };

//     const res = await fetch("/submit", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     });

//     const result = await res.json();
//     document.getElementById("responseMsg").innerText = result.message;

//     if (res.ok) {
//         document.getElementById("taskForm").reset();
//     }
// });



document.getElementById("taskForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        dueDate: document.getElementById("dueDate").value
    };

    try {
        const res = await fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        // ❗ check response before parsing JSON
        const result = await res.json();

        document.getElementById("responseMsg").innerText = result.message;

        if (res.ok) {
            document.getElementById("taskForm").reset();
        }

    } catch (error) {
        console.error("Fetch error:", error);
        document.getElementById("responseMsg").innerText =
            "Server error. Please try again.";
    }
});
