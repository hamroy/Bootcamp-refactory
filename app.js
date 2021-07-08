var data = [
    {
        "inventory_id": 9382,
        "name": "Brown Chair",
        "type": "furniture",
        "tags": [
            "chair",
            "furniture",
            "brown"
        ],
        "purchased_at": 1579190471,
        "placement": {
            "room_id": 3,
            "name": "Meeting Room"
        }
    },
    {
        "inventory_id": 9380,
        "name": "Big Desk",
        "type": "furniture",
        "tags": [
            "desk",
            "furniture",
            "brown"
        ],
        "purchased_at": 1579190642,
        "placement": {
            "room_id": 3,
            "name": "Meeting Room"
        }
    },
    {
        "inventory_id": 2932,
        "name": "LG Monitor 50 inch",
        "type": "electronic",
        "tags": [
            "monitor"
        ],
        "purchased_at": 1579017842,
        "placement": {
            "room_id": 3,
            "name": "Lavender"
        }
    },
    {
        "inventory_id": 232,
        "name": "Sharp Pendingin Ruangan 2PK",
        "type": "electronic",
        "tags": [
            "ac"
        ],
        "purchased_at": 1578931442,
        "placement": {
            "room_id": 5,
            "name": "Dhanapala"
        }
    },
    {
        "inventory_id": 9382,
        "name": "Alat Makan",
        "type": "tableware",
        "tags": [
            "spoon",
            "fork",
            "tableware"
        ],
        "purchased_at": 1578672242,
        "placement": {
            "room_id": 10,
            "name": "Rajawali"
        }
    }
];


function getItems(par) {

    var da = [],
        res = [],
        i = 0,
        id = [];

    data.forEach((index) => {
        da = {
            "name": index.name,
            "placement": {
                "room_id": index.placement.room_id,
                "name": index.placement.name
            }
        }
        id = id.concat(da);
        res = id;
    });

    return (res);
}

function getType(par) {
    var res = [],
        d = [];
    data.forEach((index) => {
        if (index.type == par) {
            d = d.concat(index.name);
            res = d;
        }
    });
    return (res);
}
function convertDate(par) {
    var unixTimestamp = par;
    var date = new Date(unixTimestamp*1000);
    date.getTime();
    return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
}

function getTimeOn() {    
    var res = [],
        d = [];
    data.forEach((index) => {
        if ('16/1/2020' == convertDate(index.purchased_at)) {
            da = {
                "name": index.name,
                "purchased": convertDate(index.purchased_at),
                "placement": {
                    "room_id": index.placement.room_id,
                    "name": index.placement.name
                }
            }
            d = d.concat(da);
            res = d;
        }
    });
    return (res);
}
function getItemsColor(par) {    
    var res = [],
        d = [];
    data.forEach((index) => {
        if (index.tags.includes(par)==true) {
            da = {
                "name": index.name,
                "tags":index.tags
            }
            d = d.concat(da);
            res = d;
        }
    });
    return (res);
}

console.log("Find items in the Meeting Room.");
console.log(getItems('Brown Chair'));
console.log("Find all electronic devices.");
console.log(getType('electronic'));
console.log("Find all furniture.");
console.log(getType('furniture'));
console.log("Find all items were purchased on 16 Januari 2020.");
console.log(getTimeOn());
console.log("Find all items with brown color.");
console.log(getItemsColor('brown'));